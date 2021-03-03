import React, { useState } from "react";
import useFetch from "../../hooks/useFetch";
import Slider from "react-slick";
import "./index.scss";
import SliderNav from "../../shared/SliderNav";

function TestimonialWidget() {
  const [error, data, isLoading] = useFetch("/api/testimonials");
  const [slider, setSlider] = useState();
  function handlePrev() {
    slider.slickPrev();
  }
  function handleNext() {
    slider.slickNext();
  }

  return (
    <div className="TestimonialWidget">
      <div className="TestimonialWidget__slider">
        <Slider
          ref={(slider) => {
            setSlider(slider);
          }}
          autoplay={true}
          pauseOnHover={false}
          arrows={false}
        >
          {data.map((slide, index) => (
            <Slide testimonial={slide} />
          ))}
        </Slider>
      </div>
      <SliderNav clickPrev={handlePrev} clickNext={handleNext} />
    </div>
  );
}

export default TestimonialWidget;

function Slide({ testimonial }) {
  return (
    <div className="TestimonialWidget__slide">
      <blockquote className="TestimonialWidget__content">
        {testimonial.content}
      </blockquote>
      <p className="TestimonialWidget__author">{testimonial.author}</p>
    </div>
  );
}
