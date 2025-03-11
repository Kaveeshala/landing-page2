import Image from "next/image";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Services from "./components/Services";

export default function Home() {
  return (
    <div>
      <HeroSection />

      <About />

      <Services />
      
    </div>
  );
}
