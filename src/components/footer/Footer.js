import React from 'react'
import { FaLinkedinIn, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

import {logo} from "../../assets/index"

const Footer = () => {
  return (
    <div className="w-full py-20 h-auto border-b-[1px] border-b-black grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-4 gap-8">
      <div className="w-full h-full flex flex-col gap-8">
        <img className="w-32" src={logo} alt="logo" />
      
<div className="flex gap-4">
  <a
                href="https://linkedin.com/in/bhumikasharma2812"
                target="_blank"
                rel="noopener noreferrer"
                className="bannerIcon"
              >
                <FaLinkedinIn />
              </a>
              <a href="mailto:bhumikasharma2812@gmail.com" className="bannerIcon">
                <FaEnvelope />
              </a>
              <a href="tel:+91XXXXXXXXXX" className="bannerIcon">
                <FaPhoneAlt />
              </a>
</div>

      </div>
<div className="w-full h-full">
  <h3 className="text-xl uppercase text-designColor tracking-wider">
    Quick Links
  </h3>
  <ul className="flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden">
    <li>
      <a
        href="home"
        className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer"
      >
        Home
        <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
      </a>
    </li>
   <li>
  <a
    href="/Bhumika-sharma.pdf"
    download="Bhumika-sharma.pdf"
    className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer"
  >
    Portfolio
    <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
  </a>
</li>

    <li>
      <a
        href="features"
        className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer"
      >
        Services
        <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
      </a>
    </li>
    <li>
      <a
        href="contact"
        className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer"
      >
        Contact
        <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
      </a>
    </li>
  </ul>
</div>


    
      
    </div>
  );
}

export default Footer