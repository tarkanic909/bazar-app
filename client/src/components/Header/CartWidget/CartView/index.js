import React, { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../../contexts/CartContext";
import CartViewItem from "../CartViewItem";
import "./index.scss";

function CartView({ show, setShow }) {
  const { cart } = useContext(CartContext);
  const wrapperElement = useRef(null);
  const [height, setHeight] = useState(0);

  function getProperty(element, property) {
    return parseInt(getComputedStyle(element)[property]);
  }

  useEffect(() => {
    if (show) {
      const wrapper = wrapperElement.current;
      const offset =
        getProperty(wrapper, "marginTop") +
        getProperty(wrapper, "borderTopWidth") +
        getProperty(wrapper, "borderBottomWidth");

      setHeight(wrapper.clientHeight + offset);
    } else {
      setHeight(0);
    }
  }, [show]);

  return (
    <div
      className="cart-view"
      style={{ height: height + "px" }}
      onMouseEnter={() => {
        setShow(true);
      }}
      onMouseLeave={() => {
        setShow(false);
      }}
    >
      <div className="cart-view__wrapper" ref={wrapperElement}>
        {cart.items.length ? (
          <div>
            <ul>
              {cart.items.map((item) => {
                return <CartViewItem key={item.id} item={item} />;
              })}
            </ul>
            <p className="cart-view__subtotal">
              <strong>subtotal:</strong>
              <span className="cart-view__amount">${cart.total}</span>
            </p>
            <div className="cart-view__buttons">
              <a className="cart-view__checkout" href="/">
                checkout
              </a>
              <Link className="cart-view__view" to="/cart">
                view cart
              </Link>
            </div>
          </div>
        ) : (
          <p className="cart-view__no-products">No products in the cart.</p>
        )}
      </div>
    </div>
  );
}

export default CartView;
