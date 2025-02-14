import React from "react";
import CountUp from "react-countup";

const Overview = () => {
  return (
    <section className=" container h-12 md:h-32 px-12">
      <div
        className=" grid grid-cols-4 mx-auto divide-x divide-slate-700  
      w-full md:max-w-[800px] shadow-lg bg-white -translate-y-10 my-4 md:p-8 md:-translate-y-16 dark:bg-gray-800 dark:text-white/70"
      >
        <div className=" flex flex-col items-center justify-center">
          <h1
            className=" text-sm font-bold text-black/80 dark:text-white sm:text-lg
          md:text-3xl"
          >
            <CountUp end={234} suffix="+" duration={275} />
            199
          </h1>
          <p>clients</p>
        </div>
        <div className=" flex flex-col items-center justify-center">
          <h1
            className=" text-sm font-bold text-black/80 dark:text-white sm:text-lg
          md:text-3xl"
          >
            <CountUp end={234} suffix="+" duration={275} />
            199
          </h1>
          <p>clients</p>
        </div>
        <div className=" flex flex-col items-center justify-center">
          <h1
            className=" text-sm font-bold text-black/80 dark:text-white sm:text-lg
          md:text-3xl"
          >
            <CountUp end={234} suffix="+" duration={275} />
            199
          </h1>
          <p>clients</p>
        </div>
        <div className=" flex flex-col items-center justify-center">
          <h1
            className=" text-sm font-bold text-black/80 dark:text-white sm:text-lg
          md:text-3xl"
          >
            <CountUp end={234} suffix="+" duration={275} />
            199
          </h1>
          <p>clients</p>
        </div>
      </div>
    </section>
  );
};

export default Overview;
