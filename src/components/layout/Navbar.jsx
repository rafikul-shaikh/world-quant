import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full  z-50 bg-black/80 backdrop-blur-md">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/"
            className="text-white text-xl font-bold tracking-wider"
          >
            WORLDQUANT FOUNDRY
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 text-white text-sm font-medium uppercase tracking-wider">
            <Link href="/why-wqf">Why WQF</Link>
            <Link href="/portfolio">Portfolio</Link>
            <Link href="/team">Team</Link>
            <Link href="/insights">Insights</Link>
            <Link href="/contact">Contact</Link>
          </nav>

          {/* Mobile Menu Button */}
          <button className="lg:hidden text-white text-2xl">☰</button>
        </div>
      </div>
    </header>
  );
}
