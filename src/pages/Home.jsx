import React from "react";
import Hero from "../components/Hero";
import Overview from "../components/Overview";
import BannerDetails from "../components/BannerDetails";
import SampleBanner from "../components/SampleBanner";
import Blogs from "../components/Blogs";

const Home = () => {
  return (
    <>
      <Hero />
      <Overview />
      <BannerDetails reverse={true} />
      <BannerDetails />
      <SampleBanner />
      <Blogs />
    </>
  );
};

export default Home;
