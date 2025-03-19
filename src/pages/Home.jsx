import React from "react";
import Hero from "../components/Hero";
import Overview from "../components/Overview";
import BannerDetails from "../components/BannerDetails";
import SampleBanner from "../components/SampleBanner";

import Blog1 from "../assets/blog2.jpg";
import Blog2 from "../assets/blog3.jpg";

const Home = () => {
  return (
    <>
      <Hero />
      <Overview />
      <BannerDetails
        reverse={true}
        Image={Blog1}
        Healdline={"We Build Apps That Get Trending On Appworld"}
        H1={
          "We build scalable, secure, and user-friendly software tailored to your business needs"
        }
        L1={"Get a Free Consultation"}
        L2={"View Our Portfolio"}
        L3={"Contact Us Today"}
        L4={"Experienced and Skilled Team"}
        L5={"Agile Development Methodology"}
        L6={"On-Time Delivery"}
      />
      <BannerDetails
        Image={Blog2}
        Healdline={
          "We are a team of passionate developers, designers, and problem-solvers dedicated to creating cutting-edge software and web solutions"
        }
        H1={
          "We build scalable, secure, and user-friendly software tailored to your business needs"
        }
        L1={"Custom Software Development"}
        L2={"Web Application Development"}
        L3={"Mobile App Development"}
        L4={"UI/UX Design"}
        L5={"Cloud Solutions"}
        L6={"Maintenance & Support"}
      />
      <SampleBanner />
      {/* <Blogs /> */}
    </>
  );
};

export default Home;
