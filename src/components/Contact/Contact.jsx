import React, { useEffect, useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { TfiEmail } from "react-icons/tfi";
import { BsPhone } from "react-icons/bs";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import { FaSpinner } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
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
      <section id="contact" className="contact text-white p-4 md:p-24">
        <div className="container flex flex-col justify-center gap-6">
          <div className="section-title flex flex-col gap-4 mb-4">
            <h2 className="text-md md:text-lg font-bold text-slate-300 uppercase">
              Contact
            </h2>
            <p className="text-xl md:text-3xl uppercase font-bold tracking-widest">
              Contact Us
            </p>
          </div>

          {/* <div className="">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7419.02598295401!2d71.2269608977129!3d21.6049250781877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395880c5a8ae72db%3A0x3367f8679c1c86eb!2sAngel%20Lords%20Eco%20Inn%20Amreli!5e0!3m2!1sen!2sin!4v1670677249636!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div> */}

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-6 ">
            <div className="info md:col-span-4 h-auto flex flex-col justify-evenly gap-7">
              {/* <div className="address flex items-center gap-4 ">
                <div className="bg-yellow-400 px-3 py-1 rounded-md mt-[-40px]">
                  <CiLocationOn className="text-black h-8 w-4" />
                </div>
                <div>
                  <h4 className="text-lg md:text-2xl font-[raleway] font-medium text-gray-200">
                    Location:
                  </h4>
                  <p className="text-sm md:text-base text-gray-300 mt-2">
                    F-15, 1st Floor, Angel Lords Hotel, Old Marketing Yard,
                    Amreli, Gujarat, India, 365601
                  </p>
                </div>
              </div> */}

              <div className="email flex items-center gap-4 ">
                <div className="bg-yellow-400 px-3 py-1 rounded-md">
                  <BsPhone className="text-black h-8 w-4" />
                </div>
                <div>
                  <h4 className="text-lg md:text-2xl font-[raleway] font-medium text-gray-200">
                    Email:
                  </h4>
                  <p className="text-sm md:text-base tracking-widest text-gray-300 mt-2">
                    info@thearchertechnology.com
                  </p>
                </div>
              </div>

              <div className="phone flex items-center gap-4 ">
                <div className="bg-yellow-400 px-3 py-1 rounded-md">
                  <TfiEmail className="text-black h-8 w-4" />
                </div>
                <div>
                  <h4 className="text-lg md:text-2xl font-[raleway] font-medium text-gray-200">
                    Call:
                  </h4>
                  <p className="text-sm md:text-base tracking-widest text-gray-300 mt-2">
                    +918849993525
                  </p>
                </div>
              </div>
            </div>

            <div className="col-span-1 md:col-span-8">
              <form
                id="contactform"
                role="form"
                className="php-email-form flex flex-col gap-5"
                noValidate="novalidate"
                onSubmit={formHandler}
              >
                <div className="flex gap-5">
                  <div className="form-group w-full">
                    <input
                      type="text"
                      name="fullname"
                      className="form-control w-full p-2 rounded-md border-2 border-blue-400 focus:border-bg-400 focus:outline-blue-500 text-sm md:text-base"
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
                      className="form-control w-full p-2 text-black rounded-md border-2 border-blue-400 focus:border-bg-400 focus:outline-blue-500 text-sm md:text-base"
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
                    className="form-control w-full p-2 rounded-md border-2 border-blue-400 focus:border-bg-400 focus:outline-blue-500 text-sm md:text-base"
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
                    className="form-control w-full p-2 text-black rounded-md border-2 border-blue-400 focus:border-bg-400 focus:outline-blue-500 text-sm md:text-base"
                    name="msg"
                    rows="5"
                    placeholder="Your Ideas/Message"
                    required={true}
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
    </div>
  );
};

export default Contact;
