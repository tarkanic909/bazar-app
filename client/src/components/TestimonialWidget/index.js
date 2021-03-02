import React, { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
// import "./index.scss";
import Carousel from "react-bootstrap/Carousel";
// import "bootstrap/dist/css/bootstrap.min.css";

function TestimonialWidget() {
  const [error, data, isLoading] = useFetch(
    "http://localhost:3004/testimonials"
  );

  return <div>{data.length}</div>;
}

export default TestimonialWidget;
