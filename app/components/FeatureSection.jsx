import FeatureCard from "./FeatureCard";
import michelhome from "../../public/images/michelhome.png";
import Container from "../../public/images/Container.png";

export default function FeatureSection() {
  return (
    <div className="">

      <FeatureCard 
        title="Designing solar panel for home"
        subtitle="Michael’s Home"
        description="Our Home Solar Panels provide clean, renewable energy, reducing electricity costs while promoting sustainability. Designed for maximum efficiency and durability, our panels harness the power of the sun to power your home reliably."
        image={michelhome}
        variant="imageRight"
      />

      <FeatureCard 
        title="Designing solar panel for Industry"
        subtitle="George & Co. Solar Field"
        description="Our Industrial Solar Solutions deliver reliable, high-efficiency energy to power large-scale operations sustainably. Designed for maximum output and durability, our solar systems help industries reduce energy costs, lower carbon footprints, and achieve long-term energy independence."
        image={Container}
        variant="imageLeft"
      />
    </div>
  );
}
