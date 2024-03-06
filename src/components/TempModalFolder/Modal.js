import React from "react";
import "./modalStyle.css";

const Modal = ({ open, children }) => {
  if (!open) return null;
  return (
    <div className="overlayStyle">
      <div className={`modalStyle ${open ? "open" : null}`}>{children}</div>
    </div>
  );
};

export default Modal;
