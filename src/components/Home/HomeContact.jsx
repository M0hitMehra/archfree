import React  from "react";
    import { CiLocationOn } from "react-icons/ci";
import { TfiEmail } from "react-icons/tfi";
import { BsPhone } from "react-icons/bs";
const HomeContact = () => {
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

          <div className="">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7419.02598295401!2d71.2269608977129!3d21.6049250781877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395880c5a8ae72db%3A0x3367f8679c1c86eb!2sAngel%20Lords%20Eco%20Inn%20Amreli!5e0!3m2!1sen!2sin!4v1670677249636!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 mt-6 ">
            <div className="info xl:col-span-4 h-auto flex flex-col justify-between gap-7">
              <div className="address flex items-center gap-4 ">
                <div className="bg-yellow-400 px-3 py-1 rounded-md mt-[-40px]">
                  <CiLocationOn className="text-black h-8 w-4" />
                </div>
                <div>
                  <h4 className="text-lg xl:text-2xl font-[raleway] font-medium text-gray-200">
                    Location:
                  </h4>
                  <p className="text-sm xl:text-base text-gray-300 mt-2">
                    F-15, 1st Floor, Angel Lords Hotel, Old Marketing Yard,
                    Amreli, Gujarat, India, 365601
                  </p>
                </div>
              </div>

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
              >
                <div className="flex gap-5">
                  <div className="form-group w-full">
                    <input
                      type="text"
                      name="fullname"
                      className="form-control w-full p-2 rounded-md border-2 border-blue-400 focus:border-bg-400 focus:outline-blue-500 text-sm xl:text-base"
                      id="name"
                      placeholder="Your Name"
                      required=""
                      aria-invalid="true"
                    />
                  </div>
                  <div className="form-group w-full">
                    <input
                      type="email"
                      className="form-control w-full p-2 rounded-md border-2 border-blue-400 focus:border-bg-400 focus:outline-blue-500 text-sm xl:text-base"
                      name="email"
                      id="email"
                      placeholder="Your Email"
                      required=""
                      style={{
                        backgroundImage: "url('data:image/png;base64,...')",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "20px",
                        backgroundPosition: "97% center",
                        cursor: "auto",
                      }}
                      aria-invalid="false"
                    />
                  </div>
                </div>
                <div className="form-group w-full">
                  <input
                    type="text"
                    className="form-control w-full p-2 rounded-md border-2 border-blue-400 focus:border-bg-400 focus:outline-blue-500 text-sm xl:text-base"
                    name="mobile"
                    id="mobile"
                    placeholder="Your Mobile"
                    required=""
                  />
                </div>
                <div className="form-group w-full">
                  <textarea
                    className="form-control w-full p-2 rounded-md border-2 border-blue-400 focus:border-bg-400 focus:outline-blue-500 text-sm xl:text-base"
                    name="msg"
                    rows="5"
                    placeholder="Your Ideas/Message"
                    required=""
                  ></textarea>
                </div>

                <div className="sent-message mt-3" id="notidiv"></div>
                <div className="text-center mt-4">
                  <button
                    id="save"
                    className="btn bg-yellow-500 hover:bg-yellow-400 px-3 py-2 rounded-md text-black"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
  )
}

export default HomeContact