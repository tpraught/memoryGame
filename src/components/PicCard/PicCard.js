import React from "react";
import "./PicCard.css";

const PicCard = props => (
    <div className="card">
        <div className="cityImg" onClick={() => props.renderGame(props.id)} dataid="{props.id}">
            <img className="card-img" alt={props.name} src={props.image} />
        </div>
    </div>
);

export default PicCard;