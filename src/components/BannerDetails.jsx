import React from "react";
import { Link } from "react-router-dom";

const BannerDetails = ({
  reverse,
  Image,
  Healdline,
  H1,
  L1,
  L2,
  L3,
  L4,
  L5,
  L6,
}) => {
  return (
    <section className="flex justify-center items-center text-center bg-slate-100 dark:bg-slate-900 dark:text-white">
      <div
        className=" container flex flex-col items-center
       justify-center px-4 py-10 md:h-[500px]"
      >
        <div className="grid grid-cols-1 items-center gap-4 md:grid-cols-2">
          {/* Text Container  */}
          <div
            data-aos="fade-right"
            data-aos-duration="400"
            data-aos-once="true"
            className={`flex flex-col items-start gap-4 text-left md:items-start md:p-8 md:text-left ${
              reverse ? "md:order-last" : ""
            } `}
          >
            <h1 className=" text-2xl md:text-4xl">{Healdline}</h1>
            <p className=" text-sm text-slate-600 dark:text-slate-400">{H1}</p>
            <div className="">
              <ul className=" flex list-inside list-disc flex-col gap-2 md:gap-4">
                <li className=" font-medium">{L1}</li>
                <li className=" font-medium">{L2}</li>
                <li className=" font-medium">{L3}</li>
                <li className=" font-medium">{L4}</li>
                <li className=" font-medium">{L5}</li>
                <li className=" font-medium">{L6}</li>
              </ul>
            </div>
            <Link to={"/contactus"} className="btn-primary">
              Get Started
            </Link>
          </div>
          {/* Image Container  */}
          <div
            data-aos="fade-left"
            data-aos-duration="400"
            data-aos-once="true"
            className={reverse ? "order-1" : ""}
          >
            <img
              src={Image}
              alt="not found"
              className=" mx-auto w-full max-w-[400px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerDetails;
