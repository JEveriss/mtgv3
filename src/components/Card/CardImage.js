import React from "react";
import { CardImageWrapper } from "./Card.style";
import "../Testing/Testing.css"

function CardImage({ card }) {
  return (
    <CardImageWrapper>
    <div className="card">
      
      <img
        className="cardimage"
        alt={card?.name}
        src={card?.image_uris?.normal}
      />
    </div>
    </CardImageWrapper>
  );
}

export default CardImage;
