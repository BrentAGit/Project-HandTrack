import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import GestureDetector from "./components/gesturedetector/Camera";
import Navigation from "./components/UI/NavBar";
import HandTrack from "./components/dualhanddetection/HandTrack";
import HomePage from "./components/documentation/HomePage";
import BoxMover from "./components/boxmover/BoxMover";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
        <Router>
            <Navigation/>
            <Switch>
                <Route path="/GestureDetector" component={GestureDetector} />
                <Route path="/DualHandDetection" component={HandTrack} />
            </Switch>
            <Route exact path="/" component={HomePage} />
        </Router>
    </div>
  );
}

export default App;
