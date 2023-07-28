import React from "react";
import { BiCubeAlt } from "react-icons/bi";
import { PiScrollDuotone } from "react-icons/pi";

import "../../styles/About.css";
const About = () => {
  return (
    <section>
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
            <h3 className="text-3xl font-bold  text-white">ABOUT TO ARCHER</h3>
            <p className="text-slate-400  font-medium mt-6">
              The Archer Technology is leading software development company in
              India that offers innovative and creative software solutions for
              small enterprises to large organization for their digital
              transformation and deliver accelerated business growth. We work
              with Customers to turn them into most successful high performance
              Organizations.
            </p>
            <p className="text-slate-400  font-medium mt-6">
              We have team Of developers that have years of experience and
              expertise to develop high performing solutions and produce the
              desired solution for your business.
            </p>
            <p className="text-slate-400  font-medium mt-6">
              Archer Technology offering services on Web Development, App
              Development, ERP & CRM, Graphics Designing, Digital marketing and
              Web Hosting.
            </p>
            <p className="text-slate-400  font-medium mt-6">
              The high quality output of our services and solutions makes us
              inspired and committed to produce better and better solutions for
              our customers. Our main aim is customer satisfaction. customer
              comes first in our business which makes us client oriented
              company.
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

        <div className="flex justify-between mt-20">
          <img
            src="https://www.thearchertechnology.com/public/frontend/img/features.jpg"
            alt="react logo"
            className="img_about"
          />
          <div className="text_about">
            <h1 className="text-3xl font-bold flex text-white">
              <i className="text-4xl text-yellow-400  ">
                <PiScrollDuotone />
              </i>
              Our Mission
            </h1>
            <p className="text-slate-400 text-xl ml-10">
              Every software product that we develop is built with assured
              quality and exhibits excellence in its core aspects.We ensure that
              our clients get what they need to fulfill their aims.
            </p>
            <h1 className="text-3xl font-bold flex text-white mt-10">
              <i className=" ">
                <BiCubeAlt className="text-4xl text-yellow-400" />
              </i>
              Our Vision
            </h1>
            <p className="text-slate-400 text-xl ml-10">
              we analyze your future business challenges and develop creative
              and innovative digital solutions to encounter every problems
              arises in business with easiness for you to enjoy streamlined
              business operations.
            </p>
          </div>
        </div>

        <div className="flex justify-center items-center mt-20 flex-col">
          <h1 className="text-5xl font-bold flex text-white ">
            Our Development Process
          </h1>
          <img
            src="https://www.thearchertechnology.com/public/frontend/img/Software-Process-for-Project-Development.png"
            alt="Loading"
            className="mt-20"
          />
        </div>

        <div className="flex justify-between mt-20">
          <div className="m-3">
            <h1 className="text-2xl font-bold  text-white">
              Specification Requirement
            </h1>
            <p className="text-slate-400  font-medium mt-4">
              This stage is about the research of overall requirements and the
              target audience of the website. This helps plan the best strategy
              for project management.
            </p>
          </div>
          <div className="m-3">
            <h1 className="text-2xl font-bold  text-white">
              Wireframe and Design
            </h1>
            <p className="text-slate-400  font-medium mt-4">
              Next, we Wireframe and design the interface of your app that will
              represent the appearance and user experience of your app to the
              end-user.
            </p>
          </div>
          <div className="m-3">
            <h1 className="text-2xl font-bold  text-white">
              Architecture and Database Design
            </h1>
            <p className="text-slate-400  font-medium mt-4">
              In This stage We design architecture and database, Divides your
              information into subject-based tables to reduce redundant data and
              how database tables interacting each other.
            </p>
          </div>
        </div>
        <div className="flex justify-between mt-6 mb-10">
          <div className="m-3">
            <h1 className="text-2xl font-bold  text-white">Development</h1>
            <p className="text-slate-400  font-medium mt-4">
              This stage is about the research of overall requirements and the
              target audience of the website. This helps plan the best strategy
              for project management.
            </p>
          </div>
          <div className="m-3">
            <h1 className="text-2xl font-bold  text-white">Testing</h1>
            <p className="text-slate-400  font-medium mt-4">
              Next, we Wireframe and design the interface of your app that will
              represent the appearance and user experience of your app to the
              end-user.
            </p>
          </div>
          <div className="m-3">
            <h1 className="text-2xl font-bold  text-white">Deployment</h1>
            <p className="text-slate-400  font-medium mt-4">
              In This stage We design architecture and database, Divides your
              information into subject-based tables to reduce redundant data and
              how database tables interacting each other..
            </p>
          </div>
        </div>
      </div>
      <footer>
        <div className="flex justify-around bg-[#0e1629] ">
          <div className="flex flex-col mt-14 mb-14">
            <h1 className="text-white mt-4">logo</h1>
            <p className="text-white mt-8">
              F-15, 1st Floor, Angel Lords Hotel, Old
              <br />
              Marketing Yard, Amreli, Gujarat, India,
              <br /> 365601
            </p>
            <p className="text-white mt-4">Phone: +918849993525</p>
            <p className="text-white mt-4">
              Email: info@thearchertechnology.com
            </p>
          </div>

          <div className="flex flex-col mt-14 mb-14">
            <h1 className="text-white mt-4">Quick Links</h1>
            <p className="text-white flex  items-center mt-4">
              <svg
                className="w-3 h-2 text-yellow-400 dark:text-white mr-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 8 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
                />
              </svg>
              Home
            </p>
            <p className="text-white flex  items-center mt-4">
              <svg
                className="w-3 h-2 text-yellow-400 dark:text-white mr-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 8 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
                />
              </svg>
              About us
            </p>
            <p className="text-white flex  items-center mt-4">
              <svg
                className="w-3 h-2 text-yellow-400 dark:text-white mr-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 8 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
                />
              </svg>
              Our Team
            </p>
            <p className="text-white flex  items-center mt-4">
              <svg
                className="w-3 h-2 text-yellow-400 dark:text-white mr-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 8 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
                />
              </svg>
              Contact Us
            </p>
            <p className="text-white flex  items-center mt-4">
              <svg
                className="w-3 h-2 text-yellow-400 dark:text-white mr-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 8 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
                />
              </svg>
              Career
            </p>
          </div>
          <div className="flex flex-col mt-14 mb-14">
            <h1 className="text-white mt-4">Our Services</h1>
            <p className="text-white flex  items-center mt-4">
              <svg
                className="w-3 h-2 text-yellow-400 dark:text-white mr-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 8 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
                />
              </svg>
              Web Development
            </p>
            <p className="text-white flex  items-center mt-4">
              <svg
                className="w-3 h-2 text-yellow-400 dark:text-white mr-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 8 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
                />
              </svg>
              App Development
            </p>
            <p className="text-white flex  items-center mt-4">
              <svg
                className="w-3 h-2 text-yellow-400 dark:text-white mr-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 8 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
                />
              </svg>
              Software Development
            </p>
            <p className="text-white flex  items-center mt-4">
              <svg
                className="w-3 h-2 text-yellow-400 dark:text-white mr-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 8 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
                />
              </svg>
              Digital Marketing
            </p>
            <p className="text-white flex  items-center mt-4">
              <svg
                className="w-3 h-2 text-yellow-400 dark:text-white mr-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 8 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
                />
              </svg>
              Graphic Designing
            </p>
          </div>

          <div className="flex flex-col mt-14 mb-14">
            <h1 className="text-white mt-4">Social Media</h1>
            <div className="flex mt-6">
              <div className="text-white ml-2">logo1</div>
              <div className="text-white ml-2">logo2</div>
              <div className="text-white ml-2">logo3</div>
              <div className="text-white ml-2">logo4</div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default About;
