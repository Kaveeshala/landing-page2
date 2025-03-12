import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";

export default function FeatureCard({ 
  title, 
  subtitle, 
  description, 
  image, 
  variant = "imageRight" 
}) {
  return (
    <Card className="max-w-7xl mx-auto shadow-none border-none mt-22 overflow-hidden">
      <CardContent>
       
        <div className="w-1/3 flex items-center">
          {variant === "imageRight" && <Separator className="h-[2px] w-[40px] bg-black" />}
          <h2 className="text-6xl whitespace-nowrap tracking-wide">{title}</h2>
          {variant === "imageLeft" && <Separator className="h-[2px] w-[40px] bg-black" />}
        </div>

        <div className={`flex ${variant === "imageRight" ? "flex-row" : "flex-row-reverse"} items-start mt-20 gap-6`}>
          
          <div className="w-1/3 flex flex-col">
            <h3 className="text-xl font-medium">{subtitle}</h3>
            <p className="mt-6 text-gray-400 text-sm leading-tight">{description}</p>
            <p className="mt-4 cursor-pointer underline">LEARN MORE</p>
            
            <div className="flex gap-87 text-xs mt-40">
              <span>2024</span> <span>2024</span>
            </div>
          </div>

          <div className="w-2/3 relative">
            <Image src={image} alt={title} className="w-full object-cover shadow-md" />
          </div>

        </div>

      </CardContent>
    </Card>
  );
}
