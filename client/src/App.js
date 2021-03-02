import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import ProductsContexProvider from "./contexts/ProductsContext";
import CartContextProvider from "./contexts/CartContext";
import BlogContextProvider from "./contexts/BlogContext";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import CartPage from "./pages/CartPage";
import BlogPage from "./pages/BlogPage";
import ProductPage from "./pages/ProductPage";
import ErrorPage from "./pages/ErrorPage";

const routes = [
  { path: "/", isExact: true, component: HomePage },
  { path: "/cart", isExact: false, component: CartPage },
  { path: "/blog", isExact: false, component: BlogPage },
  { path: "/shop", isExact: false, component: ShopPage },
  { path: "/product/:id", component: ProductPage },
];

function App() {
  return (
    <ProductsContexProvider>
      <BlogContextProvider>
        <CartContextProvider>
          <div className="App">
            <Router>
              <Switch>
                {routes.map(({ path, component: Component, isExact }) =>
                  isExact ? (
                    <Route
                      key={`${path}-${Component}`}
                      exact
                      path={path}
                      render={(props) => {
                        return (
                          <>
                            <Header />
                            <Component {...props} />
                          </>
                        );
                      }}
                    />
                  ) : (
                    <Route
                      key={`${path}-${Component}`}
                      path={path}
                      render={(props) => {
                        return (
                          <>
                            <Header />
                            <Component {...props} />
                          </>
                        );
                      }}
                    />
                  )
                )}
                <Route component={ErrorPage} />
              </Switch>
            </Router>
          </div>
        </CartContextProvider>
      </BlogContextProvider>
    </ProductsContexProvider>
  );
}

export default App;
