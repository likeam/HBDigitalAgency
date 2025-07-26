import {
  FaGithub,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="rounded-t-3xl  bg-transparent ">
      <section className="mx-auto max-w-[1200px] dark:text-white text-gray-900">
        <div className=" grid py-5 md:grid-cols-3">
          <div className=" px-4 py-8 ">
            <h1 className="mb-3 text-justify text-xl font-bold sm:text-left sm:text-3xl">
              <a href="/#home" className="">
                HB
                <span className="inline-block font-bold text-primary">
                  Digital
                </span>
              </a>
            </h1>
            <p className="">
              We build scalable, secure, and user-friendly software tailored to
              your business needs.{" "}
            </p>
            <br />
            <div className="flex items-center gap-3">
              <FaLocationArrow />
              <p>Abdul Rehman, Gujranwala Pakistan</p>
            </div>
            <div className="mt-3 flex items-center gap-3">
              <FaMobileAlt />
              <a href="tel:+923006464645" className="">
                {" "}
                +923006464645
              </a>
            </div>
            {/* Social Handle */}
          </div>
          <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10 ">
            <div className="">
              <div className="px-4 py-8 ">
                <h1 className="mb-3 text-justify text-xl font-bold sm:text-left sm:text-xl">
                  Important Links
                </h1>
                <ul className={`flex flex-col gap-3`}>
                  <li className="cursor-pointer transition-all duration-300 hover:translate-x-[2px]">
                    <Link to={"/"}>Home</Link>
                  </li>
                  <li className="cursor-pointer transition-all duration-300 hover:translate-x-[2px]">
                    <Link to={"/aboutus"}>About Us</Link>
                  </li>
                  <li className="cursor-pointer transition-all duration-300 hover:translate-x-[2px]">
                    <Link to={"/services"}>Services</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="">
              <div className="px-4 py-8 ">
                <h1 className="mb-3 text-justify text-xl font-bold sm:text-left sm:text-xl">
                  Links
                </h1>
                <ul className="flex flex-col gap-3">
                  <li className="cursor-pointer transition-all duration-300 hover:translate-x-[2px]">
                    <Link to={"/contactus"}>Contact Us</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="">
              <div className="px-4 py-8 ">
                <h1 className="mb-3 text-justify text-xl font-bold sm:text-left sm:text-xl">
                  Social Links
                </h1>
                <div className="flex flex-col gap-3">
                  <h1>Subscribe to our newsletter</h1>
                  <input
                    className="rounded-full px-3 py-1 text-gray-900 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500 dark:text-gray-200 "
                    type="text"
                    placeholder="Email"
                  />
                  <div className="mt-6 flex items-center gap-3">
                    <a
                      href="https://github.com/likeam"
                      className="duration-200 hover:scale-105"
                    >
                      <FaGithub className="text-3xl" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/abdul-rehman-b27a13241"
                      className="duration-200 hover:scale-105"
                    >
                      <FaLinkedin className="text-3xl" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="border-t-2 border-gray-300/50 py-6 text-center">
            @copyright 2025 AR || Abdul Rehman
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
