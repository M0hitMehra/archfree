import React  from "react";
import { BiCubeAlt } from "react-icons/bi";
import { PiScrollDuotone } from "react-icons/pi";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
 
const Features = () => {
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

  return (
    <section id="features" className="text-white p-2 xl:p-24">
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-4 xl:gap-24">
        <motion.div
          className="xl:col-span-6 bg-cover bg-center"
          variants={missionVariant}
          initial="hidden"
          animate={missionAnimation}
          ref={missionRef}
        >
          <img
            src="https://cdjindalgroup.com/wp-content/uploads/2020/06/mission.png"
            alt=""
            className="max-w-full h-auto"
          />
        </motion.div>
        <motion.div
          className="xl:col-span-6 flex flex-col gap-5"
          variants={visionVariant}
          initial="hidden"
          animate={visionAnimation}
          ref={visionRef}
        >
          <div className="flex gap-5 items-center">
            <i className="text-3xl xl:text-4xl text-yellow-400">
              <PiScrollDuotone />
            </i>
            <div className="flex flex-col gap-3">
              <h4 className="text-xl xl:text-4xl font-bold">Our Mission</h4>
              <p className="text-slate-400 text-md xl:text-xl">
                Every software product that we develop is built with assured
                quality and exhibits excellence in its core aspects. We ensure
                that our clients get what they need to fulfill their aims.
              </p>
            </div>
          </div>
          <div className="flex gap-5 items-center">
            <i className="text-3xl xl:text-4xl text-yellow-400">
              <BiCubeAlt />
            </i>
            <div className="flex flex-col gap-3">
              <h4 className="text-xl xl:text-4xl font-bold">Our Vision</h4>
              <p className="text-slate-400 text-md xl:text-xl">
                We analyze your future business challenges and develop creative
                and innovative digital solutions to encounter every problem that
                arises in business with ease for you to enjoy streamlined
                business operations.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
