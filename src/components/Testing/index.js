import React from "react";

import "./Testing.css";

function Testing({ children }) {
  return (
    <div className="cardBody">
      <div className="card">{children}</div>
    </div>
  );
}

export default Testing;
