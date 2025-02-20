import React from "react";
import { Link } from "react-router-dom";

const SampleBanner = () => {
  return (
    <>
      <div className=" bg-gray-400 dark:bg-gray-800 to-indigo-900">
        <div
          data-aos="fade-up"
          className=" flex  justify-center  text-center container p-4 py-8 md:py12 md:p-12"
        >
          <div className=" grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            <div className="px-2">
              <iframe
                className=" aspect-video w-full"
                src="https://www.youtube.com/embed/gRWMen27Uio?si=VtHMh9xCxQ6ccFh8"
                title="YouTube video player"
                frameBorder="0"
                allow=" accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            <div
              className=" flex flex-col items-center gap-4 
          text-center text-white  
          md:col-span-2 md:items-start md:text-left"
            >
              <h1 className=" text-3xl font-bold">
                Market your next project with IMBED
              </h1>
              <p className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam asperiores tempora omnis temporibus, esse, doloremque
                laborum totam, veniam commodi sapiente perferendis impedit quam!
                Est veritatis tempore nemo accusamus numquam tempora.
              </p>
              <Link to={"/message"} className="btn-primary">Get Started</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SampleBanner;
