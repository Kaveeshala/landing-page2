import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Image from "next/image";
import "@fontsource/roboto/400.css"

const images = [
    "/images/Hero_Image_Carousel.png",
    "/images/Hero_Image_Carousel.png",
    "/images/Hero_Image_Carousel.png"
];

export default function HeroSection() {
  return (
    <div className="flex  flex-col items-center justify-center text-center mt-30">
      <h1 className="text-7xl  tracking-wider">Power Your World,</h1>
      <h1 className="text-7xl  tracking-wider">Protect Our Planet</h1>

     
      <p className="max-w-lg text-base font-roboto leading-tight text-gray-400 mt-4">
        Sunova specializes in innovative solar solutions,  
        providing efficient and sustainable energy for homes  
        and businesses, making clean power more accessible  
        and reliable.
      </p>

      <Button className="bg-black text-white px-5 py-5 rounded-full mt-6">
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
