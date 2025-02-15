import React from "react";
import Blog1 from "../assets/blog1.jpg";
import Blog2 from "../assets/blog2.jpg";
import Blog3 from "../assets/blog3.jpg";

const BannerDetails = ({ reverse }) => {
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
            <h1 className=" text-2xl md:text-4xl">
              {" "}
              We Build Apps That Get Trending On Appworld
            </h1>
            <p className=" text-sm text-slate-600 dark:text-slate-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi et
              iure nihil odio, animi consequatur officiis vitae, nobis cum quam
              quas vel optio at inventore tempore deserunt dignissimos adipisci
              hic?
            </p>
            <div className="">
              <ul className=" flex list-inside list-disc flex-col gap-2 md:gap-4">
                <li className=" font-medium">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Veritatis amet numquam vel qui vitae id quis reiciendis labore
                  molestiae facilis?
                </li>
                <li className=" font-medium">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Veritatis amet numquam vel qui vitae id quis reiciendis labore
                  molestiae facilis?
                </li>
                <li className=" font-medium">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Veritatis amet numquam vel qui vitae id quis reiciendis labore
                  molestiae facilis?
                </li>
              </ul>
            </div>
            <div className="btn-primary">Get Started</div>
          </div>
          {/* Image Container  */}
          <div
            data-aos="fade-left"
            data-aos-duration="400"
            data-aos-once="true"
            className={reverse ? "order-1" : ""}
          >
            <img
              src={Blog1}
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
