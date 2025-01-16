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
    <Card className="w-full max-w-md mx-auto overflow-hidden">
      <Carousel className="w-full">
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${title} - View ${index + 1}`}
                  fill
                  className="object-cover rounded-t-lg"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={index === 0}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2" />
        <CarouselNext className="right-2" />
      </Carousel>
      <CardContent className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        <Button className="w-full">{buttonText}</Button>
      </CardContent>
    </Card>
  );
}
