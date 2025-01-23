import Banner from "@/components/custom/reusables/Banner";
import React from "react";
import HeroSection from "./components/Hero";
import FeatureComponent from "./components/Features";
import Benefits from "./components/Benefits";
import Integration from "./components/Integration";
import VideoWithMessages from "./components/Video";

function page() {
  return (
    <div>
      <HeroSection />
      <VideoWithMessages/>
      <FeatureComponent />

      <Benefits />
      <Integration />
      <Banner
        message="Join the waitlist "
        buttonText="Try Now"
        buttonLink="/"
        message2="for the Cleo AI"
      />
    </div>
  );
}

export default page;
