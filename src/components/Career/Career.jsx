import React from "react";
import { useState } from "react";
import "../../styles/About.css";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import { FaSpinner } from "react-icons/fa";
import { motion } from "framer-motion";
import "../../styles/About.css";
function Icon({ id, open }) {
  if (open === 1) {
    let content = document.getElementsByClassName("content");
    for (var i = 0; i < content.length; i++) {
      content[i].style.display = "block";
    }
  } else {
    let content = document.getElementsByClassName("content");
    for (var i = 0; i < content.length; i++) {
      content[i].style.display = "none";
    }
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

const Career = () => {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  const [firstname, setFirstname] = useState();
  const [lastname, setLastname] = useState();
  const [email, setEmail] = useState();
  const [phone_number, setPhone] = useState();
  const [Position, setPosition] = useState();
  const [url, seturl] = useState();

  const [sendClick, setSendClick] = useState(false);

  const applyformHandler = (e) => {
    e.preventDefault();
    setSendClick(true);
    // console.log(sendClick);
    if (!firstname || !lastname || !email || !phone_number || !Position || !url) {
      toast.error("Error, Please fill all the required input", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setSendClick(false);

      return;
    }
    emailjs
      .send(
        "service_pboh51t",
        "template_81q42dl",
        {
          firstname,
          lastname,
          email,
          phone_number,
          Position,
          url,
        },
        "SxjbDez0K89mKZo8r"
      )
      .then(function (response) {
        toast.success("Email sent successfully", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setSendClick(false);
      })
      .catch((err) => {
        setSendClick(false);

        toast.error("Error, Please try again", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
  };

  return (
    <div>
      <section id="career" className="career text-white p-4 md:p-24">
        <div className="container flex flex-col justify-center gap-6">
          <div className="section-title flex flex-col gap-4 mb-4">
            <h2 className="text-md md:text-lg font-bold text-slate-300 uppercase"></h2>
            <p className="text-xl md:text-3xl uppercase font-bold tracking-widest">
              CAREER
            </p>
          </div>
          <div className="flex  carrer_col">
            <div
              className={`blog-post  border-${
                open === 1 ? "2" : "0"
              } accord__conatiner border-gray rounded  max-w-lg  w-full `}
            >
              <Accordion
                open={open === 1}
                icon={<Icon id={1} open={open} />}
                className=" "
              >
                <AccordionHeader
                  onClick={() => handleOpen(1)}
                  className={` accor__header  p-8  border-${
                    open !== 1 ? "2" : "0"
                  } `}
                >
                  <h3 className="text-white text-xl font-medium">
                    Business Development Executive <br />
                    <span className="relative right-16 experience">
                      Experience - 1 to 3
                    </span>
                  </h3>
                </AccordionHeader>
                <AccordionBody
                  className={`p-8  accord__conatiner__body  ${
                    open !== 1 ? "hidden" : "visible"
                  }`}
                >
                  <p className="text-white text-xl font-medium content hidden">
                    Number of vacancies:1
                  </p>
                  <ul className="list-disc mt-2  content hidden">
                    <li className="text-2xl text-slate-400 font-medium">
                      Degree in marketing, business administration, or similar.
                    </li>
                    <li className="text-2xl text-slate-400 font-medium">
                      Extensive sales experience.
                    </li>
                    <li className="text-2xl text-slate-400 font-medium">
                      Intuitive and insightful, particularly regarding human
                      behavior.
                    </li>
                    <li className="text-2xl text-slate-400 font-medium">
                      Ability to generate revenue by identifying pain points and
                      suggesting suitable products or services.
                    </li>
                    <li className="text-2xl text-slate-400 font-medium">
                      Professional yet affable disposition.
                    </li>
                    <li className="text-2xl text-slate-400 font-medium">
                      Neat, well-groomed appearance.
                    </li>
                    <li className="text-2xl text-slate-400 font-medium">
                      Great networking skills.
                    </li>
                    <li className="text-2xl text-slate-400 font-medium">
                      Excellent written and verbal communication.
                    </li>
                    <li className="text-2xl text-slate-400 font-medium">
                      Resourceful, with outstanding research skills.
                    </li>
                    <li className="text-2xl text-slate-400 font-medium">
                      Emboldened by challenges.
                    </li>
                  </ul>
                </AccordionBody>
              </Accordion>
            </div>
            <div className="">
              <form
                className="w-full max-w-lg border-2 border-gray rounded p-8 ml-10 carrer_form"
                noValidate="novalidate"
                onSubmit={applyformHandler}
                id="applyform"
                role="form"
              >
                <h3 className="text-2xl font-bold text-white mb-2 ">
                  APPLY NOW
                </h3>
                <div className="flex flex-wrap -mx-3 mb-6 mt-4">
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-first-name"
                    >
                      First Name
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      id="firstname"
                      name="firstname"
                      type="text"
                      placeholder="Jane"
                      value={firstname}
                      onChange={(e) => setFirstname(e.target.value)}
                    />
                  </div>
                  <div className="w-full md:w-1/2 px-3">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-last-name"
                    >
                      Last Name
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="lastname"
                      name="lastname"
                      type="text"
                      placeholder="Doe"
                      value={lastname}
                      onChange={(e) => setLastname(e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full px-3">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Email
                    </label>
                    <input
                      className=" block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="email"
                      name="email"
                      type="email"
                      placeholder="xyz@gmail.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full px-3">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Mobile
                    </label>
                    <input
                      className=" block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 [&::-webkit-inner-spin-button]:appearance-none"
                      id="phone_number"
                      type="number"
                      name="phone_number"
                      placeholder="Phone number"
                      value={phone_number}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full  px-3 mb-6 md:mb-0">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-state"
                    >
                      Position
                    </label>
                    <div className="relative">
                      <select
                        className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="Position"
                        name="Position"
                        value={Position}
                        onChange={(e) => setPosition(e.target.value)}
                      >
                        <option>Select Position</option>
                        <option>PHP Developer</option>
                        <option>Business Development Executive</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg
                          className="fill-current h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full px-3">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="file_input"
                    >
                      Resume Url
                    </label>
                    <input
                      className="block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="url"
                      name="url"
                      type="text"
                      value={url} placeholder="Resume Url"
                      onChange={(e) => seturl(e.target.value)}
                    />
                  </div>
                </div>
                <div className="text-center mt-4 flex justify-end ">
                  {!sendClick ? (
                    <button
                      id="save"
                      type="submit"
                      value={"Send"}
                      className="btn bg-yellow-500 hover:bg-yellow-400 px-4 py-3 rounded-md text-black text-xl font-medium"
                    >
                      Apply Now
                    </button>
                  ) : (
                    <motion.div
                      style={{
                        display: "inline-block",
                        rotate: "360deg",
                        animation: "spin 1s linear infinite", // Define the animation using keyframes
                      }}
                      className="  px-8 py-2 mt-4 mx-10 "
                    >
                      <FaSpinner />
                    </motion.div>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Career;
