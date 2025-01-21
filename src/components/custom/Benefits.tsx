"use client";

import { useState, useEffect } from "react";
import Section from "./reusables/Section";
import Tag from "./Tag";
import Heading from "./reusables/Heading";
import Image from "next/image";
import {
  ChevronDown,
  ChevronUp,
  DollarSign,
  Target,
  Timer,
} from "lucide-react";

const Benefits = () => {
  const [selectedCard, setSelectedCard] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1000);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const stats = [
    {
      percentage: "60%",
      title: "Lower Operational Costs",
      description:
        "Automate workflows, reduce inefficiencies, and minimize staffing needs.",
      icon: <DollarSign className="w-6 h-6 text-blue-600" />,
      image: "/home1.png",
    },
    {
      percentage: "70%",
      title: "Increase in Accuracy",
      description:
        "Boost precision with advanced data batching pipelines that outperform traditional LLMs.",
      icon: <Target className="w-6 h-6 text-blue-600" />,
      image: "/home2.png",
    },
    {
      percentage: "75%",
      title: "Faster Results",
      description:
        "Simplify tasks, prioritize strategy, and deliver rapid results.",
      icon: <Timer className="w-6 h-6 text-blue-600" />,
      image: "/home3.png",
    },
  ];

  const renderMobileView = () => (
    <div className="flex flex-col gap-3">
      {stats.map((stat, index) => (
        <div key={index}>
          <div className="border rounded-lg overflow-hidden">
            <button
              onClick={() =>
                setSelectedCard(index === selectedCard ? -1 : index)
              }
              className={`w-full flex items-center justify-between p-4 text-left transition-colors
              ${selectedCard === index ? "bg-white" : "hover:bg-gray-50"}`}
            >
              <div className="flex items-center gap-3">
                <div>
                  <div
                    className={`lg:text-4xl text-2xl font-bold transition-colors duration-300
                    ${
                      selectedCard === index
                        ? "text-blue-600"
                        : "text-gray-600 hidden"
                    }`}
                  >
                    {stat.percentage}
                  </div>
                  <h3 className="font-bold text-lg text-gray-900">
                    {stat.title}
                  </h3>
                </div>
              </div>
              {selectedCard === index ? (
                <ChevronUp className="h-5 w-5 text-gray-500" />
              ) : (
                <ChevronDown className="h-5 w-5 text-gray-500" />
              )}
            </button>
          </div>

          {selectedCard === index && (
            <div className="pt-2">
              <div className="bg-gray-50 rounded-lg overflow-hidden">
                <div className=" flex justify-center items-center">
                  <Image
                    src={stat.image}
                    alt={stat.title}
                    width={800}
                    height={600}
                    className=" w-auto rounded-md"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );

  const renderDesktopView = () => (
    <div className="flex flex-col lg:flex-row justify-between gap-6">
      {stats.map((stat, index) => (
        <div
          key={index}
          onClick={() => setSelectedCard(index)}
          className={`shadow-sm rounded-lg lg:p-5 p-2 text-center border cursor-pointer transition-all duration-300 w-full
            ${
              selectedCard === index
                ? "shadow-xl bg-white"
                : "border-gray-200 hover:shadow-xl bg-gray-50"
            }`}
        >
          <div className="flex flex-col gap-4">
            <div
              className={`lg:text-4xl text-2xl font-bold transition-colors duration-300
              ${selectedCard === index ? "text-blue-600" : "text-gray-600"}`}
            >
              {stat.percentage}
            </div>
            <h3 className="text-xl font-semibold text-gray-800">
              {stat.title}
            </h3>
            <p className="mt-4 text-gray-600 text-justify">
              {stat.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );

  const renderImageOverlay = () => (
    <div className="relative flex justify-center items-center py-20">
      {stats.map((stat, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-500 ease-in-out  ${
            selectedCard === index
              ? "opacity-100 z-30 transform scale-100"
              : "opacity-0 z-10 transform scale-95"
          }`}
        >
          <div className=" flex justify-center items-center py-16">
            <Image
              src={stat.image}
              alt={stat.title}
              className="h-full w-auto object-cover rounded-md shadow-md border"
              width={800}
              height={600}
            />
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <Section className="flex flex-col">
      <Tag text="Benefits" />
      <Heading text="Experience the Era of AI Performance" />
      {isMobile ? renderMobileView() : renderDesktopView()}
      {!isMobile && renderImageOverlay()}
    </Section>
  );
};

export default Benefits;
