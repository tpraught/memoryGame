import React from "react";
import "./Hero.css";

const Hero = props=> (
    <div className="jumbotron jumbotron-fluid">
        <div className="container text-center">
            <h1>World Travel Memory Game</h1>
            <h2>Click on a picture below to start the game...<br />but don't click on the same picture twice, or <span>GAME OVER</span>!</h2>
        </div>
    </div>
);

export default Hero;