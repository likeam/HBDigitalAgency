import React from "react";
import BlogCard from "./BlogCard";
import Blog1 from "../assets/blog1.jpg";
import Blog2 from "../assets/blog2.jpg";
import Blog3 from "../assets/blog3.jpg";

const Blogs = () => {
  return (
    <>
      <section className=" flex flex-col  justify-center  text-center contaner mb-10 py-8">
        <h1 className=" mb-8 border-l-8 py-2 pl-2 text-center text-3xl font-bold dark:text-gray-200">
          Ouer Latest Blogs
        </h1>
        <div className=" grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
          <BlogCard Image={Blog1} />
          <BlogCard Image={Blog2} />
          <BlogCard Image={Blog3} />
        </div>
      </section>
    </>
  );
};

export default Blogs;
