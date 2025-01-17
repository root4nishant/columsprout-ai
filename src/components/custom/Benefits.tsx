import React from "react";
import Section from "./reusables/Section";
import Tag from "./Tag";
import Heading from "./reusables/Heading";
import Image from "next/image";

const Benefits = () => {
  const stats = [
    {
      percentage: "60%",
      title: "Lower Operational Costs",
      description:
        "Automate workflows, reduce inefficiencies, and minimize staffing needs.",
      icon: "💲",
    },
    {
      percentage: "70%",
      title: "Increase in Accuracy",
      description:
        "Boost precision with advanced data batching pipelines that outperform traditional LLMs.",
      icon: "🎯",
    },
    {
      percentage: "75%",
      title: "Faster Results",
      description:
        "Simplify tasks, prioritize strategy, and deliver rapid results.",
      icon: "⏱️",
    },
  ];

  return (
    <Section className="flex flex-col ">
      <Tag text="Benefits" />
      <Heading text="Experience the Era of AI Performance" />
      <div className="flex flex-col lg:flex-row justify-between  gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg lg:p-6 p-2 text-center border border-gray-200 hover:shadow-xl transition-all w-full"
          >
            <div className="lg:text-4xl text-2xl font-bold text-blue-600">
              {stat.percentage}
            </div>
            <h3 className="mt-4 text-xl font-semibold text-gray-800">
              {stat.title}
            </h3>
            <p className="mt-2 text-gray-600">{stat.description}</p>
          </div>
        ))}
      </div>
      <div className="border shadow-lg rounded-md lg:py-20 py-5 flex justify-center items-center">
        <Image src="/benefits.png" alt="Benefits" width={800} height={600} />
      </div>
    </Section>
  );
};

export default Benefits;
