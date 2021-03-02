import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../../contexts/CartContext";
import QuantityChanger from "../../../../shared/QuantityChanger";
import "./index.scss";

function CartRow({ item: { id, name, price, quantity, img } }) {
  const { removeItem } = useContext(CartContext);

  function handleRemove() {
    removeItem(id);
  }

  return (
    <>
      <td>
        <p className="cart-row__remove" onClick={handleRemove}></p>
      </td>
      <td>
        <img className="cart-row__image" src={img} alt="" />
      </td>
      <td>
        <Link className="cart-row__link" to={`/product/${id}`}>
          {name}
        </Link>
      </td>
      <td>$ {price}</td>
      <td>
        <QuantityChanger
          className="cart-row__quantity-changer"
          id={id}
          quantity={quantity}
        />
      </td>
      <td>$ {quantity * price}</td>
    </>
  );
}

export default CartRow;
