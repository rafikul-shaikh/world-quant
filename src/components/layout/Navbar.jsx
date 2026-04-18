"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [show, setShow] = useState(true);
  const [shrink, setShrink] = useState(false);

  const navLinks = [
    { name: "WHY WQF", href: "/why-wqf" },
    { name: "PORTFOLIO", href: "/portfolio" },
    { name: "TEAM", href: "/about" },
    { name: "INSIGHTS", href: "/insights" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    let lastScroll = 0;

    const handleScroll = () => {
      const currentScroll = window.scrollY;

      // 🔹 shrink effect
      if (currentScroll > 50) {
        setShrink(true);
      } else {
        setShrink(false);
      }

      // 🔹 hide / show navbar
      if (currentScroll > lastScroll && currentScroll > 100) {
        setShow(false); // scroll down
      } else {
        setShow(true); // scroll up
      }

      lastScroll = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`mt-3 fixed top-0 left-0 z-50 transition-all duration-700 ease-in-out
    ${
      shrink
        ? "w-[40%] left-1/2 -translate-x-1/2 top-1 rounded-[8px] bg-zinc-900/80 backdrop-blur-md shadow-lg py-2"
        : "w-full bg-blue-500 py-2"
    }
  `}
    >
      <div className=" px-4 lg:px-8">
        <div className="flex items-center justify-between h-8">
          {/* Logo */}

          <Link
            href="/"
            className="text-white transition-all duration-300 flex items-center"
          >
            {shrink ? (
              // SVG LOGO (when navbar is centered/shrunk)
              <svg
                className="w-[28px] h-[28px]"
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
            ) : (
              // TEXT LOGO (default state)
              <div className="leading-tight">
                WORLDQUANT <br />
                <span className="font-normal">FOUNDRY</span>
              </div>
            )}
          </Link>

          <nav className="">
            <ul className="flex flex-row gap-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group/button text-[12px] font-azeret relative isolate flex items-center
                     gap-[8px] uppercase whitespace-nowrap"
                  >
                    {/* Square Dot {bg-[#0a0a0a] } */}
                    <div className=" bg-white -mt-[2.5px] size-[9px] rounded-[2px] -translate-x-full opacity-0 blur-[32px] transition-all duration-500 group-hover/button:translate-x-0 group-hover/button:opacity-100 group-hover/button:blur-[0px]"></div>
                    <div
                      className="relative isolate flex -translate-x-[13px] overflow-hidden transition-transform duration-500 
                        group-hover/button:translate-x-0"
                    >
                      <span className="transition-transform duration-500 group-hover/button:-translate-y-full">
                        {link.name}
                      </span>
                      <span
                        className="absolute inset-0 translate-y-full transition-transform duration-500 group-hover/button:translate-y-0"
                        aria-hidden="true"
                      >
                        {link.name}
                        {/* CORNER  */}

                        <div
                          className={`absolute top-0 left-0 w-2 h-2 border-t border-l bg-white`}
                        />
                        <div
                          className={`absolute top-0 right-0 w-2 h-2 border-t border-r bg-white`}
                        />
                        <div
                          className={`absolute bottom-0 left-0 w-2 h-2 border-b border-l bg-white`}
                        />
                        <div
                          className={`absolute bottom-0 right-0 w-2 h-2 border-b border-r bg-white`}
                        />
                      </span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button className="lg:hidden text-white text-2xl">☰</button>
        </div>
      </div>
    </header>
  );
}
