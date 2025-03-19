import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import AboutUs from "./pages/AboutUs";

import ContactUs from "./pages/ContactUs";

import Services from "./pages/Services";

import Message from "./components/Message";

const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />

          <Route path="/contactus" element={<ContactUs />} />

          {/* <Route path="/blogs" element={<Blogs />} /> */}
          <Route path="/services" element={<Services />} />

          <Route path="/message" element={<Message />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
