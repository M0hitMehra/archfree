import React from "react";
import { BiCubeAlt } from "react-icons/bi";
import { PiScrollDuotone } from "react-icons/pi";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import "../../styles/About.css";
const About = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 200 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        // repeat: Infinity, // Set to loop indefinitely
        repeatType: "reverse", // Reverse the animation when it repeats
      },
    },
  };

  const [containerRef, containerInView] = useInView({
    triggerOnce: true,
    threshold: 0.2, // Adjust this threshold value to determine when the animation should start
  });
  const containerAnimation = containerInView ? "visible" : "hidden";

  const leftColumnVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  const rightColumnVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  const [leftColumnRef, leftColumnInView] = useInView({
    triggerOnce: true,
    threshold: 0.2, // Adjust this threshold value to determine when the animation should start
  });

  const [rightColumnRef, rightColumnInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const leftColumnAnimation = leftColumnInView ? "visible" : "hidden";
  const rightColumnAnimation = rightColumnInView ? "visible" : "hidden";

  // for features
  const missionVariant = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  const visionVariant = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  const [missionRef, missionInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [visionRef, visionInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  // Determine when to trigger the animation based on visibility
  const missionAnimation = missionInView ? "visible" : "hidden";
  const visionAnimation = visionInView ? "visible" : "hidden";

  const sections = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,

      transition: {
        duration: 0.7,
        ease: "easeInOut",
      },
    },
  };

  const [sectionRef, sectionInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const sectionAnimation = sectionInView ? "visible" : "hidden";

  return (
    <section className=" overflow-x-hidden ">
      <div className="mx-20">
        <div>This is About Section</div>
        <div className="row_About ">
          <motion.div
            className="About_text"
            variants={leftColumnVariants}
            initial="hidden"
            animate={leftColumnAnimation} // Use the determined animation
            ref={leftColumnRef}
          >
            <div className="mt-2 flex items-center">
              <h1 className="text-white text-xl font-medium">ABOUT US</h1>
              <hr className="border-1 border-amber-500  drop-shadow-xl w-48 ml-3"></hr>
            </div>
            <h3 className="text-3xl font-bold  text-white mt-8">
              ABOUT TO ARCHER
            </h3>
            <p className="text-slate-400  font-medium mt-6">
              The Archer Technology is leading software development company in
              India that offers innovative and creative software solutions for
              small enterprises to large organization for their digital
              transformation and deliver accelerated business growth. We work
              with Customers to turn them into most successful high performance
              Organizations.
            </p>
            <p className="text-slate-400  font-medium mt-6">
              We have team Of developers that have years of experience and
              expertise to develop high performing solutions and produce the
              desired solution for your business.
            </p>
            <p className="text-slate-400  font-medium mt-6">
              Archer Technology offering services on Web Development, App
              Development, ERP & CRM, Graphics Designing, Digital marketing and
              Web Hosting.
            </p>
            <p className="text-slate-400  font-medium mt-6">
              The high quality output of our services and solutions makes us
              inspired and committed to produce better and better solutions for
              our customers. Our main aim is customer satisfaction. customer
              comes first in our business which makes us client oriented
              company.
            </p>
          </motion.div>
          <motion.div
            className="About_image mt-20"
            variants={rightColumnVariants}
            initial="hidden"
            animate={rightColumnAnimation} // Use the determined animation
            ref={rightColumnRef}
          >
            <img
              src="https://www.thearchertechnology.com/public/Images/shutterstock_446870920%20(1).webp"
              alt="react logo"
              className="image-fluid"
            />
          </motion.div>
        </div>

        <div className="flex justify-between mt-20">
          <motion.div
            className="img_about"
            variants={missionVariant}
            initial="hidden"
            animate={missionAnimation}
            ref={missionRef}
          >
            <img
              src="https://www.thearchertechnology.com/public/frontend/img/features.jpg"
              alt="react logo"
              className="max-w-[100%] h-auto"
            />
          </motion.div>
          <motion.div
            className="text_about"
            variants={visionVariant}
            initial="hidden"
            animate={visionAnimation}
            ref={visionRef}
          >
            <h1 className="text-3xl font-bold flex text-white">
              <i className="text-4xl text-yellow-400  ">
                <PiScrollDuotone />
              </i>
              Our Mission
            </h1>
            <p className="text-slate-400 text-xl ml-10">
              Every software product that we develop is built with assured
              quality and exhibits excellence in its core aspects.We ensure that
              our clients get what they need to fulfill their aims.
            </p>
            <h1 className="text-3xl font-bold flex text-white mt-10">
              <i className=" ">
                <BiCubeAlt className="text-4xl text-yellow-400" />
              </i>
              Our Vision
            </h1>
            <p className="text-slate-400 text-xl ml-10">
              we analyze your future business challenges and develop creative
              and innovative digital solutions to encounter every problems
              arises in business with easiness for you to enjoy streamlined
              business operations.
            </p>
          </motion.div>
        </div>

        <div className="flex justify-center items-center mt-20 flex-col">
          <motion.h1
            className="text-5xl font-bold flex text-white "
            variants={containerVariants}
            initial="hidden"
            animate={containerAnimation}
            ref={containerRef}
          >
            Our Development Process
          </motion.h1>
          <motion.img
            src="https://www.thearchertechnology.com/public/frontend/img/Software-Process-for-Project-Development.png"
            alt="Loading"
            className="mt-20"
            variants={containerVariants}
            initial="hidden"
            animate={containerAnimation}
            ref={containerRef}
            transition={{ delay: 0.8 }}
          />
        </div>

        <div className="flex justify-between mt-20 w-full">
          <motion.div
            className="m-3 w-2/5 h-auto "
            variants={sections}
            animate={sectionAnimation}
            initial="hidden"
            ref={sectionRef}
          >
            <h1 className="text-2xl font-bold  text-white">
              Specification Requirement
            </h1>
            <p className="text-slate-400  font-medium mt-4">
              This stage is about the research of overall requirements and the
              target audience of the website. This helps plan the best strategy
              for project management.
            </p>
          </motion.div>
          <motion.div
            className="m-3 w-2/5 h-auto"
            variants={sections}
            animate={sectionAnimation}
            initial="hidden"
            ref={sectionRef}
          >
            <h1 className="text-2xl font-bold  text-white">
              Wireframe and Design
            </h1>
            <p className="text-slate-400  font-medium mt-4">
              Next, we Wireframe and design the interface of your app that will
              represent the appearance and user experience of your app to the
              end-user.
            </p>
          </motion.div>
          <motion.div
            className="m-3 w-2/5 h-auto"
            variants={sections}
            animate={sectionAnimation}
            initial="hidden"
            ref={sectionRef}
          >
            <h1 className="text-2xl font-bold  text-white">
              Architecture and Database Design
            </h1>
            <p className="text-slate-400  font-medium mt-4">
              In This stage We design architecture and database, Divides your
              information into subject-based tables to reduce redundant data and
              how database tables interacting each other.
            </p>
          </motion.div>
        </div>
        <div className="flex justify-between mt-4  w-full">
          <motion.div
            className="m-3 w-2/5 h-auto"
            variants={sections}
            animate={sectionAnimation}
            initial="hidden"
            ref={sectionRef}
          >
            <h1 className="text-2xl font-bold  text-white">Development</h1>
            <p className="text-slate-400  font-medium mt-4">
              This stage is about the research of overall requirements and the
              target audience of the website. This helps plan the best strategy
              for project management.
            </p>
          </motion.div>
          <motion.div
            className="m-3 w-2/5 h-auto"
            variants={sections}
            animate={sectionAnimation}
            initial="hidden"
            ref={sectionRef}
          >
            <h1 className="text-2xl font-bold  text-white">Testing</h1>
            <p className="text-slate-400  font-medium mt-4">
              Next, we Wireframe and design the interface of your app that will
              represent the appearance and user experience of your app to the
              end-user.
            </p>
          </motion.div>
          <motion.div
            className="m-3 w-2/5 h-auto"
            variants={sections}
            animate={sectionAnimation}
            initial="hidden"
            ref={sectionRef}
          >
            <h1 className="text-2xl font-bold  text-white">Deployment</h1>
            <p className="text-slate-400  font-medium mt-4">
              In This stage We design architecture and database, Divides your
              information into subject-based tables to reduce redundant data and
              how database tables interacting each other..
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
