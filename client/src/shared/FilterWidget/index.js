import React from "react";
import useShow from "../../hooks/useShow";
import "./index.scss";

function FilterWidget({ children, title, render }) {
  const { ref, style, show, setContent } = useShow();

  return (
    <div className="filter-widget">
      <h2
        className="filter-widget__title heading heading--border"
        onClick={show}
      >
        {title}
      </h2>
      <div style={{ ...style }}>
        <div style={{ marginBottom: "30px" }} ref={ref}>
          {render && render({ setContent: setContent })}
          {children && children}
        </div>
      </div>
    </div>
  );
}

export default FilterWidget;
