"use client";

import Link from "next/link";

type AnimatedNavProps = {
  isTurkish: boolean;
};

export default function AnimatedNav({ isTurkish }: AnimatedNavProps) {
  const navItems = [
    { label: isTurkish ? "Hakkımda" : "About", href: "#about" },
    { label: isTurkish ? "Uzmanlık" : "Expertise", href: "#services" },
    { label: isTurkish ? "Projeler" : "Projects", href: "/projects" },
    { label: isTurkish ? "Deneyim" : "Experience", href: "#resume" },
    { label: isTurkish ? "İletişim" : "Contact", href: "#contact" },
  ];

  return (
    <nav className="absolute left-0 top-0 z-50 w-full px-6 py-10">
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-10">
        {navItems.map((item) =>
          item.href.startsWith("/") ? (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-white/70 transition duration-300 hover:text-[#B6D957]"
            >
              {item.label}
            </Link>
          ) : (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-white/70 transition duration-300 hover:text-[#B6D957]"
            >
              {item.label}
            </a>
          )
        )}

        <a
          href="#contact"
          className="rounded-full border border-[#B6D957]/40 px-5 py-2 text-sm font-semibold text-[#B6D957] transition duration-300 hover:bg-[#B6D957] hover:text-[#003C3F]"
        >
          {isTurkish ? "İletişime Geç" : "Let's Talk"}
        </a>
      </div>
    </nav>
  );
}