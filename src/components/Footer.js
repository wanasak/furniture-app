import React from "react";

import Logo from "../assets/img/logo.svg";
import { footer } from "../data";

const Footer = () => {
  return (
    <section className="section bg-primary text-white">
      <div className="container mx-auto">
        <div
          className="flex flex-col lg:flex-row justify-between mb-14
          border-b border-opacity-75 border-gray-700 pb-7 lg:pb-14"
        >
          <a href="/" className="mb-6 lg:mb-0">
            <img src={Logo} alt="" />
          </a>
          <div className="flex gap-x-4">
            {footer.social.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex justify-center items-center w-12 h-12
                  bg-gray-700 text-2xl rounded-full hover:bg-accent
                  transition-all"
                >
                  <a href="/">{item.icon}</a>
                </div>
              );
            })}
          </div>
        </div>
        <p className="text-center">
          &copy; FurniShop 2022 - All Rights Reserved.
        </p>
      </div>
    </section>
  );
};

export default Footer;
