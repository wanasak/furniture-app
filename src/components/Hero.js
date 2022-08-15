import React from "react";
import { hero } from "../data";
import Stats from "./Stats";

const Hero = () => {
  const { title, subtitle, buttonText } = hero;
  return (
    <section
      className="h-[850px] bg-hero bg-cover bg-right bg-no-repeat text-white
        pt-[225px] pb-[254px] relative mb-12 lg:mb-28 lg:bg-center"
    >
      <div className="container mx-auto text-center">
        <h1
          className="text-center text-2xl font-semibold lg:text-[64px]
            lg:leading-tight lg:max-w-[888px] mx-auto mb-[30px]"
        >
          {title}
        </h1>
        <h2
          className="max-w-[672px] mx-auto lg:text-xl
        mb-[30px] lg:mb-[65px]"
        >
          {subtitle}
        </h2>
        <button
          className="bg-[rgba(255,255,255,0.4)] hover:bg-[rgba(255,255,255,0.5)] 
            px-[35px] py-2 transition rounded-md backdrop-blur-md lg:px-[80px]
            mb-[160px] lg:mb-[194px]"
        >
          {buttonText}
        </button>
        <div className="-top-[70px] relative">
          <Stats />
        </div>
      </div>
    </section>
  );
};

export default Hero;
