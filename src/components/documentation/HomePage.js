import React from "react";

import "./documentation.css";

export default function HomePage() {
    return (
        <div className="homePage">
            <h1>Project Hand Detection:</h1>
            <div>
                <p className="homeText">
                    This project was made during a research about how we can implement hand tracking and gesture
                    recognition using JavaScript, and what implications it can have from a web perspective.
                    Next to being built in React, this project makes use of the framework TensorflowJS, which offers a
                    range of pre-trained neural networks that will be the core of how the hand detection within this
                    project works.
                    You will find 2 use cases in this application:
                    <br/>
                    <div className="homeText">
                        - Gesture detector using TensorflowJS + fingerposeJS
                        <br/>
                        - Dual hand recognition using TensorflowJS + handtrackJS
                        <br/>
                    </div>
                    <div className="homeText">
                        <b>Make sure you have your webcam enabled in your browser, otherwise this
                            application will not work!</b>
                    </div>
                </p>
            </div>
        </div>
    )
}
