import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Message = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_lnk5z0s", "template_69o9g2y", form.current, {
        publicKey: "On2o2WUXYfIpEDdrDPoQs",
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
    <>
      <div class=" flex justify-center items-center  p-12 ">
        <form
          ref={form}
          onSubmit={sendEmail}
          class="bg-gray-200 shadow-md rounded px-2 pt-6 pb-8 mb-4 w-[680px] dark:text-gray-200 dark:bg-gray-900"
        >
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2  dark:text-gray-200">
              Name
            </label>
            <input
              class="shadow appearance-none border border-gray-300 dark:text-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="to_name"
              type="text"
              placeholder="name@example.com"
            />
          </div>
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2  dark:text-gray-200"
              for="Email"
            >
              Email
            </label>
            <input
              class="shadow appearance-none border border-gray-300 dark:text-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="email"
              type="text"
              placeholder="name@example.com"
            />
          </div>
          <div class="mb-6">
            <label class="block text-gray-700 text-sm font-bold mb-2  dark:text-gray-200">
              Message
            </label>
            <textarea
              class="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline  dark:text-gray-200"
              name="message"
            />
          </div>
          <div class="flex items-center justify-between">
            <button
              onClick={sendEmail}
              type="submit"
              value="Send"
              class="btn-primary"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Message;
