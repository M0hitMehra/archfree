import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const NavBar = () => {
  const [selectedItem, setSelectItem] = useState(0);

  return (
    <div className=" fixed  w-full ">
      <nav className="flex  w-full  justify-between items-center h-[5rem] px-24 bg-[#0e1629] py-4">
        <div className="logo text-white">Logo</div>
        <div className={`navLinks w-96 flex justify-between text-white`}>
          {/* <Link to={"/"} className={`home hover:text-[#ffc451]`}>Home</Link>
          <Link to={"/about"} className={`about hover:text-[#ffc451]`}>About Us</Link>
          <Link to={"/team"} className={`team hover:text-[#ffc451]`}>Our Team</Link>
          <Link to={"/career"} className={`career hover:text-[#ffc451]`}>Career</Link>
          <Link to={"/contact"} className={`contact hover:text-[#ffc451]`}>Contact Us</Link> */}
          <Link
            className={`link ${selectedItem === 0 ? "active" : ""}`}
            to="/"
            onClick={() => setSelectItem(0)}
          >
            Home
          </Link>
          <Link
            className={`link ${selectedItem === 1 ? "active" : ""}`}
            to={"/about"}
            onClick={() => setSelectItem(1)}
          >
            About Us
          </Link>
          <Link
            className={`link ${selectedItem === 2 ? "active" : ""}`}
            to="/team"
            onClick={() => setSelectItem(2)}
          >
            Our Team
          </Link>
          <Link
            className={`link ${selectedItem === 3 ? "active" : ""}`}
            to="/career"
            onClick={() => setSelectItem(3)}
          >
            Career
          </Link>
          <Link
            className={`link ${selectedItem === 4 ? "active" : ""}`}
            to="/contact"
            onClick={() => setSelectItem(4)}
          >
            Contact Us
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
