"use client";
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
      <h1 className="text-7xl tracking-wider font-roboto font-normal">Power Your World,</h1>
      <h1 className="text-7xl tracking-wider font-roboto font-normal">Protect Our Planet</h1>

      <p className="max-w-lg text-base font-roboto leading-tight font-roboto font-light text-gray-400 mt-4">
        Sunova specializes in innovative solar solutions, providing efficient <br /> and sustainable energy for homes and businesses, making clean <br /> power more accessible and reliable.
      </p>

      <Button className="bg-black text-white font-inter font-normal px-5 py-5 rounded-full mt-4 cursor-pointer">
        CHECK IT NOW
      </Button>

      <div className="relative w-screen mt-20">
        <Carousel className="w-full mx-auto"> 
          <CarouselContent>
            {images.map((src, index) => (
              <CarouselItem key={index} className="w-full">
                <div className="w-full h-[570px]">
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

          <CarouselPrevious className="absolute left-1 top-1/2 transform -translate-y-1/2 bg-black text-white p-4 rounded-full" />
          <CarouselNext className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-black text-white p-4 rounded-full" />

        </Carousel>
      </div>
    </div>
  );
}
