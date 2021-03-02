import React from "react";
import { Link } from "react-router-dom";
import AddToCart from "../AddToCart";
import "./index.scss";

function ProductItem({ product }) {
  return (
    <div className="product-thumbnail">
      <div className="product-thumbnail__group">
        <Link to={`/product/${product.id}`}>
          <img className="product-thumbnail__img" src={product.img} alt="" />
        </Link>
        <div className="product-thumbnail__meta">
          <h3 className="product-thumbnail__heading">{product.name}</h3>
          <span className="product-thumbnail__currency">$</span>
          <span className="product-thumbnail__price">{product.price}</span>
        </div>
        <div className="product-thumbnail__hidden">
          <AddToCart item={product} />
          <div className="product-thumbnail__actions">
            <a className="product-thumbnail__details" href="/">
              Details
            </a>
            <a className="product-thumbnail__wishlist" href="/">
              wishlist
            </a>
            <a className="product-thumbnail__compare" href="/">
              compare
            </a>
            <a className="product-thumbnail__share" href="/">
              share
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
