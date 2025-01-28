import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import { Sparkles } from "lucide-react";

// Dynamically import components
const HeroSection = dynamic(() => import("./components/Hero"));
const VideoWithMessages = dynamic(() => import("./components/Video"));
const FeatureComponent = dynamic(() => import("./components/Features"));
const Benefits = dynamic(() => import("./components/Benefits"));
const Integration = dynamic(() => import("./components/Integration"));
const Banner = dynamic(() => import("@/components/custom/reusables/Banner"));

function Page() {
  return (
    <div className="w-full mx-auto lg:max-w-[1400px] md:max-w-[900px] lg:px-20 px-4 font-primary">
      <Suspense fallback={<div>Loading Hero Section...</div>}>
        <HeroSection
          gradientOverlay="bg-gradient-to-b from-black/30 via-transparent to-white"
          tagText="Introducing"
          title="Clio AI"
          highlightText="Your store's Customer Success AI"
          highlightIcon={<Sparkles />}
          description="Use Cleo AI to create world-class Customer Experiences and provide Outstanding Support"
          buttonText="Try Now"
          buttonLink="/try"
        />
      </Suspense>

      <Suspense fallback={<div>Loading Video...</div>}>
        <VideoWithMessages />
      </Suspense>

      <Suspense fallback={<div>Loading Features...</div>}>
        <FeatureComponent />
      </Suspense>

      <Suspense fallback={<div>Loading Benefits...</div>}>
        <Benefits />
      </Suspense>

      <Suspense fallback={<div>Loading Integration...</div>}>
        <Integration />
      </Suspense>

      <Suspense fallback={<div>Loading Banner...</div>}>
        <Banner
          message="Join the waitlist "
          buttonText="Try Now"
          buttonLink="/try"
          message2="for the Cleo AI"
        />
      </Suspense>
    </div>
  );
}

export default Page;
