import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Image from "next/image";

const images = [
    "/images/Hero_Image_Carousel.png",
    "/images/Hero_Image_Carousel.png",
    "/images/Hero_Image_Carousel.png"
];

export default function HeroSection() {
  return (
    <div className="flex  flex-col items-center justify-center text-center px-6 mt-16">
      <h1 className="text-5xl font-bold tracking-wide">Power Your World,</h1>
      <h1 className="text-5xl font-bold tracking-wide">Protect Our Planet</h1>

     
      <p className="max-w-lg text-lg leading-relaxed text-gray-400 mt-4">
        Sunova specializes in innovative solar solutions,  
        providing efficient and sustainable energy for homes  
        and businesses, making clean power more accessible  
        and reliable.
      </p>

      <Button className="bg-black text-white px-5 py-5 rounded-full mt-4">
        CHECK IT NOW
      </Button>

      {/* image carousel*/}
      <div className="w-screen mt-8">
        <Carousel>
            <CarouselContent>
                {images.map ((src, index) => (
                    <CarouselItem key={index} className="w-full">
                        <Image
                          src={src}
                          alt={`Slide ${index + 1}`}
                          width={1920}
                          height={1080}
                          className="w-full h-auto object-contain"
                          priority
                        />  
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
}
