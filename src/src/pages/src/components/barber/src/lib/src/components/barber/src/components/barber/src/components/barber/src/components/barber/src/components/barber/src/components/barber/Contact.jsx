import React from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  MessageCircle,
  Navigation,
  Phone,
  Star,
} from "lucide-react";
import SectionHeading from "./SectionHeading";
import { BUSINESS } from "../../lib/business";

export default function Contact() {
  return (
    <section id="contact" className="bg-[#0A0B0D] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <SectionHeading
          eyebrow="Visit Us"
          title="Find Us in West Bay"
          description="We're located on the G Floor of Tornado Tower, in the heart of Doha's business district."
        />

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="border border-[#C5A059]/20 p-7 lg:p-10 bg-[#14161A]/40">
              <div className="flex items-start gap-4">
                <MapPin
                  className="w-6 h-6 text-[#C5A059] shrink-0 mt-1"
                  strokeWidth={1.5}
                />

                <div>
                  <h3 className="font-heading text-xl lg:text-2xl text-[#D9D9D9]">
                    Location
                  </h3>

                  <p className="mt-3 text-base lg:text-lg text-[#D9D9D9]/70 leading-relaxed">
                    {BUSINESS.address}
                  </p>

                  <a
                    href={BUSINESS.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 px-6 py-3 border border-[#C5A059] text-[#C5A059] text-sm tracking-widest uppercase transition-all hover:bg-gradient-to-r hover:from-[#C5A059] hover:to-[#E3C47E] hover:text-[#0A0B0D]"
                  >
                    <Navigation className="w-4 h-4" />
                    Get Directions
                  </a>
                </div>
              </div>

              <div className="h-px bg-[#C5A059]/20 my-8" />

              <div className="flex items-start gap-4">
                <Phone
                  className="w-6 h-6 text-[#C5A059] shrink-0 mt-1"
                  strokeWidth={1.5}
                />

                <div>
                  <h3 className="font-heading text-xl lg:text-2xl text-[#D9D9D9]">
                    Contact
                  </h3>

                  <a
                    href={BUSINESS.phoneHref}
                    className="mt-3 block text-xl lg:text-2xl text-[#C5A059] hover:text-[#E3C47E] transition-colors"
                  >
                    {BUSINESS.phoneDisplay}
                  </a>

                  <div className="mt-6 flex flex-col sm:flex-row gap-3">
                    <a
                      href={BUSINESS.phoneHref}
                      className="flex items-center justify-center gap-2 px-6 py-3.5 border border-[#C5A059] text-[#C5A059] text-sm tracking-widest uppercase transition-all hover:bg-gradient-to-r hover:from-[#C5A059] hover:to-[#E3C47E] hover:text-[#0A0B0D]"
                    >
                      <Phone className="w-4 h-4" />
                      Call Now
                    </a>

                    <a
                      href={BUSINESS.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-6 py-3.5 border border-[#D9D9D9]/30 text-[#D9D9D9] text-sm tracking-widest uppercase transition-all hover:border-[#C5A059] hover:text-[#C5A059]"
                    >
                      <MessageCircle className="w-4 h-4" />
                      WhatsApp Us
                    </a>
                  </div>
                </div>
              </div>

              <div className="h-px bg-[#C5A059]/20 my-8" />

              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 fill-[#C5A059] text-[#C5A059]" />

                <span className="text-sm text-[#D9D9D9]/60 tracking-wide">
                  Rated {BUSINESS.rating}/5 by {BUSINESS.reviewCount} customers
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative overflow-hidden border border-[#C5A059]/20 min-h-[320px] lg:min-h-[500px]"
          >
            <iframe
              title="Barber Shop Elegant Touch location on Google Maps — Tornado Tower, Doha"
              src="https://www.google.com/maps?q=Tornado+Tower,+Majlis+Al+Taawon+St,+Doha,+Qatar&output=embed"
              className="absolute inset-0 w-full h-full border-0 [filter:invert(0.9)_hue-rotate(180deg)_saturate(0.6)]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
