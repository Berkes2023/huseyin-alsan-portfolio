"use client";

import { motion } from "motion/react";

export default function TransportLines() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        animate={{ x: ["-12%", "12%", "-12%"] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[-10%] top-[18%] h-px w-[120%] bg-[#B6D957]/70"
      />

      <motion.div
        animate={{ x: ["10%", "-10%", "10%"] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[-10%] top-[36%] h-px w-[120%] bg-white/20"
      />

      <motion.div
        animate={{ y: ["-10%", "10%", "-10%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[22%] top-[-10%] h-[120%] w-px bg-[#B6D957]/70"
      />

      <motion.div
        animate={{ y: ["10%", "-10%", "10%"] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[38%] top-[-10%] h-[120%] w-px bg-white/20"
      />

      <motion.div
        animate={{ scale: [1, 1.5, 1], opacity: [0.35, 1, 0.35] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[22%] top-[18%] h-3 w-3 rounded-full bg-[#B6D957]"
      />

      <motion.div
        animate={{ scale: [1, 1.35, 1], opacity: [0.3, 0.85, 0.3] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute right-[38%] top-[36%] h-2.5 w-2.5 rounded-full bg-white"
      />

      <motion.div
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute -right-32 top-20 h-[520px] w-[520px] rounded-full border border-[#B6D957]/10"
      />

      <motion.div
        animate={{ rotate: [360, 0] }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        className="absolute -right-10 top-40 h-[380px] w-[380px] rounded-full border border-white/10"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#003C3F]/60 to-[#003C3F]" />
    </div>
  );
}