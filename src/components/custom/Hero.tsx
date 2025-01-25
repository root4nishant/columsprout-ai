import { Button } from "../ui/button";
import { Sparkles } from "lucide-react";
import Section from "./reusables/Section";
import Tag from "./Tag";

export default function HeroSection() {
  return (
    <div>
      <div className="font-primary absolute inset-0 z-[-10] bg-[url('/hero.png')] bg-no-repeat bg-cover"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/10  via-transparent to-white z-[-10] w-full mx-auto"></div>
      <Section className="flex flex-col items-center justify-center bg-no-repeat bg-cover relative">
        <div className=" z-10 py-20 ">
          <div className="lg:max-w-5xl w-full mx-auto text-center gap-8 flex flex-col">
            <div className="flex flex-col gap-1">
              <Tag text="Introducing" />
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-[0.4px] text-gray-900 font-primary leading-loose">
                Your Stores
              </h1>
              <div className="flex gap-2 items-center text-4xl md:text-5xl lg:text-7xl font-bold tracking-[0.4px] justify-center">
                <span className="text-indigo-600">AI Concierge</span>
                <span className="text-primary-dark flex items-center">
                  <Sparkles />
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-4 justify-center items-center">
              <p className="text-lg md:text-xl max-w-5xl mx-auto text-center">
                Unleash the power of AI to automate repetitive tasks, enhance
                your storefront experience, personalize customer interactions,
                and drive higher sales conversions effortlessly.
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
    </div>
    // </div>
  );
}
