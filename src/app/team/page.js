import Footer from "@/components/layout/Footer";
import AdvisorsAndTeam from "@/components/sections/team/AdvisorAndTeam";
import TeamEthos from "@/components/sections/team/TeamEthos";
import TeamFounders from "@/components/sections/team/TeamFounders";
import TeamHero from "@/components/sections/team/TeamHero";
import TeamLeadership from "@/components/sections/team/TeamLeadership";


export default function Team() {
  return (
    <div >
      <TeamHero/>
      <TeamLeadership/>
      <AdvisorsAndTeam/>
      <TeamFounders/>
      <TeamEthos/>
      <Footer/>
    </div>
  );
}