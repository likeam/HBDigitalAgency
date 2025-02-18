import React from "react";

const Hero = () => {
  return (
    <div className=" flex justify-center  bg-gray-400  text-center h-[650px] bg- md:h-[500px]  gap-8   pt-20 dark:bg-gray-800">
      <section className=" container flex flex-col justify-between ">
        <div className=" grid grid-cols-1 md:grid-cols-2 px-8 items-center justify-center dark:text-white">
          {/* hero Text containert  */}
          <div
            data-aos="fade-right"
            data-aos-duration="400"
            data-aos-once="true"
            className=" flex flex-col items-center text-center justify-center  gap-4 md:text-left"
          >
            <h1 className=" text-4xl  ">
              Building Innovative Software and Web Solutions Tailored to Your
              Needs
            </h1>
            <p className="">
              We design, develop, and deploy custom software and web
              applications that drive growth, efficiency, and success for
              businesses of all sizes
            </p>
            <div className=" space-x-4">
              <button className="btn-primary ">Get Started</button>
              <button className="btn-outline ">Login</button>
            </div>
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="400"
            data-aos-once="true"
            className=" mx-auto max-w-xs p-4"
          >
            <img src="/hero.svg" alt="Not Found" className=" mx-full" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
