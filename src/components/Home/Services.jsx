import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Modal from "./Modal/Modal";

const Services = () => {
  // Services
  const sections1 = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,

      transition: {
        duration: 0.7,
        ease: "easeInOut",
      },
    },
  };

  const [sectionRef1, sectionInView1] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const sectionAnimation1 = sectionInView1 ? "visible" : "hidden";

  const sections2 = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,

      transition: {
        duration: 0.7,
        ease: "easeInOut",
      },
    },
  };

  const [sectionRef2, sectionInView2] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const sectionAnimation2 = sectionInView2 ? "visible" : "hidden";

  const sections3 = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,

      transition: {
        duration: 0.7,
        ease: "easeInOut",
      },
    },
  };

  const [sectionRef3, sectionInView3] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const sectionAnimation3 = sectionInView3 ? "visible" : "hidden";

  const sections4 = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,

      transition: {
        duration: 0.7,
        ease: "easeInOut",
      },
    },
  };

  const [sectionRef4, sectionInView4] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const sectionAnimation4 = sectionInView4 ? "visible" : "hidden";

  const sections5 = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,

      transition: {
        duration: 0.7,
        ease: "easeInOut",
      },
    },
  };

  const [sectionRef5, sectionInView5] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const sectionAnimation5 = sectionInView5 ? "visible" : "hidden";

  const [modalOpen, setModalOpen] = useState(false);
  const [data, setData] = useState({
    image: "",
    heading: "",
    content: "",
  });

  const handleOpenModal = (image, heading, content) => {
    setModalOpen(true);
    setData({
      image,
      heading,
      content,
    });
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <section
      id="services"
      className="services text-white xl:p-24 md:p-7 px-2 pt-4 "
    >
      {modalOpen && (
        <Modal isOpen={modalOpen} onClose={handleCloseModal}>
          <div className="flex flex-col justify-between gap-6 p-10">
            <div className="flex flex-col justify-center items-center gap-5">
                <img src={data.image} alt="" className="h-24 w-24 bg-yellow-400 p-4 rounded-lg hover:bg-yellow-300" />
                <h1 className="text-black text-2xl font-semibold">{data.heading}</h1>
            </div>
            <div className="text-slate-700 font-serif tracking-wider leading-10 text-xl">
          {data.content}
            </div>
          </div>
        </Modal>
      )}

      <div className="container ">
        <div className="section-title mb-12">
          <h2 className="text-xl font-bold text-slate-300">Services</h2>
          <p className="text-4xl font-serif font-bold my-5">
            Check our Services
          </p>
        </div>
        <div className="flex flex-col">
          <div className="flex xl:flex-row md:flex-row flex-col justify-center items-center xl:p-8 xl:gap-14 p-2 gap-4 ">
            {/* Service 1  */}
            <motion.div
              className="bg-[#ffeeec] md:p-5  flex flex-col  py-8  text-black justify-evenly items-center gap-2 p-2 xl:p-4  rounded-lg grow  md:h-[30rem] md:w-[8rem]  xl:h-[24rem] xl:w-[4rem] text-center"
              variants={sections1}
              animate={sectionAnimation1} // Use the animation controls
              whileHover={{
                scale: 1.05,
                y: -25.2,
                boxShadow: "0px 0px 21px 5px rgba(255,255,255,0.89)",
              }} // Hover effect
              initial="hidden"
              ref={sectionRef1}
              onClick={() =>
                handleOpenModal(
                  "https://www.thearchertechnology.com/public/frontend/img/server.png",
                  "Web Development",
                  `Your website is the face of your business. The importance of
              having a business website is to have a strong 24/7 online
              presence of your business and all are possible at Archer
              Technology, a leading Web development company.`
                )
              }
            >
              <div className=" h-24 w-24 p-1 flex items-center rounded-lg  justify-center bg-yellow-400 ">
                <img
                  src="https://www.thearchertechnology.com/public/frontend/img/server.png"
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
              className="bg-[#ffeeec]  md:h-[30rem] md:w-[8rem] md:p-5   py-8  flex flex-col text-black justify-evenly items-center  gap-2 p-2 xl:p-4 rounded-lg grow xl:h-[24rem] xl:w-[4rem] text-center"
              variants={sections2}
              animate={sectionAnimation2} // Use the animation controls
              whileHover={{
                scale: 1.05,
                y: -25.2,
                boxShadow: "0px 0px 21px 5px rgba(255,255,255,0.89)",
              }} // Hover effect
              initial="hidden"
              ref={sectionRef2}
              onClick={() =>
                handleOpenModal(
                  "https://www.thearchertechnology.com/public/frontend/img/digital-marketing.png",
                  "Digital Marketing",
                  ` Looking for a Digital Marketing Agency to help you create a
                  strong online presence for your business? With our digital
                  marketing services, you get more bang for your hard-earned
                  buck.`
                )
              }
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
              className="bg-[#ffeeec]  md:h-[30rem] md:w-[8rem] md:p-5 py-8 flex flex-col text-black justify-evenly items-center gap-2 p-2 xl:p-4 rounded-lg grow xl:h-[24rem] xl:w-[4rem] text-center"
              variants={sections3}
              animate={sectionAnimation3} // Use the animation controls
              whileHover={{
                scale: 1.05,
                y: -25.2,
                boxShadow: "0px 0px 21px 5px rgba(255,255,255,0.89)",
              }} // Hover effect
              initial="hidden"
              ref={sectionRef3}
              onClick={() =>
                handleOpenModal(
                  "https://www.thearchertechnology.com/public/frontend/img/graphics.png",
                  "Graphics Design",
                  `Our Graphics designer can enhance any website to convert into
                  the beautiful layout, Mobile app interface, Logo Design and
                  many more.`
                )
              }
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
                  Our Graphics designer can enhance any website to convert into
                  the beautiful layout, Mobile app interface, Logo Design and
                  many more.
                </p>
              </div>
            </motion.div>
          </div>
          {/* another part */}
          <div className=" flex flex-col md:flex-row xl:gap-24 xl:p-8 p-2 gap-4 justify-center items-center text-black">
            {/* Service  4  */}
            <motion.div
              className=" flex  flex-col grow justify-evenly items-center gap-2  py-8   xl:p-4 p-2 xl:h-[18rem] xl:w-[4rem]  md:h-[20rem] md:w-[4rem]  text-center bg-[#ffeeec] rounded-lg "
              variants={sections4}
              animate={sectionAnimation4} // Use the animation controls
              whileHover={{
                scale: 1.05,
                y: -25.2,
                boxShadow: "0px 0px 21px 5px rgba(255,255,255,0.89)",
              }} // Hover effect
              initial="hidden"
              ref={sectionRef4}
              onClick={() =>
                handleOpenModal(
                  "https://www.thearchertechnology.com/public/frontend/img/mobile%20(1).png",
                  "Mobile Apps Development",
                  `Every business aims to increase their audience base, brand
                  popularity, sales, and revenue generation. A mobile application
                  is capable of doing all these and helps businesses find multiple
                  growth opportunities and generate hefty revenues.`
                )
              }
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
                popularity, sales, and revenue generation. A mobile application
                is capable of doing all these and helps businesses find multiple
                growth opportunities and generate hefty revenues.
              </p>
            </motion.div>

            {/* Service 5  */}
            <motion.div
              className=" flex  flex-col grow justify-evenly items-center gap-2  py-8   xl:p-4 p-2 xl:h-[18rem] xl:w-[4rem]  md:h-[20rem] md:w-[4rem]  text-center bg-[#ffeeec] rounded-lg "
              variants={sections5}
              animate={sectionAnimation5} // Use the animation controls
              whileHover={{
                scale: 1.05,
                y: -25.2,
                boxShadow: "0px 0px 21px 5px rgba(255,255,255,0.89)",
              }}
              // Hover effect
              initial="hidden"
              ref={sectionRef5}
              onClick={() =>
                handleOpenModal(
                  "https://www.thearchertechnology.com/public/frontend/img/software.png",
                  "Software Development",
                  ` Software is very important for businesses as it helps them
                  distinguish from competitors and become more competitive.
                  Software developed at Archer Technology can improve the client’s
                  experiences, bring more feature-rich and innovative products to
                  market, and make more safe, productive, and efficient.`
                )
              }
            >
              {" "}
              <div className="h-24 w-24 p-1 bg-yellow-400 flex rounded-lg justify-center items-center ">
                <img
                  src="https://www.thearchertechnology.com/public/frontend/img/software.png"
                  alt="Software Development"
                  className=" "
                />
              </div>
              <h5 className="  text-2xl font-bold   ">Software Development</h5>
              <p className="text-center text-slate-800">
                Software is very important for businesses as it helps them
                distinguish from competitors and become more competitive.
                Software developed at Archer Technology can improve the client’s
                experiences, bring more feature-rich and innovative products to
                market, and make more safe, productive, and efficient.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
