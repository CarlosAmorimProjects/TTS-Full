import React from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';

export default function About () {

    return (

        <div className="container">
        <div className="title">
          <h1>
            About
          </h1>
        </div>

        <div className="link">
        <Link to="/" className="Link">
            <Button>Next</Button>
        </Link>
        </div>

        </div>
    );
}