import React from "react";
import { LoadingLogo } from "./Spinner.style";
import logo from '../../assets/Frame5.svg'

function LoadingSpinner() {
  return (
    <LoadingLogo>
      <img className="loadingLogo" alt="logo" src={logo} />
    </LoadingLogo>
  );
}

export default LoadingSpinner;
