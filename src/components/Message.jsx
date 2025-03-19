import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Message = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_lnk5z0s", "template_w6gsil8", form.current, {
        publicKey: "96zgMVm_HL4OLYz_r",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="container w-[90vw] sm:w-[30vw]  h-[60vh] bg-gray-500 flex justify-center items-center flex-col gap-4 rounded-md  ">
      <div className=" font-bold text-2xl text-slate-700"> Send Message </div>
      <form ref={form} onSubmit={sendEmail}>
        <label className="block mt-4">
          <span className="  font-bold text-slate-700  flex items-start">
            Name
          </span>
        </label>
        <input
          type="text"
          name="from_name"
          placeholder="Enter Your Name"
          className=" mt-1 w-full px-3 py-2  bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
        />
        <label className="block mt-4">
          <span className="  font-bold text-slate-700  flex items-start">
            Email
          </span>
        </label>
        <input
          type="email"
          name="from_email"
          placeholder="Enter Your Email"
          className=" mt-1 w-full px-3 py-2  bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
        />
        <label className="block mt-4">
          <span className="  font-bold text-slate-700  flex items-start">
            Message
          </span>
        </label>
        <textarea
          name="message"
          placeholder="Enter Your Message"
          className=" mt-1 w-64 px-3 py-2  bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
        />
        <input type="submit" value="Send" className="btn-primary mt-4 flex  " />
      </form>
    </div>
  );
};

export default Message;
