"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

type HeroSliderProps = {
  isTurkish: boolean;
};

const slides = [
  {
    image: "/images/huseyin-alsanpp.webp",
    label: { en: "Traffic Engineer", tr: "Trafik Mühendisi" },
    title: { en: "Huseyin Alsan", tr: "Huseyin Alsan" },
    description: {
      en: "Roads · Streets · Active Travel · Traffic Modelling",
      tr: "Yollar · Sokaklar · Aktif Ulaşım · Trafik Modelleme",
    },
  },
  {
    image: "/images/Manchester.webp",
    label: { en: "Selected Work", tr: "Seçilmiş Proje" },
    title: { en: "Manchester Road", tr: "Manchester Yolu" },
    description: {
      en: "Active travel and CYCLOPS design experience.",
      tr: "Aktif ulaşım ve CYCLOPS kavşak tasarım deneyimi.",
    },
  },
  {
    image: "/images/roundabout.webp",
    label: { en: "Highways Design", tr: "Karayolu Tasarımı" },
    title: {
      en: "Junction & Roundabout Design",
      tr: "Kavşak ve Dönel Kavşak Tasarımı",
    },
    description: {
      en: "Design thinking around capacity, safety and accessibility.",
      tr: "Kapasite, güvenlik ve erişilebilirlik odaklı tasarım yaklaşımı.",
    },
  },
  {
    image: "/images/Scooter.webp",
    label: { en: "Active Travel", tr: "Aktif Ulaşım" },
    title: {
      en: "Safer Urban Movement",
      tr: "Daha Güvenli Kentsel Hareketlilik",
    },
    description: {
      en: "Supporting walking, cycling and micromobility infrastructure.",
      tr: "Yürüme, bisiklet ve mikro mobilite altyapılarını destekleme.",
    },
  },
];

export default function HeroSlider({ isTurkish }: HeroSliderProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4500);

    return () => window.clearInterval(timer);
  }, []);

  const slide = slides[current];

  return (
    <section className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#002C2F]/80 shadow-2xl backdrop-blur-sm">
      <div className="relative h-[560px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.image}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={slide.image}
              alt={isTurkish ? slide.title.tr : slide.title.en}
              fill
              priority={current === 0}
              quality={100}
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>

        <div className="absolute inset-0 bg-gradient-to-t from-[#002C2F] via-[#002C2F]/50 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={isTurkish ? slide.title.tr : slide.title.en}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
            >
              <p className="text-sm uppercase tracking-[0.25em] text-[#B6D957]">
                {isTurkish ? slide.label.tr : slide.label.en}
              </p>

              <h2 className="mt-3 font-[var(--font-space-grotesk)] text-4xl font-bold text-white">
                {isTurkish ? slide.title.tr : slide.title.en}
              </h2>

              <p className="mt-3 max-w-md text-sm leading-6 text-white/75">
                {isTurkish ? slide.description.tr : slide.description.en}
              </p>
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex items-center gap-3">
            {slides.map((item, index) => (
              <button
                key={item.image}
                onClick={() => setCurrent(index)}
                className={`h-2 rounded-full transition-all ${
                  index === current
                    ? "w-10 bg-[#B6D957]"
                    : "w-2 bg-white/40 hover:bg-white"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}

            <p className="ml-auto font-[var(--font-space-grotesk)] text-sm text-white/60">
              0{current + 1} / 0{slides.length}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}