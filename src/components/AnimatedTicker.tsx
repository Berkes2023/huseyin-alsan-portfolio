"use client";

import { motion } from "motion/react";

const words = [
  "Road Design",
  "Active Travel",
  "Traffic Modelling",
  "Public Transport",
  "Street Design",
  "Traffic Signals",
  "Urban Mobility",
  "Transport Planning",
];

export default function AnimatedTicker() {
  return (
    <div className="overflow-hidden border-y border-white/10 bg-[#002C2F] py-5 text-white">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
        className="flex w-max gap-10 whitespace-nowrap"
      >
        {[...words, ...words, ...words, ...words].map((word, index) => (
          <span
            key={`${word}-${index}`}
            className="font-[var(--font-space-grotesk)] text-2xl font-bold uppercase tracking-tight text-[#B6D957] md:text-4xl"
          >
            {word}
          </span>
        ))}
      </motion.div>
    </div>
  );
}