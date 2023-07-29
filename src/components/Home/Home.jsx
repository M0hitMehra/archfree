import React, { useEffect, useState } from "react";
import { BiCubeAlt } from "react-icons/bi";
import { PiScrollDuotone } from "react-icons/pi";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Home = () => {
  // for main

  const containerVariants = {
    hidden: { y: "100rem" },
    visible: {
      y: 0,
      transition: {
        duration: 1,
        // repeat: Infinity, // Set to loop indefinitely
        repeatType: "reverse", // Reverse the animation when it repeats
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
    <div className="overflow-x-hidden">
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

      <section id="about" className="about ">
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

      {/* SERVICES */}

      <section id="services"  className="services text-white p-24">
        <div  className="container ">
          <div  className="section-title mb-12">
            <h2  className="text-xl font-bold text-slate-300">Services</h2>
            <p className="text-4xl font-serif font-bold my-5">
              Check our Services
            </p>
          </div>
          <div className="flex flex-col">
            <div  className="flex justify-center items-center p-8 gap-14 ">
              {/* Service 1  */}
              <motion.div
                className="bg-[#ffeeec] flex flex-col text-black justify-evenly items-center gap-2 p-4 rounded-lg grow h-[24rem] w-[4rem] text-center"
                variants={sections}
                animate={sectionAnimation} // Use the animation controls
                whileHover={{
                  scale: 1.05,
                  y: -25.2,
                  boxShadow: "0px 0px 21px 5px rgba(255,255,255,0.89)",
                }} // Hover effect
                initial="hidden"
                ref={sectionRef}
              >
                <div  className=" h-24 w-24 p-1 flex items-center rounded-lg  justify-center bg-yellow-400 ">
                  <img
                    src="	https://www.thearchertechnology.com/public/frontend/img/server.png"
                    alt="Web Development"
                     className="   "
                  />
                </div>
                <div  className="flex flex-col gap-4">
                  <h5  className="  text-2xl font-bold  ">Web Development</h5>
                  <p  className="text-slate-800">
                    Your website is the face of your business. The importance of
                    having a business website is to have a strong 24/7 online
                    presence of your business and all are possible at Archer
                    Technology, a leading Web development company.
                  </p>
                </div>
              </motion.div>

              {/* Service 2  */}
              <motion.div
                className="bg-[#ffeeec] flex flex-col text-black justify-evenly items-center gap-2 p-4 rounded-lg grow h-[24rem] w-[4rem] text-center"
                variants={sections}
                animate={sectionAnimation} // Use the animation controls
                whileHover={{
                  scale: 1.05,
                  y: -25.2,
                  boxShadow: "0px 0px 21px 5px rgba(255,255,255,0.89)",
                }} // Hover effect
                initial="hidden"
                ref={sectionRef}
              >
                <div  className=" h-24 w-24 p-1 flex items-center rounded-lg  justify-center bg-yellow-400 ">
                  <img
                    src="	https://www.thearchertechnology.com/public/frontend/img/digital-marketing.png"
                    alt="Digital Marketing"
                     className="   "
                  />
                </div>
                <div  className="flex flex-col gap-4">
                  <h5  className=" text-2xl font-bold   ">Digital Marketing</h5>
                  <p  className="text-slate-800 ">
                    Looking for a Digital Marketing Agency to help you create a
                    strong online presence for your business? With our digital
                    marketing services, you get more bang for your hard-earned
                    buck.
                  </p>
                </div>
              </motion.div>

              {/* Service 3  */}
              <motion.div
                className="bg-[#ffeeec] flex flex-col text-black justify-evenly items-center gap-2 p-4 rounded-lg grow h-[24rem] w-[4rem] text-center"
                variants={sections}
                animate={sectionAnimation} // Use the animation controls
                whileHover={{
                  scale: 1.05,
                  y: -25.2,
                  boxShadow: "0px 0px 21px 5px rgba(255,255,255,0.89)",
                }} // Hover effect
                initial="hidden"
                ref={sectionRef}
              >
                <div  className=" h-24 w-24 p-1 flex rounded-lg  items-center justify-center bg-yellow-400 ">
                  <img
                    src="https://www.thearchertechnology.com/public/frontend/img/graphics.png"
                    alt="Graphics Design"
                     className="   "
                  />
                </div>
                <div  className="flex flex-col gap-4">
                  <h5  className="  text-2xl font-bold  ">Graphics Design</h5>
                  <p  className="text-slate-800 ">
                    Our Graphics designer can enhance any website to convert
                    into the beautiful layout, Mobile app interface, Logo Design
                    and many more.
                  </p>
                </div>
              </motion.div>
            </div>
            {/* another part */}
            <div className=" flex gap-24 p-8 justify-center items-center text-black">
              {/* Service  4  */}
              <motion.div
                 className=" flex  flex-col gap-2 p-4 grow justify-evenly items-center h-[18rem] w-[4rem] text-center bg-[#ffeeec] rounded-lg "
                variants={sections}
                animate={sectionAnimation} // Use the animation controls
                whileHover={{
                  scale: 1.05,
                  y: -25.2,
                  boxShadow: "0px 0px 21px 5px rgba(255,255,255,0.89)",
                }} // Hover effect
                initial="hidden"
                ref={sectionRef}
              >
                <div  className="h-24 w-24 p-1 bg-yellow-400 flex rounded-lg justify-center items-center ">
                  <img
                    src="	https://www.thearchertechnology.com/public/frontend/img/mobile%20(1).png"
                    alt="Mobile Apps Development"
                     className=" "
                  />
                </div>
                <h5  className="   text-2xl font-bold  ">Mobile Apps Development</h5>
                <p  className="text-slate-800 ">
                  Every business aims to increase their audience base, brand
                  popularity, sales, and revenue generation. A mobile
                  application is capable of doing all these and helps businesses
                  find multiple growth opportunities and generate hefty
                  revenues.
                </p>
              </motion.div>

              {/* Service 5  */}
              <motion.div
                 className=" flex  flex-col gap-2 p-4 grow justify-evenly items-center h-[18rem] w-[4rem] text-center bg-[#ffeeec] rounded-lg "
                variants={sections}
                animate={sectionAnimation} // Use the animation controls
                whileHover={{
                  scale: 1.05,
                  y: -25.2,
                  boxShadow: "0px 0px 21px 5px rgba(255,255,255,0.89)",
                }}
                // Hover effect
                initial="hidden"
                ref={sectionRef}
              >
                {" "}
                <div  className="h-24 w-24 p-1 bg-yellow-400 flex rounded-lg justify-center items-center ">
                  <img
                    src="https://www.thearchertechnology.com/public/frontend/img/software.png"
                    alt="Software Development"
                     className=" "
                  />
                </div>
                <h5  className="  text-2xl font-bold   ">Software Development</h5>
                <p  className="text-center text-slate-800">
                  Software is very important for businesses as it helps them
                  distinguish from competitors and become more competitive.
                  Software developed at Archer Technology can improve the
                  client’s experiences, bring more feature-rich and innovative
                  products to market, and make more safe, productive, and
                  efficient.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA  */}

      <section id="cta"  className="cta">
        <div  className="container aos-init aos-animate" data-aos="zoom-in">
            <div  className="text-center">
                <h3>why choose us?</h3>
                <p claa="">
            
                Our well crafted Web design and development teams analyze and understand 
                each project requirement in-depth to bring high performing solutions that 
                are truly unique to your business challenges and accelerate your business 
                toward success.
                </p>
                <a  className="cta-btn" href="#">Call To Action</a>
            </div>
        </div>
    </section>


    </div>
  );
};

export default Home;
