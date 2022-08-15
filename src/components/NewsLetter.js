import React from "react";

import { newsletter } from "../data";

const NewsLetter = () => {
  const { title, subtitle, placeholder, buttonText } = newsletter;
  return (
    <section className="section bg-newsletter min-h-[490px]">
      <div className="container mx-auto flex justify-center lg:justify-end">
        <div className="w-full max-w-[558px] text-white text-center lg:text-left">
          <h2 className="text-4xl font-semibold max-w-[350px] mx-auto lg:mx-0 mb-5 leading-normal">
            {title}
          </h2>
          <p className="text-xl font-light mb-5">{subtitle}</p>
          <div className="flex flex-col lg:flex-row gap-[22px]">
            <input
              className="h-[60px] px-6 outline-none rounded-lg text-gray-600
              placeholder:text-gray-400 lg:flex-1"
              type="text"
              placeholder={placeholder}
            />
            <button
              className="bg-primary h-[60px] px-7 rounded-lg hover:bg-slate-900
                font-medium text-xl transition"
            >
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
