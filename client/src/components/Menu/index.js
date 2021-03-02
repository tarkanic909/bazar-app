import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ProductsContext } from "../../contexts/ProductsContext";
import "./index.scss";

function Menu() {
  const { setFilteredProducts } = useContext(ProductsContext);
  return (
    <nav>
      <ul className="menu">
        <li>
          <NavLink
            exact
            className="menu__item"
            activeClassName="menu__item menu__item--active"
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className="menu__item"
            activeClassName="menu__item menu__item--active"
            to="/shop"
            onClick={() => {
              setFilteredProducts();
            }}
          >
            Shop
          </NavLink>
        </li>
        <li>
          <NavLink
            className="menu__item"
            activeClassName="menu__item menu__item--active"
            to="/blog"
          >
            Blog
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
