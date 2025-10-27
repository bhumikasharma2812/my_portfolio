import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* Part One - Education */}
      <div className="w-full lgl:w-1/2">
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2016-2023</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>

        <div className="mt-6 lgl:mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="B.Tech - Computer Science & Engineering"
            subTitle="Jaunpur (2019 - 2023)"
            result="73%"
          />
          <ResumeCard
            title="Intermediate Education"
            subTitle="Inter College (2018 - 2019)"
            result="71%"
          />
          <ResumeCard
            title="Matriculation"
            subTitle="Silver Grove School (2016 - 2017)"
            result="8.2 CGPA"
          />
        </div>
      </div>

    </motion.div>
  );
};

export default Education;
