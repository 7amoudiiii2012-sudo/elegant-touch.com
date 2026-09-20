import React from "react";
import { motion } from "framer-motion";
import { MapPin, Scissors, Sparkles, Star } from "lucide-react";
import SectionHeading from "./SectionHeading";

const REASONS = [
  {
    icon: Scissors,
    title: "Professional Barber Services",
    text: "Skilled barbers delivering precise cuts, beard work, and classic shaves.",
  },
  {
    icon: Sparkles,
    title: "Premium Grooming Experience",
    text: "A refined atmosphere and attention to detail, from start to finish.",
  },
  {
    icon: MapPin,
    title: "Convenient Doha Location",
    text: "Located on the G Floor of Tornado Tower, in the heart of West Bay.",
  },
  {
    icon: Star,
    title: "Highly Rated by Customers",
    text: "Rated 4.9 out of 5 by 244 customers — trusted by the Doha community.",
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="bg-[#0A0B0D] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="The Elegant Touch Standard"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {REASONS.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="border border-[#C5A059]/20 p-6 lg:p-8 hover:border-[#C5A059]/60 transition-colors bg-[#14161A]/40"
            >
              <r.icon
                className="w-7 h-7 text-[#C5A059]"
                strokeWidth={1.5}
              />

              <h3 className="font-heading text-lg lg:text-xl text-[#D9D9D9] mt-5">
                {r.title}
              </h3>

              <p className="mt-3 text-sm lg:text-base text-[#D9D9D9]/55 leading-relaxed">
                {r.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
