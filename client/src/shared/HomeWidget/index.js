import React from "react";
import OrangeBorder from "../OrangeBorder";
import "./index.scss";

function HomeWidget({ children, title, isOrange = false }) {
  const orangeClass = isOrange ? "heading--orange" : "";
  return (
    <OrangeBorder>
      <h3 className={`heading ${orangeClass}`}>{title}</h3>
      {children}
    </OrangeBorder>
  );
}

export default HomeWidget;
