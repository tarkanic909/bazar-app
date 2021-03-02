import React, { useContext } from "react";
import { CartContext } from "../../../contexts/CartContext";
import CartRow from "./CartRow";
import "./index.scss";

function CartTable() {
  const { cart } = useContext(CartContext);
  return (
    <table className="cart-table">
      <thead className="cart-table__thead">
        <tr className="cart-table__tr">
          <th></th>
          <th></th>
          <th>Product</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Subtotal</th>
        </tr>
      </thead>
      <tbody>
        {cart.items.map((item) => (
          <tr key={item.id} className="cart-table__tr">
            <CartRow item={item} />
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default CartTable;
