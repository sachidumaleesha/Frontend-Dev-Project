import React from "react";
import Logo from "../header/logo";

const Footer = () => {
  return (
    <div className="w-full bg-[#6B3CC9] text-white pt-10 py-5 px-5 md:px-7 lg:px-20 pb-5">
      <div className="grid grid-cols-12">
        <div className="col-span-12 md:col-span-12 lg:col-span-6 mb-10 lg:mb-0">
          <div className="flex gap-2 items-center">
            <Logo />
            <p className="text-3xl uppercase font-semibold">AT Digital</p>
          </div>
          <p className="mt-4 lg:mt-2 max-w-[400px]">
            Your goal is our target. Not anything in between. We use online
            marketing platforms and tools to achieve single objective - your
            business results.
          </p>
        </div>

        <div className="col-span-12 md:col-span-6 lg:col-span-3 mb-8 md:mb-0">
          <div>
            <p className="text-2xl font-semibold">Our Technologies</p>
          </div>
          <div className="space-y-2 mt-2">
            <p>React Js</p>
            <p>Gatsby</p>
            <p>NextJs</p>
            <p>NodeJs</p>
          </div>
        </div>

        <div className="col-span-12 md:col-span-6 lg:col-span-3">
          <div>
            <p className="text-2xl font-semibold">Our Services</p>
          </div>
          <div className="space-y-2 mt-2">
            <p>Social Media Marketing</p>
            <p>Web & Mobile App Development</p>
            <p>Data & Analytics</p>
          </div>
        </div>
      </div>
      <div className="mt-9 flex justify-center">
        <hr className="lg:w-1/2 w-full text-center"/>
      </div>
      <div className="flex gap-2 items-center mt-2 justify-center w-full">
        <p>Privacy Policy</p>
        <p className="mx-1">|</p>
        <p>Terms & Conditions</p>
      </div>
    </div>
  );
};

export default Footer;
