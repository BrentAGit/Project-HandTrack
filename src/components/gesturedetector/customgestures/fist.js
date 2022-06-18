import * as fingerpose from "fingerpose";

const fistGesture = new fingerpose.GestureDescription('fist');

fistGesture.addCurl(fingerpose.Finger.Thumb, fingerpose.FingerCurl.FullCurl, 5);

fistGesture.addCurl(fingerpose.Finger.Index, fingerpose.FingerCurl.FullCurl, 0.75);

fistGesture.addCurl(fingerpose.Finger.Middle, fingerpose.FingerCurl.FullCurl, 0.75);

fistGesture.addCurl(fingerpose.Finger.Ring, fingerpose.FingerCurl.FullCurl, 0.75);

fistGesture.addCurl(fingerpose.Finger.Pinky, fingerpose.FingerCurl.FullCurl, 0.75);

export default fistGesture;
