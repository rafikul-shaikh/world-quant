import Footer from "@/components/layout/Footer";
import InsightsHero from "@/components/sections/insights/InsightsHero";
import LatestNews from "@/components/sections/insights/LatestNews";


export default function Insight(){
    return (
        <div>
           <InsightsHero/>
           <LatestNews/>
           <Footer/>
        </div>
    )
}