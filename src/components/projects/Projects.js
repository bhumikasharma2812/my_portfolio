import React from 'react';
import Title from '../layouts/Title';
import { cruciallearning, fivebehaviours, global, srias, studio, tony, upagtech, jaiveeru } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center mb-12">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Five Behaviours"
          des={
            <ul className="list-disc pl-5 space-y-2">
              <li>Handled complete UI/UX design to enhance user experience and engagement.</li>
              <li>Ensured modern, responsive layout aligned with brand guidelines.</li>
            </ul>
          }
          src={fivebehaviours}
          website="https://fivebehaviours.byldgroup.com/"
        />

        <ProjectsCard
          title="Crucial Learning"
          des={
            <ul className="list-disc pl-5 space-y-2">
              <li>Designed and developed Crucial Learning India website with complete UX/UI.</li>
              <li>Managed BYLD Group client projects under tight deadlines.</li>
            </ul>
          }
          src={cruciallearning}
          website="https://cruciallearningindia.in/"
        />

        <ProjectsCard
          title="Global Checks"
          des={
            <ul className="list-disc pl-5 space-y-2">
              <li>Developed responsive UI and interactive design elements.</li>
              <li>Optimized website performance for faster loading.</li>
            </ul>
          }
          src={global}
          website="https://globalchecks.in/"
        />

        <ProjectsCard
          title="Srias Life Spaces"
          des={
            <ul className="list-disc pl-5 space-y-2">
              <li>Created front-end using React and styled-components.</li>
              <li>Implemented user authentication and post management.</li>
            </ul>
          }
          src={srias}
          website="https://www.sriaslifespaces.com/"
        />

        <ProjectsCard
          title="Studio Infinite"
          des={
            <ul className="list-disc pl-5 space-y-2">
          
         
                <li>Developed a custom plugin for email OTP verification during form submission
.</li>
              <li>Focused on responsive design, user-friendly experience, and performance optimization.</li>
            </ul>
          }
          src={studio}
          website="https://www.studioinfinite.in" 
        />

        <ProjectsCard
          title="UPAG Tech Forum"
          des={
            <ul className="list-disc pl-5 space-y-2">
              <li>Designed a custom landing page using Elementor with dynamic content powered by JetEngine.</li>
              <li>Added a marquee banner and made the layout fully responsive for better engagement.</li>
            </ul>
          }
          src={upagtech}
          website="https://www.upagtechforum.com"
        />

        <ProjectsCard
          title="Jai Veeru Creatives"
         des={
    <ul className="list-disc pl-5 space-y-2">
      <li>Developed a custom plugin to manage user applications.</li>
      <li>Enabled admin to accept/reject profiles with one click.</li>
      <li>Set up automated emails for application approval or rejection.</li>
    </ul>
  }
          src={jaiveeru}
          website="https://www.jaiveeru.co.in"
        />

        <ProjectsCard
          title="Tonyoga"
          des={
            <ul className="list-disc pl-5 space-y-2">
              <li>Designed all graphics and built the site with a custom theme using Elementor.</li>
              <li> Added LMS and KMS features, and made the layout fully responsive for all devices.</li>
            </ul>
          }
          src={tony}
          website="https://www.tonyoga.online"
        />

      
      </div>
    </section>
  );
}

export default Projects;
