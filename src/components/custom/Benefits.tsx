import React from "react";
import Section from "./reusables/Section";

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
    <Section className="flex flex-col md:flex-row items-center justify-between gap-6">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-white shadow-lg rounded-lg p-6 text-center border border-gray-200 hover:shadow-xl transition-all w-full"
        >
          <div className="text-4xl font-bold text-blue-600">
            {stat.percentage}
          </div>
          <h3 className="mt-4 text-xl font-semibold text-gray-800">
            {stat.title}
          </h3>
          <p className="mt-2 text-gray-600">{stat.description}</p>
        </div>
      ))}
    </Section>
  );
};

export default Benefits;
