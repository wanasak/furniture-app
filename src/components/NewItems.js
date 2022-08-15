import React from "react";
import { newInStore } from "../data";
import NewItemsSlider from "./NewItemsSlider";

const NewItems = () => {
  const { title, subtitle, icon, link, products } = newInStore;
  return (
    <section className="section relative overflow-hidden lg:min-h-[540px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <div className="flex md:flex-col gap-x-6 items-baseline mb-6 lg:mb-0">
            <h2 className="title max-w-[245px] lg:mb-[90px]">{title}</h2>
            <p className="max-w-[245px] lg:mb-12">{subtitle}</p>
            <div className="hidden lg:flex items-center">
              <a
                className="hover:border-b border-primary font-medium transition-all items-center"
                href="/"
              >
                {link}
              </a>
              <div className="text-3xl">{icon}</div>
            </div>
          </div>
          <div className="lg:max-w-[800px] xl:max-w-[990px] lg:absolute lg:-right-24">
            <NewItemsSlider />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewItems;
