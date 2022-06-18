import React, {useRef, useEffect, useState} from "react";
import Webcam from "react-webcam";
import * as handmodel from "@tensorflow-models/handpose";
import * as ts from "@tensorflow/tfjs";
import * as fingerpose from "fingerpose";

import "./camera.css";

import GestureDetectorDocs from "../documentation/GestureDetectionDocs";

import {drawHand} from "./Mesh";

import thumbsDownGesture from "./customgestures/thumbsDown";
import fistGesture from "./customgestures/fist";
import greetingsGesture from "./customgestures/greetings";

export default function GestureDetector() {
    const cameraRef = useRef(null);
    const canvasRef = useRef(null);

    const [currentGesture, setCurrentGesture] = useState("None");

    const runHandModel = async function () {
        const model = await handmodel.load();
        console.log("Hand model loaded.");
        setInterval(() => {
            detectHand(model);
        }, 50);
    };

    const detectHand = async function (model) {
        if (
            typeof cameraRef.current !== "undefined" &&
            cameraRef.current !== null &&
            cameraRef.current.video.readyState === 4
        ) {
            const video = cameraRef.current.video;
            const videoWidth = cameraRef.current.video.videoWidth;
            const videoHeight = cameraRef.current.video.videoHeight;

            cameraRef.current.video.width = videoWidth;
            cameraRef.current.video.height = videoHeight;

            canvasRef.current.width = videoWidth;
            canvasRef.current.height = videoHeight;

            const hand = await model.estimateHands(video);
            console.log(hand);

            if (hand.length > 0) {
                const gestureEstimate = new fingerpose.GestureEstimator([
                    fingerpose.Gestures.VictoryGesture,
                    fingerpose.Gestures.ThumbsUpGesture,
                    thumbsDownGesture,
                    fistGesture,
                    greetingsGesture,
                ]);

                const gesture = await gestureEstimate.estimate(hand[0].landmarks, 7);
                if (gesture.gestures !== undefined && gesture.gestures.length > 0) {
                    const confidence = gesture.gestures.map(
                        (prediction) => prediction.confidence
                    );

                    const maxConfidence = confidence.indexOf(
                        Math.max.apply(null, confidence)
                    );

                    let predictedGesture = gesture.gestures[maxConfidence].name;
                    if (predictedGesture === "thumbs_up") {
                        setCurrentGesture("Thumbs up");
                    } else if (predictedGesture === "victory") {
                        setCurrentGesture("Peace sign");
                    } else if (predictedGesture === "thumbs_down") {
                        setCurrentGesture("Thumbs down");
                    } else if (predictedGesture === "fist") {
                        setCurrentGesture("Fist");
                    } else if (predictedGesture === "greetings") {
                        setCurrentGesture("Hello!");
                    }
                } else {
                    setCurrentGesture("None");
                }
            } else {
                setCurrentGesture("None");
            }

            const ctx = canvasRef.current.getContext("2d");
            drawHand(hand, ctx);
        }
    };

    useEffect(() => {
        runHandModel();
    }, []);

    return (
        <div>
            <h1 className="yourCam">Your Camera:</h1>
            <Webcam className="reactCam" ref={cameraRef}/>
            <canvas className="canvas" ref={canvasRef}/>
            <p>
                (If you do not see yourself, make sure to enable your webcam in the
                browser!)
            </p>
            <h4 className="detectedGesture">
                {" "}
                - Current detected gesture: {currentGesture} -{" "}
            </h4>
            <GestureDetectorDocs/>
        </div>
    );
}
