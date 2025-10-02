import HomeHero from "@/components/sections/Hero";
import Mission from "@/components/sections/Mission";
import Portfolio from "@/components/sections/Portfolio";
import Services from "@/components/sections/Services";
import Tools from "@/components/sections/Tools";

export default function Home() {
  return (
    <div className="w-full">
      <HomeHero />
      <Mission />
      <Services />
      <Portfolio />
      <Tools />
    </div>
  );
}
