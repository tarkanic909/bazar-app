import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../../contexts/CartContext";
import CartView from "../CartView";
import "./index.scss";

function CartControl() {
  const { cart } = useContext(CartContext);
  const [show, setShow] = useState(false);
  const [empty, setEmpty] = useState(true);

  useEffect(() => {
    if (cart.items.length) {
      setEmpty(false);
      return;
    }
    setEmpty(true);
  }, [cart.items.length]);

  return (
    <div
      className={
        empty ? "cart-control" : "cart-control cart-control--not-empty"
      }
      onMouseEnter={() => {
        setShow(true);
      }}
      onMouseLeave={() => {
        setShow(false);
      }}
    >
      {empty ? (
        "empty cart"
      ) : (
        <Link className="cart-control__link" to="/cart">
          view cart
        </Link>
      )}
      <CartView show={show} setShow={setShow} setEmpty={setEmpty} />
    </div>
  );
}

export default CartControl;
