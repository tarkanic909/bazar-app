import React from "react";

function TabsItem(props) {
  return (
    <li {...props}>
      <h4 className="tabs__heading">{props.title}</h4>
    </li>
  );
}

export default TabsItem;
