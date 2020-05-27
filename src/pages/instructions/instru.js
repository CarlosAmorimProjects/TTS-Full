import React from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./styles.css";

export default function Instru () {

    return (
        <div className="container">
          <div className="title">
            <h1>
              Instructions:
            </h1>
          </div>
        <div className="instructions">
          <h3>1. Enter text on screen <span aria-label="a rocket blasting off" role="img">💻</span> </h3>
          <h3>2. Select language the text was written <span aria-label="a rocket blasting off" role="img"> 🉐</span> </h3>
          <h3>3. Click translate <span aria-label="a rocket blasting off" role="img"> 🖱️</span> </h3>
          <h3>4. Listen to the translation <span aria-label="a rocket blasting off" role="img"> 🎧</span> </h3>
          <h3>5. Download the audio file <span aria-label="a rocket blasting off" role="img"> 📥</span> </h3>
        </div>

        <div className="links">
          <Link to="/">
              <h2><span aria-label="a rocket blasting off" role="img"> ↩</span>Home</h2>
          </Link>
          </div>
        </div>
    );
}