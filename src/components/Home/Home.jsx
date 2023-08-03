import React from "react";
import Hero from "./Hero";
import HomeAbout from "./HomeAbout";
import Features from "./Features";
import Services from "./Services";
import CTA from "./CTA";
import HomeContact from "./HomeContact";

const Home = () => {
 
  return (
    <div className=" overflow-x-hidden ">


      {/* main Part with image */}
      <Hero />

      {/* ABout */}

      <HomeAbout />

      {/* Features */}
      <Features />

      {/* SERVICES */}
      <Services />

      {/* CTA  */}
      <CTA />

      {/* contact us */}
      <HomeContact />
    </div>
  );
};

export default Home;
