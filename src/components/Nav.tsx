import { useEffect, useState } from "react";
import logo from "@/assets/logo.png";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#experience", label: "Experience" },
  { href: "#book", label: "Book" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3 bg-espresso/70 backdrop-blur-xl border-b border-white/5" : "py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3 group">
          <img src={logo} alt="Studio 432" className="h-9 w-auto opacity-90 group-hover:opacity-100 transition" />
        </a>
        <nav className="hidden md:flex items-center gap-9">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm tracking-widest uppercase text-ivory/70 hover:text-taupe transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#book"
          className="hidden md:inline-flex items-center px-5 py-2.5 rounded-full bg-taupe text-espresso text-sm font-medium tracking-wide hover:bg-walnut hover:text-ivory transition-colors"
        >
          Book a Session
        </a>
        <button
          aria-label="Menu"
          onClick={() => setOpen(!open)}
          className="md:hidden text-ivory p-2"
        >
          <span className="block w-6 h-0.5 bg-current mb-1.5" />
          <span className="block w-6 h-0.5 bg-current mb-1.5" />
          <span className="block w-4 h-0.5 bg-current ml-auto" />
        </button>
      </div>
      {open && (
        <div className="md:hidden mt-4 mx-6 glass rounded-2xl p-6 flex flex-col gap-4">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-ivory/80 uppercase tracking-widest text-sm">
              {l.label}
            </a>
          ))}
          <a href="#book" onClick={() => setOpen(false)} className="mt-2 px-5 py-3 rounded-full bg-taupe text-espresso text-center text-sm font-medium">
            Book a Session
          </a>
        </div>
      )}
    </header>
  );
}
