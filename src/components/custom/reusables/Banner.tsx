import React from "react";
import Link from "next/link";
import Section from "./Section";
import { Button } from "@/components/ui/button";

interface BannerProps {
  message: string;
  message2: string;
  buttonText: string;
  buttonLink: string;
}

const Banner: React.FC<BannerProps> = ({
  message,
  buttonText,
  buttonLink,
  message2,
}) => {
  return (
    <Section>
      <div className="bg-[#423EC7] bg-no-repeat bg-cover flex flex-col items-center justify-center lg:py-10 py-4 rounded-md w-full lg:h-[238px] md:-[164px] h-[120px]">
        <div className="container mx-auto px-4  text-center ">
          <h2 className="text-sm md:text-3xl font-bold text-white mb-4">
            {message}
            <span className="text-[#D6CFB6]">{message2}</span>
          </h2>
          <Link href={buttonLink} passHref>
            <Button className="lg:p-6 p-4 lg:w-[172px] md:w-[120px] w-[96px] h-[38px] lg:h-[60px] md:h-[44px] bg-[#D6CFB6] text-[#423EC7] rounded-sm lg:text-lg font-bold text-xs shadow-md hover:bg-white hover:text-black transition-colors duration-300">
              {buttonText}
            </Button>
          </Link>
        </div>
      </div>
    </Section>
  );
};

export default Banner;
