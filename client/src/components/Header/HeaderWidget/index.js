import React from "react";
import "./index.scss";

function HeaderWiget({ heding, text, img }) {
  return (
    <div className="header-widget">
      <img className="header-widget__img" src={img} alt="" />
      <h3 className="header-widget__heading">{heding}</h3>
      <p className="header-widget__p">{text}</p>
    </div>
  );
}

export default HeaderWiget;
