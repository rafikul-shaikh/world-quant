"use client";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";

export default function Navbar() {
  const [hovered, setHovered] = useState(null);
  const [show, setShow] = useState(true);
  const lastScroll = useRef(0);
  const isHeroVisible = useRef(true);
  const [shrink, setShrink] = useState(false);

  const navLinks = [
    { name: "WHY WQF", href: "/why-wqf" },
    { name: "PORTFOLIO", href: "/portfolio" },
    { name: "TEAM", href: "/team" },
    { name: "INSIGHTS", href: "/insights" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const hero = document.getElementById("hero");

    //  HERO VISIBILITY TRACK
    const observer = new IntersectionObserver(
      ([entry]) => {
        isHeroVisible.current = entry.isIntersecting;

        if (entry.isIntersecting) {
          // HERO visible → show navbar
          setShow(true);
        } else {
          // HERO gone → hide navbar immediately
          setShow(false);
        }
      },
      { threshold: 0 },
    );
    if (hero) observer.observe(hero);

    //  SCROLL DIRECTION TRACK
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > 50) {
        setShrink(true);
      } else {
        setShrink(false);
      }

      //  Only control scroll behavior AFTER hero is gone
      if (!isHeroVisible.current) {
        if (currentScroll < lastScroll.current) {
          setShow(true); // scroll up → show
        } else {
          setShow(false); // scroll down → hide
        }
      }

      lastScroll.current = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      if (hero) observer.unobserve(hero);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 bg-black transition-all duration-700 ease-in-out px-4
    ${show ? "translate-y-4" : "-translate-y-full"} 
    ${
      shrink
        ? "w-[90%] md:w-[40%] left-1/2 -translate-x-1/2 rounded-[8px] bg-black/80 backdrop-blur-md shadow-2xl py-2"
        : "w-full left-0 translate-x-0  py-2"
    }
  `}
    >
      <div className=" px-2 lg:px-4">
        <div className="flex items-center justify-between h-8">
          {/* Logo */}

          <Link
            href="/"
            className="text-white/80 transition-all duration-300 flex items-center"
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
            <ul className="flex flex-row gap-1">
              {navLinks.map((link, index) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    onMouseEnter={() => {
                      setHovered(index);

                      setTimeout(() => {
                        setHovered(null);
                      }, 400);
                    }}
                    className="group/button text-[12px] text-white/80 font-azeret relative isolate flex items-center
                     gap-[2px] uppercase whitespace-nowrap px-4 py-3 overflow-hidden "
                  >
                    {/* animate-[blink_0.6s_ease-in-out_0.05s_1]
                    animate-[blink_0.1s_linear_2] */}

                    <div
                      className={`flex items-center gap-[8px] ${
                        hovered === index ? "animate-[blink_0.2s_linear_2]" : ""
                      }`}
                      style={{
                        filter: hovered === index ? "brightness(2)" : "none",
                      }}
                    >
                      {/* Square Dot {bg-[#0a0a0a] } */}
                      <div className=" bg-white -mt-[2.5px] size-[9px] rounded-[2px] -translate-x-full opacity-0 blur-[32px] transition-all duration-500 group-hover/button:translate-x-0 group-hover/button:opacity-100 group-hover/button:blur-[0px]"></div>

                      {/* text animation  */}
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
                        </span>
                      </div>
                    </div>
                    {/* Corner Accents */}

                    <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white opacity-0 transition-all duration-300 group-hover/button:opacity-100"></div>

                    <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white opacity-0 transition-all duration-300 group-hover/button:opacity-100"></div>

                    <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white opacity-0 transition-all duration-300 group-hover/button:opacity-100"></div>

                    <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white opacity-0 transition-all duration-300 group-hover/button:opacity-100"></div>
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
