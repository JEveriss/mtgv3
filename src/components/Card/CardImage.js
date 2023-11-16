import React from "react";
import { CardImageWrapper } from "./Card.style";
// import "../Testing/Testing.css"
import './tempstyle.css'

function CardImage({ card }) {
  return (
    <CardImageWrapper
    className="image"
      alt={card?.name}
      src={card?.image_uris?.normal}
    ></CardImageWrapper>
  );
}

export default CardImage;
