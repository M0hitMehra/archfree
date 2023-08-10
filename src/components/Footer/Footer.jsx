import React from "react";
import { IoLogoFacebook } from "react-icons/io";

import { IoLogoLinkedin } from "react-icons/io";
import { IoLogoTwitter } from "react-icons/io";
import { IoLogoInstagram } from "react-icons/io";
// import { IoLogoInstagram } from "react-icons/io";
import { IoIosArrowDropright } from "react-icons/io";
import logo  from "../../assets/logoArch.png"

const Footer = () => {
  return (
    <div>
      <footer className="bg-[#0e1629] md:p-1 p-3">
        <div className="flex flex-col md:flex-row justify-around py-8 md:py-14">
          <div className="flex flex-col mt-6 mb-8 md:mt-14 md:mb-0">
            <img
              src={logo}
              className=" text-white w-32 h-32 mt-[-30px] text-lg md:text-2xl font-bold"
            />{" "}
            {/* <p className="text-white mt-6">
              F-15, 1st Floor, Angel Lords Hotel, Old
              <br />
              Marketing Yard, Amreli, Gujarat, India,
              <br />
              365601
            </p> */}
            <p className="text-white mt-4">Phone: +918849993525</p>
            <p className="text-white mt-4">
              Email: info@thearchertechnology.com
            </p>
          </div>

          <div className="flex flex-col mt-6 mb-8 md:mt-14 md:mb-0">
            <h1 className="text-white text-lg md:text-2xl font-bold">
              Quick Links
            </h1>
            <p className="text-white mt-4 hover:text-yellow-400 cursor-pointer">
              <IoIosArrowDropright className="text-xl md:text-2xl text-white mr-2 inline" />
               <a href="/">Home</a>
            </p>
            <p className="text-white mt-4 hover:text-yellow-400 cursor-pointer">
            <IoIosArrowDropright className="text-xl md:text-2xl text-white mr-2 inline" />
            <a href="/about">About Us</a>
            </p>
            <p className="text-white mt-4 hover:text-yellow-400 cursor-pointer">
              <IoIosArrowDropright className="text-xl md:text-2xl text-white mr-2 inline" />
              <a href="/team">Our Team</a>
            </p>
            <p className="text-white mt-4 hover:text-yellow-400 cursor-pointer">
              <IoIosArrowDropright className="text-xl md:text-2xl text-white mr-2 inline" />
             <a href="contact">Contact Us</a> 
            </p>
            <p className="text-white mt-4 hover:text-yellow-400 cursor-pointer">
              <IoIosArrowDropright className="text-xl md:text-2xl text-white mr-2 inline" />
            <a href="career">Career</a>  
             
            </p>
          </div>

          <div className="flex flex-col mt-6 mb-8 md:mt-14 md:mb-0">
            <h1 className="text-white text-lg md:text-2xl font-bold">
              Our Services
            </h1>
            <p className="text-white mt-4 hover:text-yellow-400 cursor-pointer">
              <IoIosArrowDropright className="text-xl md:text-2xl text-white mr-2 inline" />
              <a href="#web_development">Web Development</a> 
            </p>
            <p className="text-white mt-4 hover:text-yellow-400 cursor-pointer">
              <IoIosArrowDropright className="text-xl md:text-2xl text-white mr-2 inline" />
              <a href="#App_development">App Development</a> 
            </p>
            <p className="text-white mt-4 hover:text-yellow-400 cursor-pointer">
              <IoIosArrowDropright className="text-xl md:text-2xl text-white mr-2 inline" />
              <a href="#Software_development">Software Development</a> 
            </p>
            <p className="text-white mt-4 hover:text-yellow-400 cursor-pointer">
              <IoIosArrowDropright className="text-xl md:text-2xl text-white mr-2 inline" />
              <a href="#Digital_Marketing">Digital Marketing</a> 
            </p>
            <p className="text-white mt-4 hover:text-yellow-400 cursor-pointer">
              <IoIosArrowDropright className="text-xl md:text-2xl text-white mr-2 inline" />
              <a href="#Graphic_Designing">Graphic Designing</a> 
            </p>
          </div>

          <div className="flex flex-col mt-6 mb-8 md:mt-14 md:mb-0">
            <h1 className="text-white text-lg md:text-2xl font-bold">
              Social Media
            </h1>
            <div className="flex mt-6">
              <IoLogoTwitter className="text-xl md:text-2xl text-white mr-2 cursor-pointer hover:text-yellow-400" />
              <IoLogoFacebook className="text-xl md:text-2xl text-white mr-2 cursor-pointer hover:text-yellow-400" />
              <IoLogoInstagram className="text-xl md:text-2xl text-white mr-2 cursor-pointer hover:text-yellow-400" />
              <IoLogoLinkedin className="text-xl md:text-2xl text-white mr-2 cursor-pointer hover:text-yellow-400" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
