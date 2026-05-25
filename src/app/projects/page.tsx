"use client";

import { useState } from "react";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import ProjectHoverCard from "@/components/ProjectHoverCard";

import {
  ArrowLeft,
  BarChart3,
  Building2,
  CircleDot,
  Globe2,
  Landmark,
  Map,
  Route,
} from "lucide-react";

const projectsData = (isTurkish: boolean) => [
  {
    title: isTurkish
      ? "Hereford LUF – Tavsiye Niteliğinde 20MPH Hız Limiti"
      : "Hereford LUF – Advisory 20MPH Limit",

    type: isTurkish
      ? "Trafik Düzenleme / Hız Yönetimi"
      : "Traffic Regulation / Speed Management",

    date: "Herefordshire Council",

    icon: Route,

    description: isTurkish
      ? "ATC hız ve hacim verileri, çarpışma analizleri ve OS haritaları kullanılarak tavsiye niteliğinde 20mph bölgelerinin geliştirilmesine destek sağlandı."
      : "Supported advisory 20mph zone development using ATC speed and volume data, collision data and OS base mapping.",

    details: [
      isTurkish
        ? "Seçilen güzergahlarda trafik ve çarpışma verileri analiz edildi."
        : "Collated traffic and collision data for selected routes.",

      isTurkish
        ? "Önerilen 20mph bölgeleri için AutoCAD çizimleri hazırlandı."
        : "Prepared AutoCAD drawings for proposed advisory 20mph zones.",

      isTurkish
        ? "KeySIGN ve Traffic Signs Manual kullanılarak tabela tasarımları oluşturuldu."
        : "Used KeySIGN and the Traffic Signs Manual to design advisory 20mph signage.",
    ],
  },

  {
    title: isTurkish
      ? "A48 Newport Seçenek Geliştirme"
      : "A48 Newport Option Development",

    type: isTurkish
      ? "Trafik Modelleme / Veri Analizi"
      : "Traffic Modelling / Data Analysis",

    date: "Transport for Wales",

    icon: BarChart3,

    description: isTurkish
      ? "Vissim ve ulaşım anket verileri kullanılarak Newport ağının trafik modelleme çalışmalarına destek sağlandı."
      : "Supported traffic modelling and option development for the Newport network using Vissim and transport survey data.",

    details: [
      isTurkish
        ? "Vissim ağ kodlama çalışmalarına katkı sağlandı."
        : "Contributed to network coding in Vissim.",

      isTurkish
        ? "MCTC, ANPR ve ATC veri setleri analiz edildi."
        : "Analysed MCTC, ANPR and ATC survey datasets.",

      isTurkish
        ? "Mevcut Durum Raporu için ulaşım altyapı analizleri desteklendi."
        : "Supported the Existing Conditions Report using transport infrastructure evidence.",
    ],
  },

  {
    title: isTurkish
      ? "Scholar’s Way Tasarım ve İş Geliştirme Çalışması"
      : "Scholar’s Way Design and Business Case",

    type: isTurkish
      ? "Aktif Ulaşım / İş Geliştirme"
      : "Active Travel / Business Case",

    date: "Bath & North East Somerset Council",

    icon: Route,

    description: isTurkish
      ? "Bath bölgesinde güvenli aktif ulaşım bağlantıları geliştirmek amacıyla mühendislik tasarım çalışmalarına destek sağlandı."
      : "Supported active travel engineering interventions for safe and high-quality links in South East Bath.",

    details: [
      isTurkish
        ? "Konsept ve seçenek tasarımlarına katkı sağlandı."
        : "Assisted with concept and optioneering design.",

      isTurkish
        ? "LTN 1/20, Inclusive Mobility ve Manual for Streets standartları uygulandı."
        : "Applied guidance including Inclusive Mobility, Manual for Streets and LTN 1/20.",

      isTurkish
        ? "Aktif ulaşım bağlantıları ve ulaşım dönüşüm projeleri desteklendi."
        : "Supported design work for active travel links and modal shift.",
    ],
  },

  {
    title: isTurkish
      ? "Etkinlik Günü Park ve Acil Durum Güzergahları"
      : "Event Day Parking & Emergency Route Schemes",

    type: isTurkish
      ? "Trafik Düzenleme Emirleri"
      : "Traffic Regulation Orders",

    date: "Glasgow City Council",

    icon: CircleDot,

    description: isTurkish
      ? "Celtic Park ve Ibrox Stadyumu çevresindeki etkinlik günü park ve acil durum güzergahları geliştirildi."
      : "Developed Event Day Parking and Emergency Route schemes around Celtic Park and Ibrox Stadiums.",

    details: [
      isTurkish
        ? "Detaylı TRO tasarım çizimleri hazırlandı."
        : "Prepared detailed TRO design layouts.",

      isTurkish
        ? "Park kısıtlamaları ve acil durum erişim tasarımları geliştirildi."
        : "Designed parking restrictions, emergency routes and access controls.",

      isTurkish
        ? "Paydaş geri bildirimleri doğrultusunda revizyonlar yapıldı."
        : "Supported stakeholder-led revisions and regulatory compliance.",
    ],
  },

  {
    title: isTurkish
      ? "Manchester Road Aktif Ulaşım ve CYCLOPS Kavşak Tasarımı"
      : "Manchester Road Active Travel and CYCLOPS Junction Design",

    type: isTurkish
      ? "CYCLOPS / Aktif Ulaşım Tasarımı"
      : "CYCLOPS / Active Travel Design",

    date: "Transport for Greater Manchester",

    icon: CircleDot,

    description: isTurkish
      ? "Bolton’daki öncelikli kavşaklar için CYCLOPS kavşak tasarımları geliştirildi."
      : "Developed CYCLOPS junction designs for eight priority junctions along Manchester Road in Bolton.",

    details: [
      isTurkish
        ? "Tek yönlü ve çift yönlü bisiklet altyapı seçenekleri tasarlandı."
        : "Designed single-directional and bi-directional cycle movement options.",

      isTurkish
        ? "LinSig kullanılarak tasarımlar analiz edildi."
        : "Used LinSig to test and assess design configurations.",

      isTurkish
        ? "Sinyalizasyon, yol işaretleri ve geometrik tasarımlar entegre edildi."
        : "Integrated junction geometry, crossings, signal staging, markings and signage.",
    ],
  },

  {
    title: isTurkish
      ? "İrlanda Mobilite Merkezleri"
      : "NTA Ireland Mobility Hubs",

    type: isTurkish
      ? "Mobilite Merkezleri"
      : "Mobility Hubs",

    date: "National Transport Authority",

    icon: Building2,

    description: isTurkish
      ? "İrlanda genelinde sürdürülebilir ulaşımı destekleyen mobilite merkezleri tasarlandı."
      : "Designed mobility hubs across Ireland supporting sustainable transport infrastructure.",

    details: [
      isTurkish
        ? "Bisiklet parkları, EV şarj noktaları ve scooter alanları tasarlandı."
        : "Integrated cycle stands, EV charging and scooter facilities.",

      isTurkish
        ? "NTA standartlarına uygun yol işaretleri ve çizgiler uygulandı."
        : "Applied NTA compliant signage and road markings.",

      isTurkish
        ? "Çoklu ulaşım modlarını destekleyen merkez çözümleri geliştirildi."
        : "Developed multimodal transport hub solutions.",
    ],
  },

  {
    title: isTurkish
      ? "Cardiff Şehir Merkezi Güney Modelleme"
      : "Cardiff City Centre South Modelling",

    type: isTurkish
      ? "Sinyal Modelleme"
      : "Signal Modelling",

    date: "Cardiff City Council",

    icon: Map,

    description: isTurkish
      ? "LinSig kullanılarak trafik sinyal modelleme ve performans analizleri desteklendi."
      : "Supported traffic signal modelling and performance analysis using LinSig.",

    details: [
      isTurkish
        ? "Sinyal fazları ve döngü süreleri analiz edildi."
        : "Analysed signal phase and cycle timings.",

      isTurkish
        ? "Gecikme ve kuyruk performans değerlendirmeleri yapıldı."
        : "Supported queue and delay performance reviews.",

      isTurkish
        ? "ATC ve MCC veri analizleri gerçekleştirildi."
        : "Worked with ATC and MCC traffic datasets.",
    ],
  },

  {
    title: isTurkish
      ? "Öğrenci Sokakları Projeleri"
      : "School Streets Projects",

    type: isTurkish
      ? "TRO / Yol İşaretleme"
      : "TRO / Road Markings",

    date: "Cardiff City Council",

    icon: Landmark,

    description: isTurkish
      ? "Cardiff genelinde 20’den fazla alan için TRO ve yol işaretleme tasarımları geliştirildi."
      : "Delivered TRO and road marking schemes across more than 20 Cardiff locations.",

    details: [
      isTurkish
        ? "Okul sokakları ve yerleşim bölgeleri için tasarımlar geliştirildi."
        : "Developed layouts for school streets and residential areas.",

      isTurkish
        ? "Bisiklet ve yaya altyapıları entegre edildi."
        : "Integrated pedestrian and cycle facilities.",

      isTurkish
        ? "Yerel yönetim ve paydaş geri bildirimleri uygulandı."
        : "Implemented local authority and stakeholder revisions.",
    ],
  },
];

