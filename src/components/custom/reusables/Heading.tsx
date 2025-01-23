import React from "react";
import clsx from "clsx";

interface HeadingProps {
  text: string;
  className?: string;
}

const Heading: React.FC<HeadingProps> = ({ text, className }) => {
  return (
    <div>
      <h1
        className={clsx(
          "lg:text-4xl text-3xl font-bold text-gray-800 text-center pb-10",
          className
        )}
      >
        {text}
      </h1>
    </div>
  );
};

export default Heading;
