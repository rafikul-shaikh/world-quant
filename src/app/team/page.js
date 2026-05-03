import AdvisorsAndTeam from "@/components/sections/team/AdvisorAndTeam";
import Leadership from "@/components/sections/team/Leadership";
import TeamHero from "@/components/sections/team/TeamHero";


export default function Team() {
  return (
    <div >
      <TeamHero/>
      <Leadership/>
      <AdvisorsAndTeam/>
    </div>
  );
}