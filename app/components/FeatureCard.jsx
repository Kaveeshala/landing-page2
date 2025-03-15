"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function FeatureCard({
  title,
  subtitle,
  description,
  images,
  variant = "imageRight",
}) {
  const [imageIndex, setImageIndex] = useState(0);

  const prevImage = () => {
    if (imageIndex > 0) {
      setImageIndex((prev) => prev - 1);
    }
  };

  const nextImage = () => {
    if (imageIndex < images.length - 1) {
      setImageIndex((prev) => prev + 1);
    }
  };

  return (
    <Card className="max-w-7xl mx-auto shadow-none border-none mt-22 overflow-hidden">
      <CardContent>
    
        <div className="w-1/3 flex items-center gap-4">
          {variant === "imageRight" && <Separator className="h-[2px] w-[40px] bg-black" />}
          <h2 className="font-roboto text-[64px] whitespace-nowrap">{title}</h2>
          {variant === "imageLeft" && <Separator className="h-[2px] w-[40px] bg-black" />}
        </div>

        <div className={`flex ${variant === "imageRight" ? "flex-row" : "flex-row-reverse"} items-start mt-20 gap-6`}>
        
          <div className="w-1/3 flex flex-col">
            <h3 className="text-xl font-roboto font-medium">{subtitle}</h3>
            <p className="mt-6 text-gray-400 text-[14px] font-roboto font-light leading-tight">{description}</p>
            <p className="mt-4 font-roboto cursor-pointer underline">LEARN MORE</p>
          </div>

         
          <div className="w-2/3 relative">
        
            <div className="relative overflow-hidden w-full h-[400px]"> {/* Fixed height and width */}
              <Image
                src={images[imageIndex]}
                alt={title}
                layout="fill"  
                objectFit="cover"  
                className="transition-transform duration-400"
              />
            </div>

            <div className="absolute bottom-5 left-5 flex gap-2">
              <Button
                onClick={prevImage}
                disabled={imageIndex === 0}
                className={`w-12 h-12 flex items-center justify-center rounded-full border-2 border-white bg-transparent text-white ${
                  imageIndex === 0 ? "opacity-50 cursor-not-allowed" : "hover:bg-white hover:text-black"
                }`}
              >
                <ArrowLeft className="w-6 h-6" />
              </Button>
              <Button
                onClick={nextImage}
                disabled={imageIndex === images.length - 1}
                className={`w-12 h-12 flex items-center justify-center rounded-full border-2 border-white bg-transparent text-white ${
                  imageIndex === images.length - 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-white hover:text-black"
                }`}
              >
                <ArrowRight className="w-6 h-6" />
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
