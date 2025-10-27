import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaEnvelope, FaPhoneAlt, FaLinkedinIn, FaReact, FaWordpress } from "react-icons/fa";

import { SiTailwindcss, SiFigma, SiNextdotjs } from "react-icons/si";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: [
      "Frontend Developer.",
      "WordPress Developer.",
      "Business Analyst.",
      "UI Designer.",
    ],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      {/* Intro Section */}
      <div className="flex flex-col gap-5">
        <h4 className="text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-5xl font-bold text-white">
          Hi, I'm{" "}
          <span className="text-designColor capitalize">Bhumika Sharma</span>
        </h1>
        <h2 className="text-3xl font-bold text-white">
          a <span>{text}</span>
          <Cursor cursorBlinking={false} cursorStyle="|" cursorColor="#ff014f" />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          I want to grow as a Business Analyst, understand what’s needed,
          solve problems, and help teams work better together. I have 2 years
          of experience as a Web Developer, building websites with HTML, CSS,
          JavaScript, and WordPress, and designing layouts in Figma, Photoshop,
          and Canva. My technical skills help me bridge the gap between
          business and technology.
        </p>
      </div>

      {/* Contact + Skills Section */}
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        {/* Left: Social Links */}
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
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

       {/* Right: Best Skills */}
<div>
  <h2 className="text-base uppercase font-titleFont mb-4">
    Best skill on
  </h2>
  <div className="flex gap-4">
    <span className="bannerIcon">
      <FaReact />
    </span>
    <span className="bannerIcon">
      <SiTailwindcss />
    </span>
    <span className="bannerIcon">
      <SiFigma />
    </span>
    <span className="bannerIcon">
      <FaWordpress />
    </span>
  </div>
</div>

      </div>
    </div>
  );
};

export default LeftBanner;
