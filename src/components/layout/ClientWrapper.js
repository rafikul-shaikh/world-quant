"use client";
import { useNav } from "@/context/NavContext";
import Navbar from "./Navbar"; 

export default function ClientWrapper({ children }) {
  const { isMenuOpen } = useNav();

  return (
    <body className="bg-black text-white">
      <Navbar />
      <main 
        className={`transition-all duration-700 ease-in-out 
          ${isMenuOpen ? "blur-xl opacity-50 pointer-events-none scale-[0.98]" : "blur-0 opacity-100"}`}
      >
        {children}
      </main>
    </body>
  );
}