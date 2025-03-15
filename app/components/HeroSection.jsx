"use client";
import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft } from "lucide-react"; 

const images = [
  "/images/Hero_Image_Carousel.png",
  "/images/solarpanel2.jpg",
  "/images/solarpanel3.jpg",
  "/images/solarpanel4.jpg",
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const nextSlide = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center text-center mt-30">
      <h1 className="text-7xl tracking-wider font-roboto font-normal">Power Your World,</h1>
      <h1 className="text-7xl tracking-wider font-roboto font-normal">Protect Our Planet</h1>

      <p className="max-w-lg text-base font-roboto leading-tight font-light text-gray-400 mt-4">
        Sunova specializes in innovative solar solutions, providing efficient <br /> and sustainable energy for homes and businesses, making clean <br /> power more accessible and reliable.
      </p>

      <Button className="bg-black text-white font-inter font-normal px-5 py-5 rounded-full mt-4 cursor-pointer">
        CHECK IT NOW
      </Button>

      <div className="relative w-screen mt-20">
        <div className="w-full mx-auto relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((src, index) => (
              <div key={index} className="min-w-full h-[570px]">
                <Image
                  src={src}
                  alt={`Slide ${index + 1}`}
                  width={1920}
                  height={500}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            ))}
          </div>
        </div>

        {/* Text Above Buttons */}
        <div className="absolute bottom-20 left-5 text-white text-[24px]">
          <p className="font-roboto text-justify">Break Free From High</p>
          <p className="font-roboto text-justify">Electricity Bills</p>
        </div>

        {/* Navigation Buttons */}
        <div className="absolute bottom-5 left-5 flex gap-4">
          <Button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className={`w-12 h-12 flex items-center justify-center rounded-full border-2 border-white bg-transparent text-white ${
              currentIndex === 0 ? "opacity-50 cursor-not-allowed" : "hover:bg-white hover:text-black"
            }`}
          >
            <ArrowLeft className="w-6 h-6" />
          </Button>
          <Button
            onClick={nextSlide}
            disabled={currentIndex === images.length - 1}
            className={`w-12 h-12 flex items-center justify-center rounded-full border-2 border-white bg-transparent text-white ${
              currentIndex === images.length - 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-white hover:text-black"
            }`}
          >
            <ArrowRight className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </div>
  );
}
