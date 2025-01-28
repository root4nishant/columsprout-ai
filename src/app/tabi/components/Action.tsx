import Image from "next/image";
import { Card } from "@/components/ui/card";
import Section from "@/components/custom/reusables/Section";
// import Tag from "@/components/custom/Tag";
import Heading from "@/components/custom/reusables/Heading";
import { Button } from "@/components/custom/reusables/button";
import Link from "next/link";

const cardData = [
  {
    id: 1,
    title: "Transform Your Workflow",
    description:
      "Streamline your process with our innovative tools. Built for modern teams, our platform helps you achieve more in less time.",
    buttonText: "Learn More",
    imageSrc: "/tabi1.svg",
    imageAlt: "Feature illustration",
    imageLeftOnLg: true,
  },
  {
    id: 2,
    title: "Powerful Analytics",
    description:
      "Gain deep insights into your data with advanced analytics. Make informed decisions backed by real-time metrics and comprehensive reports.",
    buttonText: "Explore Analytics",
    imageSrc: "/tabi2.svg",
    imageAlt: "Analytics illustration",
    imageLeftOnLg: false,
  },
  {
    id: 3,
    title: "Seamless Collaboration",
    description:
      "Work together effortlessly with your team. Our collaborative features ensure everyone stays in sync and projects move forward smoothly.",
    buttonText: "Start Collaborating",
    imageSrc: "/tabi3.svg",
    imageAlt: "Collaboration illustration",
    imageLeftOnLg: true,
  },
];

export default function TabiInAction() {
  return (
    <Section>
      {/* <Tag text="Features" /> */}
      <Heading text="Tabi in Action" />
      <div className="mx-auto lg:py-12 py-0 max-w-[1000px] border lg:space-y-12 space-y-4 flex flex-col items-center">
        {cardData.map((card) => (
          <Card
            key={card.id}
            className="overflow-hidden border shadow-none bg-transparent"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 justify-between lg:gap-6 md:gap-4 gap-2">
              <div
                className={`relative h-[300px] lg:h-full min-h-[300px] ${
                  card.imageLeftOnLg ? "order-1" : "lg:order-2"
                }`}
              >
                <Image
                  src={card.imageSrc}
                  alt={card.imageAlt}
                  fill
                  className="object-fit"
                />
              </div>
              <div
                className={`p-6 flex flex-col justify-center lg:space-y-4 space-y-2 lg:items-start items-center lg:text-left text-center ${
                  card.imageLeftOnLg ? "order-2" : "lg:order-1"
                }`}
              >
                <h2 className="lg:text-2xl text-md md:text-xl font-bold tracking-tight">
                  {card.title}
                </h2>
                <p className="text-muted-foreground lg:text-lg text-sm md:text-lg font-secondary">
                  {card.description}
                </p>
              </div>
            </div>
          </Card>
        ))}
        <Link href="/try">
          <Button className="lg:p-6 p-4 lg:w-[172px] md:w-[120px] w-[96px] h-[38px] lg:h-[60px] md:h-[44px] bg-primary-dark text-white rounded-sm lg:text-lg font-bold text-xs shadow-md hover:bg-white hover:text-black transition-colors duration-300">
            Try Now
          </Button>
        </Link>
      </div>
    </Section>
  );
}
