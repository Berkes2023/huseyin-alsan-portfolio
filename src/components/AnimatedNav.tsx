"use client";

import Link from "next/link";
import { motion } from "motion/react";

type AnimatedNavProps = {
  isTurkish: boolean;
};

export default function AnimatedNav({ isTurkish }: AnimatedNavProps) {
  const navItems = [
    { label: isTurkish ? "Hakkımda" : "About", href: "#about" },
    { label: isTurkish ? "Uzmanlık" : "Expertise", href: "#services" },
    { label: isTurkish ? "Özgeçmiş" : "Resume", href: "#resume" },
    { label: isTurkish ? "Projeler" : "Projects", href: "/projects" },
    { label: isTurkish ? "İletişim" : "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed left-1/2 top-5 z-50 w-[calc(100%-2rem)] max-w-7xl -translate-x-1/2 rounded-full border border-white/10 bg-[#002C2F]/75 px-5 py-3 text-white shadow-2xl backdrop-blur-xl"
    >
      <div className="flex items-center justify-between gap-6">
        <Link
          href="/"
          className="font-[var(--font-space-grotesk)] text-sm font-bold uppercase tracking-[0.18em] text-white"
        >
          Huseyin<span className="text-[#B6D957]"> Alsan</span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const isProject =
              item.label === "Projects" || item.label === "Projeler";

            const className = isProject
              ? "rounded-full bg-[#B6D957] px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#003C3F] transition hover:bg-[#CBEA6A]"
              : "group relative rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-white/75 transition hover:text-white";

            const content = (
              <>
                {item.label}
                {!isProject && (
                  <span className="absolute inset-x-4 bottom-1 h-px origin-left scale-x-0 bg-[#B6D957] transition-transform duration-300 group-hover:scale-x-100" />
                )}
              </>
            );

            if (item.href.startsWith("/")) {
              return (
                <Link key={item.label} href={item.href} className={className}>
                  {content}
                </Link>
              );
            }

            return (
              <a key={item.label} href={item.href} className={className}>
                {content}
              </a>
            );
          })}
        </div>

        <a
          href="#contact"
          className="hidden rounded-full border border-white/15 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-white transition hover:border-[#B6D957] hover:text-[#B6D957] sm:inline-flex"
        >
          {isTurkish ? "İletişime Geç" : "Let’s Talk"}
        </a>
      </div>
    </motion.nav>
  );
}