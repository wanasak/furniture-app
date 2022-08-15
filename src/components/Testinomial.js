import React from "react";

import { testimonial } from "../data";
import TestinomialSlider from "./TestinomialSlider";

const Testinomial = () => {
  const { image, title } = testimonial;

  return (
    <section className="section">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:gap-x-10 gap-y-2">
          <div className="lg:max-w-[50%]">
            <h2 className="title mb-9">{title}</h2>
            <TestinomialSlider />
          </div>
          <div className="order-1">
            <img src={image.type} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testinomial;
