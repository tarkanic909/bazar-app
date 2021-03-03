import React from "react";
import "./index.scss";

function SliderNav({ clickNext, clickPrev }) {
  return (
    <ul className="slider-nav">
      <li
        className="slider-nav__prev"
        onClick={() => {
          clickPrev();
        }}
      >
        Prev
      </li>
      <li
        className="slider-nav__next"
        onClick={() => {
          clickNext();
        }}
      >
        Next
      </li>
    </ul>
  );
}

export default SliderNav;
