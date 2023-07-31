import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscChromeClose } from "react-icons/vsc";

const NavBar = () => {
  const [selectedItem, setSelectItem] = useState(0);
  const [scrolling, setScrolling] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // Add this state variable

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
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={`navbar fixed z-10 md:w-full w-screen mb-[5rem] ${
        true ? "bg-[#0e1629] h-[5rem]" : "bg-transparent"
      } `}
    >
      <nav className="flex justify-between items-center bg-[#0e1629] h-[4rem] px-4 md:px-24 py-3 md:py-4">
        <div className="logo text-white text-lg md:text-2xl font-bold">
          Logo
        </div>
        <div className="md:hidden">
          {/* Mobile Menu */}
          {menuOpen && (
            <button
              className={`text-white focus:outline-none ${
                menuOpen ? "rotate-90	" : ""
              }`}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <VscChromeClose className="text-white close-HamBurgerIcon text-2xl" />
            </button>
          )}

          {!menuOpen &&
            <button
              className={`text-white focus:outline-none ${
                menuOpen ? "rotate-90	" : ""
              }`}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <GiHamburgerMenu />
            </button>
          }
          <div
            className={`${
              menuOpen ? "block" : "hidden"
            } absolute top-[4rem] left-0 w-full bg-[#0e1629] py-4 md:hidden`}
          >
            {/* Mobile Menu Items */}
            <Link
              className={`block text-white py-2 px-6 ${
                selectedItem === 0 ? "bg-[#ffc451]" : ""
              }`}
              to="/"
              onClick={() => {
                setSelectItem(0);
                setMenuOpen(false);
              }}
            >
              Home
            </Link>
            <Link
              className={`block text-white py-2 px-6 ${
                selectedItem === 1 ? "bg-[#ffc451]" : ""
              }`}
              to="/about"
              onClick={() => {
                setSelectItem(1);
                setMenuOpen(false);
              }}
            >
              About Us
            </Link>
            <Link
              className={`block text-white py-2 px-6 ${
                selectedItem === 2 ? "bg-[#ffc451]" : ""
              }`}
              to="/team"
              onClick={() => {
                setSelectItem(2);
                setMenuOpen(false);
              }}
            >
              Our Team
            </Link>
            <Link
              className={`block text-white py-2 px-6 ${
                selectedItem === 3 ? "bg-[#ffc451]" : ""
              }`}
              to="/career"
              onClick={() => {
                setSelectItem(3);
                setMenuOpen(false);
              }}
            >
              Career
            </Link>
            <Link
              className={`block text-white py-2 px-6 ${
                selectedItem === 4 ? "bg-[#ffc451]" : ""
              }`}
              to="/contact"
              onClick={() => {
                setSelectItem(4);
                setMenuOpen(false);
              }}
            >
              Contact Us
            </Link>
          </div>
        </div>
        <div className="hidden md:flex navLinks justify-between w-96 text-white text-sm">
          {/* Desktop Menu Items */}
          <Link
            className={`link ${selectedItem === 0 ? "active" : ""}`}
            to="/"
            onClick={() => setSelectItem(0)}
          >
            Home
          </Link>
          <Link
            className={`link ${selectedItem === 1 ? "active" : ""}`}
            to="/about"
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
