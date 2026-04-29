import BuildProcessCard from "@/components/sections/why-wqf/BuildProcessCard";
import FounderNetwork from "@/components/sections/why-wqf/FounderNetwork";
import Founders from "@/components/sections/why-wqf/Founders";
import Hero from "@/components/sections/why-wqf/Hero";
import Insfrastructure from "@/components/sections/why-wqf/Infrastructure";
import Investors from "@/components/sections/why-wqf/Investors";

export default function WhyWQF() {
  return (
    <div >
    <Hero />
    <Founders/>
    <BuildProcessCard/>
    <Insfrastructure/>
    <FounderNetwork/>
    <Investors/>
     
    </div>
  );
}