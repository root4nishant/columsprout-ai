"use client";

import Image from "next/image";
import { CardProps } from "@/types";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/custom/reusables/button";
import { Sparkles } from "lucide-react";
import Link from "next/link";

interface ProductCardProps extends CardProps {
  images: string[];
  data: {
    images: string[];
    title: string;
    link: string;
    description: string;
    buttonText: string;
  };
}

export default function ReusableCard({ data }: ProductCardProps) {
  return (
    <Card className="w-full lg:max-w-2xl md:max-w-full overflow-hidden shadow-none border-none rounded-md rounded-b-none bg-transparent">
      <Carousel className="w-full">
        <CarouselContent>
          {data?.images.map((image, index) => (
            <CarouselItem key={index}>
              <div className="relative aspect-[3/1.5] w-full h-auto z-5">
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${data?.title} - View ${index + 1}`}
                  fill
                  className="object-cover rounded-t-lg"
                  priority={index === 0}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2" />
        <CarouselNext className="right-2" />
      </Carousel>
      <CardContent className=" p-0 pt-4 rounded-none lg:text-left text-center ">
        <h3 className="lg:text-3xl text-2xl  mb-2 flex lg:justify-start justify-center items-center gap-2 font-primary font-semibold">
          {data.title}{" "}
          <span>
            <Sparkles className="w-4 h-4 " />
          </span>{" "}
        </h3>
        <p className="font-secondary text-muted-foreground mb-4">{data.description}</p>
        <Link href={data.link} passHref>
          <Button className=" font-bold text-white  text-lg rounded-sm py-6 hover:bg-black  ">
            {data.buttonText}
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}
