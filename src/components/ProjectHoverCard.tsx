"use client";

import { motion } from "motion/react";
import { LucideIcon } from "lucide-react";

type ProjectHoverCardProps = {
  title: string;
  type: string;
  date: string;
  description: string;
  details: string[];
  icon: LucideIcon;
};

export default function ProjectHoverCard({
  title,
  type,
  date,
  description,
  details,
  icon: Icon,
}: ProjectHoverCardProps) {
  return (
    <motion.article
      whileHover={{ y: -10 }}
      transition={{ duration: 0.25 }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#002C2F] p-8 shadow-xl transition duration-300 hover:border-[#B6D957] hover:bg-[#00282B]"
    >
      <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#B6D957]/10 blur-3xl transition duration-500 group-hover:scale-150" />

      <div className="relative mb-6 inline-flex rounded-xl bg-[#B6D957] p-3 text-[#003C3F] transition duration-300 group-hover:rotate-6 group-hover:scale-110">
        <Icon size={24} />
      </div>

      <p className="relative text-sm font-semibold text-[#B6D957]">
        {type}
      </p>

      <h2 className="relative mt-3 font-[var(--font-space-grotesk)] text-2xl font-bold text-white">
        {title}
      </h2>

      <p className="relative mt-2 text-sm text-white/60">{date}</p>

      <p className="relative mt-5 leading-7 text-white/80">{description}</p>

      <ul className="relative mt-6 space-y-3 text-sm leading-6 text-white/75">
        {details.map((detail) => (
          <li key={detail} className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#B6D957]" />
            <span>{detail}</span>
          </li>
        ))}
      </ul>

      <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#B6D957] transition-all duration-500 group-hover:w-full" />
    </motion.article>
  );
}