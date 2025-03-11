import Image from "next/image";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Services from "./components/Services";
import FeatureSection from "./components/FeatureSection";

export default function Home() {
  return (
    <div>
      <HeroSection />

      <About />

      <Services />

      <FeatureSection />
      
    </div>
  );
}
