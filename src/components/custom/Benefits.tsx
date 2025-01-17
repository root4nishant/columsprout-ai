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
      image: "/benefits.png",
    },
    {
      percentage: "70%",
      title: "Increase in Accuracy",
      description:
        "Boost precision with advanced data batching pipelines that outperform traditional LLMs.",
      icon: <Target className="w-6 h-6 text-blue-600" />,
      image: "/benefits.png",
    },
    {
      percentage: "75%",
      title: "Faster Results",
      description:
        "Simplify tasks, prioritize strategy, and deliver rapid results.",
      icon: <Timer className="w-6 h-6 text-blue-600" />,
      image: "/benefits.png",
    },
  ];
  if (isMobile) {
    return (
      <Section className="flex flex-col">
        <Tag text="Benefits" />
        <Heading text="Experience the Era of AI Performance" />
        <div className="flex flex-col gap-3">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="border rounded-lg overflow-hidden bg-white"
            >
              <button
                onClick={() =>
                  setSelectedCard(index === selectedCard ? -1 : index)
                }
                className={`w-full flex items-center justify-between p-4 text-left
                  ${
                    selectedCard === index ? "bg-blue-50" : "hover:bg-gray-50"
                  }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{stat.icon}</span>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900">
                      {stat.title}
                    </h3>
                    <div
                      className={`lg:text-4xl text-2xl font-bold  ${
                        selectedCard === index
                          ? "text-blue-600"
                          : "text-gray-600"
                      }`}
                    >
                      {stat.percentage}
                    </div>
                  </div>
                </div>
                {selectedCard === index ? (
                  <ChevronUp className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </button>

              {selectedCard === index && (
                <div className="p-4 pt-0">
                  <p className="text-gray-600 mb-4">{stat.description}</p>
                  <div className="rounded-lg overflow-hidden border bg-white">
                    <Image
                      src={stat.image || "/placeholder.svg"}
                      alt={stat.title}
                      width={800}
                      height={600}
                      className="w-full"
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </Section>
    );
  }

  return (
    <Section className="flex flex-col">
      <Tag text="Benefits" />
      <Heading text="Experience the Era of AI Performance" />
      <div className="flex flex-col lg:flex-row justify-between gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            onClick={() => setSelectedCard(index)}
            className={`shadow-sm rounded-lg lg:p-6 p-2 text-center border cursor-pointer transition-all w-full
              ${
                selectedCard === index
                  ? "border-blue-500 shadow-xl bg-white "
                  : "border-gray-200 hover:shadow-xl bg-white/10"
              }`}
          >
            <div className="flex justify-items-center text-left justify-start">
              {/* <span className="text-5xl">{stat.icon}</span> */}
              <div>
                <div
                  className={`lg:text-4xl text-2xl font-bold  ${
                    selectedCard === index ? "text-blue-600" : "text-gray-600"
                  }`}
                >
                  {stat.percentage}
                </div>
                <h3 className="mt-4 text-xl font-semibold text-gray-800">
                  {stat.title}
                </h3>
              </div>
            </div>
            <p className="mt-2 text-gray-600 text-justify">
              {stat.description}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-8 border shadow-lg rounded-md lg:py-10 py-5 flex justify-center items-center">
        <Image
          src={stats[selectedCard]?.image || "/placeholder.svg"}
          alt={stats[selectedCard]?.title}
          width={500}
          height={200}
          className="transition-opacity duration-300"
        />
      </div>
    </Section>
  );
};

export default Benefits;
