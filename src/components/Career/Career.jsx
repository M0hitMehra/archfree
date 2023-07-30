import React from "react";

const Career = () => {
  document.addEventListener("DOMContentLoaded", function () {
    // To store actual height of every ".blog-post" div before making it "50px"
    var totalNum = document.querySelectorAll(".blog-post").length; // Counting number of .blog-post div on page.
    var i,
      myArray = [];
    for (i = 0; i < totalNum; i++) {
      var curHeight = document.querySelectorAll(".blog-post")[i].offsetHeight;
      myArray.push(curHeight);
    }

    var downArrows = document.querySelectorAll(".down-arrow");
    downArrows.forEach(function (arrow) {
      arrow.addEventListener("click", function () {
        this.classList.toggle("invert");
        var index = Array.from(downArrows).indexOf(arrow);
        var blogPost = document.querySelectorAll(".blog-post")[index];
        var heightCheck = blogPost.offsetHeight;
        if (heightCheck < 51) {
          blogPost.style.height = myArray[index] + "px";
        } else {
          blogPost.style.height = "50px";
        }
      });
    });
  });

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
          <div className="flex flex-wrap">
            <div class="blog-post border-2 border-gray rounded p-10 w-full max-w-lg">
              <h3 className="text-white text-xl font-medium">
                Business Development Executive <br />
                Experience - 1 to 3
              </h3>
              <p className="text-white text-xl font-medium mt-6">
                Number of vacancies:1
              </p>
              <ul className="list-disc mt-8">
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
            </div>

            <div className="">
              <form className="w-full max-w-lg border-2 border-gray rounded p-8 ml-10">
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
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      id="grid-first-name"
                      type="text"
                      placeholder="Jane"
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
                      id="grid-last-name"
                      type="text"
                      placeholder="Doe"
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
                      type="email"
                      placeholder="xyz@gmail.com"
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
                      placeholder="Phone number"
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
                        id="grid-state"
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
                      Resume
                    </label>
                    <input
                      className="block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="file_input"
                      type="file"
                    />
                  </div>
                </div>
                <div className="text-center mt-4 flex justify-end ">
                  <button
                    id="save"
                    className="btn bg-yellow-500 hover:bg-yellow-400 px-4 py-3 rounded-md text-black text-xl font-medium"
                  >
                    Apply Now
                  </button>
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
