import React, { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../../contexts/ProductsContext";
import "./index.scss";
import TabsItem from "./TabsItem";

function Tabs() {
  const [tab, setTab] = useState("must_have");
  const [, setItems] = useState([]);
  const { products } = useContext(ProductsContext);

  function changeTab(tab) {
    setTab(tab);
  }

  useEffect(() => {
    const items = products.filter((item) => item[tab]);
    setItems(items);
  }, [tab, products]);

  return (
    <div>
      <ul className="tabs">
        <TabsItem
          title="must have"
          className={tab === "must_have" ? "tabs__item--current" : "tabs__item"}
          onClick={() => {
            changeTab("must_have");
          }}
        />
        <TabsItem
          title="best seller"
          className={
            tab === "best_seller" ? "tabs__item--current" : "tabs__item"
          }
          onClick={() => {
            changeTab("best_seller");
          }}
        />
        <TabsItem
          title="special offers"
          className={
            tab === "special_offers" ? "tabs__item--current" : "tabs__item"
          }
          onClick={() => {
            changeTab("special_offers");
          }}
        />
      </ul>
    </div>
  );
}

export default Tabs;
