import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../slider.css";

import { Navigation, Pagination } from "swiper";

import { products } from "../data";

import { HiPlus } from "react-icons/hi";

const ProductSlider = () => {
  const { pages } = products;
  return (
    <Swiper
      modules={[Pagination, Navigation]}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      className="productSlider min-h-[1300px]"
    >
      {pages.map((page, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 gap-x-5 md:grid-cols-3 lg:grid-cols-4">
              {page.productList.map((product, index) => {
                const { image, name, price, oldPrice } = product;
                return (
                  <div
                    key={index}
                    className="w-full max-w-[290px] text-left h-[380px]"
                  >
                    <div
                      className="border hover:border-accent
                        rounded-[18px] w-full h-full max-h-[292px] max-w-[285px]
                        flex items-center justify-center mb-[15px] transition relative"
                    >
                      <img src={image.type} alt="" />
                      <div
                        className="absolute bottom-4 rounded-full bg-gray-200 w-8 h-8 flex
                        items-center justify-center right-4 cursor-pointer transition hover:bg-gray-300"
                      >
                        <HiPlus className="text-xl text-primary" />
                      </div>
                    </div>
                    <div className="font-semibold lg:text-xl">{name}</div>
                    <div className="flex gap-x-3 items-center">
                      <div>${price}</div>
                      <div className="text-grey line-through text-[15px]">
                        ${oldPrice}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ProductSlider;
