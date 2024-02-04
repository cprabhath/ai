import React from "react";

import { logo } from "../assets";
import Card from "./Card";

const Hero = () => {
  return (
    <>
      <header className="w-full flex justify-center items-center flex-col">
        <nav className="flex justify-between items-center w-full mb-5 pt-3">
          <img src={logo} alt="sumz_logo" className="w-10 object-contain" />

          <div className="font-bold blue_gradient">
            You're currently using with limited features. Please wait for the
            next update.
          </div>
          {/* <div className="flex justify-between items-center">
        <a
            href="#"
            className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 mr-2"
          >
            Log in
          </a>
          <a
            href="#"
            className="-mx-3 block rounded-lg px-3 text-base font-normal leading-7 bg-black text-white mr-2"
          >
            Register
          </a>
        </div> */}
        </nav>

        <h1 className="head_text overflow-hidden">
          Start Your Adventure with
          <span className="orange_gradient "> AI ToolKit</span>
        </h1>
        <h2 className="desc">
          Our super powered toolkit will help you to write better and error free
          and It&apos;s free and easy to use 🤩
        </h2>
      </header>

      <Card />
    </>
  );
};

export default Hero;
