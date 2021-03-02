import React from "react";
import Logo from "./Logo";
import CartWidget from "./CartWidget";
import HeaderWiget from "./HeaderWidget";
import SearchWidget from "./SearchWidget";
import ShareWidget from "./ShareWidget";
import "./index.scss";
import Menu from "../Menu";

function Header() {
  return (
    <div className="header">
      <div className="phone-hidden">
        <div className="border"></div>
        <div className="border"></div>
        <div className="border border--strong"></div>
      </div>
      <div className="header__areas">
        <div className="header__logo">
          <Logo />
        </div>
        <div className="header__cart-search">
          <CartWidget />
          <SearchWidget />
        </div>
        <div className="header__widget">
          <HeaderWiget
            img="https://live.yithemes.com/bazar/wp-content/uploads/sites/73/2013/01/widget1.png"
            heding="Another widget"
            text="add icon and text"
          />
          <HeaderWiget
            img="https://live.yithemes.com/bazar/wp-content/uploads/sites/73/2013/01/widget221.png"
            heding="Customer support"
            text="+ 39 099 725654"
          />
        </div>
        <div className="header__share">
          <ShareWidget />
        </div>

        <div className="header__menu">
          <Menu />
        </div>
      </div>
      <div className="border border--strong"></div>
      <div className="border"></div>
      <div className="border"></div>
    </div>
  );
}

export default Header;
