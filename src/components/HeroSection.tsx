"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import MagneticLink from "@/components/MagneticLink";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

type HeroSectionProps = {
  isTurkish: boolean;
};

export default function HeroSection({ isTurkish }: HeroSectionProps) {
  const imageRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        imageRef.current,
        { scale: 1.08 },
        {
          scale: 1,
          duration: 2.2,
          ease: "power2.out",
        }
      );

      gsap.fromTo(
        textRef.current,
        {
          opacity: 0,
          y: 90,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.4,
          delay: 0.65,
          ease: "power3.out",
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative flex min-h-screen overflow-hidden bg-[#003C3F] px-6 pb-8 pt-28 lg:px-8">
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

      {/* Dark cinematic overlays */}
      <div className="pointer-events-none absolute inset-0 bg-[#002C2F]/55" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#002C2F]/95 via-[#002C2F]/70 to-transparent" />


      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl items-center">
        <div ref={textRef} className="max-w-3xl">

          {/* Name */}
          <p
            className="
              mb-8
              font-[var(--font-space-grotesk)]
              text-sm
              font-bold
              uppercase
              tracking-[0.35em]
              text-[#B6D957]
            "
          >
            HUSEYIN ALSAN
          </p>


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