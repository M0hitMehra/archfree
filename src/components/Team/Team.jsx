import React from "react";

const Team = () => {
  return (
    <section className="">
      <div>This is About Section</div>
      <div className="mx-20 max-h-full">
        <div className="mt-20 flex items-center">
          <h1 className="text-white text-xl font-medium">TEAM</h1>
          <hr className="border-1 border-amber-500  drop-shadow-xl w-48 ml-3"></hr>
        </div>
        <h1 className="text-4xl font-bold flex text-white ">CHECK OUR TEAM</h1>
        <div className="flex mt-16 w-full ">
          <div className="flex flex-col w-1/3 ">
            <img
              src="https://www.thearchertechnology.com/public/Images/sanjaysinh.jpeg"
              alt="loading"
              className="max-w-[70%] h-auto rounded-t-lg drop-shadow-lg opacity-75"
            />
            <h1 className="text-xl font-medium flex text-black bg-white max-w-[70%] h-auto pt-5 pl-2 drop-shadow-lg">
              Sanjaysinh Rathod
            </h1>
            <h3 className=" font-medium flex text-slate-400  bg-white max-w-[70%] h-auto rounded-b-lg  pb-2 pl-2 mb-20 drop-shadow-lg">
              Founder & CEO
            </h3>
          </div>
          <div className="flex flex-col w-1/3 ">
            <img
              src="https://www.thearchertechnology.com/public/Images/prakash%20(2).jpg"
              alt="loading"
              className="max-w-[70%] h-auto rounded-t-lg drop-shadow-lg opacity-75"
            />
            <h1 className="text-xl font-medium flex text-black bg-white max-w-[70%] h-auto pt-5 pl-2 drop-shadow-lg">
            Prakash Chauhan
            </h1>
            <h3 className=" font-medium flex text-slate-400  bg-white max-w-[70%] h-auto rounded-b-lg  pb-2 pl-2 mb-20 drop-shadow-lg">
            Co-Founder
            </h3>
          </div>
          <div className="flex flex-col w-1/3 ">
            <img
              src="	https://www.thearchertechnology.com/public/Images/bhgvanbhaib%20(2).jpg"
              alt="loading"
              className="max-w-[70%] h-auto rounded-t-lg drop-shadow-lg opacity-75"
            />
            <h1 className="text-xl font-medium flex text-black bg-white max-w-[70%] h-auto pt-5 pl-2 drop-shadow-lg">
            Bhagvanbhai Bhil
            </h1>
            <h3 className=" font-medium flex text-slate-400  bg-white max-w-[70%] h-auto rounded-b-lg  pb-2 pl-2 mb-20 drop-shadow-lg">
            Business Advisor
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
