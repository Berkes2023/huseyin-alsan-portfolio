"use client";

import { useState } from "react";
import { Globe2 } from "lucide-react";

import AnimatedNav from "@/components/AnimatedNav";
import ScrollProgress from "@/components/ScrollProgress";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import HeroSection from "@/components/HeroSection";
import AboutResumeSection from "@/components/AboutResumeSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import SkillsSection from "@/components/SkillsSection";
import EngineeringApproach from "@/components/EngineeringApproach";
import ImageSlider from "@/components/ImageSlider";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  const [language, setLanguage] = useState<"en" | "tr">("en");
  const isTurkish = language === "tr";

  return (
    <>
      <AnimatedNav isTurkish={isTurkish} />

      <SmoothScrollProvider>
        <main className="relative min-h-screen overflow-hidden bg-[#003C3F] text-white">
          <ScrollProgress />

          <button
            onClick={() => setLanguage(isTurkish ? "en" : "tr")}
            className="fixed bottom-6 right-6 z-[999] inline-flex items-center gap-3 rounded-full border border-white/15 bg-[#002C2F]/90 px-5 py-3 text-sm font-bold uppercase tracking-[0.16em] text-white shadow-2xl backdrop-blur-xl transition hover:border-[#B6D957] hover:text-[#B6D957]"
          >
            <Globe2 size={18} />
            {isTurkish ? "EN" : "TR"}
          </button>

          <HeroSection isTurkish={isTurkish} />
          <AboutResumeSection isTurkish={isTurkish} />
          <ExpertiseSection isTurkish={isTurkish} />
          <SkillsSection isTurkish={isTurkish} />
          <EngineeringApproach isTurkish={isTurkish} />
          <ImageSlider isTurkish={isTurkish} />
          <ContactSection isTurkish={isTurkish} />
        </main>
      </SmoothScrollProvider>
    </>
  );
}