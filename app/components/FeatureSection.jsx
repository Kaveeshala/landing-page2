import FeatureCard from "./FeatureCard";

export default function FeatureSection() {
  return (
    <div className="">

      <FeatureCard 
        title="Designing solar panel for home"
        subtitle="Michael’s Home"
        description="Our Home Solar Panels provide clean, renewable energy, reducing electricity costs while promoting sustainability. Designed for maximum efficiency and durability, our panels harness the power of the sun to power your home reliably."
        images={["/images/solarpanelhome1.png", "/images/solarpanelhome2.jpg","/images/solarpanelhome3.jpg"]}
        variant="imageRight"
      />

      <FeatureCard 
        title="Designing solar panel for Industry"
        subtitle="George & Co. Solar Field"
        description="Our Industrial Solar Solutions deliver reliable, high-efficiency energy to power large-scale operations sustainably. Designed for maximum output and durability, our solar systems help industries reduce energy costs, lower carbon footprints, and achieve long-term energy independence."
        images={["/images/solarpanelindustry1.png","/images/solarpanelindustry2.jpg","/images/solarpanelindustry3.jpg","/images/solarpanelindustry4.jpg"]}
        variant="imageLeft"
      />
    </div>
  );
}
