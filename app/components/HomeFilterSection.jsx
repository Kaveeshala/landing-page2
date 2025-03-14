"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardDescription, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import home1 from "../../public/images/home1.png";
import home2 from "../../public/images/home2.png";
import home3 from "../../public/images/home3.png";
import public_space from "../../public/images/public_space.png";
import industry from "../../public/images/industry.png";
import priya from "../../public/images/priya.png";
import xia from "../../public/images/xia.png";
import stephanie from "../../public/images/stephanie.png"
import vector from "../../public/images/Vector.png";

const images = {
  home: [
    { img: home1, profilePic: xia, name: "Xia Liaung", starMark: vector, num: 5, description: "Switching to Solara was the best decision—we now enjoy lower energy bills and a sustainable, reliable power source!" },
    { img: home2, profilePic: priya, name: "Priya Sharma", starMark: vector, num: 5, description: "Expert team made the transition to solar effortless, and our savings have been incredible!" },
    { img: home3, profilePic: stephanie, name: "Stephanie Georgia", starMark: vector, num: 5, description: "Switching to Solara was the best decision—we now enjoy lower energy bills and a sustainable, reliable power source." }
  ],

  publicSpace: {
    img: public_space
  },

  industry: {
    img: industry
  }
};

export default function HomeFilterSection() {
  const [selectedCategory, setSelectedCategory] = useState('home'); // Updated to 'home'

  return (
    <section className='max-w-7xl mx-auto'>
      <Card className="border-none shadow-none">
        <CardHeader className="flex flex-col">
          <CardDescription className="w-full text-center">
            <h1 className='font-roboto text-[64px] text-black mt-12'>
              Join thousands of satisfied customers
            </h1>
          </CardDescription>
          <div className='flex gap-4 mt-16'>
            <Button
              className="rounded-full  bg-gray-200 text-black border border-transparent hover:bg-white hover:border-black transition cursor-pointer"
              onMouseEnter={() => setSelectedCategory('home')}
            >
              Home
            </Button>
            <Button
              className="rounded-full bg-gray-200 text-black border border-transparent hover:bg-white hover:border-black transition cursor-pointer"
              onMouseEnter={() => setSelectedCategory('publicSpace')}
            >
              Public Space
            </Button>
            <Button
              className="rounded-full bg-gray-200 text-black border border-transparent hover:bg-white hover:border-black transition cursor-pointer"
              onMouseEnter={() => setSelectedCategory('industry')}
            >
              Industry
            </Button>
          </div>
        </CardHeader>

        <CardContent className="flex gap-4 mt-10">
          {Array.isArray(images[selectedCategory]) ? (
            images[selectedCategory].map((image, index) => (
              <div key={index} className='flex flex-col'>
                <div className="relative w-[400px] h-[200px]">
                  <Image
                    src={image.img}
                    alt={`${selectedCategory} image ${index + 1}`}
                    layout="fill"
                    objectFit="cover" // Ensures all images fill the space equally
                  />
                </div>
                <div className="flex items-center justify-between mt-2">
                  <div className="flex items-center gap-2">
                    <Image
                      src={image.profilePic}
                      alt={`Profile ${index + 1}`}
                      width={30}
                      height={30}
                      className="rounded-full"
                    />
                    <p className="font-roboto font-medium">{image.name}</p>
                  </div>
                  <div className="text-yellow-500 flex items-center gap-1">
                    <Image
                      src={image.starMark}
                      alt="Star mark"
                      width={20}
                      height={20}
                    />
                    <p className="font-roboto text-sm">{image.num}</p>
                  </div>
                </div>
                <p className=" font-roboto mt-4 leading-tight text-sm text-gray-400">
                  {image.description}
                </p>
              </div>
            ))
          ) : (

            // If it's an object , display the image without mapping
            <div key={selectedCategory} className='flex flex-col'>
              <div className="relative w-[400px] h-[200px]">
                <Image
                  src={images[selectedCategory].img}
                  alt={`${selectedCategory} image`}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </section>
  );
}
