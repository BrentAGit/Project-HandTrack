import React, {useEffect, useRef, useState} from "react";
import * as handTrack from "handtrackjs";
import * as ts from "@tensorflow/tfjs";

import "./handTrack.css";

import DualHandDocs from "../documentation/DualHandDocs";

export default function HandTrack() {
    const [model, setIsModelReady] = useState(null);
    const video = useRef(null);
    const canvas = useRef(null);
    let context = null;

    const startVideo = () => {
        console.log("startVideo: ");
        handTrack.startVideo(video.current).then(({status, msg}) => {
            console.log("video started", status, msg);
            if (status) {
                runDetection();
            }
        });
    };

    const runDetection = () => {
        console.log("runDetection: ");
        context = canvas.current.getContext("2d");
        model.detect(video.current).then((predictions) => {
            console.log("Predictions: ", predictions);
            model.renderPredictions(
                predictions,
                canvas.current,
                context,
                video.current
            );
            requestAnimationFrame(runDetection);
        });
    };

    const loadModel = () => {
        handTrack.load().then((_model) => {
            setIsModelReady(_model);
        });
    };

    useEffect(() => {
        loadModel();
    }, []);

    useEffect(() => {
        console.log("isModelReady: ", model);
        model && video && canvas && startVideo();
    }, [model, video, canvas]);

    return (
        <div>
            <div>
                <video className="camera" id="cam" ref={video}/>
                <canvas ref={canvas} className="canvas"/>
            </div>
            <div>
                <DualHandDocs/>
            </div>
        </div>
    );
}
