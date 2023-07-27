import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const NavBar = () => {
 useEffect(() => {
  
 }, [window.location.pathname])
 

  return (
    <div className=" fixed  w-full ">
      <nav className="flex  w-full  justify-between items-center h-[5rem] px-24 bg-[#0e1629] py-4">
        <div className="logo text-white">Logo</div>
        <div className={`navLinks w-96 flex justify-between text-white   `}>
          <Link to={"/"} className={`home hover:text-[#ffc451]  ${window.location.pathname ===  "/" ?  "text-[#ffc451]" : ""  }  `}>Home</Link>
          <Link to={"/about"} className={`about hover:text-[#ffc451]  ${window.location.pathname ===  "/about" ?  "text-[#ffc451]" : ""  }  `}>About Us</Link>
          <Link to={"/team"} className={`team hover:text-[#ffc451]  ${window.location.pathname ===  "/team" ?  "text-[#ffc451]" : ""  }  `}>Our Team</Link>
          <Link to={"/career"} className={`career hover:text-[#ffc451]  ${window.location.pathname ===  "/career" ?  "text-[#ffc451]" : ""  }  `}>Career</Link>
          <Link to={"/contact"} className={`contact hover:text-[#ffc451]  ${window.location.pathname ===  "/contact" ?  "text-[#ffc451]" : ""  }  `}>Contact Us</Link>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
