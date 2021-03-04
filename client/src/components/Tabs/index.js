import React, { useContext, useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import { ProductsContext } from "../../contexts/ProductsContext";
import ProductItem from "../../shared/ProductItem";
import SliderNav from "../../shared/SliderNav";
import "./index.scss";
import TabsItem from "./TabsItem";

function Tabs() {
  const [tab, setTab] = useState("must_have");
  const [items, setItems] = useState([]);
  const [slider, setSlider] = useState();
  const { products } = useContext(ProductsContext);
  const slidesToShow = window.innerWidth >= "768" ? 4 : 1;

  function changeTab(tab) {
    setTab(tab);
  }

  function handelPrevClick() {
    slider.slickPrev();
  }

  function handleNextclick() {
    slider.slickNext();
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
        <div className="tabs__slider-nav">
          <SliderNav clickNext={handleNextclick} clickPrev={handelPrevClick} />
        </div>
      </ul>
      <div className="tabs__slider">
        <Slider
          ref={(slider) => {
            setSlider(slider);
          }}
          // autoplay={true}
          arrows={false}
          pauseOnHover={false}
          slidesToShow={slidesToShow}
          slidesToScroll={1}
        >
          {items.map((item) => (
            <div className="tabs__slide">
              <ProductItem product={item} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Tabs;
