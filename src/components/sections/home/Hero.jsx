"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full bg-[#050505] text-white overflow-visible">
      {/* BACKGROUND */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1500px] rounded-full border border-white/5" />
      </div>

      {/* CENTER CONTENT */}
      <div className="relative z-10 flex items-center justify-between min-h-screen px-8 lg:px-10 max-w-[1500px] mx-auto">
        <motion.h1 className="text-6xl font-normal uppercase">
          Forging Companies <br /> That
        </motion.h1>

        <motion.h1 className="text-6xl font-normal uppercase text-right">
          Pull The <br /> Future Forward
        </motion.h1>
      </div>

      {/* BOTTOM FOOTER */}
      <div className="absolute bottom-0 left-0 w-full px-8 lg:px-10 pb-12 z-10">
        <div className="w-full border-t border-white/40"></div>

        <div className="mt-8 flex justify-between items-center">
          {/* CONTACT */}
          <div className="relative px-8 py-2">
            <span className=" font-azeret text-[12px] uppercase">
              Contact Us
            </span>
            {/* Corner Accents */}

            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white" />
            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white" />
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white" />
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white" />
          </div>

          {/* TEXT */}
          <p className="max-w-xl text-[10px] text-white/40 font-azeret uppercase text-right leading-[1.8] tracking-[0.2em]">
            WorldQuant Foundry is a venture lab that empowers breakthrough
            founders to pull the future forward. Capital. Connections.
            Mentorship. Full-stack support. We deliver more than resources—we
            create the infrastructure for scale.
          </p>

          {/* LOGO */}
          <LogoIcon />
        </div>
      </div>
    </section>
  );
}

function LogoIcon() {
  return (
    <svg
      width="45"
      height="45"
      viewBox="0 0 65 65"
      fill="white"
      className="opacity-90"
    >
      <path d="M39.13 43.55C39.13 41.0371 41.1671 39 43.68 39H47.45C49.9629 39 52 36.9629 52 34.45L52 4.55C52 2.03711 54.0371 0 56.55 0L60.45 0C62.9629 0 65 2.03711 65 4.55001V34.45C65 36.9629 62.9629 39 60.45 39H56.68C54.1671 39 52.13 41.0371 52.13 43.55L52.13 60.45C52.13 62.9629 50.0929 65 47.58 65L43.68 65C41.1671 65 39.13 62.9629 39.13 60.45L39.13 43.55Z" />
    </svg>
  );
}
