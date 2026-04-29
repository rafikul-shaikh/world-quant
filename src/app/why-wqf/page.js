import Footer from "@/components/layout/Footer";
import BuildProcessCard from "@/components/sections/why-wqf/BuildProcessCard";
import FounderNetwork from "@/components/sections/why-wqf/FounderNetwork";
import Founders from "@/components/sections/why-wqf/Founders";
import Hero from "@/components/sections/why-wqf/Hero";
import Insfrastructure from "@/components/sections/why-wqf/Infrastructure";
import InvestorBenefits from "@/components/sections/why-wqf/InvestorBenefits";
import Investors from "@/components/sections/why-wqf/Investors";
import PartnerBlocks from "@/components/sections/why-wqf/PartnerBlocks";
import Partners from "@/components/sections/why-wqf/Partners";

export default function WhyWQF() {
  return (
    <div >
    <Hero />
    <Founders/>
    <BuildProcessCard/>
    <Insfrastructure/>
    <FounderNetwork/>
    <Investors/>
    <InvestorBenefits/>
    <Partners/>
    <PartnerBlocks/>
    <Footer/>
     
    </div>
  );
}