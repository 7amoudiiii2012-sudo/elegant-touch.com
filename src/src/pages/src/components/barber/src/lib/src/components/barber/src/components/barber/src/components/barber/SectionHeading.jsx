import React from "react";
import { motion } from "framer-motion";

export default function SectionHeading({ eyebrow, title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="mb-12 lg:mb-16"
    >
      {eyebrow && (
        <p className="text-[#C5A059] text-xs lg:text-sm tracking-[0.3em] uppercase mb-3">
          {eyebrow}
        </p>
      )}

      <h2 className="font-heading font-light text-3xl sm:text-4xl lg:text-5xl text-[#D9D9D9] tracking-tight">
        {title}
      </h2>

      <div className="w-16 h-px bg-[#C5A059] mt-6" />

      {description && (
        <p className="mt-5 text-base lg:text-lg text-[#D9D9D9]/60 leading-relaxed max-w-2xl">
          {description}
        </p>
      )}
    </motion.div>
  );
}
