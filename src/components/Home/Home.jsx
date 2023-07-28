import React from "react";
import { BiCubeAlt } from "react-icons/bi";
import { PiScrollDuotone } from "react-icons/pi";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Home = () => {
  // for main
  

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        repeat: Infinity, // Set to loop indefinitely
        repeatType: 'reverse', // Reverse the animation when it repeats
      },
    },
  };

  // for ABour
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

  return (
    <>
      {/* main Part with umage */}
      <section id="hero" className="flex items-center justify-center">
        <div className=" ">
          <div className=" flex justify-center ">
          <div className="col-xl-6 col-lg-8">
      <motion.div
        className="text-white text-4xl text-center font-bold"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        WELCOME TO ARCHER TECHNOLOGY
        <span className="text-[#ffc451]">.</span>
      </motion.div>
      <motion.h2
        className="text-white text-center text-xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.5 }}
      >
        We are a team of talented Developers
      </motion.h2>
    </div>
          </div>
        </div>
      </section>

      {/* ABout */}

      <section id="about" className="about">
        <div className="text-white">
          <div className="grid grid-cols-12 gap-24 p-24">
            <motion.div
              className="col-span-6"
              variants={leftColumnVariants}
              initial="hidden"
              animate={leftColumnAnimation} // Use the determined animation
              ref={leftColumnRef} // Attach the ref to the element
            >
              <h3 className="font-bold text-4xl text-slate-400">
                ABOUT TO ARCHER
              </h3>
              <p className="font-semibold text-xl mt-4 text-slate-200">
                The Archer Technology is a leading software development company
                in India that offers innovative and creative software solutions
                for small enterprises to large organizations for their digital
                transformation and deliver accelerated business growth. We work
                with customers to turn them into the most successful
                high-performance organizations.
              </p>
            </motion.div>

            <motion.div
              className="col-span-6"
              variants={rightColumnVariants}
              initial="hidden"
              animate={rightColumnAnimation} // Use the determined animation
              ref={rightColumnRef} // Attach the ref to the element
            >
              <img
                src="https://www.thearchertechnology.com/public/frontend/img/about.webp"
                className="max-w-[100%] h-auto"
                alt=""
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}

      <section id="features" className="  text-white">
        <div className="  ">
          <div className="grid grid-cols-12  gap-24 p-24">
            <motion.div
              className=" col-span-6 bg-cover bg-center"
              variants={missionVariant}
              initial="hidden"
              animate={missionAnimation}
              ref={missionRef}
            >
              <img
                src="https://cdjindalgroup.com/wp-content/uploads/2020/06/mission.png"
                alt=""
              />
            </motion.div>
            <motion.div
              className=" col-span-6 "
              variants={visionVariant}
              initial="hidden"
              animate={visionAnimation}
              ref={visionRef}
            >
              <div className="  flex gap-5 mt-5  ">
                <i className="text-4xl text-yellow-400  ">
                  <PiScrollDuotone />
                </i>
                <div className="flex gap-3 flex-col">
                  <h4 className="text-4xl font-bold">Our Mission</h4>
                  <p className="text-slate-400 text-xl">
                    Every software product that we develop is built with assured
                    quality and exhibits excellence in its core aspects. We
                    ensure that our clients get what they need to fulfill their
                    aims.
                  </p>
                </div>
              </div>
              <div className=" flex gap-5 mt-5  ">
                <i className=" ">
                  <BiCubeAlt className="text-4xl text-yellow-400" />
                </i>
                <div className="flex flex-col gap-3">
                  <h4 className="text-4xl font-bold">Our Vision</h4>
                  <p className="text-slate-400 text-xl">
                    We analyze your future business challenges and develop
                    creative and innovative digital solutions to encounter every
                    problem that arises in business with ease for you to enjoy
                    streamlined business operations.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
