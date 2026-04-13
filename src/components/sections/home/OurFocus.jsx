import { div, section } from "framer-motion/client";

export default function OurFocus() {
  return (
    <section className="w-full min-h-screen bg-[#dadada]">
      <div className="text-center  mx-auto max-w-[1400px] text-black ">
        <h1>Our Focus</h1>
        <h2 className="text-5xl font-bold uppercase">
          Exponential Technologies.
        </h2>
        <h3 className="text-5xl font-bold uppercase">
          Trillion-Dollar Markets.
        </h3>
        <p className="w-3xl:">
          AI, biotech, robotics, blockchain, NewSpace—these aren't incremental
          improvements. They're generational leaps that solve humanity's hardest
          challenges. They move faster than convention. So do we.
        </p>
      </div>
    </section>
  );
}
