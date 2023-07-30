import React from "react";
import { BiLogoTwitter } from "react-icons/bi";
import { BsFacebook } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { motion } from "framer-motion";

const Team = () => {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { y: 80, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const header = {
    hidden:{y:-80},
    visible:{
      y:0,
      transition:{
        duration:1
      }
    }
  }

  return (
    <section
      id="team"
      className="team  md:pt-28 p-5 pt-28 text-white md:px-10 md:pb-14"
    >
      <motion.div className="container flex flex-col gap-8 justify-center "
      variants={header}
      animate="visible"
      initial="hidden"
      >
        <div className="section-title">
          <h2 className="text-md xl:text-lg font-bold text-slate-300 uppercase">
            Team
          </h2>
          <p className="text-xl xl:text-3xl uppercase font-bold tracking-widest">
            Check our Team
          </p>
        </div>

        <motion.div
          className=" flex flex-col flex-wrap md:flex-row justify-center md:justify-start items-center md:items-start gap-5"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {/* Member 1 */}
          <motion.div
            className="memberflex flex-col justify-center  "
            variants={item}
          >
            <div className="member-img  overflow-y-hidden rounded-t-lg w-[250px] md:w-[300px] h-[300px] relative">
              <img
                src="https://www.thearchertechnology.com/public/Images/sanjaysinh.jpeg"
                className="img-fluid  rounded-sm h-full w-full"
                alt=""
              />
              <div className="social text-black text-3xl absolute w-full ">
                <BiLogoTwitter className="bg-slate-300 shadow-sm shadow-black hover:bg-yellow-400 p-1 text-gray-700 rounded-md" />
                <BsFacebook className="bg-slate-300 shadow-sm shadow-black hover:bg-yellow-400 p-1 text-gray-700 rounded-md" />
                <AiOutlineInstagram className="bg-slate-300 shadow-sm shadow-black hover:bg-yellow-400 p-1 text-gray-700 rounded-md" />
                <AiFillLinkedin className="bg-slate-300 shadow-sm shadow-black hover:bg-yellow-400 p-1 text-gray-700 rounded-md" />
              </div>
            </div>
            <div className="member-info bg-slate-300 text-black py-4 px-2 rounded-b-sm">
              <h4 className="text-md font-semibold font-mono">
                Sanjaysinh Rathod
              </h4>
              <span className="text-sm text-gray-800">Founder & CEO</span>
            </div>
          </motion.div>

          {/* Member 2 */}
          <motion.div
            className="memberflex flex-col justify-center  "
            variants={item}
          >
            <div className="member-img  overflow-y-hidden rounded-t-lg w-[250px] md:w-[300px] h-[300px] relative">
              <img
                src="https://www.thearchertechnology.com/public/Images/prakash (2).jpg"
                className="img-fluid  rounded-sm h-full w-full"
                alt=""
              />
              <div className="social text-black text-3xl absolute w-full">
                <BiLogoTwitter className="bg-slate-300 shadow-sm shadow-black hover:bg-yellow-400 p-1 text-gray-700 rounded-md" />
                <BsFacebook className="bg-slate-300 shadow-sm shadow-black hover:bg-yellow-400 p-1 text-gray-700 rounded-md" />
                <AiOutlineInstagram className="bg-slate-300 shadow-sm shadow-black hover:bg-yellow-400 p-1 text-gray-700 rounded-md" />
                <AiFillLinkedin className="bg-slate-300 shadow-sm shadow-black hover:bg-yellow-400 p-1 text-gray-700 rounded-md" />
              </div>
            </div>
            <div className="member-info bg-slate-300 text-black py-4 px-2 rounded-b-sm">
              <h4 className="text-md font-semibold font-mono">
                Prakash Chauhan
              </h4>
              <span className="text-sm text-gray-800">Co-Founder</span>
            </div>
          </motion.div>

          {/* Member 3 */}
          <motion.div
            className="memberflex flex-col justify-center  "
            variants={item}
          >
            <div className="member-img  overflow-y-hidden  rounded-t-lg w-[250px] md:w-[300px] h-[300px] relative">
              <img
                src="https://www.thearchertechnology.com/public/Images/bhgvanbhaib (2).jpg"
                className="img-fluid  rounded-sm h-full w-full"
                alt=""
              />
              <motion.div className="social text-black text-3xl absolute w-full">
                <BiLogoTwitter className="bg-slate-300 shadow-sm shadow-black hover:bg-yellow-400 p-1 text-gray-700 rounded-md" />
                <BsFacebook className="bg-slate-300 shadow-sm shadow-black hover:bg-yellow-400 p-1 text-gray-700 rounded-md" />
                <AiOutlineInstagram className="bg-slate-300 shadow-sm shadow-black hover:bg-yellow-400 p-1 text-gray-700 rounded-md" />
                <AiFillLinkedin className="bg-slate-300 shadow-sm shadow-black hover:bg-yellow-400 p-1 text-gray-700 rounded-md" />
              </motion.div>
            </div>
            <div className="member-info bg-slate-300 text-black py-4 px-2 rounded-b-sm">
              <h4 className="text-md font-semibold font-mono">
                Bhagvanbhai Bhil
              </h4>
              <span className="text-sm text-gray-800">Business Advisor</span>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Team;

<section className="">
  <div>This is About Section</div>
  <div className="mx-20 max-h-full">
    <div className="mt-20 flex items-center">
      <h1 className="text-white text-xl font-medium">TEAM</h1>
      <hr className="border-1 border-amber-500  drop-shadow-xl w-48 ml-3"></hr>
    </div>
    <h1 className="text-4xl font-bold flex text-white ">CHECK OUR TEAM</h1>
    <div className="flex mt-16 w-full ">
      <div className="flex flex-col w-1/3 ">
        <img
          src="https://www.thearchertechnology.com/public/Images/sanjaysinh.jpeg"
          alt="loading"
          className="max-w-[70%] h-auto rounded-t-lg drop-shadow-lg opacity-75"
        />
        <h1 className="text-xl font-medium flex text-black bg-white max-w-[70%] h-auto pt-5 pl-2 drop-shadow-lg">
          Sanjaysinh Rathod
        </h1>
        <h3 className=" font-medium flex text-slate-400  bg-white max-w-[70%] h-auto rounded-b-lg  pb-2 pl-2 mb-20 drop-shadow-lg">
          Founder & CEO
        </h3>
      </div>
      <div className="flex flex-col w-1/3 ">
        <img
          src="https://www.thearchertechnology.com/public/Images/prakash%20(2).jpg"
          alt="loading"
          className="max-w-[70%] h-auto rounded-t-lg drop-shadow-lg opacity-75"
        />
        <h1 className="text-xl font-medium flex text-black bg-white max-w-[70%] h-auto pt-5 pl-2 drop-shadow-lg">
          Prakash Chauhan
        </h1>
        <h3 className=" font-medium flex text-slate-400  bg-white max-w-[70%] h-auto rounded-b-lg  pb-2 pl-2 mb-20 drop-shadow-lg">
          Co-Founder
        </h3>
      </div>
      <div className="flex flex-col w-1/3 ">
        <img
          src="	https://www.thearchertechnology.com/public/Images/bhgvanbhaib%20(2).jpg"
          alt="loading"
          className="max-w-[70%] h-auto rounded-t-lg drop-shadow-lg opacity-75"
        />
        <h1 className="text-xl font-medium flex text-black bg-white max-w-[70%] h-auto pt-5 pl-2 drop-shadow-lg">
          Bhagvanbhai Bhil
        </h1>
        <h3 className=" font-medium flex text-slate-400  bg-white max-w-[70%] h-auto rounded-b-lg  pb-2 pl-2 mb-20 drop-shadow-lg">
          Business Advisor
        </h3>
      </div>
    </div>
  </div>
</section>;
