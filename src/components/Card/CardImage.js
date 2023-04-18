import React from "react";
import { CardImageWrapper } from "./Card.style";

function CardImage({ card }) {
  return (
    <CardImageWrapper>
      <img
        className="cardimage"
        alt={card?.name}
        src={card?.image_uris?.normal}
      />
    </CardImageWrapper>
  );
}

export default CardImage;