export default function ProjectsPage() {
  const [language, setLanguage] = useState<"en" | "tr">("en");

  const isTurkish = language === "tr";

  const projects = projectsData(isTurkish);

  return (
    <main className="min-h-screen bg-[#003C3F] text-white">
      <section className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
        <nav className="flex items-center justify-between">
          <Link
            href="/"
            className="font-[var(--font-space-grotesk)] text-lg font-bold tracking-tight text-white"
          >
            Huseyin<span className="text-[#B6D957]"> Alsan</span>
          </Link>

          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-4 py-2 text-sm text-white/80 transition hover:bg-white hover:text-[#003C3F]"
          >
            <ArrowLeft size={16} />

            {isTurkish ? "Ana Sayfa" : "Back Home"}
          </Link>
        </nav>

        <Reveal>
          <header className="py-20">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#B6D957]">
              {isTurkish ? "Proje Portföyü" : "Project Portfolio"}
            </p>

            <h1 className="mt-5 max-w-4xl font-[var(--font-space-grotesk)] text-5xl font-bold tracking-tight text-white md:text-7xl">
              {isTurkish
                ? "Seçilmiş ulaşım ve inşaat mühendisliği projeleri."
                : "Selected transport and civil engineering projects."}
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/80">
              {isTurkish
                ? "Ulaşım planlama, trafik mühendisliği, aktif ulaşım, TRO tasarımı, modelleme ve altyapı geliştirme alanlarındaki seçilmiş mühendislik projeleri."
                : "Selected engineering projects across transport planning, traffic engineering, active travel, modelling and infrastructure development."}
            </p>
          </header>
        </Reveal>

 <section className="grid gap-6 md:grid-cols-2">
  {projects.map((project, index) => (
    <Reveal key={project.title} delay={index * 0.06}>
      <ProjectHoverCard
        title={project.title}
        type={project.type}
        date={project.date}
        description={project.description}
        details={project.details}
        icon={project.icon}
      />
    </Reveal>
  ))}
</section>
</section>

      <button
        onClick={() => setLanguage(isTurkish ? "en" : "tr")}
        className="fixed bottom-6 right-6 z-[999] inline-flex items-center gap-3 rounded-full border border-white/15 bg-[#002C2F]/90 px-5 py-3 text-sm font-bold uppercase tracking-[0.16em] text-white shadow-2xl backdrop-blur-xl transition hover:border-[#B6D957] hover:text-[#B6D957]"
      >
        <Globe2 size={18} />
        {isTurkish ? "EN" : "TR"}
      </button>
    </main>
  );
}