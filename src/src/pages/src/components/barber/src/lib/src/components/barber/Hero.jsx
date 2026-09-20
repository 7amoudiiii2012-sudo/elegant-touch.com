import React from "react";
import { motion } from "framer-motion";
import { Phone, Star, MessageCircle } from "lucide-react";
import { BUSINESS } from "../../lib/business";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <img
          src="https://media.base44.com/images/public/6aafdd5d9068a18aacc51041/554896872_generated_image.png"
          alt="Groomed gentleman at Barber Shop Elegant Touch, Doha"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0B0D] via-[#0A0B0D]/80 to-[#0A0B0D]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0B0D] via-transparent to-[#0A0B0D]/60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8 w-full pt-28 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 border border-[#C5A059]/40 px-4 py-2 mb-8">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-3.5 h-3.5 fill-[#C5A059] text-[#C5A059]"
              />
            ))}

            <span className="text-[#C5A059] text-sm tracking-wider">
              {BUSINESS.rating}/5 · {BUSINESS.reviewCount} reviews
            </span>
          </div>

          <h1 className="font-heading font-light text-4xl sm:text-5xl lg:text-7xl leading-tight tracking-tight text-[#D9D9D9]">
            BARBER SHOP
            <br />
            <span className="text-[#C5A059]">ELEGANT TOUCH</span>
          </h1>

          <p className="mt-6 text-lg lg:text-xl text-[#D9D9D9]/80 leading-relaxed">
            Premium Grooming in the Heart of Doha
          </p>

          <p className="mt-4 text-base lg:text-lg text-[#D9D9D9]/60 leading-relaxed max-w-xl">
            Professional men&apos;s grooming and barber services in Doha —
            precise cuts, sculpted beards, and the classic straight-razor
            experience, delivered with craftsmanship and care.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href={BUSINESS.phoneHref}
              className="group flex items-center justify-center gap-3 px-8 py-4 border border-[#C5A059] text-[#C5A059] tracking-widest uppercase text-sm transition-all hover:bg-gradient-to-r hover:from-[#C5A059] hover:to-[#E3C47E] hover:text-[#0A0B0D]"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>

            <a
              href={BUSINESS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-8 py-4 bg-[#0A0B0D]/60 border border-[#D9D9D9]/30 text-[#D9D9D9] tracking-widest uppercase text-sm transition-all hover:border-[#C5A059] hover:text-[#C5A059]"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp Us
            </a>
          </div>

          <p className="mt-8 text-sm text-[#D9D9D9]/50 tracking-wide">
            {BUSINESS.address}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
