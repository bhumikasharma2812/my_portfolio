import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* Part Two - Job Experience */}
      <div className="w-full lgl:w-[70%]">
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2023 - 2025</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>

        <div className="mt-6 lgl:mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="WordPress Developer"
            subTitle="BYLD Group (Social Codify) - (Aug, 2025 - Present)"
            result="Sector 44 Gurugram"
            des="Handled multiple websites at the same time and improved time management skills. Worked on UX and design improvements, making websites more user-friendly and modern. Also worked with Byld Group client projects and learned client handling, teamwork, and managing different tasks together."
          />

          <ResumeCard
            title="Junior Frontend Developer"
            subTitle="Jai Veeru Creatives - (Dec, 2024 - Aug, 2025)"
            result="Okhla Phase 1, Govindpuri"
            des={
              <>
                <p>
                  Led development and design of 10+ WordPress websites, improving loading speed by up to 40%.
                  Created a custom plugin for email OTP verification. Handled automated email notifications to
                  keep users informed about their resume status. Maintained and updated 10+ client websites
                  every 15 days. Collaborated closely with sales and client teams to ensure timely delivery and
                  smooth communication. Gained deep knowledge of WordPress and JetEngine, learned PHP for plugin
                  development, and used JavaScript to create smooth animations. Currently working on a Next.js-based
                  dashboard that includes resume acceptance and rejection functionalities.
                </p>

                <ul className="list-disc pl-5 space-y-2 mt-3">
                  <li>Learned WordPress development with a focus on user-friendly design.</li>
                  <li>Developed responsive HTML emailers using Constant Contact for effective email marketing campaigns.</li>
                  <li>Gained strong experience in web design and UI tools like Figma prototype, Canva, and JavaScript.</li>
                </ul>
              </>
            }
          />

          <ResumeCard
            title="Web Developer"
            subTitle="Glowal IT Services - (Nov, 2023 - Nov, 2024)"
            result="Sector 62 Noida"
            des={
              <>
                <p>
                  At Glowal IT Services, learned website designing and WordPress development from the ground up. Created multiple websites and handled tasks like logo design, branding, brochures, and video editing. Also managed social media accounts and helped boost the online presence of various clients. Worked on real projects for clients such as Mindful Parenting, Tonyoga, and Callman Logistics while using tools like Figma, Canva, and Photoshop to deliver creative results.
                </p>

                <ul className="list-disc pl-5 space-y-2 mt-3">
                  <li>Supported end-to-end branding for clients, from concept to digital delivery.</li>
                  <li>Handled creative content for social media posts across platforms.</li>
                  <li>Balanced multiple design and web tasks under tight client deadlines.</li>
                  <li>Improved design consistency across print and digital assets.</li>
                  <li>Took part in client feedback sessions to adjust and improve designs.</li>
                </ul>
              </>
            }
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
