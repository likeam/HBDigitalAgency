import React from "react";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className=" flex justify-center  bg-gray-400  text-center min-h-[750px] bg- md:h-[500px]  gap-8   pt-20 dark:bg-gray-800">
      <section className=" container flex flex-col justify-between ">
        <div className=" grid grid-cols-1 md:grid-cols-2 px-8 items-center justify-center dark:text-white">
          {/* hero Text containert  */}
          <div
            data-aos="fade-right"
            data-aos-duration="400"
            data-aos-once="true"
            className=" flex flex-col   gap-4 md:text-left"
          >
            <h1 className=" text-2xl  ">
            Who We Are
            </h1>
            <p className="">
            We are a team of passionate developers, designers, and problem-solvers dedicated to creating cutting-edge software and web solutions
            </p>
            <h1 className=" text-2xl  ">
            Our Mission
            </h1>
            <p className="">
            To empower businesses with innovative technology solutions that simplify processes, enhance user experiences, and drive growth
            </p>
            <h1 className=" text-2xl  ">
            Our Team
            </h1>
            <p className="">
            Highlight key team members with photos, roles, and expertise
            </p>
            <h1 className=" text-2xl  ">
            Why Choose Us
            </h1>
            <p className="">
            Experienced and Skilled Team
            <br />
            Client-Centric Approach
            <br />
            Agile Development Methodology
            <br />
            Transparent Communication
            <br />
            On-Time Delivery
            </p>

            <div className=" space-x-4">
              
                <Link to={"/message"} className="btn-primary ">Get Started</Link>
              
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

export default AboutUs;
