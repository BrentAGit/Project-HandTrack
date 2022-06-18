import React from "react";

import "./documentation.css";

import img from './example.jpg'

export default function GestureDetectorDocs() {
    return(
        <div className="gestureDetectorDoc">
            <h1>Gesture Detector:</h1>
            <p>
                In this part of the application we make use of TensorflowJS’ pre-trained hand tracking AI to recognize whether or not a hand is present in the displayed webcam. <br/>
                Then, using a 2D context, we can draw a mesh which uses the data we get from TensorflowJS to have a model follow your hand in real time. <br/>
                Lastly, the framework fingerposeJS allows us to create and use custom gestures, and also detect them when they are noticed on the webcam.<br/>
                <br/>
                Known gestures: Hello, Thumbs up, Thumbs down, Peace sign, Fist<br/>
                <br/>   
                Here is a short tutorial if you wish to add your own gesture to this part of the application:
            </p>
            <div className="gestureDetectorTut">
                <h4>Adding custom gestures</h4>
                <p>
                    •	Open the customgestures directory (components > gesturedetector > customgestures) and add a js file and name it the gesture you wish to add.<br/>
                    •	Import fingerpose (import * as fingerpose from "fingerpose";)<br/>
                    •	Add a variable and store a GestureDescription in it: const nameOfGesture = new fingerpose.GestureDescription('callNameGesture');<br/>
                    •	Add checks for curls/directions for each finger using .addCurl and .addDirection:<br/>
                    •	.addCurl can be .FullCurl, .HalfCurl and .NoCurl<br/>
                    •	.addDirection can be .VerticalUp, .VerticalDown, HorizontalLeft and .HorizontalRight. <br/>
                    •	.addDirection can also be used for diagonal degrees: .DiagonalUpRight, .DiagonalUpLeft, .DiagonalDownRight and .DiagonalDownLeft. <br/>
                    •	Add confidence value at the end (unique positions such as your thumb having a direction VerticalDown should be given a higher confidence value)<br/>
                    •	Export the variable you created<br/>
                    •	Go to the Camera.JS component (components > gesturedetector > Camera.JS) and find the gestureEstimator (line 48). Add the GestureDescription in the list of gestures.<br/>
                    •	Add an else if Under line 77 like the ones above said line and set the React Hook CurrentGesture to the message you want to display<br/>
                    •	Done! Refresh the application and test it out. If it does not work from the start, you will have to play around with the confidence values a bit<br/>
                </p>
                <h4>Example: thumbsDown.js</h4>
                <img src={img} alt="example"/>
            </div>
        </div>
    )
}
