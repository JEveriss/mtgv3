import React from "react";
import { CardTitleWrapper } from "./Card.style";

function CardTitle({ title, colorVar }) {
  return (
    <CardTitleWrapper backgroundColor={colorVar}>{title}</CardTitleWrapper>
  );
}

export default CardTitle;
