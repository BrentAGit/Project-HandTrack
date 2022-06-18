import * as fingerpose from "fingerpose";

const greetingsGesture = new fingerpose.GestureDescription('greetings');

greetingsGesture.addCurl(fingerpose.Finger.Thumb, fingerpose.FingerCurl.NoCurl, 2.0);

greetingsGesture.addCurl(fingerpose.Finger.Index, fingerpose.FingerCurl.NoCurl, 0.5);

greetingsGesture.addCurl(fingerpose.Finger.Middle, fingerpose.FingerCurl.NoCurl, 0.5);

greetingsGesture.addCurl(fingerpose.Finger.Ring, fingerpose.FingerCurl.NoCurl, 3.0);

greetingsGesture.addCurl(fingerpose.Finger.Pinky, fingerpose.FingerCurl.NoCurl, 3.0);

export default greetingsGesture;
