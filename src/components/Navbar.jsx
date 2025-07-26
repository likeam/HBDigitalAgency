import React, { useEffect, useState } from "react";
import { BiPhoneCall, BiSolidMoon, BiSolidSun } from "react-icons/bi";
import { FaCaretDown, FaUserCircle } from "react-icons/fa";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
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
      <header className=" relative px-4 z-99 bg-transparent flex justify-center  text-center border-b-[1px] border-gray-500 w-full">
        <nav className=" container flex items-center justify-between  h-[70px] py-2  px-2">
          {/* LOGO  */}
          <div className=" text-2xl md:text-3xl dark:text-gray-200">
            <a href="#" className="">
              HB{" "}
              <span className=" inline-block font-bold text-blue-500">
                Digital
              </span>{" "}
            </a>
          </div>
          {/* Desktop Menu Section  */}
          <div className=" hidden md:block dark:text-gray-200">
            <ul className=" flex items-center gap-4">
              <li>
                <Link to={"/"}>Home </Link>
              </li>
              <li>
                <Link to={"/aboutus"}>About Us</Link>
              </li>

              <li>
                <Link to={"/services"}>Services </Link>
              </li>

              <li className="">
                <Link to={"/contactus"}>Contact Us</Link>
              </li>
              <li className="">
                <a href="https://newarportfolio.netlify.app/">Portfolio</a>
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
          <nav className=" mt-12">
            <ul className=" space-y-4 text-xl">
              <li className="">
                <Link onClick={toggleMenu} to={"/"}>
                  Home
                </Link>
              </li>
              <li className="">
                <Link onClick={toggleMenu} to={"/services"}>
                  Services
                </Link>
              </li>
              <li className="">
                <Link onClick={toggleMenu} to={"/aboutus"}>
                  About U
                </Link>
              </li>
              <li>
                <Link onClick={toggleMenu} to={"/services"}>
                  Services{" "}
                </Link>
              </li>
              <li className="">
                <Link onClick={toggleMenu} to={"/contactus"}>
                  Contact Us
                </Link>
              </li>
              <li className="">
                <a
                  onClick={toggleMenu}
                  href="https://newarportfolio.netlify.app/"
                >
                  Portfolio
                </a>
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
