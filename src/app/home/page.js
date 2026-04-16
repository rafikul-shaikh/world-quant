import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/home/Hero";
import OurEthos from "@/components/sections/home/OurEthos";
import OurFocus from "@/components/sections/home/OurFocus";
import OurFounders from "@/components/sections/home/OurFounders";
import OurInvestors from "@/components/sections/home/OurInvestors";
import OurLeadership from "@/components/sections/home/OurLeadership";
import OurPortfolio from "@/components/sections/home/OurPortfolio";
import Partners from "@/components/sections/home/Partners";

export default function HomePage() {
  return (
    <div>
      <Hero />
      <OurEthos />
      <OurFocus />
      <OurPortfolio/>
      <OurLeadership/>
      <OurInvestors/>
      <OurFounders/>
      <Partners/>
      <Footer/>
    </div>
  );
}
