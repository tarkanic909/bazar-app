import React from "react";
import "./index.scss";

function OrangeBorder({ children }) {
  return (
    <div className="orange-border">
      <div className="orange-border__second">{children} </div>
    </div>
  );
}

export default OrangeBorder;
