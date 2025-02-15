import React from "react";

const BannerDetails = () => {
  return (
    <section className=" bg-slate-100 dark:bg-slate-900 dark:text-white">
      <div
        className=" container flex flex-col items-center
       justify-center py-10 md:h-[500px]"
      >
        <div className="grid grid-cols-1 items-center gap-4 md:grid-cols-2">
          {/* Text Container  */}
          <div className="">
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
              <ul className="">
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
          </div>
          {/* Image Container  */}
          <div className=""></div>
        </div>
      </div>
    </section>
  );
};

export default BannerDetails;
