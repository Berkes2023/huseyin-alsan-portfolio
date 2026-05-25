"use client";

import CountUp from "react-countup";
import { motion } from "framer-motion";

type Props = {
  isTurkish: boolean;
};

export default function CountUpStats({ isTurkish }: Props) {
  const stats = [
    {
      value: 20,
      suffix: "+",
      label: isTurkish
        ? "Ulaşım ve Mühendislik Projesi"
        : "Transport & Engineering Projects",
    },

    {
      value: "UK & Ireland",
      label: isTurkish
        ? "Altyapı Deneyimi"
        : "Infrastructure Experience",
    },

    {
      value: "AutoCAD · Vissim · LinSig",
      label: isTurkish
        ? "Teknik Yazılımlar"
        : "Technical Software",
    },

    {
      value: "Active Travel & TRO",
      label: isTurkish
        ? "Uzmanlık Alanı"
        : "Specialist Focus",
    },
  ];

  return (
    <section className="relative z-20 bg-[#003C3F] px-6 py-16 text-white">
      <div className="mx-auto max-w-7xl">
        <p className="mb-8 text-sm font-semibold uppercase tracking-[0.25em] text-[#B6D957]">
          {isTurkish ? "Temel Veriler" : "Key Metrics"}
        </p>

        <div className="grid gap-6 md:grid-cols-4">
          {stats.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              className="group rounded-2xl border border-[#B6D957]/30 bg-[#002C2F] p-6 shadow-xl transition duration-300 hover:-translate-y-2 hover:border-[#B6D957]"
            >
              <h3 className="font-[var(--font-space-grotesk)] text-3xl font-bold text-[#B6D957]">
                {typeof item.value === "number" ? (
                  <>
                    <CountUp
                      end={item.value}
                      duration={2.5}
                    />
                    {item.suffix}
                  </>
                ) : (
                  item.value
                )}
              </h3>

              <p className="mt-3 text-sm uppercase tracking-[0.2em] text-white/75">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}