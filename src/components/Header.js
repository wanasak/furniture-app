import React, { useState, useEffect } from "react";

import Logo from "../assets/img/logo.svg";
import { CgMenuRight, CgClose } from "react-icons/cg";
import { navigation } from "../data";
import NavMobile from "./NavMobile";

const Header = () => {
  const [bg, setBg] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);

  useEffect(() => {
    // add event listener
    window.addEventListener("scroll", () => {
      // when scrollY is bigger than 50px setBg to true, else false
      return window.scrollY > 50 ? setBg(true) : setBg(false);
    });
  });

  return (
    <header
      className={`${bg ? "bg-primary py-4 lg:py-6" : "bg-none"}
      fixed left-0 w-full py-8 z-10 transition-all duration-200`}
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <a href="/">
            <img className="h-6 lg:h-8" src={Logo} alt="" />
          </a>
          <div
            onClick={() => setMobileNav(!mobileNav)}
            className="text-2xl text-white md:hidden lg:text-3xl cursor-pointer"
          >
            {mobileNav ? <CgClose /> : <CgMenuRight />}
          </div>
          <nav className="hidden md:flex">
            <ul className="md:flex md:gap-x-4">
              {navigation.map((item, index) => {
                return (
                  <li key={index}>
                    <a
                      className="capitalize text-white
                      transition-all hover:border-b"
                      href={item.href}
                    >
                      {item.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
          <div
            className={`${mobileNav ? "left-0" : "-left-full"}
            md:hidden fixed bottom-0 w-full h-screen transition-all max-w-xs`}
          >
            <NavMobile />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
