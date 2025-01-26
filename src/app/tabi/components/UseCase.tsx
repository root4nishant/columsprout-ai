import Heading from "@/components/custom/reusables/Heading";
import Tag from "@/components/custom/Tag";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Pencil } from "lucide-react";

const useCases = [
  {
    title: "Standardize data format",
    description:
      "Make columns consistent, like fixing dates, phone numbers, or currency formats.",
  },
  {
    title: "Optimize column data",
    description:
      "Clean up columns by removing duplicates, fixing errors, or resizing content.",
  },
  {
    title: "Derive new details",
    description:
      "Use data to calculate or figure out new fields (e.g., age from birthdate)",
  },
  {
    title: "Generate briefs",
    description: "Summarize detailed data into quick, easy-to-read overviews.",
  },
  {
    title: "Extract keywords",
    description:
      "Pick out important words or phrases from text for tagging or analysis.",
  },
];

export default function UseCase() {
  return (
    <div className="w-full mx-auto py-12">
      <Tag text="Use Cases" />
      <Heading text="Choose from a Use Case suite" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {useCases.map((useCase, index) => (
          <Card
            key={index}
            className=" hover:bg-gray-100 transition-colors cursor-pointer rounded-sm"
          >
            <div className="lg:p-4 p-2  gap-4 flex flex-col">
              <CardHeader className="p-0">
                <CardTitle className="lg:text-2xl text-md font-semibold">
                  {useCase.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-sm lg:text-md text-muted-foreground font-secondary">
                  {useCase.description}
                </p>
              </CardContent>
            </div>
          </Card>
        ))}

        {/* Build Your Own Card */}
        <Card className=" hover:bg-gray-100 transition-colors cursor-pointer border-primary-dark rounded-sm lg:justify-center items-center justify-start flex">
          <CardHeader>
            <CardTitle className="lg:text-2xl text-md font-semibold flex  gap-2">
              <Pencil className="w-4 h-4" />
              Or Build your Own!
            </CardTitle>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
}
