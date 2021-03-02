import React, { useContext } from "react";
import { CartContext } from "../../../contexts/CartContext";
import CartControl from "./CartControl";
import "./index.scss";

function CartWidget() {
  const { cart } = useContext(CartContext);

  return (
    <div className="cart-widget">
      <div className="cart-widget__items">
        <span className="cart-widget__number">{cart.items.length}</span>
        <span className="cart-widget__label">items</span>
      </div>
      <div className="cart-widget__total">
        <span className="cart-widget__currency">$</span>
        <span className="cart-widget__integer">{cart.total}</span>
        {/* <span className="cart-widget__decimal">50</span> */}
      </div>
      <CartControl />
    </div>
  );
}

export default CartWidget;
