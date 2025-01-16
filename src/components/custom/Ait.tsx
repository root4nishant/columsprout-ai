import Tag from "./Tag";
import ReusableCard from "./reusables/Card";
import Heading from "./reusables/Heading";

export default function AITeamSection() {
  const productData = {
    images: [
      "/meetai.png",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    title: "Premium Sneakers Collection",
    description:
      "Explore our latest collection of comfortable and stylish sneakers",
    buttonText: "Shop Now",
  };
  return (
    <section className="bg-gradient-to-b from-[#C7CFD2] to-white">
      <div className="mx-auto text-center flex gap-10 flex-col">
        <Tag />
        <Heading text="Meet your AI Team" />
      </div>
      <div className="container mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
        <ReusableCard {...productData} />
        <ReusableCard {...productData} />
      </div>
    </section>
  );
}
