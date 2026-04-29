"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../ui/Button";

// const cardData = [
//   {
//     id: 1,
//     number: "01 / 04",
//     title: "Exponential Foresight",
//     description:
//       "We spot industry trends before they permeate the industry. Transform them into companies that matter. Some call it foresight. We call it pattern recognition at scale.",
//     bg: "bg-[#111111]",
//     textColor: "text-white",
//     img: "https://worldquant-foundry.files.svdcdn.com/production/images/exponential-foresight-icon.svg",
//   },
//   {
//     id: 2,
//     number: "02 / 04",
//     title: "Full-stack support",
//     description:
//       "Brand, marketing, performance, legal, ops, finance, funding, and development. Tech founders need tailored support—and a dedicated team from day one.",
//     bg: "bg-[#00f2ea]", // Electric Teal
//     textColor: "text-black",
//     img: "https://worldquant-foundry.files.svdcdn.com/production/images/full-stack-support-icon.svg",
//   },
//   {
//     id: 3,
//     number: "03 / 04",
//     title: "Financial stability",
//     description:
//       "Breakthrough thinking shouldn't compete with rent. That’s why we pay salaries from the start. You focus on building. We handle everything else.",
//     bg: "bg-[#ff4d4d]", // Infrared Red
//     textColor: "text-white",
//     img: "https://worldquant-foundry.files.svdcdn.com/production/images/financial-support-icon.svg",
//   },
//   {
//     id: 4,
//     number: "04 / 04",
//     title: "Intelligent iteration",
//     description:
//       "Know what you want to build? Start today. No drawn-out program or slow-moving curriculum. Just ruthless focus on product-market fit and market entry.",
//     bg: "bg-[#f5f5f5]", // Off-white
//     textColor: "text-black",
//     img: "https://worldquant-foundry.files.svdcdn.com/production/images/intelligent-iteration-icon.svg",
//   },
// ];

const cardData = [
  {
    id: 1,

    title: "Domain Experts Who Deliver",
    description:
      "Serial founders and sector leaders who've been there. Direct mentorship that accelerates. Real customer connections that convert. Not just contacts—but commitments.",
    bg: "bg-[#111111]",
    textColor: "text-white",
    img: "https://worldquant-foundry.files.svdcdn.com/production/images/domain-experts-icon.svg", // approximate
  },
  {
    id: 2,
    title: "High-Caliber Cohort",
    description:
      "Visionaries who match your energy and drive, connected through accelerators, universities, and beyond. Community-oriented success, not competition.",
    bg: "bg-[#6f9ea6]", // teal shade from image
    textColor: "text-black",
    img: "https://worldquant-foundry.files.svdcdn.com/production/images/high-caliber-cohort-icon.svg", // approximate
  },
  {
    id: 3,
    title: "Supported and In Control",
    description:
      "The right pressure pushes you forward, not under. Your company. Your vision. Your decisions. We're here to help you win.",
    bg: "bg-[#f26b3f]", // orange shade from image
    textColor: "text-black",
    img: "https://worldquant-foundry.files.svdcdn.com/production/images/supported-control-icon.svg", // approximate
  },
];
export default function FounderNetwork() {
  const [activeCard, setActiveCard] = useState(null);

  return (
    <section className="relative w-full mx-auto pt-[120px] pb-[80px] md:py-[200px] px-6 md:px-10 text-black overflow-hidden rounded-t-[20px]">
      <div className="max-w-[1400px] ">
        {/* HEADER BLOCK */}
        <div className=" text-white grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 items-start">
          <div className=" flex flex-col gap-3">
            <p className=" text-4xl md:text-[40px] font-medium uppercase tracking-tighter leading-none">
              Connections that
              <br />
              move you forward.
            </p>
          </div>
          <div className="flex flex-col items-start pt-6 border-t border-white/80">
            <p className=" md:text-sm  text-white/80 uppercase  mb-8 max-w-3xl">
              Mentorship from those who've built it. Community that matches your
              drive. Support that keeps you in control.
            </p>

            {/* CORNER BUTTON */}

            <Button
              padding="px-7 py-3"
              textColor="text-white/80"
              bgColor="bg-white"
              borderColor="border-white"
            >
              Build with us
            </Button>
          </div>
        </div>

        {/* EXPANDABLE CARDS LIST */}

        <ul className="flex flex-col md:flex-row h-auto md:h-[600px] relative">
          {cardData.map((card) => (
            <motion.li
              key={card.id}
              onMouseEnter={() => setActiveCard(card.id)}
              onMouseLeave={() => setActiveCard(null)}
              style={{ width: "100%", zIndex: 10 + card.id }}
              animate={{
                width:
                  activeCard === null
                    ? "35%"
                    : activeCard === card.id
                      ? "40%"
                      : "20%",
              }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className={`relative h-[500px] md:h-full shrink-0 overflow-hidden rounded-[24px] ${card.bg} ${card.textColor} transition-all duration-500
              md:-ml-[120px] first:ml-0 hover:z-50`}
              style={{ width: "100%", zIndex: 10 + card.id }}
            >
              <div className="flex flex-col items-center justify-between p-10 h-full text-center">
                <h3 className="text-2xl font-medium uppercase tracking-tighter max-w-[200px]">
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
                  <p className="text-[11px] uppercase font-azeret tracking-wider leading-relaxed opacity-80 max-w-[280px]">
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
