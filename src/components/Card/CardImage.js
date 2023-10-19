import React from "react";
import { CardImageWrapper } from "./Card.style";
// import "../Testing/Testing.css"

function CardImage({ card }) {
  return (
    <CardImageWrapper
      alt={card?.name}
      src={card?.image_uris?.normal}
    ></CardImageWrapper>
  );
}

export default CardImage;
