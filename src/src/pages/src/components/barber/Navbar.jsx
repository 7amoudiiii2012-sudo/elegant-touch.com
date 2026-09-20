import React, { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { BUSINESS } from "../../lib/business";

const LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0A0B0D]/90 backdrop-blur-md border-b border-[#C5A059]/20"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-5 lg:px-8 h-16 lg:h-20">
        <a
          href="#home"
          className="font-heading text-lg lg:text-xl tracking-wide text-[#D9D9D9]"
        >
          ELEGANT <span className="text-[#C5A059]">TOUCH</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm tracking-widest uppercase text-[#D9D9D9]/80 hover:text-[#C5A059] transition-colors"
            >
              {l.label}
            </a>
          ))}

          <a
            href={BUSINESS.phoneHref}
            className="flex items-center gap-2 border border-[#C5A059] text-[#C5A059] px-4 py-2 text-sm tracking-widest uppercase hover:bg-[#C5A059] hover:text-[#0A0B0D] transition-all"
          >
            <Phone className="w-4 h-4" />
            {BUSINESS.phoneDisplay}
          </a>
        </nav>

        <button
          className="md:hidden text-[#D9D9D9] p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {open && (
        <nav className="md:hidden bg-[#0A0B0D]/95 backdrop-blur-md border-t border-[#C5A059]/20 px-6 py-4 flex flex-col gap-4">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm tracking-widest uppercase text-[#D9D9D9] hover:text-[#C5A059]"
            >
              {l.label}
            </a>
          ))}

          <a
            href={BUSINESS.phoneHref}
            className="flex items-center gap-2 border border-[#C5A059] text-[#C5A059] px-4 py-3 text-sm tracking-widest uppercase w-fit"
          >
            <Phone className="w-4 h-4" />
            {BUSINESS.phoneDisplay}
          </a>
        </nav>
      )}
    </header>
  );
}
