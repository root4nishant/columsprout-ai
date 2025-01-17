import { cn } from "@/lib/utils";
import { SectionProps } from "@/types";
import React from "react";

const Section: React.FC<SectionProps> = ({ children, className, style }) => {
  return (
    <section
      style={style}
      className={cn("py-8  px-10  md:px-8 lg:px-24 mx-auto", className)}
    >
      {children}
    </section>
  );
};

export default Section;
