import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

export default function FaQSection() {
  return (
    <div className="max-w-7xl mx-auto mt-28 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Left Column */}
        <div className="space-y-6">
          <div className="flex flex-cols gap-2">
            <h1 className="text-2xl font-bold">FAQ</h1>
            <div className="w-90 h-0.5 bg-black mt-4"></div>
          </div>
          <h2 className="text-xl font-semibold">Still have a question?</h2>
          <p className="text-gray-400">Don't worry, we are always here to help you.</p>
          <p className="text-gray-400">Just click the button below.</p>
          <Button className="bg-black text-white rounded-full mt-4">CONTACT US</Button>
        </div>

        {/* Right Column - FAQ Accordion */}
        <div>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="q1">
              <AccordionTrigger className="text-lg font-medium">
                Are there any government incentives for solar panels?
              </AccordionTrigger>
              <AccordionContent>
                Yes, many governments offer tax credits, rebates, and other incentives to encourage solar adoption.
                Check with local authorities to learn about available benefits in your area.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q2">
              <AccordionTrigger className="text-lg font-medium">
                How long does it take to install a solar panel system?
              </AccordionTrigger>
              <AccordionContent>
                The installation of a solar panel system typically takes **1 to 3 days**, depending on the system size
                and site conditions.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q3">
              <AccordionTrigger className="text-lg font-medium">
                How much electricity can a solar panel system generate?
              </AccordionTrigger>
              <AccordionContent>
                The amount of electricity generated depends on factors such as panel efficiency, sunlight exposure, 
                and system size. A typical residential system can generate **300–600 kWh per month**.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q4">
              <AccordionTrigger className="text-lg font-medium">
                Are there any government incentives for solar panels?
              </AccordionTrigger>
              <AccordionContent>
                Yes, various federal and state programs offer incentives to reduce the cost of solar installation. 
                These may include tax credits, rebates, and net metering benefits.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
