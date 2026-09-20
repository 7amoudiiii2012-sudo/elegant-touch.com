import React from "react";
import { MapPin, Phone } from "lucide-react";
import { BUSINESS } from "../../lib/business";

const QUICK_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#08090B] border-t border-[#C5A059]/20">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-14 lg:py-16">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <p className="font-heading text-xl text-[#D9D9D9]">
              BARBER SHOP{" "}
              <span className="text-[#C5A059]">ELEGANT TOUCH</span>
            </p>

            <p className="mt-4 text-sm text-[#D9D9D9]/50 leading-relaxed max-w-sm">
              Premium men&apos;s grooming in the heart of Doha. Precise cuts,
              sculpted beards, and classic shaves — rated 4.9/5 by 244
              customers.
            </p>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.3em] uppercase text-[#C5A059] mb-5">
              Quick Links
            </h4>

            <ul className="space-y-3">
              {QUICK_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-[#D9D9D9]/70 hover:text-[#C5A059] transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.3em] uppercase text-[#C5A059] mb-5">
              Visit & Contact
            </h4>

            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />

              <p className="text-sm text-[#D9D9D9]/70 leading-relaxed">
                {BUSINESS.address}
              </p>
            </div>

            <a
              href={BUSINESS.phoneHref}
              className="mt-4 flex items-center gap-3 text-sm text-[#D9D9D9]/70 hover:text-[#C5A059] transition-colors"
            >
              <Phone className="w-4 h-4 text-[#C5A059]" />
              {BUSINESS.phoneDisplay}
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#C5A059]/15 flex flex-col sm:flex-row justify-between gap-3">
          <p className="text-xs text-[#D9D9D9]/40">
            © {new Date().getFullYear()} Barber Shop Elegant Touch. All rights
            reserved.
          </p>

          <p className="text-xs text-[#D9D9D9]/40">Doha, Qatar</p>
        </div>
      </div>
    </footer>
  );
}
