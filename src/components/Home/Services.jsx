import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Modal from "./Modal/Modal";
import { Link } from "react-router-dom";
import { RiMailSendLine } from "react-icons/ri";
import { MdClose } from "react-icons/md";
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

  const arr = [
    {
      image:
        "https://www.thearchertechnology.com/public/frontend/img/server.png",
      title: "Graphic Design",
      content: `In graphic design services, our website aims to elevate your brand's visual identity and engage your audience. We offer a wide range of creative solutions, including website design, social media graphics, banner ads, infographics, and more. Our team of skilled designers combines aesthetics with functionality to create visually stunning and user-friendly designs that enhance your online presence. We focus on maintaining brand consistency across all platforms, ensuring that your message stands out and leaves a lasting impression. Whether you need eye-catching visuals for social media campaigns or a website that captivates visitors, our graphic design services are tailored to meet your digital marketing needs and drive meaningful interactions with your audience.
    We, the Securehires, are skilled in providing unique and classic graphic design ideas that engage customers.
    `,
    },
    {
      image:
        "https://www.thearchertechnology.com/public/frontend/img/digital-marketing.png",
      title: "Digital Marketing",
      content: `In digital marketing, our websites are tailored to help businesses establish a strong online presence and maximize their digital reach. We offer a comprehensive range of services, including search engine optimization (SEO) to improve website visibility on search engines, social media marketing to engage and expand the audience, content marketing to create valuable and shareable content, pay-per-click (PPC) advertising for targeted campaigns, email marketing to nurture leads and build customer loyalty, and web analytics to track and analyze website performance. With our data-driven strategies, innovative approaches, and industry expertise, we empower businesses to achieve their digital marketing goals, drive qualified traffic, and ultimately, boost conversions and revenue in the competitive digital landscape.`,
    },
    {
      image:
        "https://www.thearchertechnology.com/public/frontend/img/graphics.png",
      title: "Recruitment",
      content: `In Recruitment, we provide a seamless platform for employers and job seekers in the dynamic digital marketing industry. Employers can easily post job listings, specifying job requirements and responsibilities. Our advanced search and matching system enable employers to find qualified candidates quickly based on specific criteria, such as skills, location, and experience. We offer resume review and screening services to help employers identify top candidates efficiently. Job seekers can create profiles, upload resumes, and browse through relevant job listings. We also provide resources and guidance to support job seekers in their career development. With a focus on employer branding, we help companies showcase their culture and attract top talent. Our website also offers analytics and insights to employers to optimize their recruitment strategies. Through partnerships with educational institutions, we connect employers with fresh talent and internship opportunities. With a mobile-friendly platform and social media integration, our recruitment services ensure a seamless and effective experience for both employers and job seekers in the digital marketing field.`,
    },
    {
      image:
        "https://www.thearchertechnology.com/public/frontend/img/mobile%20(1).png",
      title: "Content Writing",
      content: `In content writing services, our website offers a comprehensive solution to boost your online presence. We provide engaging and SEO-optimized content, including blog posts, articles, website copy, social media content, and more. Our expert writer team is knowledgeable with the modern trends in digital marketing and creates captivating content that speaks to your intended audience. With a focus on driving traffic, enhancing brand authority, and increasing conversions, our content is tailored to meet your specific marketing objectives. Whether you need captivating storytelling, informative guides, or persuasive copy, we deliver content that not only attracts but also retains and converts visitors, ensuring your digital marketing efforts yield the desired results.
    `,
    },
    {
      image:
        "https://www.thearchertechnology.com/public/frontend/img/software.png",
      title: "Software Development",
      content: ` Software is very important for businesses as it helps them
    distinguish from competitors and become more competitive.
    Software developed at Archer Technology can improve the client’s
    experiences, bring more feature-rich and innovative products to
    market, and make more safe, productive, and efficient.`,
    },
  ];

  return (
    <section
      id="services"
      className="services text-white xl:p-24 md:p-7 px-2 pt-4 "
    >
      {modalOpen && (
        <Modal isOpen={modalOpen} onClose={handleCloseModal}>
          <div className="flex flex-col justify-between md:gap-2 xl:gap-6 px-2 md:px-10 py-2">
            <div className="flex flex-col justify-center items-center gap-2 md:gap-5">
              <img
                src={data.image}
                alt=""
                className="md:h-24 md:w-24 w-16 h-16 bg-yellow-400 p-4 rounded-lg hover:bg-yellow-300"
              />
              <h1 className="text-black text-2xl font-semibold">
                {data.heading}
              </h1>
            </div>
            <div className="flex flex-col  gap-2  xl:gap-4">
              <div className="text-slate-700 font-serif leading-[18px] tracking-wide xl:tracking-wide md:tracking-normal md:leading-8 text-sm xl:leading-10 xl:text-xl">
                {data.content}
              </div>
              <div className="flex gap-10 justify-around border-t-2 pt-4 border-black">
                <Link
                  to={"/contact"}
                  className="flex items-center gap-2 justify-center bg-blue-600 md:px-6 md:py-2 px-2 py-1 text-xl rounded-lg hover:bg-blue-400"
                >
                  Contact Us <RiMailSendLine />
                </Link>
                <button
                  onClick={handleCloseModal}
                  className="flex items-center gap-2 justify-center bg-red-500 md:px-6 md:py-2 px-2 py-1 text-xl rounded-lg hover:bg-red-400"
                >
                  Close <MdClose />
                </button>
              </div>
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
                handleOpenModal(arr[0].image, arr[0].title, arr[0].content)
              }
            >
              <div className=" h-24 w-24 p-1 flex items-center rounded-lg  justify-center bg-yellow-400 ">
                <img src={arr[0].image} alt="Web Development" className="   " />
              </div>
              <div className="flex flex-col gap-4">
                <h5 className="  text-2xl font-bold  ">{arr[0].title}</h5>
                <p className="text-slate-800">
                  {arr[0].content.slice(0, 200)}...
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
                handleOpenModal(arr[1].image, arr[1].title, arr[1].content)
              }
            >
              <div className=" h-24 w-24 p-1 flex items-center rounded-lg  justify-center bg-yellow-400 ">
                <img
                  src={arr[1].image}
                  alt="Digital Marketing"
                  className="   "
                />
              </div>
              <div className="flex flex-col gap-4">
                <h5 className=" text-2xl font-bold   ">{arr[1].title}</h5>
                <p className="text-slate-800 ">
                  {arr[1].content.slice(0, 200)}...
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
                handleOpenModal(arr[2].image, arr[2].title, arr[2].content)
              }
            >
              <div className=" h-24 w-24 p-1 flex rounded-lg  items-center justify-center bg-yellow-400 ">
                <img src={arr[2].image} alt="Graphics Design" className="   " />
              </div>
              <div className="flex flex-col gap-4">
                <h5 className="  text-2xl font-bold  ">{arr[2].title}</h5>
                <p className="text-slate-800 ">
                  {arr[2].content.slice(0, 200)}...
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
                handleOpenModal(arr[3].image, arr[3].title, arr[3].content)
              }
            >
              <div className="h-24 w-24 p-1 bg-yellow-400 flex rounded-lg justify-center items-center ">
                <img
                  src={arr[3].image}
                  alt="Mobile Apps Development"
                  className=" "
                />
              </div>
              <h5 className="   text-2xl font-bold  ">{arr[3].title}</h5>
              <p className="text-slate-800 ">
                {arr[3].content.slice(0, 200)}...
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
                handleOpenModal(arr[4].image, arr[4].title, arr[4].content)
              }
            >
              {" "}
              <div className="h-24 w-24 p-1 bg-yellow-400 flex rounded-lg justify-center items-center ">
                <img
                  src={arr[4].image}
                  alt="Software Development"
                  className=" "
                />
              </div>
              <h5 className="  text-2xl font-bold   ">{arr[4].title}</h5>
              <p className="text-center text-slate-800">
                {arr[4].content.slice(0, 200)}...
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
