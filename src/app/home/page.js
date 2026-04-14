import Hero from "@/components/sections/home/Hero";
import OurEthos from "@/components/sections/home/OurEthos";
import OurFocus from "@/components/sections/home/OurFocus";
import OurPortfolio from "@/components/sections/home/OurPortfolio";

export default function HomePage() {
  return (
    <div>
      <Hero />
      <OurEthos />
      <OurFocus />
      <OurPortfolio/>
    </div>
  );
}
