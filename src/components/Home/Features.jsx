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
              <h4 className="text-xl xl:text-4xl font-bold">Who We Are:</h4>
              <p className="text-slate-400 text-md xl:text-xl">
              We are a dynamic and innovative digital marketing agency with a mission to empower businesses of all sizes to achieve their digital marketing goals. With years of industry expertise and a customer-centric approach, we have successfully partnered with diverse clients across various industries, delivering impactful digital marketing campaigns.

              </p>
            </div>
          </div>
          <div className="flex gap-5 items-center">
            <i className="text-3xl xl:text-4xl text-yellow-400">
              <BiCubeAlt />
            </i>
            <div className="flex flex-col gap-3">
              <h4 className="text-xl xl:text-4xl font-bold">What We Do:</h4>
              <p className="text-slate-400 text-md xl:text-xl">
              Our comprehensive range of digital marketing services covers every aspect of your online journey. From crafting engaging content to optimizing websites content for search engines, Graphics Design, Digital Marketing, Recruitment, etc. we all have covered.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
