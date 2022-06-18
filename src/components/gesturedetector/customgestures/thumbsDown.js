import * as fingerpose from "fingerpose";

const thumbsDownGesture = new fingerpose.GestureDescription('thumbs_down');

thumbsDownGesture.addCurl(fingerpose.Finger.Thumb, fingerpose.FingerCurl.NoCurl, 1.0);
thumbsDownGesture.addDirection(fingerpose.Finger.Thumb, fingerpose.FingerDirection.VerticalDown, 4.0);
thumbsDownGesture.addDirection(fingerpose.Finger.Thumb, fingerpose.FingerDirection.DiagonalDownLeft, 3.0);
thumbsDownGesture.addDirection(fingerpose.Finger.Thumb, fingerpose.FingerDirection.DiagonalDownRight, 3.0);

thumbsDownGesture.addCurl(fingerpose.Finger.Index, fingerpose.FingerCurl.FullCurl, 0.5);

thumbsDownGesture.addCurl(fingerpose.Finger.Middle, fingerpose.FingerCurl.FullCurl, 0.5);

thumbsDownGesture.addCurl(fingerpose.Finger.Ring, fingerpose.FingerCurl.FullCurl, 0.5);

thumbsDownGesture.addCurl(fingerpose.Finger.Pinky, fingerpose.FingerCurl.FullCurl, 0.5);

export default thumbsDownGesture;
