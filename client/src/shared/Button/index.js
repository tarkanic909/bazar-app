import React from "react";
import "./index.scss";

function Button(props) {
  const orange = props.orange ? " button--orange" : "";
  return (
    <button {...props} className={`button ${orange}`}>
      {props.children}
    </button>
  );
}

export default Button;
