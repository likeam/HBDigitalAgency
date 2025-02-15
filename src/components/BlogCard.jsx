import React from "react";

const BlogCard = ({ Image }) => {
  return (
    <>
      <div data-aos="fade-up" className=" p-4 shadow-lg dark:text-gray-200">
        <div className=" overflow-hidden">
          <img
            src={Image}
            alt="no image"
            className="mx-auto h-[250px] w-full 
            object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
          />
        </div>
        <div className=" flex justify-between pt-2 text-slate-900">
          <p>Feburay 25, 2025</p>
          <p className="line-clamp-2">By Somome</p>
        </div>
        <div className="space-y-3 py-3">
          <h1 className="line-clamp-1 text-xl font-bold">
            How to grow your business. How to grow your business.
          </h1>
          <p className="line-clamp-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. amet
            consectetur adipisicing elit.
          </p>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
