import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const NavBar = () => {
  const [selectedItem, setSelectItem] = useState(0);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Add a scroll event listener and update the "scrolling" state
      if (window.scrollY > 0) {
        setScrolling(true); // If scrolling down, set the "scrolling" state to true
      } else {
        setScrolling(false); // If at the top, set the "scrolling" state to false
      }
    };

    // Add the scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);  
  return (
    <div className={`fixed w-full ${scrolling ? 'bg-[#0e1629] py-4' : 'bg-transparent'} `}>
      <nav className={`flex  w-full  justify-between items-center h-[4rem] px-24  ${scrolling ? 'bg-[#0e1629] py-4' : 'bg-transparent'} py-41`}>
        <div className="logo text-white">Logo</div>
        <div className={`navLinks w-96 flex justify-between text-white`}>
    
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



