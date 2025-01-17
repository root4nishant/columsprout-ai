import React from "react";
import Link from "next/link";
import Section from "./Section";

interface BannerProps {
  message: string;
  buttonText: string;
  buttonLink: string;
}

const Banner: React.FC<BannerProps> = ({ message, buttonText, buttonLink }) => {
  return (
    <Section>
      <div className="bg-[url('/banner.png')] bg-no-repeat bg-cover lg:py-10 py-4 rounded-lg w-full">
        <div className="container mx-auto px-4 flex flex-col items-center text-center">
          <h2 className="text-sm md:text-3xl font-bold text-gray-800 mb-4">
            {message}
          </h2>
          <Link href={buttonLink} passHref>
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg shadow-lg hover:bg-indigo-700 transition-colors duration-300">
              {buttonText}
            </button>
          </Link>
        </div>
      </div>
    </Section>
  );
};

export default Banner;
