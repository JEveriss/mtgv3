import React from "react";
import { IconWrapper } from "./Icons.style";
import { WUBRG } from "../../data/Data";

function Icon({fill, path}) {
  return (
    <IconWrapper>
      {WUBRG.map((colour) => {
        return <img src={colour.image} alt={colour.colour} fill={fill}/>
      })}
    </IconWrapper>
  );
}

export default Icon;
