import React from "react";
import BlogWidget from "../BlogWidget";
import CtaWidget from "../CtaWidget";
import HomeWidget from "../../shared/HomeWidget";
import TestimonialWidget from "../TestimonialWidget";
import "./index.scss";

function HomeSidebar() {
  return (
    <div className="home-sidebar">
      <div className="home-sidebar__blog">
        <HomeWidget title="Blog News">
          <BlogWidget />
        </HomeWidget>
      </div>
      <div>
        <HomeWidget title="Happy customers">
          <TestimonialWidget />
        </HomeWidget>
      </div>
      <div>
        <HomeWidget title="Stay updated" isOrange={true}>
          <CtaWidget />
        </HomeWidget>
      </div>
    </div>
  );
}

export default HomeSidebar;
