"use client";

import * as React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const images = [
  "/images/Hero_Image_Carousel.png",
  "/images/solarpanel1.jpg",
  "/images/solarpanel2.jpg",
];

export default function HeroSection() {
  return (
    <div className="flex flex-col items-center justify-center text-center mt-30">
      <h1 className="text-7xl tracking-wider">Power Your World,</h1>
      <h1 className="text-7xl tracking-wider">Protect Our Planet</h1>

      <p className="max-w-lg text-base font-roboto leading-tight text-gray-400 mt-4">
        Sunova specializes in innovative solar solutions, providing efficient and sustainable energy for homes and businesses, making clean power more accessible and reliable.
      </p>

      <Button className="bg-black text-white px-5 py-5 rounded-full mt-6">
        CHECK IT NOW
      </Button>

      {/* Image carousel with fixed buttons */}
      <div className="relative w-screen mt-8">
        <Carousel className="w-full  mx-auto"> {/* Centered Carousel */}
          <CarouselContent>
            {images.map((src, index) => (
              <CarouselItem key={index} className="w-full">
                <div className="w-full h-[570px]"> {/* Set fixed height */}
                  <Image
                    src={src}
                    alt={`Slide ${index + 1}`}
                    width={1920}
                    height={500}
                    className="w-full h-full object-cover" 
                    priority
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="absolute left-10 top-1/2 transform -translate-y-1/2 bg-black text-white p-4 rounded-full" />
          <CarouselNext className="absolute right-10 top-1/2 transform -translate-y-1/2 bg-black text-white p-4 rounded-full" />

        </Carousel>
      </div>
    </div>
  );
}
