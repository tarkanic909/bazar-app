import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../contexts/CartContext";
import Button from "../../../shared/Button";
import "./index.scss";

function CartActions() {
  const { updateCart } = useContext(CartContext);
  return (
    <div className="cart-actions">
      <Button
        onClick={() => {
          updateCart.current(true);
        }}
      >
        Update cart
      </Button>
      <Link className="cart-actions__action button" to="/checkout">
        proceed to checkout
      </Link>
    </div>
  );
}

export default CartActions;
