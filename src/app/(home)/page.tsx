import Navbar from "@/components/custom/nav";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col ">
      <main className="flex-1 flex-col items-center justify-center bg-[url('/hero.png')] bg-no-repeat bg-cover">
        <div className="" />
        <Navbar />

        <div className=" mx-auto px-4 py-20 md:py-32 z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="space-y-2">
              <p className="text-lg text-primary font-medium">Introducing</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
                Your Stores
              </h1>
              <div className="flex gap-2 items-center text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight justify-center  ">
                <span className="text-indigo-600">AI Concierge</span>
                <span className=" text-primary-dark items-center">
                  <Sparkles />
                </span>
              </div>
            </div>

            <p className="text-gray-600 text-lg md:text-xl max-w-5xl mx-auto">
              Unleash the power of AI to automate repetitive tasks, enhance your
              storefront experience, personalize customer interactions, and
              drive higher sales conversions effortlessly.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-indigo-600 hover:bg-indigo-700 text-white"
              >
                Start for free
              </Button>
              <Button size="lg" variant="outline" className="border-2">
                Book Demo
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
