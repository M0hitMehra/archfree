import React, { useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { TfiEmail } from "react-icons/tfi";
import { BsPhone } from "react-icons/bs";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import { FaSpinner } from "react-icons/fa";

const HomeContact = () => {
  const [fullname, setFullname] = useState();
  const [mobile, setMobile] = useState();
  const [email, setEmail] = useState();
  const [msg, setMsg] = useState();

  const [sendClick, setSendClick] = useState(false);

  const formHandler = (e) => {
    e.preventDefault();
    setSendClick(true);
    // console.log(sendClick);
    if (!fullname || !mobile || !email || !msg) {
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
        "template_fyorqo9",
        {
          fullname,
          mobile,
          email,
          msg,
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
        setMobile("")
        setFullname("")
        setEmail("")
        setMsg("")
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
    <section id="contact" className="contact text-white p-4 xl:p-24">
      <div className="container flex flex-col justify-center gap-6">
        <div className="section-title flex flex-col gap-4 mb-4">
          <h2 className="text-md xl:text-lg font-bold text-slate-300 uppercase">
            Contact
          </h2>
          <p className="text-xl xl:text-3xl uppercase font-bold tracking-widest">
            Contact Us
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 mt-6 ">
          <div className="info xl:col-span-4 h-auto flex flex-col justify-evenly gap-7">
            <div className="email flex items-center gap-4 ">
              <div className="bg-yellow-400 px-3 py-1 rounded-md">
                <BsPhone className="text-black h-8 w-4" />
              </div>
              <div>
                <h4 className="text-lg xl:text-2xl font-[raleway] font-medium text-gray-200">
                  Email:
                </h4>
                <p className="text-sm xl:text-base tracking-widest text-gray-300 mt-2">
                  info@thearchertechnology.com
                </p>
              </div>
            </div>

            <div className="phone flex items-center gap-4 ">
              <div className="bg-yellow-400 px-3 py-1 rounded-md">
                <TfiEmail className="text-black h-8 w-4" />
              </div>
              <div>
                <h4 className="text-lg xl:text-2xl font-[raleway] font-medium text-gray-200">
                  Call:
                </h4>
                <p className="text-sm xl:text-base tracking-widest text-gray-300 mt-2">
                  +918849993525
                </p>
              </div>
            </div>
          </div>

          <div className="col-span-1 xl:col-span-8">
            <form
              id="contactform"
              role="form"
              className="php-email-form flex flex-col gap-5"
              noValidate="novalidate"
              onSubmit={formHandler}
            >
              <div className="flex gap-5 ">
                <div className="form-group w-full ">
                  <input
                    type="text"
                    name="fullname"
                    className="form-control text-black w-full p-2 rounded-md border-2 border-blue-400 focus:border-bg-400 focus:outline-blue-500 text-sm xl:text-base"
                    id="name"
                    placeholder="Your Name"
                    required
                    value={fullname}
                    onChange={(e) => setFullname(e.target.value)}
                  />
                </div>
                <div className="form-group w-full">
                  <input
                    type="email"
                    className="form-control  text-black w-full p-2 rounded-md border-2 border-blue-400 focus:border-bg-400 focus:outline-blue-500 text-sm xl:text-base"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="form-group w-full">
                <input
                  type="text"
                  className="form-control text-black w-full p-2 rounded-md border-2 border-blue-400 focus:border-bg-400 focus:outline-blue-500 text-sm xl:text-base"
                  name="mobile"
                  id="mobile"
                  placeholder="Your Mobile"
                  required
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                />
              </div>
              <div className="form-group w-full">
                <textarea
                  className="form-control w-full p-2  text-black rounded-md border-2 border-blue-400 focus:border-bg-400 focus:outline-blue-500 text-sm xl:text-base"
                  name="msg"
                  rows="5"
                  placeholder="Your Ideas/Message"
                  required
                  value={msg}
                  onChange={(e) => setMsg(e.target.value)}
                ></textarea>
              </div>

              <div className="text-center">
                {!sendClick ? (
                  <input
                    type="submit"
                    value={"Send"}
                    id="save"
                    className="btn  px-8 py-2 mt-4 mx-10  bg-yellow-500  hover:bg-yellow-400  rounded-md text-black"
                  />
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
  );
};

export default HomeContact;
