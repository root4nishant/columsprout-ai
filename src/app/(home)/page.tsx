import AITeamSection from "@/components/custom/Ait";
import HeroSection from "@/components/custom/Hero";
export default function Home() {
  return (
    <main>
      <div className=" flex flex-col">
        <HeroSection />
      </div>
      <div>
        <AITeamSection />
      </div>
    </main>
  );
}
