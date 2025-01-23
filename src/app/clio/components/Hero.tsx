import Section from "@/components/custom/reusables/Section";
import Tag from "@/components/custom/Tag";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
// import { Sparkles } from "lucide-react";

export default function HeroSection() {
  return (
    <Section className="flex flex-col items-center justify-center bg-[url('/hero.png')] bg-no-repeat bg-cover relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-white z-0"></div>
      <div className=" z-10 py-20 ">
        <div className="lg:max-w-7xl w-full mx-auto text-center gap-16 flex flex-col">
          <div className="space-y-2">
            <Tag text="Introducing" />
            <div className="flex justify-center items-center text-center">
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-wide text-gray-900 font-montserrat">
                Clio AI
              </h1>
              <span className="text-gray-900  flex items-center">
                <Sparkles className="w-10 h-10" />
              </span>
            </div>
            <div className="flex gap-2 items-center text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight justify-center">
              <span className="text-indigo-600">
                Your stores Customer Success AI
              </span>
              <span className="text-primary-dark flex items-center">
                {/* <Sparkles /> */}
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-16 justify-center items-center">
            <p className="text-gray-600 text-lg md:text-xl max-w-5xl mx-auto text-justify lg:text-center">
              Unleash the power of AI to automate repetitive tasks, enhance your
              storefront experience, personalize customer interactions, and
              drive higher sales conversions effortlessly.
            </p>

            <Button className="w-[172px] h-[60px] bg-indigo-600 hover:bg-indigo-700 text-white text-lg font-semibold py-6 rounded-md">
              Book Demo
            </Button>
          </div>
          {/* Uncomment for additional button */}
          {/* <Button size="lg" variant="outline" className="border-2">
              Learn More
            </Button> */}
        </div>
      </div>
    </Section>
  );
}
