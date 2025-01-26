import { Sparkles } from "lucide-react";
import React from "react";
import HeroSection from "./components/Hero";
import VideoWithMessages from "../clio/components/Video";
import TabiInAction from "./components/Action";
import FAQ from "./components/FAQs";
import Banner from "@/components/custom/reusables/Banner";
import UseCase from "./components/UseCase";

function TabiPage() {
  return (
    <div className="w-full mx-auto lg:max-w-[1400px] md:max-w-[900px] lg:px-20 px-4 font-primary">
      <HeroSection
        gradientOverlay="bg-gradient-to-b from-black/30 via-transparent to-white"
        tagText="Introduction"
        title="Tabi AI"
        highlightText="Transform Data at Speed"
        highlightIcon={<Sparkles />}
        description="Use Lomi AI to clean, enrich, and transform your store's data with unmatched speed and accuracy"
        buttonText="Book Demo"
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
      <TabiInAction />
      <UseCase />
      <FAQ />
      <Banner
        message="Empower your data and marketing teams "
        buttonText="Try Now"
        buttonLink="/"
        message2="with Lomi — get started today!"
      />
    </div>
  );
}

export default TabiPage;
