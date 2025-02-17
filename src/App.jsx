import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import AboutUs from "./pages/AboutUs";
import Careers from "./pages/Careers";
import CaseStudies from "./pages/CaseStudies";
import ContactUs from "./pages/ContactUs";
import FAQ from "./pages/FAQ";
import Portfolio from "./pages/Portfolio";
import Services from "./pages/Services";
import Blogs from "./components/Blogs";
import Testimonials from "./pages/Testimonials";
import Privacy from "./pages/Privacy";
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
          <Route path="/careers" element={<Careers />} />
          <Route path="/casesstudies" element={<CaseStudies />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/message" element={<Message />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
