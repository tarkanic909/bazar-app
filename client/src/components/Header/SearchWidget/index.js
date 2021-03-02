import React, { useEffect, useState } from "react";
import { useHistory, useLocation, useRouteMatch } from "react-router-dom";
// import { ProductsContext } from "../../../contexts/ProductsContext";
import "./index.scss";

function SearchWidget() {
  // const { products } = useContext(ProductsContext);
  const history = useHistory();
  const [value, setValue] = useState("");
  const { pathname } = useLocation();

  function handelSubmit(event) {
    event.preventDefault();
    history.push(`/shop/search/${value}`);
  }

  function handleChange(event) {
    setValue(event.target.value);
  }
  useEffect(() => {
    if (pathname === "/shop") setValue("");
  }, [pathname]);

  return (
    <div className="search-widget">
      <form
        action="/search"
        className="search-widget__form"
        onSubmit={handelSubmit}
      >
        <input
          type="text"
          placeholder="Search for product"
          className="search-widget__field"
          onChange={handleChange}
          value={value}
          name="product"
        />
        <input className="search-widget__submit" type="submit" value="" />
      </form>
    </div>
  );
}

export default SearchWidget;
