import React from "react";
import "./index.scss";

function CtaWidget() {
  return (
    <div className="cta-widget">
      <p className="cta-widget__text">
        Stay updated with Bazar to enjoy our special promotions!
      </p>
      <form action="">
        <input
          className="cta-widget__field"
          type="text"
          placeholder="insert your email address"
        />
        <div className="cta-widget__submit-wrapper">
          <input
            className="cta-widget__submit"
            type="submit"
            value="subscribe"
          />
        </div>
      </form>
    </div>
  );
}

export default CtaWidget;
