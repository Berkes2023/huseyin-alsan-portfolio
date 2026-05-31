"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import MagneticLink from "@/components/MagneticLink";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type HeroSectionProps = {
  isTurkish: boolean;
};

export default function HeroSection({ isTurkish }: HeroSectionProps) {
  const heroRef = useRef<HTMLElement | null>(null);
  const imageRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(textRef.current, {
        opacity: 0,
        y: 120,
      });

      gsap.set(imageRef.current, {
        scale: 1.08,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "+=1200",
          scrub: 1,
          pin: true,
        },
      });

      tl.to(imageRef.current, {
        scale: 1,
        ease: "none",
      }).to(
        textRef.current,
        {
          opacity: 1,
          y: 0,
          ease: "power3.out",
        },
        0.25
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen overflow-hidden bg-[#003C3F]"
    >
      <div ref={imageRef} className="absolute inset-0">
        <Image
          src="/images/hero-road.webp"
          alt="Aerial view of road infrastructure"
          fill
          priority
          quality={100}
          className="pointer-events-none object-cover"
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[#002C2F]/55" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#002C2F]/95 via-[#002C2F]/70 to-transparent" />

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl items-center px-6 pt-28 lg:px-8">
        <div ref={textRef} className="max-w-3xl">
          <p className="text-[#B6D957]">
            {isTurkish ? "Trafik Mühendisi" : "Traffic Engineer"}
          </p>

          <h1 className="mt-3 max-w-3xl font-[var(--font-space-grotesk)] text-5xl font-bold tracking-tight text-white md:text-7xl">
            {isTurkish
              ? "Daha güvenli, daha akıllı ve daha erişilebilir sokaklar tasarlıyorum."
              : "Designing safer, smarter and more accessible streets."}
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">
            {isTurkish
              ? "Huseyin Alsan; yol ve sokak tasarımı, aktif ulaşım, trafik modelleme, trafik sinyalizasyonu, işaretleme ve toplu taşıma altyapısı alanlarında çalışan bir Trafik Mühendisidir."
              : "Huseyin Alsan is a Traffic Engineer working across road and street design, active travel, traffic modelling, traffic signals, signage and public transport infrastructure."}
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <MagneticLink
              href="/projects"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#B6D957] px-6 py-3 text-sm font-semibold text-[#003C3F] transition hover:bg-[#CBEA6A]"
            >
              {isTurkish ? "Projeleri Görüntüle" : "View Projects"}
              <ArrowRight size={18} />
            </MagneticLink>

            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-[#003C3F]"
            >
              {isTurkish ? "İletişim" : "Contact"}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}