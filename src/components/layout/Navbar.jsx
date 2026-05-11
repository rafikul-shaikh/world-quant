"use client";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import ContactDrawer from "./ContactDrawer";
import NavItem from "../sections/common/NavItem";
import { useNav } from "@/context/NavContext";

export default function Navbar() {
  const { isMenuOpen, setIsMenuOpen } = useNav();
  const [hovered, setHovered] = useState(null);
  const [show, setShow] = useState(true);
  const [shrink, setShrink] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  const lastScroll = useRef(0);
  const isHeroVisible = useRef(true);

  const navLinks = [
    { name: "WHY WQF", href: "/why-wqf" },
    { name: "PORTFOLIO", href: "/portfolio" },
    { name: "TEAM", href: "/team" },
    { name: "INSIGHTS", href: "/insights" },
    { name: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    const hero = document.getElementById("hero");

    const observer = new IntersectionObserver(
      ([entry]) => {
        isHeroVisible.current = entry.isIntersecting;
        if (entry.isIntersecting) setShow(true);
        else setShow(false);
      },
      { threshold: 0 },
    );
    if (hero) observer.observe(hero);

    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setShrink(currentScroll > 50);

      if (!isHeroVisible.current) {
        setShow(currentScroll < lastScroll.current);
      }
      lastScroll.current = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      if (hero) observer.unobserve(hero);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
  }, [isMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 z-50 bg-black transition-all duration-700 ease-in-out px-4
           ${show ? "translate-y-4" : "-translate-y-full"}
           ${
             shrink
               ? "w-[90%] md:w-[40%] left-1/2 -translate-x-1/2 rounded-[8px] bg-black/80 backdrop-blur-md shadow-2xl py-2"
               : "w-full left-0 translate-x-0 py-2"
           }`}
      >
        <div className="px-2 lg:px-4">
          <div className="flex items-center justify-between h-8">
            {/* Logo */}
            <Link href="/" className="text-white/80 flex items-center">
              {shrink ? (
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
                <div className="leading-tight text-[10px] tracking-widest font-bold">
                  WORLDQUANT <br />{" "}
                  <span className="font-normal text-gray-400">FOUNDRY</span>
                </div>
              )}
            </Link>

            {/* Desktop Navigation (Hidden below 1018px) */}
            <nav className="hidden min-[1018px]:block">
              <ul className="flex flex-row gap-1">
                {navLinks.map((link, index) => (
                  <li key={link.name}>
                    {link.name === "Contact" ? (
                      <button onClick={() => setContactOpen(true)}>
                        <NavItem
                          label={link.name}
                          isActive={hovered === index}
                          onMouseEnter={() => setHovered(index)}
                        />
                      </button>
                    ) : (
                      <Link href={link.href}>
                        <NavItem
                          label={link.name}
                          isActive={hovered === index}
                          onMouseEnter={() => setHovered(index)}
                        />
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            {/* Mobile Indicator (Shown below 1018px) */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className="min-[1018px]:hidden flex items-center justify-center w-8 h-8 border border-white/20 rounded-sm relative"
            >
              <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
              {/* Decorative Brackets */}
              <span className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-white/40"></span>
              <span className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-white/40"></span>
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Menu Overlay */}
      {/* Notice: No {isMenuOpen && ...} wrapper anymore */}
      <div
        className={`fixed inset-0 z-[100] h-[50vh] bg-black/60 backdrop-blur-md flex flex-col p-8 transition-all duration-500 
  ${isMenuOpen ? "opacity-100 visible pointer-events-auto" : "opacity-0 invisible pointer-events-none"}`}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-10 right-10 text-white text-xs tracking-widest flex items-center gap-2"
        >
          CLOSE <div className="w-6 h-[1px] bg-white"></div>
        </button>

        <div className="grid grid-cols-2 gap-y-20 gap-x-10 my-auto text-center relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/30 text-2xl font-light">
            +
          </div>

          {navLinks.map((link) => (
            <div
              key={link.name}
              className="flex flex-col items-center justify-center"
            >
              {link.name === "Contact" ? (
                <button
                  onClick={() => {
                    setContactOpen(true);
                    setIsMenuOpen(false);
                  }}
                  className="text-[10px] tracking-[0.3em] text-white uppercase hover:text-gray-400 transition-colors"
                >
                  {link.name}
                </button>
              ) : (
                <Link
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-[10px] tracking-[0.3em] text-white uppercase hover:text-gray-400 transition-colors"
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>

      <ContactDrawer open={contactOpen} setOpen={setContactOpen} />
    </>
  );
}
