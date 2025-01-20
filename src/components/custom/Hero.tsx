import { Button } from "../ui/button";
import { Sparkles } from "lucide-react";
import Section from "./reusables/Section";
import Tag from "./Tag";

export default function HeroSection() {
  return (
    <Section className="flex flex-col items-center justify-center bg-[url('/hero.png')] bg-no-repeat bg-cover relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-white z-0"></div>
      <div className=" z-10 md:py-10 py-20">
        <div className="lg:max-w-5xl w-full mx-auto text-center space-y-6">
          <div className="space-y-2">
            <Tag text="Introducing" />
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-wide text-gray-900 font-montserrat">
              Your Stores
            </h1>
            <div className="flex gap-2 items-center text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight justify-center">
              <span className="text-indigo-600">AI Concierge</span>
              <span className="text-primary-dark flex items-center">
                <Sparkles />
              </span>
            </div>
          </div>

          <p className="text-gray-600 text-lg md:text-xl max-w-5xl mx-auto text-justify lg:text-center">
            Unleash the power of AI to automate repetitive tasks, enhance your
            storefront experience, personalize customer interactions, and drive
            higher sales conversions effortlessly.
          </p>

          <Button className="bg-indigo-600 hover:bg-indigo-700 text-white text-lg font-semibold py-6 w-auto rounded-md">
            Book Demo
          </Button>
          {/* Uncomment for additional button */}
          {/* <Button size="lg" variant="outline" className="border-2">
              Learn More
            </Button> */}
        </div>
      </div>
    </Section>
  );
}
