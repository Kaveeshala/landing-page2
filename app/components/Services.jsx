import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import home from "../../public/images/home.png";
import industry from "../../public/images/industry.png";
import public_space from "../../public/images/public_space.png";

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
    <Card className="max-w-7xl mx-auto shadow-none border-none mt-28">
      <CardContent>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h2 className="text-5xl">Services</h2>
            <div className="w-69 h-0.5 bg-black"></div>
          </div>
          <p className="max-w-md text-gray-400 text-sm leading-tight">
            Harnessing the Power of the Sun to Provide Sustainable, Efficient, and Reliable Energy Solutions.
          </p>
        </div>

      
        <div className="flex flex-cols gap-2 w-full mt-6"> 
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
                <p className="font-medium">{image.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
