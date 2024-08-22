import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

import React from "react";
import ClientReview from "./ClientReview";

const TestimonialSlider = () => {
  return (
    <Carousel
      additionalTransfrom={0}
      arrows={true}
      autoPlay={true}
      autoPlaySpeed={5000}
      centerMode={false}
      infinite
      responsive={responsive}
      itemClass="item"
    >
      <ClientReview
        image="/images/c1.jpg"
        name="Sajal Sajalsalazaj"
        role="Web developer"
      />
      <ClientReview
        image="/images/c2.jpg"
        name="Andrew Washington"
        role="Web developer"
      />
      <ClientReview
        image="/images/c1.jpg"
        name="Peter Salah"
        role="Web developer"
      />
      <ClientReview
        image="/images/c1.jpg"
        name="August Rount"
        role="Web developer"
      />
    </Carousel>
  );
};

export default TestimonialSlider;
