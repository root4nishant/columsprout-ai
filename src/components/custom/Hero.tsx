import { FC, ReactNode } from "react";
import { Button } from "../ui/button";
import Section from "./reusables/Section";
import Tag from "./Tag";

interface HeroSectionProps {
  gradientOverlay?: string;
  tagText?: string;
  title: string;
  highlightText: string;
  highlightIcon?: ReactNode;
  description: string;
  buttonText: string;
  buttonLink?: string;
  additionalButton?: {
    text: string;
    size?: "sm" | "md" | "lg";
    variant?: "solid" | "outline" | "ghost";
    className?: string;
    onClick?: () => void;
  };
}

const HeroSection: FC<HeroSectionProps> = ({
  gradientOverlay,
  tagText,
  title,
  highlightText,
  highlightIcon,
  description,
  buttonText,
  buttonLink,
  // additionalButton,
}) => {
  return (
    <div>
      <div
        className={` font-primary absolute inset-0 z-[-10] bg-[url("/hero.png")] bg-no-repeat bg-cover`}
      ></div>
      <div
        className={`absolute inset-0 ${
          gradientOverlay ||
          "bg-gradient-to-b from-gray-900/50 via-transparent to-white"
        } z-[-10] w-full mx-auto`}
      ></div>
      <Section className="flex flex-col items-center justify-center bg-no-repeat bg-cover relative">
        <div className="z-10 py-20 pt-24">
          <div className="lg:max-w-5xl w-full mx-auto text-center gap-8 flex flex-col">
            <div className="flex flex-col gap-1">
              {tagText && <Tag text={tagText} />}
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-[0.4px] text-gray-900 font-primary leading-loose">
                {title}
              </h1>
              <div className="flex gap-2 items-center text-4xl md:text-5xl lg:text-7xl font-bold tracking-[0.4px] justify-center">
                <span className="text-indigo-600">{highlightText}</span>
                {highlightIcon && (
                  <span className="text-primary-dark flex items-center">
                    {highlightIcon}
                  </span>
                )}
              </div>
            </div>
            <div className="flex flex-col  gap-16 justify-center items-center">
              <p className="text-lg md:text-xl max-w-5xl mx-auto text-center">
                {description}
              </p>
              <a href={buttonLink || "#"}>
                <Button className="w-[172px] h-[60px] bg-indigo-600 hover:bg-indigo-700 text-white text-lg font-semibold py-6 rounded-md">
                  {buttonText}
                </Button>
              </a>
              {/* {additionalButton && (
                <Button
                  size={additionalButton.size || "lg"}
                  variant={additionalButton.variant || "outline"}
                  className={`${additionalButton.className || "border-2"}`}
                  onClick={additionalButton.onClick || undefined}
                >
                  {additionalButton.text}
                </Button>
              )} */}
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default HeroSection;
