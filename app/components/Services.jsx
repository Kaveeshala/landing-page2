import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import home from "../../public/images/home.png";
import industry from "../../public/images/industry.png";
import public_space from "../../public/images/public_space.png";
import { Separator } from "@/components/ui/separator";

export default function ServiceSection() {
  const images = [
    {
      src: public_space, 
      description: "Public Space",
    },
    {
      src: home, 
      description: "Home",
    },
    {
      src: industry, 
      description: "Industry",
    },
  ];

  return (
    <Card className="max-w-7xl mx-auto shadow-none border-none mt-38">
      <CardContent className="font-roboto">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h2 className="text-[64px] font-roboto">Services</h2>
            <Separator className="h-[2px] w-[40px] bg-black" />
          </div>
          <p className="max-w-md text-gray-400 font-light text-base leading-tight">
            Harnessing the Power of the Sun to Provide Sustainable, Efficient, and Reliable Energy Solutions.
          </p>
        </div>

      
        <div className="flex flex-cols gap-6 w-full mt-6"> 
          {images.map((image, index) => (
            <Card key={index} className="w-full border-none shadow-none">
              <CardHeader className="overflow-hidden px-0 group">
                <Image 
                  src={image.src} 
                  alt={image.description}
                  className="group-hover:scale-105 transition object-cover w-full"
                />
              </CardHeader>
              <CardContent className="px-0">
                <p className="font-medium text-[24px]">{image.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
