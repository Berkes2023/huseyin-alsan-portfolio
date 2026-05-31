"use client";

import { ExternalLink } from "lucide-react";
import Reveal from "@/components/Reveal";
import MagneticLink from "@/components/MagneticLink";

type SkillsSectionProps = {
  isTurkish: boolean;
};

export default function SkillsSection({
  isTurkish,
}: SkillsSectionProps) {
  const linkedinUrl = "https://www.linkedin.com/in/huseyinalsan/";

  const skills = [
    "AutoCAD",
    "Civil 3D",
    "PTV Vissim",
    "LinSig",
    "ArcGIS",
    "ARCADY",
    "ProjectWise",
    "PCMova",
    "Microsoft Office",
    "Autodesk Construction Cloud (ACC)",
    "KeySIGN & KeyLINES",

    isTurkish
      ? "Ulaşım Modellemesi ve Analizi"
      : "Transport Modelling & Analysis",

    isTurkish
      ? "Trafik Simülasyonu"
      : "Traffic Simulation",

    isTurkish
      ? "Trafik Mikrosimülasyonu"
      : "Traffic Microsimulation",

    isTurkish
      ? "Trafik Sinyalizasyonu"
      : "Traffic Signalling",

    isTurkish
      ? "Trafik Düzenleme Emirleri"
      : "Traffic Regulation Orders",

    isTurkish
      ? "Yol ve Sokak Tasarımı"
      : "Road & Street Design",

    isTurkish
      ? "Karayolu Tasarımı"
      : "Highway Design",

    isTurkish
      ? "Aktif Ulaşım Tasarımı"
      : "Active Travel Design",

    isTurkish
      ? "Bisiklet Yolu Tasarımı"
      : "Cycle Lane Design",

    isTurkish
      ? "Otobüs Altyapı Tasarımı"
      : "Bus Infrastructure Design",

    isTurkish
      ? "Teknik Dokümantasyon ve Raporlama"
      : "Technical Documentation & Reporting",

    isTurkish
      ? "Uyumluluk ve Standart Bilgisi"
      : "Compliance & Standards Knowledge",

    isTurkish
      ? "Güvenlik Farkındalığı"
      : "Safety Awareness",

    isTurkish
      ? "Problem Çözme"
      : "Problem Solving",

    isTurkish
      ? "İletişim"
      : "Communication",

    isTurkish
      ? "Takım Çalışması ve Liderlik"
      : "Teamwork & Leadership",

    isTurkish
      ? "Zaman Yönetimi"
      : "Time Management",

    isTurkish
      ? "Uyum Yeteneği"
      : "Adaptability",
  ];

  return (
    <section
      id="skills"
      className="bg-[#F4F7EF] px-6 py-24 text-[#003C3F]"
    >
      <Reveal className="mx-auto max-w-5xl border-t border-[#003C3F]/10 pt-14">
        <div className="text-center">
          <h2 className="font-[var(--font-space-grotesk)] text-4xl font-bold tracking-tight md:text-5xl">
            {isTurkish
              ? "Yetenekler ve Sektör Bilgisi"
              : "Skills & Industry Knowledge"}
          </h2>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => (
            <div
              key={skill}
              className="
                group relative overflow-hidden rounded-2xl
                border border-[#003C3F]/10
                bg-white/80
                px-5 py-4
                backdrop-blur-sm
                transition-all duration-300
                hover:-translate-y-2
                hover:border-[#B6D957]/50
                hover:bg-white
                hover:shadow-[0_10px_30px_rgba(182,217,87,0.15)]
              "
            >
              <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-[#B6D957]/10 blur-2xl transition duration-500 group-hover:scale-150" />

              <p className="relative z-10 font-medium text-[#003C3F] transition duration-300 group-hover:text-[#5F7F1F]">
                {skill}
              </p>

              <span
                className="
                  absolute bottom-0 left-0
                  h-[2px] w-0
                  bg-[#B6D957]
                  transition-all duration-300
                  group-hover:w-full
                "
              />
            </div>
          ))}
        </div>

        <div className="mt-20 flex justify-center">
          <MagneticLink
            href={linkedinUrl}
            external
            className="
              inline-flex items-center justify-center gap-3
              rounded-2xl
              bg-[#B6D957]
              px-10 py-5
              text-sm font-bold uppercase tracking-[0.25em]
              text-[#003C3F]
              shadow-[0_10px_30px_rgba(182,217,87,0.20)]
              transition duration-300
              hover:bg-[#CBEA6A]
            "
          >
            <span>
              {isTurkish
                ? "LinkedIn Profilimi Ziyaret Et"
                : "Visit My LinkedIn"}
            </span>

            <ExternalLink size={18} />
          </MagneticLink>
        </div>
      </Reveal>
    </section>
  );
}