import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";

export default function FeatureCard({ 
  title, 
  subtitle, 
  description, 
  image, 
  variant = "imageRight" 
}) {
  return (
    <Card className="max-w-7xl mx-auto p-8 shadow-none border-none">
      <CardContent>
        <div className={`flex items-center ${variant === "imageRight" ? "flex-row" : "flex-row-reverse"} gap-6`}>
          
          <div className="flex-1">
           
            <div className={`flex items-center ${variant === "imageRight" ? "gap-4" : "flex-row-reverse gap-4"}`}>
              {variant === "imageRight" ? (
                <>
                  <div className="w-12 h-1 bg-gray-400"></div> {/* Separator */}
                  <h2 className="text-2xl font-semibold">{title}</h2>
                </>
              ) : (
                <>
                  <h2 className="text-2xl font-semibold">{title}</h2>
                  <div className="w-12 h-1 bg-gray-400"></div> {/* Separator */}
                </>
              )}
            </div>

            <h3 className="mt-4 text-lg font-medium">{subtitle}</h3>

            <p className="mt-2 text-gray-600 leading-relaxed">{description}</p>

            <p className="mt-4  font-semibold cursor-pointer">LEARN MORE</p>

            <div className="mt-4 text-gray-500 text-sm">2024 2024</div>
          </div>

          <div className="flex-1 relative">
            <Image src={image} alt={title} className="w-full object-cover shadow-md" />
            <div className="absolute bottom-0 left-0 text-gray-500 text-sm">2024 2024</div>
          </div>

        </div>
      </CardContent>
    </Card>
  );
}
