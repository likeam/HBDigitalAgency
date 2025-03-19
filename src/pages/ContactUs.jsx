import React from "react";
import Message from "../components/Message";

const ContactUs = () => {
  return (
    <div className=" flex justify-center  bg-gray-400  text-center min-h-[750px] bg- md:h-[500px]  gap-8   pt-20 dark:bg-gray-800 md:overflow-hidden">
      <div className="flex justify-center items-center">
        <Message />
      </div>
    </div>
  );
};

export default ContactUs;
