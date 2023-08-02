import React  from "react";
 
import { motion, useAnimation } from "framer-motion";
 
const Hero = () => {
    const containerVariants = {
        hidden: { y: "100rem" },
        visible: {
          y: 0,
          transition: {
            duration: 1,
            // repeat: Infinity, // Set to loop indefinitely
            repeatType: "reverse", // Reverse the animation when it repeats
          },
        },
      };
  return (
    <section id="hero" className="flex items-center justify-center">
        <div className="p-4">
          <div className="flex justify-center">
            <div className="col-xl-6 col-lg-8">
              <motion.div
                className="text-white text-2xl xl:text-4xl text-center font-bold"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                WELCOME TO ARCHER TECHNOLOGY
                <span className="text-[#ffc451]">.</span>
              </motion.div>
              <motion.h2
                className="text-white text-center text-lg xl:text-xl mt-4"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.5 }}
              >
                We are a team of talented Developers
              </motion.h2>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Hero