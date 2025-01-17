import { Button } from "../ui/button";
import { Sparkles } from "lucide-react";

export default function HeroSection() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center bg-[url('/hero.png')] bg-no-repeat bg-cover relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-white z-0"></div>
      <div className="relative z-10 mx-auto px-4 py-20 md:py-32">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <div className="space-y-2">
            <p className="text-lg text-primary font-bold">Introducing</p>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-gray-900">
              Your Stores
            </h1>
            <div className="flex gap-2 items-center text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight justify-center">
              <span className="text-indigo-600">AI Concierge</span>
              <span className="text-primary-dark flex items-center">
                <Sparkles />
              </span>
            </div>
          </div>

          <p className="text-gray-600 text-lg md:text-xl max-w-5xl mx-auto">
            Unleash the power of AI to automate repetitive tasks, enhance your
            storefront experience, personalize customer interactions, and drive
            higher sales conversions effortlessly.
          </p>

          <Button className="bg-indigo-600 hover:bg-indigo-700 text-white text-lg font-semibold py-6 w-auto">
            Book Demo
          </Button>
          {/* Uncomment for additional button */}
          {/* <Button size="lg" variant="outline" className="border-2">
              Learn More
            </Button> */}
        </div>
      </div>
    </main>
  );
}
