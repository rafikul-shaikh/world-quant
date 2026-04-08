import Link from "next/link";

const Navbar = () => {
  return (
    <header className="w-full fixed top-0 z-50 bg-black/80 backdrop-blur-md">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-20">
          {/* LOGO */}
          <Link
            href="/"
            className="text-white text-xl font-bold tracking-wider"
          >
            WORLDQUANT
          </Link>

          {/* NAV LINKS */}
          <nav className="hidden lg:flex items-center gap-8 text-white text-sm font-medium uppercase tracking-wider">
            <Link href="/">Why WQF</Link>
            <Link href="/">Portfolio</Link>
            <Link href="/">Team</Link>
            <Link href="/">Insights</Link>
            <Link href="/">Contact</Link>
          </nav>

          {/* MOBILE MENU BUTTON */}
          <button className="lg:hidden text-white">☰</button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
