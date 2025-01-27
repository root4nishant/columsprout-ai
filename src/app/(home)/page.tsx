import AITeamSection from "@/components/custom/Ait";
import Benefits from "@/components/custom/Benefits";
import HeroSection from "@/components/custom/Hero";
import { Sparkles } from "lucide-react";
import Banner from "./components/Banner";

export default function Home() {
  return (
    <main className="w-full mx-auto lg:max-w-[1400px] md:max-w-[900px] lg:px-20 px-4 font-secondary">
      <HeroSection
        gradientOverlay="bg-gradient-to-b from-black/30 via-transparent to-white"
        tagText="Introducing"
        title="Your Store's"
        highlightText="AI Concierge"
        highlightIcon={<Sparkles />}
        description="Unleash the power of AI to automate repetitive tasks, enhance your storefront experience, personalize customer interactions, and drive higher sales conversions effortlessly"
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
      <AITeamSection />
      <Benefits />
      <Banner
        message="Try Columsprout AI today & "
        buttonText="Try Now"
        buttonLink="/"
        message2="Elevate your Storefront"
      />
    </main>
  );
}
