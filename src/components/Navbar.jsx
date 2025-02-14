import React, { useEffect, useState } from "react";
import { BiPhoneCall, BiSolidMoon, BiSolidSun } from "react-icons/bi";
import { FaCaretDown, FaUserCircle } from "react-icons/fa";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const [theme, setTheme] = useState("dark");
  const element = document.documentElement;

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.removeItem("theme");
    }
  }, [theme]);

  return (
    <>
      <header className=" relative px-4 z-99 bg-transparent border-b-[1px] border-gray-500 w-full">
        <nav className=" container flex items-center justify-between  h-[70px] py-2 ">
          {/* LOGO  */}
          <div className=" text-2xl md:text-3xl dark:text-gray-200">
            <a href="#" className="">
              IMBED{" "}
              <span className=" inline-block font-bold text-blue-500">
                Tech
              </span>{" "}
            </a>
          </div>
          {/* Desktop Menu Section  */}
          <div className=" hidden md:block dark:text-gray-200">
            <ul className=" flex items-center gap-4">
              <li className=" group relative cursor-pointer">
                <Link
                  to={"/"}
                  className=" flex items-center gap-[2px] h-[72px]"
                >
                  Home{" "}
                  <span className="">
                    <FaCaretDown className=" transition-all duration-200 group-hover:rotate-180 " />
                  </span>
                </Link>
                {/* Dropdwon Section  */}
                <div className=" absolute -left-9 z-[99999] hidden w-[150px] group-hover:block">
                  <ul className="bg-primary p-4 rounded-b-lg space-y-3">
                    <li className="">Services</li>
                    <li className="">About Us</li>
                    <li className="">Privacy Policy</li>
                  </ul>
                </div>
              </li>
              <li className=" group  cursor-pointer">
                <Link
                  to={"/services"}
                  className=" flex items-center gap-[2px] h-[72px]"
                >
                  Services{" "}
                  <span className="">
                    <FaCaretDown className=" transition-all duration-200 group-hover:rotate-180" />
                  </span>
                </Link>
                {/* Full Size Dropdwon Section  */}
                <div className=" absolute p-2 left-0 z-[99999]  hidden w-full group-hover:block rounded-b-3xl shadow-md">
                  <div className=" grid grid-cols-3 gap-5">
                    <div className=" overflow-hidden">
                      <img
                        src="https://picsum.photos/200"
                        alt="not found"
                        className=" max-h-[300px] w-full rounded-b-3xl object-fill"
                      />
                    </div>
                    <div className=" col-span-2">
                      <h1 className="">Best Selling</h1>
                      <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Nostrum vel eos ipsum hic quo doloremque quae
                        earum officia voluptatum aliquam eum saepe dicta enim,
                        molestias provident deleniti, culpa dolor recusandae.
                        <div className=" grid grid-cols-3">
                          <div className="">
                            <h1 className=" pb-1 text-xl font-semibold">
                              Development
                            </h1>
                            <ul className=" space-y-2">
                              <li className=" cursor-pointer hover:text-gray-700">
                                Web Development
                              </li>
                              <li className=" cursor-pointer hover:text-gray-700">
                                Mobile Development
                              </li>
                              <li className=" cursor-pointer hover:text-gray-700">
                                Software Development
                              </li>
                            </ul>
                          </div>
                          <div className="">
                            <h1 className=" pb-1 text-xl font-semibold">
                              Development
                            </h1>
                            <ul className=" space-y-2">
                              <li className=" cursor-pointer hover:text-gray-700">
                                Web Development
                              </li>
                              <li className=" cursor-pointer hover:text-gray-700">
                                Mobile Development
                              </li>
                              <li className=" cursor-pointer hover:text-gray-700">
                                Software Development
                              </li>
                            </ul>
                          </div>
                          <div className="">
                            <img
                              src="https://picsum.photos/160"
                              alt="not found"
                              className=" max-h-[300px] w-full rounded-b-3xl object-fill"
                            />
                          </div>
                        </div>
                      </p>
                    </div>
                  </div>
                </div>
              </li>
              <li className="">
                <Link to={"/aboutus"}>Contact Us</Link>
              </li>
              <li className="">
                <div className="flex items-center gap-4">
                  <div className="">
                    <BiPhoneCall className=" text-2xl h-[40px] w-[40px] rounded-md p-2 bg-primary hover:bg-primary/90  " />
                  </div>
                  <div className="">
                    <p className="">Call us on</p>
                    <p className="">
                      <a href="tel:+923006464645" className="">
                        {" "}
                        +923006464645
                      </a>
                    </p>
                  </div>
                </div>
              </li>
              {/* Light and Dark Mode  */}
              {theme === "dark" ? (
                <BiSolidSun
                  className=" text-2xl"
                  onClick={() => setTheme("light")}
                />
              ) : (
                <BiSolidMoon
                  className=" text-2xl"
                  onClick={() => setTheme("dark")}
                />
              )}
            </ul>
          </div>
          {/* Mobile Section Header  */}
          <div className=" flex items-center gap-4 md:hidden">
            {/* Light and Dark Mode  */}
            {theme === "dark" ? (
              <BiSolidSun
                className=" text-2xl dark:text-gray-200"
                onClick={() => setTheme("light")}
              />
            ) : (
              <BiSolidMoon
                className=" text-2xl "
                onClick={() => setTheme("dark")}
              />
            )}
            {showMenu ? (
              <HiMenuAlt1
                onClick={toggleMenu}
                className=" cursor-pointer transition-all dark:text-gray-200"
                size={30}
              />
            ) : (
              <HiMenuAlt3
                onClick={toggleMenu}
                className=" cursor-pointer transition-all dark:text-gray-200"
                size={30}
              />
            )}
          </div>
        </nav>
      </header>

      {/* <ResponsiveMenu setShowMenu={showMenu} /> */}
      <div
        className={`${
          showMenu ? " left-0" : "-left-[100%]"
        } h-screen w-[75%] bg-stone-500 fixed top-0 z-50
          transition-all duration-500 pt-24 pb-6 px-8 flex flex-col justify-between `}
      >
        <div className="">
          <div className=" flex items-center justify-start gap-3">
            <FaUserCircle size={50} />
            <div className="">
              <h1 className="">Abdul Rehman</h1>
              <h1 className="text-sm text-slate-800">Premium user</h1>
            </div>
          </div>
          <nav className=" mt-12">
            <ul className=" space-y-4 text-xl">
              <li className="">
                <Link to={"/"}>Home</Link>
              </li>
              <li className="">
                <Link to={"/services"}>Services</Link>
              </li>
              <li className="">
                <Link to={"/aboutus"}>About U</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="footer">
          <h1 className="">@2025 All Rights Reserved</h1>
        </div>
      </div>
    </>
  );
};

export default Navbar;
