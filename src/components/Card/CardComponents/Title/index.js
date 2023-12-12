import React from "react";
import { CardTitleWrapper } from "./Title.style";

function CardTitle({ title }) {
  // const mainObj = colourState.filters;
  // const mainArr = Array.from(mainObj);

  // console.log('TITLE', colourUrl)

  return (
    <CardTitleWrapper >
      {title}
    </CardTitleWrapper>
  );
}

export default CardTitle;

// TODO: if the card is colourless, use SILVER/ GREY
