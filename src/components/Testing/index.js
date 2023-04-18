import React from "react";
import cardBack from "../../assets/CardBack.webp";
import "./Testing.css";

function Testing() {
  return (
    <div className="cardBody">
      <div className="card">
        <img src={cardBack} alt="cardBack"></img>
      </div>
    </div>
  );
}

export default Testing;
