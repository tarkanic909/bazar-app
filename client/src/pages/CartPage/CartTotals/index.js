import React, { useContext } from "react";
import { CartContext } from "../../../contexts/CartContext";
import OrangeBorder from "../../../shared/OrangeBorder";
import "./index.scss";

function CartTotals() {
  const { cart } = useContext(CartContext);
  return (
    <div className="cart-totals">
      <OrangeBorder>
        <div className="cart-totals__wrapper">
          <h3 className="heading cart-totals__heading">Cart totals</h3>
          <p className="cart-totals__row">Cart Subtotal</p>
          <p className="cart-totals__row">
            <span>Order total</span>
            <span className="cart-totals__price">${cart.total}</span>
          </p>
        </div>
      </OrangeBorder>
    </div>
  );
}

export default CartTotals;
