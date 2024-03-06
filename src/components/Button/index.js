import React from "react";
import { StyledButton } from "./Button.style";

function Button({ onClick, text, className, type }) {
  return (
    <StyledButton
      type={type ? type : "button"}
      className={className}
      onClick={onClick}
    >
      {text}
    </StyledButton>
  );
}
export default Button;
