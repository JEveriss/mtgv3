import React from "react";
import { CardImageWrapper } from "./Card.style";
// import "../Testing/Testing.css"
import "./tempstyle.css";

function CardImage({ card }) {
  document.querySelector(".image").classList.add(".addedClass");
  return (
    <CardImageWrapper
      className="image"
      alt={card?.name}
      src={card?.image_uris?.normal}
    />
  );
}

export default CardImage;
