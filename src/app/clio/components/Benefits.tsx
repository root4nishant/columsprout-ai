"use client";

import Section from "@/components/custom/reusables/Section";
import Tag from "@/components/custom/Tag";
import Heading from "@/components/custom/reusables/Heading";

const Benefits = () => {
  // const [isMobile, setIsMobile] = useState(false);

  // useEffect(() => {
  //   const checkMobile = () => {
  //     setIsMobile(window.innerWidth < 1000);
  //   };

  //   checkMobile();
  //   window.addEventListener("resize", checkMobile);

  //   return () => window.removeEventListener("resize", checkMobile);
  // }, []);

  const stats = [
    {
      percentage: "70%",
      title: "Reduced AHT",
      description:
        "Track all your storefront customer interactions in real time and ensure seamless support",
    },
    {
      percentage: "35%",
      title: "Less Tickets / order",
      description:
        "Proactively guide with product details, reviews, loyalty perks, and policies when it matters",
    },
    {
      percentage: "30%",
      title: "Increased CSAT",
      description:
        "Recommend the right products, the best deals and reliably resolve storefront queries",
    },
  ];

  //   const renderMobileView = () => (
  //     <div className="flex flex-col gap-2">
  //       {stats.map((stat, index) => (
  //         <div key={index}>
  //           <div className="border rounded-lg overflow-hidden">
  //             <button
  //               onClick={() =>
  //                 setSelectedCard(index === selectedCard ? -1 : index)
  //               }
  //               className={`w-full flex  items-center justify-between lg:p-4 p-2 text-left transition-colors
  //               ${selectedCard === index ? "bg-white" : "hover:bg-gray-50"}`}
  //             >
  //               <div className="flex items-center gap-3">
  //                 <div>
  //                   <div
  //                     className={`lg:text-2xl text-xl font-bold transition-colors duration-300
  //                     ${
  //                       selectedCard === index
  //                         ? "text-blue-600"
  //                         : "text-gray-600 "
  //                     }`}
  //                   >
  //                     {stat.percentage}
  //                   </div>
  //                   <h3 className="font-bold text-lg text-gray-900">
  //                     {stat.title}
  //                   </h3>
  //                 </div>
  //               </div>
  //               {selectedCard === index ? (
  //                 <ChevronUp className="h-5 w-5 text-gray-500" />
  //               ) : (
  //                 <ChevronDown className="h-5 w-5 text-gray-500" />
  //               )}
  //             </button>
  //           </div>

  //           {selectedCard === index && (
  //             <div className="pt-2 border rounded-md">
  //               <p className="lg:px-4 lg:py-2 py-1 px-2 text-gray-600 text-justify">
  //                 {stat.description}
  //               </p>
  //               <div className="rounded-lg overflow-hidden">
  //                 <div className="w-full">
  //                   {" "}
  //                   {/* Set height as needed */}
  //                   <Image
  //                     src={stat.image}
  //                     alt={stat.title}
  //                     width={1000}
  //                     height={600}
  //                     className="w-full h-full object-cover "
  //                   />
  //                 </div>
  //               </div>
  //             </div>
  //           )}
  //         </div>
  //       ))}
  //     </div>
  //   );

  const renderDesktopView = () => (
    <div className="flex flex-col md:flex-row justify-between md:gap-6 gap-2">
      {stats.map((stat, index) => (
        <div
          key={index}
          className=" rounded-lg lg:p-5 p-2  border cursor-pointer transition-all duration-300 w-full
          shadow-xl bg-white hover:shadow-2xl hover:shadow-gray-300"
        >
          <div className="flex flex-col lg:gap-4 gap-2">
            <div className="lg:text-3xl text-2xl font-bold transition-colors duration-300 text-[#423EC7]">
              {stat.percentage}
            </div>
            <h3 className="text-xl font-semibold text-gray-800">
              {stat.title}
            </h3>
            <p className=" text-gray-600 text-justify">{stat.description}</p>
          </div>
        </div>
      ))}
    </div>
  );

  // const renderImageOverlay = () => (
  //   <div className="relative flex justify-center items-center py-20">
  //     {stats.map((stat, index) => (
  //       <div
  //         key={index}
  //         className={`absolute inset-0 transition-all duration-500 ease-in-out  ${
  //           selectedCard === index
  //             ? "opacity-100 z-30 transform scale-100"
  //             : "opacity-0 z-10 transform scale-95"
  //         }`}
  //       >
  //         <div className=" flex justify-center items-center py-16">
  //           <Image
  //             src={stat.image}
  //             alt={stat.title}
  //             className="h-full w-auto object-cover rounded-md shadow-md border"
  //             width={800}
  //             height={600}
  //           />
  //         </div>
  //       </div>
  //     ))}
  //   </div>
  // );

  return (
    <Section className="flex flex-col py-0 lg:py-10 bg-gradient-to-b from-[#F4F6F7] to-white">
      <Tag text="Benefits" />
      <Heading text="Unlock Transformative Benefits" />
      {/* {isMobile ? renderMobileView() : renderDesktopView()} */}
      {renderDesktopView()}
      {/* {!isMobile && renderImageOverlay()} */}
    </Section>
  );
};

export default Benefits;
