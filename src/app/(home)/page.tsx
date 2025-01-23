import AITeamSection from "@/components/custom/Ait";
import Benefits from "@/components/custom/Benefits";
import HeroSection from "@/components/custom/Hero";
import Banner from "@/components/custom/reusables/Banner";

export default function Home() {
  return (
    <main className="">
      <div className="">
        <HeroSection />
      </div>
      <div>
        <AITeamSection />
        <Benefits />
        <Banner
          message="Try Columsprout AI today & "
          buttonText="Try Now"
          buttonLink="/"
          message2="Elevate your Storefront"
        />
      </div>
    </main>
  );
}
