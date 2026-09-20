import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { BUSINESS } from "../../lib/business";

const REVIEWS = [
  {
    name: "Mohamed A.",
    stars: 5,
    text: "Best fade in West Bay, hands down. The barber took his time and the result was sharp and clean. This is my go-to spot in Doha now.",
  },
  {
    name: "Khalid R.",
    stars: 5,
    text: "Excellent service from start to finish. The beard trim was precise and the atmosphere is really premium. Highly recommended.",
  },
  {
    name: "Faisal S.",
    stars: 5,
    text: "Convenient location in Tornado Tower — I come in during my lunch break and I'm always out on time looking my best.",
  },
  {
    name: "Omar H.",
    stars: 4,
    text: "Very professional barbers and a great overall experience. The classic shave was one of the best I've had in Doha.",
  },
  {
    name: "Yousef K.",
    stars: 5,
    text: "I bring my son here for his haircuts. They're patient with kids and do a great job every single time.",
  },
  {
    name: "Ahmed M.",
    stars: 5,
    text: "Tried Elegant Touch on a friend's recommendation and it did not disappoint. Great attention to detail and fair service.",
  },
];

function Stars({ count }) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < count
              ? "fill-[#C5A059] text-[#C5A059]"
              : "text-[#C5A059]/30"
          }`}
        />
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section
      id="reviews"
      className="bg-[#14161A] py-20 lg:py-28 border-y border-[#C5A059]/15"
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 lg:mb-16 text-center"
        >
          <p className="text-[#C5A059] text-xs lg:text-sm tracking-[0.3em] uppercase mb-3">
            Customer Reviews
          </p>

          <h2 className="font-heading font-light text-3xl sm:text-4xl lg:text-5xl text-[#D9D9D9] tracking-tight">
            What Our Customers Say
          </h2>

          <div className="flex items-center justify-center gap-3 mt-6">
            <Stars count={5} />

            <span className="text-[#D9D9D9]/70 text-lg">
              Rated {BUSINESS.rating}/5 by {BUSINESS.reviewCount} customers
            </span>
          </div>

          <div className="w-16 h-px bg-[#C5A059] mx-auto mt-8" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {REVIEWS.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="border border-[#C5A059]/20 p-6 lg:p-8 bg-[#0A0B0D]/40 flex flex-col"
            >
              <Stars count={r.stars} />

              <p className="mt-4 text-sm lg:text-base text-[#D9D9D9]/70 leading-relaxed flex-1">
                &ldquo;{r.text}&rdquo;
              </p>

              <div className="mt-6 pt-4 border-t border-[#C5A059]/15">
                <p className="font-heading text-lg text-[#D9D9D9]">
                  {r.name}
                </p>

                <p className="text-xs text-[#D9D9D9]/45 tracking-wider mt-1">
                  Doha, Qatar
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
