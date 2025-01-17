import AITeamSection from "@/components/custom/Ait";
import Benefits from "@/components/custom/Benefits";
import Footer from "@/components/custom/Footer";
import HeroSection from "@/components/custom/Hero";
import Navbar from "@/components/custom/nav";

export default function Home() {
  return (
    <main className="">
      <div className="">
        <Navbar />
        <HeroSection />
      </div>
      <div>
        <AITeamSection />
        <Benefits />
      </div>
      <Footer />
    </main>
  );
}
