import AITeamSection from "@/components/custom/Ait";
import Benefits from "@/components/custom/Benefits";
import HeroSection from "@/components/custom/Hero";
import Navbar from "@/components/custom/nav";

export default function Home() {
  return (
    <main className="">
      <div className=" flex flex-col">
        <Navbar />
        <HeroSection />
      </div>
      <div>
        <AITeamSection />
        <Benefits />
      </div>
    </main>
  );
}
