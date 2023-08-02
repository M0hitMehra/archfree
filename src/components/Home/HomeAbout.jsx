import React  from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
 
const HomeAbout = () => {
    
  // for ABour
  const leftColumnVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  const rightColumnVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  const [leftColumnRef, leftColumnInView] = useInView({
    triggerOnce: true,
    threshold: 0.2, // Adjust this threshold value to determine when the animation should start
  });

  const [rightColumnRef, rightColumnInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const leftColumnAnimation = leftColumnInView ? "visible" : "hidden";
  const rightColumnAnimation = rightColumnInView ? "visible" : "hidden";

  return (
    <section id="about" className="about mt-8 p-2 xl:p-24">
        <div className="text-white p-4">
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-4 xl:gap-24">
            <motion.div
              className=" col-span-6"
              variants={leftColumnVariants}
              initial="hidden"
              animate={leftColumnAnimation} // Use the determined animation
              ref={leftColumnRef} // Attach the ref to the element
            >
              <h3 className="font-bold text-2xl xl:text-4xl text-slate-400">
                ABOUT TO ARCHER
              </h3>
              <p className="font-semibold text-md xl:text-xl mt-4 text-slate-200">
                The Archer Technology is a leading software development company
                in India that offers innovative and creative software solutions
                for small enterprises to large organizations for their digital
                transformation and deliver accelerated business growth. We work
                with customers to turn them into the most successful
                high-performance organizations.
              </p>
            </motion.div>

            <motion.div
              className=" col-span-6 flex justify-center"
              variants={rightColumnVariants}
              initial="hidden"
              animate={rightColumnAnimation} // Use the determined animation
              ref={rightColumnRef} // Attach the ref to the element
            >
              <img
                src="https://www.thearchertechnology.com/public/frontend/img/about.webp"
                className="max-w-full h-auto"
                alt=""
              />
            </motion.div>
          </div>
        </div>
      </section>
  )
}

export default HomeAbout