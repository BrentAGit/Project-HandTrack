import React from "react";
import Link from "react-router-dom/Link";

import NavBar from "react-bootstrap/Navbar";

import "./navBar.css"

export default function Navigation() {
    return (
        <NavBar bg="dark" variant="dark">
            <NavBar.Brand style={{marginLeft: 1.5 + "em"}}>
                <Link className="hyperlink" to="/">Project: Hand Detection</Link>
            </NavBar.Brand>
            <NavBar style={{paddingTop: 0.75 + "em"}} className="mr-auto">
                <Link className="hyperlink" to="/GestureDetector">Gesture Detector</Link>
                <Link className="hyperlink" to="/DualHandDetection">Dual Hand Detector</Link>
            </NavBar>
        </NavBar>
    );
}
