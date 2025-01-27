import Banner from "@/components/custom/reusables/Banner";
import React from "react";
import FeatureComponent from "./components/Features";
import Benefits from "./components/Benefits";
import Integration from "./components/Integration";
import VideoWithMessages from "./components/Video";
import { Sparkles } from "lucide-react";
import HeroSection from "./components/Hero";

function page() {
  return (
    <div className="w-full mx-auto lg:max-w-[1400px] md:max-w-[900px] lg:px-20 px-4 font-primary">
      <HeroSection
        gradientOverlay="bg-gradient-to-b from-black/30 via-transparent to-white"
        tagText="Introducing"
        title="Clio AI"
        highlightText="Your store's Customer Success AI"
        highlightIcon={<Sparkles />}
        description="Use Cleo AI to create world-class Customer Experiences and provide Outstanding Support"
        buttonText="Try Now"
        buttonLink="/get-started"
        // additionalButton={{
        //   text: "Learn More",
        //   size: "lg",
        //   variant: "outline",
        //   className:
        //     "border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white",
        //   onClick: () => console.log("Learn More clicked"),
        // }}
      />
      <VideoWithMessages />
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
