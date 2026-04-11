"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full bg-[#050505] text-white flex flex-col font-sans overflow-hidden">
      {/* BACKGROUND LAYER */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] aspect-square rounded-full border border-white/5 animate-pulse" />
      </div>

      {/* MIDDLE SECTION (Typography)*/}

      <div className="relative z-10 flex-1 flex flex-col justify-center  px-8 lg:px-10   ">
        <div className="w-full max-w-[1500px] mx-auto flex flex-col lg:flex-row justify-between items-start ">
          {/* left heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl font-bold uppercase tracking-tighter"
          >
            Forging Companies
            <br /> That <br />
          </motion.h1>

          {/* right heading */}

          <motion.h1
            initial={{ opacity: 0, y: 90 }}
            animate={{ opacity: 1, y: 90 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl font-bold uppercase tracking-tighter text-right self-end"
          >
            Pull The <br /> Future Forward
          </motion.h1>
        </div>
      </div>

      {/* (Footer/Contact)*/}

      <div className="relative mx-auto w-full px-8 lg:px-10  pb-12 ">
        <div className="w-full border-t border-white/40 "></div>
        <div className="mt-8 w-full flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="relative  cursor-pointer px-6 py-4  transition-colors hover:bg-white/5">
            <span className="text-[10px] font-normal  uppercase whitespace-nowrap shrink-0">
              Contact Us
            </span>

            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/40" />
            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/40" />
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/40" />
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/40" />
          </div>

          <div className="max-w-xl justify-end">
            <p className="text-[12px] font-mono text-white/40 uppercase text-right leading-[1.8] tracking-[0.2em] ">
              WorldQuant Foundry is a venture lab that empowers breakthrough
              founders to pull the future forward. Capital. Connections.
              Mentorship. Full-stack support. We deliver more than resources—we
              create the infrastructure for scale.
            </p>
          </div>
          <div className="shrink-0  ">
            <LogoIcon />
          </div>
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
