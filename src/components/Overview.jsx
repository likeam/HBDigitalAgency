import React from "react";
import CountUp from "react-countup";

const Overview = () => {
  return (
    <section className=" flex justify-center     w-full text-center md:w-full    bg-white h-12 md:h-32 p-3 dark:bg-gray-900">
      <div
        className="  bg-white  grid grid-cols-4 mx-auto divide-x
         divide-slate-700  
      w-full md:max-w-[800px] shadow-lg 
      -translate-y-12 my-4 md:p-8 md:-translate-y-20 
      dark:bg-gray-800 dark:text-white/70"
      >
        <div className=" flex flex-col items-center justify-center  bg-white  dark:bg-gray-800">
          <h1
            className=" text-sm font-bold text-black/80 dark:text-white sm:text-lg
          md:text-3xl"
          >
            <CountUp end={32} suffix="+" duration={275} />
            32
          </h1>
          <p>clients</p>
        </div>
        <div className=" flex flex-col items-center justify-center  bg-white  dark:bg-gray-800">
          <h1
            className=" text-sm font-bold text-black/80 dark:text-white sm:text-lg
          md:text-3xl"
          >
            <CountUp end={54} suffix="+" duration={275} />
            54+
          </h1>
          <p>Prpjects</p>
        </div>
        <div className=" flex flex-col items-center justify-center  bg-white  dark:bg-gray-800">
          <h1
            className=" text-sm font-bold text-black/80 dark:text-white sm:text-lg
          md:text-3xl"
          >
            <CountUp end={234} suffix="+" duration={275} />
            234
          </h1>
          <p>Followers</p>
        </div>
        <div className=" flex flex-col items-center justify-center  bg-white  dark:bg-gray-800">
          <h1
            className=" text-sm font-bold text-black/80 dark:text-white sm:text-lg
          md:text-3xl"
          >
            <CountUp end={8} suffix="+" duration={275} />8
          </h1>
          <p>Mantinaces</p>
        </div>
      </div>
    </section>
  );
};

export default Overview;
