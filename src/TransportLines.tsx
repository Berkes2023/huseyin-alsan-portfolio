"use client";

import { motion } from "motion/react";

export default function TransportLines() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-40">
      <motion.div
        animate={{ x: ["-12%", "12%", "-12%"] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[-10%] top-[18%] h-px w-[120%] bg-[#B6D957]"
      />

      <motion.div
        animate={{ x: ["10%", "-10%", "10%"] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[-10%] top-[36%] h-px w-[120%] bg-white/25"
      />

      <motion.div
        animate={{ y: ["-10%", "10%", "-10%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[22%] top-[-10%] h-[120%] w-px bg-[#B6D957]"
      />

      <motion.div
        animate={{ y: ["10%", "-10%", "10%"] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[38%] top-[-10%] h-[120%] w-px bg-white/20"
      />

      <motion.div
        animate={{ scale: [1, 1.35, 1], opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[22%] top-[18%] h-3 w-3 rounded-full bg-[#B6D957]"
      />

      <motion.div
        animate={{ scale: [1, 1.25, 1], opacity: [0.3, 0.9, 0.3] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute right-[38%] top-[36%] h-2.5 w-2.5 rounded-full bg-white"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#003C3F]/60 to-[#003C3F]" />
    </div>
  );
}