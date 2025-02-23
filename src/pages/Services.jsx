import React from "react";
import { Link } from "react-router-dom";

const Services = () => {
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
            Custom Software Development:
            </h1>
            <p className="">
            We build scalable, secure, and user-friendly software tailored to your business needs
            </p>
            <h1 className=" text-2xl  ">
            Web Development
            </h1>
            <p className="">
            From simple websites to complex web applications, we create responsive and dynamic solutions
            </p>
            <h1 className=" text-2xl  ">
            Mobile App Development:
            </h1>
            <p className="">
            We design and develop cross-platform mobile apps for iOS and Android.
            </p>
            <h1 className=" text-2xl  ">
            UI/UX Design
            </h1>
            <p className="">
            We craft intuitive and visually appealing interfaces that enhance user engagement
            
            </p>
            <h1 className=" text-2xl  ">
            Cloud Solutions
            </h1>
            <p className="">
            We provide cloud-based solutions for scalability, security, and efficiency
            
            </p>
            <h1 className=" text-2xl  ">
            Maintenance & Support:
            </h1>
            <p className="">
            We offer ongoing support to ensure your software and web applications run smoothly
            
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

export default Services;
