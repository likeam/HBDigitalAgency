import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Message = () => {
  // const form = useRef();

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs
  //     .sendForm("service_lnk5z0s", "template_69o9g2y", form.current, {
  //       publicKey: "On2o2WUXYfIpEDdrDPoQs",
  //     })
  //     .then(
  //       () => {
  //         console.log("SUCCESS!");
  //       },
  //       (error) => {
  //         console.log("FAILED...", error.text);
  //       }
  //     );
  // };

  // return (
  //   <>
  //     <div class=" flex justify-center items-center bg-gray-400  p-12 dark:bg-gray-800 ">
  //       <form
  //         ref={form}
  //         onSubmit={sendEmail}
  //         class="bg-gray-200 shadow-md rounded px-2 pt-6 pb-8 mb-4 w-[680px] dark:text-gray-200 dark:bg-gray-900"
  //       >
  //         <div class="mb-4">
  //           <label class="block text-gray-700 text-sm font-bold mb-2  dark:text-gray-200">
  //             Name
  //           </label>
  //           <input
  //             class="shadow appearance-none border border-gray-300 dark:text-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
  //             name="to_name"
  //             type="text"
  //             placeholder="name@example.com"
  //           />
  //         </div>
  //         <div class="mb-4">
  //           <label
  //             class="block text-gray-700 text-sm font-bold mb-2  dark:text-gray-200"
  //             for="Email"
  //           >
  //             Email
  //           </label>
  //           <input
  //             class="shadow appearance-none border border-gray-300 dark:text-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
  //             name="email"
  //             type="text"
  //             placeholder="name@example.com"
  //           />
  //         </div>
  //         <div class="mb-6">
  //           <label class="block text-gray-700 text-sm font-bold mb-2  dark:text-gray-200">
  //             Messages
  //           </label>
  //           <textarea
  //             class="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline  dark:text-gray-200"
  //             name="message"
  //           />
  //         </div>
  //         <div class="flex items-center justify-between">
  //           <button
  //             onClick={sendEmail}
  //             type="submit"
  //             value="Send"
  //             class="btn-primary"
  //           >
  //             Send Message
  //           </button>
  //         </div>
  //       </form>
  //     </div>
  //   </>
  // );


  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_lnk5z0s",
        "template_w6gsil8",
        e.target,
        {
          publicKey: "gFnBf9-horBfqtDlf"
        }
        
      )
      .then((result) => {
        alert("Message Sent!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => alert("Oops! Something went wrong. Please try again."));
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <dev>
        <div className="px-4 w-full min-w-[300px] md:w-[500px] sm:w-2/3 p-6">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            Get In Touch
          </h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="Name..."
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>

            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="example@gmail.com"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>

            <div className="relative">
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="Your Message..."
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              Send Message
            </button>
          </form>
        </div>
      </dev>
    </section>
  );

};

export default Message;
