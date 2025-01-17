import { HeadingProps } from "@/types";
import React from "react";

const Heading: React.FC<HeadingProps> = ({ text }) => {
  return (
    <div>
      <h1 className="lg:text-4xl text-3xl font-bold text-gray-800 text-center pb-10">
        {text}
      </h1>
    </div>
  );
};

export default Heading;
