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
// import CheckoutPage from "./pages/CheckoutPage";

const routes = [
  { path: "/", isExact: true, component: HomePage },
  { path: "/cart", component: CartPage },
  { path: "/blog", component: BlogPage },
  { path: "/shop", component: ShopPage },
  { path: "/product/:id", component: ProductPage },
  // { path: "/checkout", component: CheckoutPage },
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
                    <Route exact key={path} path={path}>
                      <Header />
                      <Component />
                    </Route>
                  ) : (
                    <Route key={path} path={path}>
                      <Header />
                      <Component />
                    </Route>
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
