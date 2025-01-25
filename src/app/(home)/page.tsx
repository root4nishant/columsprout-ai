import AITeamSection from "@/components/custom/Ait";
import Benefits from "@/components/custom/Benefits";
import HeroSection from "@/components/custom/Hero";
import Banner from "@/components/custom/reusables/Banner";

export default function Home() {
  return (
    <main className="w-full mx-auto lg:max-w-[1400px] md:max-w-[900px] lg:px-20 px-4 font-secondary">
      <HeroSection />
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
