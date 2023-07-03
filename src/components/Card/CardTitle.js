import React from "react";
import { CardTitleWrapper } from "./Card.style";

function CardTitle({ title, backgroundColor, colourState, colourUrl }) {

  // const mainObj = colourState.filters;
  // const mainArr = Array.from(mainObj);

  console.log('TITLE', colourUrl)

  return (
    <CardTitleWrapper backgroundColor={backgroundColor}>{title}</CardTitleWrapper>
  );
}

export default CardTitle;

// TODO: if the card is colourless, use SILVER/ GREY
