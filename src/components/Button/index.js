import React from "react";
import { StyledButton } from "./Button.style";

function Button({ onClick, text, className, type, disabled }) {
  return (
    <StyledButton
      type={type ? type : "button"}
      className={className}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </StyledButton>
  );
}
export default Button;
