import React from "react";
import "./index.scss";

function ShareWidget() {
  return (
    <div className="share-widget">
      <span className="share-widget__label">love is sharing</span>

      <a className="share-widget__link share-widget__facebook" href="/">
        facebook
      </a>

      <a className="share-widget__link share-widget__rss" href="/">
        rss
      </a>

      <a className="share-widget__link share-widget__twitter" href="/">
        twitter
      </a>

      <a className="share-widget__link share-widget__google" href="/">
        google
      </a>

      <a className="share-widget__link share-widget__linkedin" href="/">
        linkedin
      </a>

      <a className="share-widget__link share-widget__pinterest" href="/">
        pinterest
      </a>
    </div>
  );
}

export default ShareWidget;
