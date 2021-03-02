import React from "react";
import "./index.scss";

function PageTitle({ children }) {
  return <h1 className="heading heading--border">{children}</h1>;
}

export default PageTitle;
