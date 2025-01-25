import Tag from "./Tag";
import ReusableCard from "./reusables/Card";
import Heading from "./reusables/Heading";
import Section from "./reusables/Section";

export default function AITeamSection() {
  const productData = [
    {
      images: ["/hero.png", "/hero.png", "/hero.png"],
      title: "Clio AI",
      description:
        "Seamlessly transform meaningful customer interactions into sales with your store's AI concierge",
      buttonText: "Explore Clio",
      link: "/clio",
    },
    {
      images: ["/hero.png", "/hero.png", "/hero.png"],
      title: "Tabi AI",
      description:
        "Seamlessly transform meaningful customer interactions into sales with your store's AI concierge",
      buttonText: "Explore Tabi",
      link: "/tabi",
    },
  ];
  return (
    <Section className="">
      <div className="mx-auto text-center flex flex-col">
        <Tag text="Features" />
        <Heading text="Meet your AI Team" />
      </div>
      <div className="flex lg:flex-row  flex-col justify-between items-center lg:gap-20 gap-24">
        <ReusableCard
          data={productData[0]}
          images={[]}
          title={""}
          description={""}
          buttonText={""}
        />
        <ReusableCard
          data={productData[1]}
          images={[]}
          title={""}
          description={""}
          buttonText={""}
        />
      </div>
    </Section>
  );
}
