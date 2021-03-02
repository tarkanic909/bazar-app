import React from "react";
import ProductBox from "../ProductBox";
import "./index.scss";

function Product({ product }) {
  return (
    <div className="product">
      <img className="product__image" src={product.bImg} alt="" />{" "}
      <div className="product__summary">
        <h1 className="product__name">{product.name}</h1>
        <div className="border border--strong"></div>
        <div className="border"></div>
        <div className="border"></div>
        <p className="product__desc-content">{product.description}</p>
        <p className="product__category">Category: {product.category}</p>
      </div>
      <div className="product__tab">
        <p className="product__label">description</p>
        <h2 className="product__desc-title">Product Description</h2>
        <p className="product__desc-content">{product.description}</p>
      </div>
      <div className="product__box">
        <ProductBox product={product} />
      </div>
    </div>
  );
}

export default Product;
