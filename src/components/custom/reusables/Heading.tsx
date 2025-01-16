// components/Heading.tsx
import { HeadingProps } from "@/types";
import React from "react";

const Heading: React.FC<HeadingProps> = ({ text }) => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-gray-800">{text}</h1>
    </div>
  );
};

export default Heading;
