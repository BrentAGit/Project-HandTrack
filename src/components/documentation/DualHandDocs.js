import React from "react";

import "./documentation.css";

export default function DualHandDocs() {
    return(
        <div className="dualHandDocs">
            <h1>Dual Hand Detector:</h1>
            <p>
                fingerposeJS allows us to return the data of one hand, but won't be able to so for two or more hands. <br/>
                For this purpose we can make use of another JavaScript framework: handtrackJS. <br/>
                As seen above, this frameworks allows us to detect hands using TensorFlowJS, but does so for all hands (and faces) on the webcam. <br/>
            </p>
        </div>
    )
}
