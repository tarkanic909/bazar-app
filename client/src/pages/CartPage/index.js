import React, { useContext } from "react";
import CartTable from "./CartTable";
import CartActions from "./CartActions";
import CartTotals from "./CartTotals";
import { CartContext } from "../../contexts/CartContext";
import "./index.scss";

function CartPage() {
  const { cart } = useContext(CartContext);
  return (
    <div>
      {cart.items.length ? (
        <>
          <CartTable />
          <CartActions />
          <div className="cart-page__cart-totals">
            <CartTotals />
          </div>
        </>
      ) : (
        "Your cart is currently empty."
      )}
    </div>
  );
}

export default CartPage;
