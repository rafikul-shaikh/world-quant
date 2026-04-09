"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full bg-[#050505] text-white flex flex-col pt-60 pb-12 px-6 lg:px-16 overflow-hidden">
      {/* 1. LAYER: DYNAMIC BACKGROUND MESH */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Subtle grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

        {/* Animated Particle Sphere Placeholder */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] aspect-square opacity-30">
          <div className="w-full h-full rounded-full border border-white/10 animate-[pulse_8s_ease-in-out_infinite]" />
          <div className="absolute inset-0 rounded-full border border-white/5 rotate-45 scale-90" />
        </div>
      </div>

      {/* 2. LAYER: MAIN TYPOGRAPHY */}
      <div className="relative z-10 flex flex-col lg:flex-row justify-between w-full max-w-[1400px] mx-auto flex-1">
        {/* Left Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl"
        >
          <h1 className=" text-6xl font-bold  uppercase">
            Forging Companies <br /> That <br />
          </h1>
        </motion.div>

        {/* Right Heading (Offset Down) */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:mt-[6rem] text-right"
        >
          <h1 className=" text-6xl font-bold  uppercase">
            Pull The <br />
            Future Forward <br />
          </h1>
        </motion.div>
      </div>

      {/* 3. LAYER: FOOTER INFO */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto flex flex-col md:flex-row items-end justify-between gap-12 pt-20">
        {/* Contact Us Button */}
        <div className="relative group cursor-pointer overflow-hidden border border-white/10 px-8 py-5 transition-all hover:bg-white/5">
          <span className="relative z-10 font-mono text-[10px] tracking-[0.4em] uppercase">
            Contact Us
          </span>
          {/* Corner Accents */}
          <div className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-white/60" />
          <div className="absolute top-0 right-0 w-1.5 h-1.5 border-t border-r border-white/60" />
          <div className="absolute bottom-0 left-0 w-1.5 h-1.5 border-b border-l border-white/60" />
          <div className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-white/60" />
        </div>

        {/* Manifesto and Logo */}
        <div className="flex flex-col md:flex-row items-end gap-10 max-w-4xl">
          <p className="font-mono text-[10px] leading-relaxed tracking-wider text-white/40 uppercase text-right md:max-w-md">
            WorldQuant Foundry is a venture lab that empowers breakthrough
            founders to pull the future forward. Capital. Connections.
            Mentorship. Full-stack support. We deliver more than resources—we
            create the infrastructure for scale.
          </p>
          <div className="shrink-0 pb-1">
            <LogoIcon />
          </div>
        </div>
      </div>
    </section>
  );
}

//   brand Icon
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
