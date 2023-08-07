import React from "react";
import { IoLogoFacebook } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io";
import { IoLogoTwitter } from "react-icons/io";
import { IoLogoInstagram } from "react-icons/io";
import logo  from "../../assets/logoArch.png"

const Footer = () => {
  return (
    <div>
      <footer className="bg-[#0e1629] md:p-1 p-3">
        <div className="flex flex-col md:flex-row justify-around py-8 md:py-14">
          <div className="flex flex-col mt-6 mb-8 md:mt-14 md:mb-0">
            <img
              src={logo}
              className=" text-white w-24 h-24 mt-[-30px] text-lg md:text-2xl font-bold"
            />{" "}
            <p className="text-white mt-6">
              F-15, 1st Floor, Angel Lords Hotel, Old
              <br />
              Marketing Yard, Amreli, Gujarat, India,
              <br />
              365601
            </p>
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
              <IoLogoTwitter className="text-xl md:text-2xl text-white mr-2 inline" />
              Home
            </p>
            <p className="text-white mt-4 hover:text-yellow-400 cursor-pointer">
              <IoLogoFacebook className="text-xl md:text-2xl text-white mr-2 inline" />
              About Us
            </p>
            <p className="text-white mt-4 hover:text-yellow-400 cursor-pointer">
              <IoLogoInstagram className="text-xl md:text-2xl text-white mr-2 inline" />
              Our Team
            </p>
            <p className="text-white mt-4 hover:text-yellow-400 cursor-pointer">
              <IoLogoLinkedin className="text-xl md:text-2xl text-white mr-2 inline" />
              Contact Us
            </p>
            <p className="text-white mt-4 hover:text-yellow-400 cursor-pointer">
              <IoLogoTwitter className="text-xl md:text-2xl text-white mr-2 inline" />
              Career
            </p>
          </div>

          <div className="flex flex-col mt-6 mb-8 md:mt-14 md:mb-0">
            <h1 className="text-white text-lg md:text-2xl font-bold">
              Our Services
            </h1>
            <p className="text-white mt-4 hover:text-yellow-400 cursor-pointer">
              <IoLogoFacebook className="text-xl md:text-2xl text-white mr-2 inline" />
              Web Development
            </p>
            <p className="text-white mt-4 hover:text-yellow-400 cursor-pointer">
              <IoLogoInstagram className="text-xl md:text-2xl text-white mr-2 inline" />
              App Development
            </p>
            <p className="text-white mt-4 hover:text-yellow-400 cursor-pointer">
              <IoLogoLinkedin className="text-xl md:text-2xl text-white mr-2 inline" />
              Software Development
            </p>
            <p className="text-white mt-4 hover:text-yellow-400 cursor-pointer">
              <IoLogoTwitter className="text-xl md:text-2xl text-white mr-2 inline" />
              Digital Marketing
            </p>
            <p className="text-white mt-4 hover:text-yellow-400 cursor-pointer">
              <IoLogoInstagram className="text-xl md:text-2xl text-white mr-2 inline" />
              Graphic Designing
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
