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
            height={400}
            className="rounded-lg shadow-md w-full lg:h-80 h-auto "
          />
          <div className="flex flex-col lg:gap-4 gap-2">
            <h3 className="text-lg font-bold text-[#423EC7] uppercase">
              Customer Facing
            </h3>
            <h2 className="text-2xl font-semibold">Storefront AI Concierge</h2>
            <p className=" text-gray-600 text-lg font-secondary">
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
            className="rounded-lg shadow-md w-full lg:h-80 h-auto  "
          />
          <div className="flex flex-col lg:gap-4 gap-2">
            <h3 className="text-lg font-bold text-[#423EC7]  uppercase">
              Back Office
            </h3>
            <h2 className="text-2xl font-semibold">Unified Support Desk</h2>
            <p className=" text-gray-600 text-lg font-secondary">
              Enhance customer experience while solving 30% more tickets every
              day.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
