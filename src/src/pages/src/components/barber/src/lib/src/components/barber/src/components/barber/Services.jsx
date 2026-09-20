import React, { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { BUSINESS } from "../../lib/business";

const SERVICES = [
  {
    name: "Haircuts",
    description:
      "Precision cuts and fades, tailored to your face shape and style.",
    image:
      "https://media.base44.com/images/public/6aafdd5d9068a18aacc51041/84f415ac1_generated_image.png",
  },
  {
    name: "Beard Trim",
    description:
      "Sculpted beard shaping, detailing, and clean line work.",
    image:
      "https://media.base44.com/images/public/6aafdd5d9068a18aacc51041/12fcf0757_generated_image.png",
  },
  {
    name: "Hair & Beard",
    description:
      "The complete grooming ritual — a full cut paired with beard work.",
    image:
      "https://media.base44.com/images/public/6aafdd5d9068a18aacc51041/7eb538ad7_generated_image.png",
  },
  {
    name: "Kids Haircuts",
    description:
      "Patient, careful cuts for the youngest gentlemen.",
    image:
      "https://media.base44.com/images/public/6aafdd5d9068a18aacc51041/2e2457f6e_generated_image.png",
  },
  {
    name: "Hair Styling",
    description:
      "Professional styling and finish for the polished look.",
    image:
      "https://media.base44.com/images/public/6aafdd5d9068a18aacc51041/511f7097e_generated_image.png",
  },
  {
    name: "Classic Shave",
    description:
      "The traditional hot towel, straight-razor shave.",
    image:
      "https://media.base44.com/images/public/6aafdd5d9068a18aacc51041/5edacba6e_generated_image.png",
  },
];

export default function Services() {
  const [active, setActive] = useState(0);

  return (
    <section id="services" className="bg-[#0A0B0D] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <SectionHeading
          eyebrow="Our Services"
          title="The Menu of Rituals"
          description="Every service is performed with precision and an eye for detail. Enquire on WhatsApp for anything specific — we're happy to advise."
        />

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          <div className="border-t border-[#C5A059]/20">
            {SERVICES.map((s, i) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                onMouseEnter={() => setActive(i)}
                className="group border-b border-[#C5A059]/20 py-5 lg:py-6 flex items-start justify-between gap-4 cursor-default"
              >
                <div>
                  <div className="flex items-baseline gap-4">
                    <span className="text-[#C5A059]/50 text-sm font-mono">
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    <h3 className="font-heading text-xl lg:text-2xl text-[#D9D9D9] group-hover:text-[#C5A059] transition-colors">
                      {s.name}
                    </h3>
                  </div>

                  <p className="mt-2 pl-9 lg:pl-10 text-sm lg:text-base text-[#D9D9D9]/55 leading-relaxed">
                    {s.description}
                  </p>
                </div>

                <a
                  href={BUSINESS.whatsappService(s.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 mt-1 inline-flex items-center gap-1.5 text-xs tracking-wider uppercase text-[#C5A059]/70 hover:text-[#C5A059] transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Enquire</span>
                </a>
              </motion.div>
            ))}
          </div>

          <div className="hidden lg:block relative">
            <div className="sticky top-28 aspect-[4/5] overflow-hidden border border-[#C5A059]/20">
              {SERVICES.map((s, i) => (
                <img
                  key={s.name}
                  src={s.image}
                  alt={s.name}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                    active === i ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}

              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0B0D]/50 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
