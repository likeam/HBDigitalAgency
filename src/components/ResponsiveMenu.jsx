import React from "react";

const ResponsiveMenu = ({ showMenu }) => {
  return (
    <div
      className={`${
        showMenu ? "-left-[100%]" : " left-0"
      } h-screen w-[75%] bg-amber-700 fixed top-0 z-50 transition-all duration-500`}
    >
      ResponsiveMenu
    </div>
  );
};

export default ResponsiveMenu;
