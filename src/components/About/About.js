import React from "react";
import "../../styles/About.css";
const About = () => {
  return (
    <div className="mx-20">
      <h2
        style={{
          color: "#aaaaaa",
          fontSize: "14px",
          fontWeight: "500",
          display: "flex",
          alignItems: "center",
          letterSpacing: "2px",
        }}
      >
        ABOUT US{" "}
        <div
          style={{
            background: "#ffc107",
            height: "1px ",
            width: "10vw",
            display: "inline-block",
            marginLeft: "10px",
          }}
        ></div>
      </h2>
      <div className="row_About ">
        <div className="About_text">
          <h3 className="heading">ABOUT TO ARCHER</h3>
          <p className="content">
            The Archer Technology is leading software development company in
            India that offers innovative and creative software solutions for
            small enterprises to large organization for their digital
            transformation and deliver accelerated business growth. We work with
            Customers to turn them into most successful high performance
            Organizations.
          </p>
          <p className="content">
            We have team Of developers that have years of experience and
            expertise to develop high performing solutions and produce the
            desired solution for your business.
          </p>
          <p className="content">
            Archer Technology offering services on Web Development, App
            Development, ERP & CRM, Graphics Designing, Digital marketing and
            Web Hosting.
          </p>
          <p className="content">
            The high quality output of our services and solutions makes us
            inspired and committed to produce better and better solutions for
            our customers. Our main aim is customer satisfaction. customer comes
            first in our business which makes us client oriented company.
          </p>
        </div>
        <div className="About_image">
          <img
            src="https://www.thearchertechnology.com/public/Images/shutterstock_446870920%20(1).webp"
            alt="react logo"
            className="image-fluid"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
