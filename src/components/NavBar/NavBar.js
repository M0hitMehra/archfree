import React from "react";
import { motion } from "framer-motion";
const NavBar = () => {
  return (
    <div>
      <nav className="bg-blue-500 py-4">
        <div className="container mx-auto">
          <motion.div
            className="flex items-center justify-between"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-white font-bold text-xl">Logo</div>
            <ul className="flex space-x-4">
              <motion.li whileHover={{ scale: 1.1 }} className="text-white">
                <a href="/">Home</a>
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }} className="text-white">
                <a href="/about">About</a>
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }} className="text-white">
                <a href="#">Contact</a>
              </motion.li>
            </ul>
          </motion.div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
