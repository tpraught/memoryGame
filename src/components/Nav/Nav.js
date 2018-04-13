import React from "react";
import "./Nav.css";

const Nav = props => (
    <nav className="navbar sticky-top navbar-dark bg-dark">
        <div className="float=left">
            <h3 className="navbar-brand"><a href="https://github.com/tpraught/memorygame" target="_blank" rel="noopener noreferrer"><i class="fab fa-github-alt fa-lg"></i> tonyePraught</a></h3>
        </div>
        <div className="float-right">
            <h3>Current Score: {props.currentScore} | High Score: {props.highScore}</h3>
        </div>
    </nav>
);

export default Nav;