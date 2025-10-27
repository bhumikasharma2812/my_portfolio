import React from 'react';
import { AiFillAppstore } from "react-icons/ai";
import { FaGlobe } from "react-icons/fa";
import { SiAntdesign } from "react-icons/si";
import Title from '../layouts/Title';
import Card from './Card';
import { SiFigma } from "react-icons/si";

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="Business Strategy"
          des="Helping businesses plan, optimize, and achieve their goals effectively."
        />
        <Card
          title="Website using React JS"
          des="Creating dynamic and responsive web applications using React JS for modern websites."
          icon={<AiFillAppstore />}
        />
        <Card
          title="WordPress Websites"
          des="Building customizable and user-friendly websites using WordPress to meet client needs."
          icon={<SiAntdesign />}
        />
  <Card
  title="Figma Design"
  des="Creating UI/UX designs, prototypes, and visual layouts for web and mobile applications."
  icon={<SiFigma />}
/>
        <Card
          title="UX Design"
          des="Designing user experiences that are intuitive, engaging, and visually appealing."
          icon={<SiAntdesign />}
        />
        <Card
          title="Hosting Websites"
          des="Providing website hosting solutions ensuring speed, reliability, and security."
          icon={<FaGlobe />}
        />
      </div>
    </section>
  );
}

export default Features;
