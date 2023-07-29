import React, { useEffect, useState } from "react";
import { BiCubeAlt } from "react-icons/bi";
import { PiScrollDuotone } from "react-icons/pi";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { CiLocationOn } from "react-icons/ci";
import { TfiEmail } from "react-icons/tfi";
import { BsPhone } from "react-icons/bs";

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
    <div className=" overflow-x-hidden ">
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

      <section id="services" className="services text-white p-24">
        <div className="container ">
          <div className="section-title mb-12">
            <h2 className="text-xl font-bold text-slate-300">Services</h2>
            <p className="text-4xl font-serif font-bold my-5">
              Check our Services
            </p>
          </div>
          <div className="flex flex-col">
            <div className="flex justify-center items-center p-8 gap-14 ">
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
                <div className=" h-24 w-24 p-1 flex items-center rounded-lg  justify-center bg-yellow-400 ">
                  <img
                    src="	https://www.thearchertechnology.com/public/frontend/img/server.png"
                    alt="Web Development"
                    className="   "
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <h5 className="  text-2xl font-bold  ">Web Development</h5>
                  <p className="text-slate-800">
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
                <div className=" h-24 w-24 p-1 flex items-center rounded-lg  justify-center bg-yellow-400 ">
                  <img
                    src="	https://www.thearchertechnology.com/public/frontend/img/digital-marketing.png"
                    alt="Digital Marketing"
                    className="   "
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <h5 className=" text-2xl font-bold   ">Digital Marketing</h5>
                  <p className="text-slate-800 ">
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
                <div className=" h-24 w-24 p-1 flex rounded-lg  items-center justify-center bg-yellow-400 ">
                  <img
                    src="https://www.thearchertechnology.com/public/frontend/img/graphics.png"
                    alt="Graphics Design"
                    className="   "
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <h5 className="  text-2xl font-bold  ">Graphics Design</h5>
                  <p className="text-slate-800 ">
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
                <div className="h-24 w-24 p-1 bg-yellow-400 flex rounded-lg justify-center items-center ">
                  <img
                    src="	https://www.thearchertechnology.com/public/frontend/img/mobile%20(1).png"
                    alt="Mobile Apps Development"
                    className=" "
                  />
                </div>
                <h5 className="   text-2xl font-bold  ">
                  Mobile Apps Development
                </h5>
                <p className="text-slate-800 ">
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
                <div className="h-24 w-24 p-1 bg-yellow-400 flex rounded-lg justify-center items-center ">
                  <img
                    src="https://www.thearchertechnology.com/public/frontend/img/software.png"
                    alt="Software Development"
                    className=" "
                  />
                </div>
                <h5 className="  text-2xl font-bold   ">
                  Software Development
                </h5>
                <p className="text-center text-slate-800">
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

      <section id="cta" className="cta px-24 py-12 ">
        <div className="text-white">
          <div className="text-center ">
            <h3 className="text-4xl font-bold font-[Raleway]">
              why choose us ?
            </h3>
            <p className="my-4 mb-8">
              Our well crafted Web design and development teams analyze and
              understand each project requirement in-depth to bring high
              performing solutions that are truly unique to your business
              challenges and accelerate your business toward success.
            </p>
            <a
              className="cta-btn font-semibold text-xl border-2 py-2 px-6 border-white rounded-md hover:border-0 hover:text-black hover:bg-[#ffc451]"
              href="#"
            >
              Call To Action
            </a>
          </div>
        </div>
      </section>

      {/* contact us */}

      <section id="contact" className="contact text-white p-24">
        <div className="container flex flex-col justify-center gap-6">
          <div className="section-title flex flex-col gap-4 mb-4">
            <h2 className="text-md font-bold text-slate-300 uppercase">
              Contact
            </h2>
            <p className="text-3xl uppercase font-bold tracking-widest">
              Contact Us
            </p>
          </div>

          <div className="">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7419.02598295401!2d71.2269608977129!3d21.6049250781877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395880c5a8ae72db%3A0x3367f8679c1c86eb!2sAngel%20Lords%20Eco%20Inn%20Amreli!5e0!3m2!1sen!2sin!4v1670677249636!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="grid grid-cols-12  gap-6 mt-6 ">
            <div className="info col-span-4 md:h-[200px] h-auto flex flex-col justify-between gap-7">
              <div className="address flex items-center gap-4 ">
                <div className="bg-yellow-400 px-3 py-1 rounded-md mt-[-40px]">
                  <CiLocationOn className=" text-black    h-8 w-4" />
                </div>
                <div>
                  <h4 className=" text-2xl font-[raleway] font-medium text-gray-200 ">
                    Location:
                  </h4>
                  <p className="text-sm tracking-widest text-gray-300 mt-2">
                    F-15, 1st Floor, Angel Lords Hotel, Old Marketing Yard,
                    Amreli, Gujarat, India, 365601
                  </p>
                </div>
              </div>

              <div className="email flex items-center gap-4 ">
                <div className="bg-yellow-400 px-3 py-1 rounded-md">
                  <BsPhone className=" text-black   h-8  w-4" />
                </div>
                <div>
                  <h4 className=" text-2xl font-[raleway] font-medium text-gray-200 ">
                    Email:
                  </h4>
                  <p className="text-sm tracking-widest text-gray-300 mt-2">
                    info@thearchertechnology.com
                  </p>
                </div>
              </div>

              <div className="phone flex items-center gap-4 ">
                <div className="bg-yellow-400 px-3 py-1 rounded-md">
                  <TfiEmail className=" text-black    h-8 w-4" />
                </div>
                <div>
                  <h4 className=" text-2xl font-[raleway] font-medium text-gray-200 ">
                    Call:
                  </h4>
                  <p className="text-sm tracking-widest text-gray-300 mt-2">
                    +918849993525
                  </p>
                </div>
              </div>
            </div>

            <div className="col-span-8">
              <form
                id="contactform"
                role="form"
                className="php-email-form flex flex-col gap-5"
                noValidate="novalidate"
              >
                <div className="flex gap-5">
                  <div className="form-group w-full">
                    <input
                      type="text"
                      name="fullname"
                      className="form-control w-full p-2 rounded-md border-2 border-blue-400  focus:border-bg-400 focus:outline-blue-500"
                      id="name"
                      placeholder="Your Name"
                      required=""
                      aria-invalid="true"
                    />
                    {/* <label
                      id="name-error"
                      className="error text-red-500 text-sm"
                      htmlFor="name"
                    >
                      Name is required
                    </label> */}
                  </div>
                  <div className="form-group w-full">
                    <input
                      type="email"
                      className="form-control w-full p-2 rounded-md border-2 border-blue-400  focus:border-bg-400 focus:outline-blue-500"
                      name="email"
                      id="email"
                      placeholder="Your Email"
                      required=""
                      style={{
                        backgroundImage: "url('data:image/png;base64,...')",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "20px",
                        backgroundPosition: "97% center",
                        cursor: "auto",
                      }}
                      aria-invalid="false"
                    />
                  </div>
                </div>
                <div className="form-group w-full">
                  <input
                    type="text"
                    className="form-control w-full  p-2 rounded-md border-2 border-blue-400  focus:border-bg-400 focus:outline-blue-500"
                    name="mobile"
                    id="mobile"
                    placeholder="Your Mobile"
                    required=""
                  />
                </div>
                <div className="form-group w-full">
                  <textarea
                    className="form-control  w-full  p-2 rounded-md border-2 border-blue-400  focus:border-bg-400 focus:outline-blue-500"
                    name="msg"
                    rows="5"
                    placeholder="Your Ideas/Message"
                    required=""
                  ></textarea>
                </div>

                <div className="sent-message mt-3" id="notidiv"></div>
                <div className="text-center mt-4">
                  <button
                    id="save"
                    className="btn bg-yellow-500 hover:bg-yellow-400 px-3 py-2 rounded-md text-black"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
