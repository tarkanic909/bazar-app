import React from "react";
import HomeWidget from "../../shared/HomeWidget";
import CtaWidget from "../CtaWidget";

function BlogSidebar() {
  return (
    <>
      <HomeWidget title="stay update" isOrange={true}>
        <CtaWidget />
      </HomeWidget>
    </>
  );
}

export default BlogSidebar;
