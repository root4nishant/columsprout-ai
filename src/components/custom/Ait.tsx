import Tag from "./Tag";
import ReusableCard from "./reusables/Card";
import Heading from "./reusables/Heading";

export default function AITeamSection() {
  const productData = {
    images: ["/meetai.png", "/meetai.png", "/meetai.png"],
    title: "Clio AI",
    description:
      "Seamlessly transform meaningful customer interactions into sales with your store's AI concierge",
    buttonText: "Explore Lomi",
  };
  return (
    <section className="bg-gradient-to-b from-[#C7CFD2] to-white">
      <div className="mx-auto text-center flex gap-10 flex-col">
        <Tag />
        <Heading text="Meet your AI Team" />
      </div>
      <div className="p-6 flex lg:flex-row flex-col justify-center gap-20">
        <ReusableCard {...productData} />
        <ReusableCard {...productData} />
      </div>
    </section>
  );
}
