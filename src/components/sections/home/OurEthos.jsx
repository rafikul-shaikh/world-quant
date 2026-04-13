"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const cardData = [
  {
    id: 1,
    number: "01 / 04",
    title: "Exponential Foresight",
    description:
      "We spot industry trends before they permeate the industry. Transform them into companies that matter. Some call it foresight. We call it pattern recognition at scale.",
    bg: "bg-[#111111]",
    textColor: "text-white",
    img: "https://worldquant-foundry.files.svdcdn.com/production/images/exponential-foresight-icon.svg",
  },
  {
    id: 2,
    number: "02 / 04",
    title: "Full-stack support",
    description:
      "Brand, marketing, performance, legal, ops, finance, funding, and development. Tech founders need tailored support—and a dedicated team from day one.",
    bg: "bg-[#00f2ea]", // Electric Teal
    textColor: "text-black",
    img: "https://worldquant-foundry.files.svdcdn.com/production/images/full-stack-support-icon.svg",
  },
  {
    id: 3,
    number: "03 / 04",
    title: "Financial stability",
    description:
      "Breakthrough thinking shouldn't compete with rent. That’s why we pay salaries from the start. You focus on building. We handle everything else.",
    bg: "bg-[#ff4d4d]", // Infrared Red
    textColor: "text-white",
    img: "https://worldquant-foundry.files.svdcdn.com/production/images/financial-support-icon.svg",
  },
  {
    id: 4,
    number: "04 / 04",
    title: "Intelligent iteration",
    description:
      "Know what you want to build? Start today. No drawn-out program or slow-moving curriculum. Just ruthless focus on product-market fit and market entry.",
    bg: "bg-[#f5f5f5]", // Off-white
    textColor: "text-black",
    img: "https://worldquant-foundry.files.svdcdn.com/production/images/intelligent-iteration-icon.svg",
  },
];

export default function OurEthos() {
  const [activeCard, setActiveCard] = useState(null);

  return (
    <section className="  relative w-full mx-auto bg-[#dadada] py-40 px-6 md:px-12 text-black overflow-hidden rounded-2xl  ">
      <div className="max-w-[1400px] mx-auto">
        {/* HEADER BLOCK */}
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 items-start">
          <div className=" flex flex-col gap-4">
            <h2 className=" font-mono text-[12px] uppercase  text-black">
              Our ethos
            </h2>
            <p className=" text-4xl md:text-3xl font-bold uppercase tracking-tighter leading-none">
              Vision matters.
              <br />
              Velocity wins.
            </p>
          </div>
          <div className="flex flex-col items-start pt-6 border-t border-black/80">
            <p className=" md:text-sm font-bold text-black/80 uppercase  mb-8 max-w-4xl">
              Our comprehensive founder platform shifts the odds. With
              infrastructure that works. With experts who've been there. With
              the right pressure—pushing you forward, not under. This isn't an
              accelerator. It's complete company building.
            </p>

            {/* CORNER BUTTON */}
            <button className="group relative px-6 py-3 overflow-hidden">
              <div className="absolute inset-0 border border-white/20 transition-colors group-hover:bg-white group-hover:text-black" />
              <div className="relative flex items-center gap-2">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em]">
                  Join Us
                </span>
              </div>
              {/* Corner Accents */}
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-black" />
              <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-black" />
              <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-black" />
              <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-black" />
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-black" />
            </button>
          </div>
        </div>

        {/* EXPANDABLE CARDS LIST */}
        <ul className="flex flex-col md:flex-row gap-5 md:gap-0 h-auto md:h-[600px]">
          {cardData.map((card) => (
            <motion.li
              key={card.id}
              onMouseEnter={() => setActiveCard(card.id)}
              onMouseLeave={() => setActiveCard(null)}
              animate={{
                width:
                  activeCard === null
                    ? "25%"
                    : activeCard === card.id
                      ? "40%"
                      : "20%",
              }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className={`relative h-[500px] md:h-full shrink-0 overflow-hidden rounded-[24px] ${card.bg} ${card.textColor} transition-colors duration-500`}
              style={{ width: "100%" }} // Fallback for mobile
            >
              <div className="flex flex-col items-center justify-between p-10 h-full text-center">
                <h3 className="text-2xl font-bold uppercase tracking-tighter max-w-[200px]">
                  {card.title}
                </h3>

                {/* Illustration placeholder */}
                <div className="w-full h-48 flex items-center justify-center">
                  <img
                    src={card.img}
                    alt={card.title}
                    className="max-h-full object-contain"
                  />
                </div>

                <div className="flex flex-col gap-4">
                  <span className="font-mono text-[10px] opacity-60">
                    {card.number}
                  </span>
                  <p className="text-[11px] uppercase tracking-wider leading-relaxed opacity-80 max-w-[280px]">
                    {card.description}
                  </p>
                </div>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
