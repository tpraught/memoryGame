import React from "react";
import "./Wrapper.css";

const Wrapper = props=> (
    <div className="container mb-5">
        <div className="row justify-content-md-center">
            {props.children}
        </div>
    </div>
);

export default Wrapper;