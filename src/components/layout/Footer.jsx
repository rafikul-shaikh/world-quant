"use client";
import React, { useRef, useEffect } from "react";
import Button from "../sections/ui/Button";
import Link from "next/link";

export default function Footer() {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      //  canvas logic here...
    }
  }, []);

  return (
    <footer className="bg-[#0a0a0a] relative grid lg:grid-cols-2">
      <canvas className="hidden size-full lg:block" ref={canvasRef}></canvas>
      <div
        className="bg-[#ff4d00] text-[#0a0a0a] grid w-full grid-cols-2 gap-[12px] gap-y-[60px]
            rounded-t-[20px] px-[10px] pt-[30px] pb-[10px] md:min-h-[666px] md:gap-[32px] md:gap-y-[210px]
              md:rounded-bl-[20px] md:pt-[40px] md:pb-[30px] lg:px-[24px] xl:px-[40px]"
      >
        {/* text  */}
        <div className="uppercase ">
          <h1 className="text-[22px] ">own waht is next </h1>
          <p className="pt-2 pb-36 text-[12px] font-azeret">
            Breakthrough founders. Pre-market investors. Transformative
            partners. Reach out, and let's move.
          </p>

          <Button
            textColor="text-black"
            bgColor="bg-black"
            borderColor="border-black"
          >
            Connect with us
          </Button>
        </div>

        {/* svg logo  */}
        <div>
          <svg
            className="w-full h-auto max-h-[290px] aspect-square block"
            viewBox="0 0 65 65"
            fill="none"
          >
            <path
              d="M39.13 43.55C39.13 41.0371 41.1671 39 43.68 39H47.45C49.9629 39 52 36.9629 52 34.45L52 4.55C52 2.03711 54.0371 0 56.55 0L60.45 0C62.9629 0 65 2.03711 65 4.55001V34.45C65 36.9629 62.9629 39 60.45 39H56.68C54.1671 39 52.13 41.0371 52.13 43.55L52.13 60.45C52.13 62.9629 50.0929 65 47.58 65L43.68 65C41.1671 65 39.13 62.9629 39.13 60.45L39.13 43.55Z"
              fill="currentColor"
            />
            <path
              d="M13.13 43.55C13.13 41.0371 15.1671 39 17.68 39H21.45C23.9629 39 26 36.9629 26 34.45L26 4.55C26 2.03711 28.0371 0 30.55 0L34.45 0C36.9629 0 39 2.03711 39 4.55L39 34.45C39 36.9629 36.9629 39 34.45 39H30.68C28.1671 39 26.13 41.0371 26.13 43.55L26.13 60.45C26.13 62.9629 24.0929 65 21.58 65H17.68C15.1671 65 13.13 62.9629 13.13 60.45L13.13 43.55Z"
              fill="currentColor"
            />
            <path
              d="M0 4.55C0 2.0371 2.03711 0 4.55 0L8.45 0C10.9629 0 13 2.0371 13 4.55L13 21.45C13 23.9629 10.9629 26 8.45 26H4.55C2.0371 26 0 23.9629 0 21.45L0 4.55Z"
              fill="currentColor"
            />
          </svg>
        </div>

        {/* nav items  */}
        <div className="uppercase">
          <ul className="text-[30px] leading-9">
            <li>WHY WQF</li>
            <li>PORTFOLIO</li>
            <li>TEAM</li>
            <li>INSIGHTS</li>
            <li>CONTACT</li>
          </ul>
          <p className="pt-8 text-[12px]">
            Site by Series Eight
            <br />
            Copyright © 2026 WorldQuant Foundry
          </p>
        </div>

        {/* venture  */}
        <div className="uppercase">
          <h1 className="text-[10px]">From worldquant</h1>
          <ul className="pt-2 text-[30px] leading-8">
            <li>venture </li>
            <li>university</li>
          </ul>

          <ul className=" mt-20 ml-20 flex flex-col items-start gap-[6px]">
            <li>
              <Link
                href="/legal/whistleblower-protection-statement"
                className="group/button font-mono text-xs relative block transition-all"
              >
                <span className="relative isolate before:absolute before:bottom-0 before:left-0 before:h-px before:w-full before:origin-left before:scale-x-0 before:bg-current before:transition-transform before:duration-400 group-hover/button:before:scale-x-100">
                  Whistleblower Protection Statement
                </span>
              </Link>
            </li>

            <li>
              <Link
                href="/legal/privacy-policy"
                className="group/button font-mono text-xs relative block transition-all"
              >
                <span className="relative isolate before:absolute before:bottom-0 before:left-0 before:h-px before:w-full before:origin-left before:scale-x-0 before:bg-current before:transition-transform before:duration-400 group-hover/button:before:scale-x-100">
                  Privacy Policy
                </span>
              </Link>
            </li>

            <li>
              <Link
                href="/legal/terms-and-conditions"
                className="group/button font-mono text-xs relative block transition-all"
              >
                <span className="relative isolate before:absolute before:bottom-0 before:left-0 before:h-px before:w-full before:origin-left before:scale-x-0 before:bg-current before:transition-transform before:duration-400 group-hover/button:before:scale-x-100">
                  Terms and Conditions
                </span>
              </Link>
            </li>

            <li>
              <Link
                href="/legal/cookie-policy"
                className="group/button font-mono text-xs relative block transition-all"
              >
                <span className="relative isolate before:absolute before:bottom-0 before:left-0 before:h-px before:w-full before:origin-left before:scale-x-0 before:bg-current before:transition-transform before:duration-400 group-hover/button:before:scale-x-100">
                  Cookie Policy
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
