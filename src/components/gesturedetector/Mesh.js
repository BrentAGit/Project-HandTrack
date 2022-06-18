export const drawHand = (predictions, ctx) => {
    const fingerLandmarks = {
        thumb: [0,1,2,3,4],
        indexFinger: [0,5,6,7,8],
        middleFinger: [0,9,10,11,12],
        ringFinger: [0,13,14,15,16],
        pinky: [0,17,18,19,20],
    };

    const meshStyling = {
        0: { color: "red", size: 10 },
        1: { color: "yellow", size: 5 },
        2: { color: "yellow", size: 5 },
        3: { color: "yellow", size: 5 },
        4: { color: "yellow", size: 5 },
        5: { color: "yellow", size: 5 },
        6: { color: "yellow", size: 5 },
        7: { color: "yellow", size: 5 },
        8: { color: "yellow", size: 5 },
        9: { color: "yellow", size: 5 },
        10: { color: "yellow", size: 5 },
        11: { color: "yellow", size: 5 },
        12: { color: "yellow", size: 5 },
        13: { color: "yellow", size: 5 },
        14: { color: "yellow", size: 5 },
        15: { color: "yellow", size: 5 },
        16: { color: "yellow", size: 5 },
        17: { color: "yellow", size: 5 },
        18: { color: "yellow", size: 5 },
        19: { color: "yellow", size: 5 },
        20: { color: "yellow", size: 5 },
    };

    if (predictions.length > 0){
        predictions.forEach((predictions) => {
            const jointPoints = predictions.landmarks;

            for (let i = 0; i < Object.keys(fingerLandmarks).length; i++){
                let finger = Object.keys(fingerLandmarks)[i];

                for (let j = 0; j < fingerLandmarks[finger].length -1; j++){
                    const firstFingerJoint = fingerLandmarks[finger][j];
                    const secondFingerJoint = fingerLandmarks[finger][j+1];

                    ctx.beginPath();
                    ctx.moveTo(
                        jointPoints[firstFingerJoint][0],
                        jointPoints[firstFingerJoint][1]
                    );

                    ctx.lineTo(
                        jointPoints[secondFingerJoint][0],
                        jointPoints[secondFingerJoint][1]
                    );

                    ctx.strokeStyle = "orange";
                    ctx.lineWidth = 4;
                    ctx.stroke();
                }
            }

            for (let i = 0; i < jointPoints.length; i++){
                const axisX = jointPoints[i][0];
                const axisY = jointPoints[i][1];

                ctx.beginPath();
                ctx.arc(axisX, axisY, meshStyling[i]["size"], 0, 3 * Math.PI);
                ctx.fillStyle = meshStyling[i]["color"];
                ctx.fill();
            }
        })
    }
};
