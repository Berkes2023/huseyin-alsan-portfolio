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
  const introRef = useRef<HTMLParagraphElement | null>(null);
  const nameRef = useRef<HTMLSpanElement | null>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        imageRef.current,
        {
          scale: 1.08,
        },
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
          y: 70,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.3,
          delay: 0.45,
          ease: "power3.out",
        }
      );

      gsap.fromTo(
        introRef.current,
        {
          opacity: 0,
          y: 24,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          delay: 0.9,
          ease: "power3.out",
          onComplete: () => {
            gsap.to(nameRef.current, {
              color: "#B6D957",
              textShadow: "0 0 10px rgba(182, 217, 87, 0.65)",
              duration: 1.4,
              repeat: -1,
              yoyo: true,
              ease: "sine.inOut",
            });
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative flex min-h-screen overflow-hidden bg-[#003C3F] px-4 pb-8 pt-28 sm:px-6 lg:px-8">
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
        <div ref={textRef} className="w-full max-w-3xl">
          {/* Animated introduction */}
          <p
            ref={introRef}
            className="font-[var(--font-space-grotesk)] text-lg font-bold text-white sm:text-xl"
          >
            {isTurkish ? "Merhaba, ben " : "Hi, I am "}

            <span ref={nameRef} className="text-white">
              Huseyin Alsan
            </span>

            !
          </p>

          <h1 className="mt-5 max-w-3xl font-[var(--font-space-grotesk)] text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-7xl">
            {isTurkish
              ? "Daha güvenli, daha akıllı ve daha erişilebilir sokaklar tasarlıyorum."
              : "Designing safer, smarter and more accessible streets."}
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-white/80 sm:text-lg sm:leading-8">
            {isTurkish
              ? "Daha güvenli, daha akıllı ve daha erişilebilir ulaşım ağları oluşturmak için yol ve sokak tasarımı, aktif ulaşım, trafik modelleme, trafik sinyalizasyonu, işaretleme ve toplu taşıma altyapısı alanlarında çalışan bir Trafik Mühendisiyim."
              : "I am a Traffic Engineer specialising in road and street design, active travel, traffic modelling, traffic signals, signage and public transport infrastructure, delivering safer, smarter and more accessible transport networks."}
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <MagneticLink
              href="/projects"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#B6D957] px-6 py-3 text-sm font-semibold text-[#003C3F] transition hover:bg-[#CBEA6A] sm:w-auto"
            >
              {isTurkish ? "Projeleri Görüntüle" : "View Projects"}
              <ArrowRight size={18} />
            </MagneticLink>

            <a
              href="#contact"
              className="inline-flex w-full items-center justify-center rounded-xl border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-[#003C3F] sm:w-auto"
            >
              {isTurkish ? "İletişim" : "Contact"}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}