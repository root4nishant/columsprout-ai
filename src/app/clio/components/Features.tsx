import Heading from "@/components/custom/reusables/Heading";
import Section from "@/components/custom/reusables/Section";
// import Tag from "@/components/custom/Tag";
import Image from "next/image";

export default function FeatureComponent() {
  return (
    <Section>
      {/* <Tag text="Features" /> */}
      <Heading text="AI That Delivers on Every Front" />
      <div className="flex flex-col md:flex-row justify-between items-start lg:gap-28 gap-16 ">
        <div className="text-center md:text-left w-full h-full flex flex-col lg:gap-8 gap-5">
          <Image
            src="/meetai.png"
            alt="Storefront AI Concierge"
            width={600}
            height={300}
            className="rounded-lg shadow-md w-full aspect-[2/1] "
          />
          <div className="flex flex-col lg:gap-4 gap-2">
            <h3 className="lg:text-lg md:text-md text-sm font-bold text-primary-dark uppercase font-secondary">
              Customer Facing
            </h3>
            <h2 className="lg:text-2xl md:text-xl text-lg font-semibold font-primary">
              Storefront AI Concierge
            </h2>
            <p className=" text-gray-600 lg:text-lg md:text-md text-sm font-secondary">
              Seamlessly automate customer conversations across channels, while
              maintaining your brand&apos;s voice.
            </p>
          </div>
        </div>
        <div className="text-center md:text-left w-full h-full flex flex-col lg:gap-10 gap-5">
          <Image
            src="/meetai.png"
            alt="Unified Support Desk"
            width={600}
            height={400}
            className="rounded-lg shadow-md w-full aspect-[2/1]  "
          />
          <div className="flex flex-col lg:gap-4 gap-2">
            <h3 className="lg:text-lg md:text-md text-sm font-bold text-primary-dark font-secondary uppercase">
              Back Office
            </h3>
            <h2 className="lg:text-2xl md:text-xl text-lg font-primary font-semibold">
              Unified Support Desk
            </h2>
            <p className=" text-gray-600 lg:text-lg md:text-md text-sm font-secondary">
              Enhance customer experience while solving 30% more tickets every
              day.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
