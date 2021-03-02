import React from "react";
import "./index.scss";

function Button(props) {
  return (
    <button {...props} className="button">
      {props.children}
    </button>
  );
}

export default Button;
