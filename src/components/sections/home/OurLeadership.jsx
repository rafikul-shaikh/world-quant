import { section } from "framer-motion/client";

export default function OurLeadership() {
  return (
    <section className="w-full min-h-screen bg-black rounded-t-[2xl]">
      <div className="flex flex-row justify-between p-8">
        <h2 className="text-[16px] font-normal">Our Leadership</h2>
        <h2 className="text-[16px] font-normal">Our Leadership</h2>
        <h2 className="text-[16px] font-normal">Our Leadership</h2>
      </div>
      <div className=" mt-20 flex  flex-col items-center gap-[15px] text-center md:mb-[100px]">
        <p className="max-w-[330px] text-[12px] font-azeret text-white/60 ">
          A global network of advisors, operators and investors. The people who
          built what’s now, helping you build what’s next.
        </p>

        <div className="mt-10 p2-mono text-white relative isolate flex -translate-x-[5px] overflow-hidden transition-transform duration-400 ease-in-out group-hover:translate-x-[5px]">
          <span className=" px-8 py-4 uppercase transition-transform duration-400 ease-in-out group-hover:-translate-y-full">
            meet the team
          </span>

          <span className="absolute inset-0 px-8 py-4 uppercase translate-y-full transition-transform duration-400 ease-in-out group-hover:translate-y-0">
            meet the team
          </span>

          <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white" />
          <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white" />
          <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white" />
          <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white" />
        </div>
      </div>
    </section>
  );
}
