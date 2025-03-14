"use client"
import { useState } from "react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

export default function FaQSection() {
  const [expandedItem, setExpandedItem] = useState(null);

  const handleToggle = (value) => {
    setExpandedItem((prev) => (prev === value ? null : value));
  };

  return (
    <div className="max-w-7xl mx-auto mt-28">
      <div className="flex flex-cols gap-50 items-start">
      
        {/* Left Section (Accordion) */}
        <div>
          <div className="flex flex-cols gap-2">
            <h1 className="text-[64px] font-roboto">FAQ</h1>
            <div className="w-50 h-0.5 bg-gray-400 mt-12"></div>
          </div>
       
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-roboto mt-44">Still have a question?</h2>
            <p className="font-roboto text-sm text-gray-400 ">don't worry, we are always here to help you. <br /> Just click the button below</p>
            <p className="text-gray-400"></p>
           <Button className="bg-black text-white rounded-full px-5 py-5 w-34">CONTACT US</Button>
          </div>
        </div>

        {/* Right Section (Accordion) */}
        <div className="flex justify-end w-full">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="q1" className="border-t border-gray-300t">
              <AccordionTrigger
                className="text-lg font-medium group no-underline hover:no-underline focus:no-underline appearance-none [&>svg]:hidden"
                onClick={() => handleToggle("q1")}
              >
                <span className="flex font-roboto font-normal text-[30px] items-center justify-between mt-4 mb-4 w-full text-right">
                  Are there any government incentives for solar panels?
                  <span className="text-2xl">
                    {expandedItem === "q1" ? "-" : "+"}
                  </span>
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-justify text-gray-400 font-roboto font-light text-[16px]">
                Yes, many governments offer tax credits, rebates, and other incentives to encourage solar adoption.
                Check with local authorities to learn about available benefits in your area.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q2" className="border-gray-300">
              <AccordionTrigger
                className="text-lg font-medium group no-underline hover:no-underline focus:no-underline appearance-none [&>svg]:hidden"
                onClick={() => handleToggle("q2")}
              >
                <span className="flex font-roboto font-normal text-[30px] items-center justify-between mt-4 mb-4 w-full text-right">
                  How long does it take to install a solar panel system?
                  <span className="text-2xl">
                    {expandedItem === "q2" ? "-" : "+"}
                  </span>
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-justify text-gray-400  font-roboto font-light text-[16px]">
                The installation of a solar panel system typically takes 1 to 3 days, depending on the system size
                and site conditions.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q3" className="border-gray-300">
              <AccordionTrigger
                className="text-lg font-medium group no-underline hover:no-underline focus:no-underline appearance-none  [&>svg]:hidden"
                onClick={() => handleToggle("q3")}
              >
                <span className="flex font-roboto font-normal text-[30px] items-center justify-between mt-4 mb-4 w-full text-right">
                  How much electricity can a solar panel system generate?
                  <span className="text-2xl">
                    {expandedItem === "q3" ? "-" : "+"}
                  </span>
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-justify text-gray-400  font-roboto font-light text-[16px]">
                The amount of electricity generated depends on factors such as panel efficiency, sunlight exposure, 
                and system size. A typical residential system can generate 300–600 kWh per month.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q4" className="border-gray-300">
              <AccordionTrigger
                className="text-lg font-medium group no-underline hover:no-underline focus:no-underline appearance-none [&>svg]:hidden"
                onClick={() => handleToggle("q4")}
              >
                <span className="flex font-roboto font-normal text-[30px] items-center justify-between mt-4 mb-4 w-full text-right">
                  Are there any government incentives for solar panels?
                  <span className="text-2xl">
                    {expandedItem === "q4" ? "-" : "+"}
                  </span>
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-justify text-gray-400 font-roboto font-light text-[16px]">
                The amount of electricity generated depends on factors such as panel efficiency, sunlight exposure, 
                and system size. A typical residential system can generate 300–600 kWh per month.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q5" className="border-gray-300">
            </AccordionItem>
          </Accordion>
        </div>
     
      </div>
    </div>
  );
}
