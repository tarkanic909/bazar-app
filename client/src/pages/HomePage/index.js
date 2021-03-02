import React from "react";
import HomeSidebar from "../../components/HomeSidebar";
import RecentProducts from "../../components/RecentProducts";
import Tabs from "../../components/Tabs";

function HomePage() {
  return (
    <div>
      <RecentProducts />
      <Tabs />
      <HomeSidebar />
    </div>
  );
}

export default HomePage;
