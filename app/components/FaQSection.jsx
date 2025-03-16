"use client";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function FaQSection() {
  const faqs = [
    {
      question: "Are there any government incentives for solar panels?",
      answer: "Yes, many governments offer tax credits, rebates, and other incentives to encourage solar adoption. Check with local authorities to learn about available benefits in your area."
    },
    {
      question: "How long does it take to install a solar panel system?",
      answer: "The installation of a solar panel system typically takes 1 to 3 days, depending on the system size and site conditions."
    },
    {
      question: "How much electricity can a solar panel system generate?",
      answer: "The amount of electricity generated depends on factors such as panel efficiency, sunlight exposure, and system size. A typical residential system can generate 300–600 kWh per month."
    },
    {
      question: "What maintenance is required for a solar panel system?",
      answer: "Solar panels require very little maintenance. Regular cleaning and periodic checks by a professional are typically sufficient."
    },
  ];

  const [openItem, setOpenItem] = useState("faq-0"); 

  return (
    <div className="max-w-7xl mx-auto mt-28 px-4">
      <div className="flex flex-col lg:flex-row gap-16 items-start">
        {/* Left Section */}
        <div className="w-full lg:w-1/3 flex flex-col justify-between min-h-[400px]">
          <div>
            <div className="flex gap-2">
              <h1 className="text-[64px] font-roboto">FAQ</h1>
              <div className="w-full h-0.5 bg-gray-400 mt-12"></div>
            </div>
          </div>
          <div className="flex flex-col gap-3 mb-4 mt-auto" style={{ width: '266px' }}>
            <h2 className="text-2xl font-roboto">Still have a question?</h2>
            <p className="font-roboto text-sm text-gray-400">
              Don't worry, we are always free to help you, just click the button below.
            </p>
            <Button className="bg-black text-white rounded-full cursor-pointer w-[133px] h-[43px] 
              border pt-[13px] pr-[21px] pb-[13px] pl-[21px] gap-[10px]">
              CONTACT US
            </Button>
          </div>
        </div>

        {/* Right Section (Accordion) */}
        <div className="w-full lg:w-2/3">
          <Accordion
            type="single"
            collapsible
            value={openItem}
            onValueChange={(value) => setOpenItem(value)} 
            className="w-full"
          >
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`faq-${index}`} className="border-b border-t border-gray-300 last:border-b">
                <AccordionTrigger className="group flex justify-between items-center w-full py-4 text-lg font-medium hover:no-underline focus:no-underline [&>svg]:hidden">
                  <span className="font-roboto font-normal text-[30px]">{faq.question}</span>
                  <span className="text-2xl transition-all">
                    <span className="group-data-[state=open]:hidden">+</span>
                    <span className="hidden group-data-[state=open]:block">−</span>
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 font-roboto font-light text-[17px] pb-4 px-2 transition-all duration-300">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}
