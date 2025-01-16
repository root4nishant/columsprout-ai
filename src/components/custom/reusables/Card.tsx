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
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

interface ProductCardProps extends CardProps {
  images: string[]; // Array of image URLs
}

export default function ReusableCard({
  images,
  title,
  description,
  buttonText,
}: ProductCardProps) {
  return (
    <Card className="w-full max-w-lg overflow-hidden shadow-none border-none">
      <Carousel className="w-full">
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <div className="relative aspect-[3/1.5] w-full h-auto">
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${title} - View ${index + 1}`}
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
      <CardContent className="p-4 rounded-none">
        <h3 className="text-3xl font-semibold mb-2 flex items-center gap-2">
          {title}{" "}
          <span>
            <Sparkles className="w-4 h-4 " />
          </span>{" "}
        </h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        <Button className="w-auto font-bold text-white text-xl rounded-sm py-6">
          {buttonText}
        </Button>
      </CardContent>
    </Card>
  );
}
