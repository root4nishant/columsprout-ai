import React from "react";
import Link from "next/link";
import Section from "./Section";
import { Button } from "@/components/ui/button";

interface BannerProps {
  message: string;
  buttonText: string;
  buttonLink: string;
}

const Banner: React.FC<BannerProps> = ({ message, buttonText, buttonLink }) => {
  return (
    <Section>
      <div className="bg-[url('/banner.png')] bg-no-repeat bg-cover lg:py-10 py-4 rounded-md w-full">
        <div className="container mx-auto px-4 flex flex-col items-center text-center">
          <h2 className="text-sm md:text-3xl font-bold text-gray-800 mb-4">
            {message}
            <span className="text-indigo-600">Elevate your Storefront</span>
          </h2>
          <Link href={buttonLink} passHref>
            <Button className="lg:p-6 p-4 bg-indigo-600 text-white rounded-sm lg:text-xl text-xs shadow-md hover:bg-black transition-colors duration-300">
              {buttonText}
            </Button>
          </Link>
        </div>
      </div>
    </Section>
  );
};

export default Banner;
