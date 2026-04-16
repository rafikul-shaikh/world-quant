"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function OurFounders() {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: "+=200%",
      pin: true,
      scrub: true,
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full min-h-screen overflow-hidden bg-black py-[120px] md:py-[200px]"
    >
      <div className="max-w-9xl mx-auto px-8 flex justify-between">
        {/* Left Side - SCROLLABLE CARDS */}
        <div className="w-[520px]">
          <div className="h-full  pr-2 space-y-4">
            {/* CARD 1 */}
            <div className="h-[500px] w-[670px] bg-white/30 rounded-3xl p-4 text-white flex items-center justify-center">
              Card 1
            </div>

            {/* CARD 2 */}
            <div className="h-[500px] w-[670px] bg-white/20 rounded-3xl p-4 text-white flex items-center justify-center">
              Card 2
            </div>

            {/* CARD 3 */}
            <div className="h-[500px] w-[670px] bg-white/30 rounded-3xl p-4 text-white flex items-center justify-center">
              Card 3
            </div>
          </div>
        </div>

        {/* right side content  */}
        <div className="px-10">
          <div className="">
            <h2 className=" text-[14px] font-normal mb-4 uppercase text-white/80">
              founders
            </h2>
            <p className="uppercase font-normal text-[40px] max-w-[500px] text-white leading-10">
              Build fast, with zero
              <br />
              friction and total
              <br />
              focus.
            </p>
            <div className=" mt-4 mb-8 w-full max-w-[450px] h-[1px] bg-white/20 " />
            <p className="max-w-[450px] text-[12px] font-azeret text-white/50 uppercase">
              Skip the noise and build with a launch-ready team, deep resources,
              and immediate market access from day one.
            </p>
          </div>

          <div className="mt-8 ">
            <a
              href="https://www.worldquantfoundry.com/portfolio"
              className="group relative isolate inline-block hover:animate-glitch-hover motion-reduce:hover:animate-none"
            >
              <div className="px-[20px] py-[10px]">
                {/* DOT */}
                <div className="bg-white button--dot size-[10px] -translate-x-[24px] rounded-[3px] opacity-0 blur-[20px] transition-all duration-400 ease-in-out group-hover:-translate-x-[5px] group-hover:opacity-100 group-hover:blur-0" />

                {/* TEXT */}
                <div className="p2-mono text-white relative isolate flex -translate-x-[5px] overflow-hidden transition-transform duration-400 ease-in-out group-hover:translate-x-[5px]">
                  <span className=" text-[12px] uppercase transition-transform duration-400 ease-in-out group-hover:-translate-y-full">
                    build with us
                  </span>

                  <span className="absolute inset-0 text-[12px] uppercase translate-y-full transition-transform duration-400 ease-in-out group-hover:translate-y-0">
                    build with us
                  </span>
                </div>
              </div>

              {/* CORNER  */}

              <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white" />
              <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white" />
              <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white" />
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
