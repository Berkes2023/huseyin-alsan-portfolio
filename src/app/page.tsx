"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import TransportLines from "@/components/TransportLines";
import MouseGlow from "@/components/MouseGlow";
import AnimatedTicker from "@/components/AnimatedTicker";
import MagneticLink from "@/components/MagneticLink";
import HeroSlider from "@/components/HeroSlider";
import AnimatedNav from "@/components/AnimatedNav";
import ScrollProgress from "@/components/ScrollProgress";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import BlueprintBackground from "@/components/BlueprintBackground";
import CountUpStats from "@/components/CountUpStats";
import ProcessTimeline from "@/components/ProcessTimeline";
import {
  ArrowRight,
  Bike,
  Bus,
  Car,
  CheckCircle2,
  ExternalLink,
  Globe2,
  Mail,
  Route,
} from "lucide-react";

const linkedinUrl = "https://www.linkedin.com/in/huseyinalsan/";
const emailAddress = "huseyin.alsan@outlook.com";


export default function Home() {
  const [formError, setFormError] = useState("");
  const [language, setLanguage] = useState<"en" | "tr">("en");
  const isTurkish = language === "tr";

  const memberships = [
  isTurkish
    ? "ICE Üyesi"
    : "ICE Member",

  isTurkish
    ? "KTMMOB / UCCTEA Üyesi"
    : "KTMMOB / UCCTEA Member",
];

  const education = [
  {
    degree: isTurkish
      ? "MSc Ulaşım Planlama ve Mühendisliği"
      : "MSc Transportation Planning and Engineering",

    institution: isTurkish
      ? "Southampton Üniversitesi"
      : "University of Southampton",

    date: "2022 – 2023",

    dissertation: isTurkish
      ? "Avrupa'da Stratejik Gece Tren Ağı"
      : "Strategic Overnight Train Network in Europe",

    modules: [
      isTurkish
        ? "Ulaşım Ekonomisi"
        : "Transport Economics",

      isTurkish
        ? "Ulaşım Veri Analizi"
        : "Transport Data Analysis",

      isTurkish
        ? "Ulaşım Politikası ve Yönetişim"
        : "Transport Policy & Governance",

      isTurkish
        ? "Ulaşım Modellemesi"
        : "Transport Modelling",

      isTurkish
        ? "Karayolu ve Trafik Mühendisliği"
        : "Highway & Traffic Engineering",

      isTurkish
        ? "Demiryolu Mühendisliği"
        : "Railway Engineering",

      isTurkish
        ? "Ulaşım Yönetimi ve Güvenliği"
        : "Transport Management & Safety",

      isTurkish
        ? "Ulaşım Planlama Uygulamaları"
        : "Transport Planning Practice",
    ],
  },

  {
    degree: isTurkish
      ? "BEng (Hons) İnşaat Mühendisliği"
      : "BEng (Hons) Civil Engineering",

    institution: isTurkish
      ? "Cardiff Üniversitesi"
      : "Cardiff University",

    date: "2019 – 2022",

    dissertation: isTurkish
      ? "HPFRC – Yüksek Performanslı Lif Takviyeli Beton"
      : "HPFRC – High Performance Fibre Reinforced Concrete",

    modules: [
      isTurkish
        ? "Mühendislik Analizi"
        : "Engineering Analysis",

      isTurkish
        ? "İnşaat Mühendisliği Tasarımı"
        : "Civil Engineering Design",

      isTurkish
        ? "Yapısal Analiz ve Tasarım"
        : "Structural Analysis & Design",

      isTurkish
        ? "İnşaat Yönetimi"
        : "Construction Management",

      isTurkish
        ? "Beton Malzemeleri ve Yapıları"
        : "Concrete Materials & Structures",

      isTurkish
        ? "Profesyonel Mühendislik"
        : "Professional Engineering",

      isTurkish
        ? "Malzemeler ve Yapım"
        : "Materials & Construction",
    ],
  },
];


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



      const resumeExperience = [
  {
    role: isTurkish
      ? "Mühendis"
      : "Engineer",

    company: "AECOM",

    date: isTurkish
      ? "Eki 2023 – Günümüz"
      : "Oct 2023 – Present",
  },

  {
    role: isTurkish
      ? "Mühendislik Stajyeri"
      : "Engineering Intern",

    company: "Tasyapi Insaat",

    date: isTurkish
      ? "Tem 2021 – Ağu 2021"
      : "Jul 2021 – Aug 2021",
  },

  {
    role: isTurkish
      ? "Mühendislik Stajyeri"
      : "Engineering Intern",

    company: isTurkish
      ? "Ulaştırma ve Altyapı Bakanlığı Planlama ve İnşaat Dairesi"
      : "Planning and Construction Department, Ministry of Transport and Infrastructure",

    date: isTurkish
      ? "Haz 2020 – Tem 2020"
      : "Jun 2020 – Jul 2020",
  },

  {
    role: isTurkish
      ? "Çırak / Yardımcı Çalışan"
      : "Apprentice / Assistant Worker",

    company: "Asik Trading",

    date: isTurkish
      ? "Haz 2017 – Ağu 2017"
      : "Jun 2017 – Aug 2017",
  },
];


      const services = [
        {
          title: isTurkish ? "Yol ve Sokak Tasarımı" : "Road & Street Design",
          description: isTurkish
            ? "Yol düzenleri, sokak tasarımları ve kamusal alan geliştirmeleri için güvenlik, erişilebilirlik ve kullanıcı deneyimine odaklanan mühendislik tasarım desteği."
            : "Design support for road layouts, streetscapes, and public realm improvements with a focus on safety, accessibility and user experience.",
          icon: Route,
        },
        {
          title: isTurkish ? "Aktif Ulaşım Tasarımı" : "Active Travel Design",
          description: isTurkish
            ? "Bisiklet yolları, yaya hareketliliği ve aktif ulaşım altyapılarının daha güvenli ve kapsayıcı şehir ortamları oluşturacak şekilde tasarlanması."
            : "Cycle lane, pedestrian movement and active travel infrastructure design to create safer and more inclusive urban environments.",
          icon: Bike,
        },
        {
          title: isTurkish ? "Otobüs Altyapısı" : "Bus Infrastructure",
          description: isTurkish
            ? "Sürdürülebilir ulaşımı geliştirmek amacıyla otobüs şeritleri, duraklar ve toplu taşıma öncelik sistemlerinin tasarımına katkı sağlanması."
            : "Contribution to the design of bus lanes, bus stops, and public transport priority measures to improve sustainable mobility.",
          icon: Bus,
        },
        {
          title: isTurkish ? "Trafik Modellemesi" : "Traffic Modelling",
          description: isTurkish
            ? "Veri odaklı tasarım ve planlama kararlarını desteklemek için mikrosimülasyon, kavşak analizi ve ulaşım modelleme çalışmaları."
            : "Microsimulation, junction analysis, and transport modelling to support data-driven design and planning decisions.",
          icon: Car,
        },
      ];

return (
  <SmoothScrollProvider>
    <main className="relative min-h-screen overflow-hidden bg-[#003C3F] text-white">
      <ScrollProgress />
      <MouseGlow />
      <AnimatedNav isTurkish={isTurkish} />

      <button
        onClick={() => setLanguage(isTurkish ? "en" : "tr")}
        className="fixed bottom-6 right-6 z-[999] inline-flex items-center gap-3 rounded-full border border-white/15 bg-[#002C2F]/90 px-5 py-3 text-sm font-bold uppercase tracking-[0.16em] text-white shadow-2xl backdrop-blur-xl transition hover:border-[#B6D957] hover:text-[#B6D957]"
      >
        <Globe2 size={18} />
        {isTurkish ? "EN" : "TR"}
      </button>

      {/* Hero */}
      <section className="relative mx-auto flex min-h-screen max-w-7xl flex-col px-6 pb-8 pt-28 lg:px-8">
        <TransportLines />
        <BlueprintBackground />

        <div className="relative z-10 grid flex-1 items-center gap-12 py-20 lg:grid-cols-2">
          <section>
            <Reveal>
                <p className="mt-2 text-[#B6D957]">
                  {isTurkish ? "Trafik Mühendisi" : "Traffic Engineer"}
                </p>

              <h1 className="max-w-3xl font-[var(--font-space-grotesk)] text-5xl font-bold tracking-tight text-white md:text-7xl">
                {isTurkish
                  ? "Daha güvenli, daha akıllı ve daha erişilebilir sokaklar tasarlıyorum."
                  : "Designing safer, smarter and more accessible streets."}
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">
                {isTurkish
                  ? "Huseyin Alsan; yol ve sokak tasarımı, aktif ulaşım, trafik modelleme, trafik sinyalizasyonu, işaretleme ve toplu taşıma altyapısı alanlarında çalışan bir Trafik Mühendisidir."
                  : "Huseyin Alsan is a Traffic Engineer working across road and street design, active travel, traffic modelling, traffic signals, signage and public transport infrastructure."}
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <MagneticLink
                href="/projects"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#B6D957] px-6 py-3 text-sm font-semibold text-[#003C3F] transition hover:bg-[#CBEA6A]"
              >
                {isTurkish ? "Projeleri Görüntüle" : "View Projects"}

                <ArrowRight size={18} />
              </MagneticLink>

              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-[#003C3F]"
              >
                {isTurkish ? "İletişim" : "Contact"}
              </a>
            </div>
            </Reveal>
          </section>

          <Reveal delay={0.2}>
            <HeroSlider />
          </Reveal>
        </div>
      </section>

      <AnimatedTicker />

     {/* Key Metrics */}
    <CountUpStats isTurkish={isTurkish} />

      {/* About Me */}
      <section id="about" className="bg-white px-6 py-24 text-[#003C3F]">
        <div className="mx-auto max-w-7xl">
          <Reveal>
          <p className="font-[var(--font-space-grotesk)] text-5xl font-bold uppercase tracking-tight text-[#B6D957] md:text-6xl">
            {isTurkish ? "Hakkımda" : "About Me"}
          </p>
          </Reveal>

          <div className="mt-10 grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal delay={0.1}>
          <div className="space-y-8">
            <div className="relative overflow-hidden rounded-2xl border border-[#003C3F]/10 bg-[#F4F7EF] shadow-lg">
              <Image
                src="/images/huseyin-alsan.webp"
                alt="Huseyin Alsan, Traffic Engineer"
                width={900}
                height={700}
                className="h-[360px] w-full object-cover object-center transition duration-700 hover:scale-105"
              />
            </div>

            <div className="rounded-2xl border border-[#003C3F]/10 bg-[#F4F7EF] p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#7EA629]">
                {isTurkish ? "Profesyonel Odak" : "Professional Focus"}
              </p>

              <div className="mt-5 grid grid-cols-2 gap-4 text-sm font-medium text-[#003C3F]">
                {[
                isTurkish ? "Yol Tasarımı" : "Road Design",

                isTurkish ? "Aktif Ulaşım" : "Active Travel",

                isTurkish ? "Trafik Modellemesi" : "Traffic Modelling",

                isTurkish ? "Toplu Taşıma" : "Public Transport",

                isTurkish ? "Trafik Sinyalizasyonu" : "Traffic Signalling",

                isTurkish ? "Kentsel Sokaklar" : "Urban Streets",

                isTurkish
                  ? "Trafik Düzenleme Emirleri"
                  : "Traffic Regulation Orders",

                isTurkish ? "Mobilite Merkezleri" : "Mobility Hubs",
              ].map((item) => (
                  <div key={item} className="transition hover:translate-x-1">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 space-y-5">
              {[
              {
                  title: isTurkish
                    ? "Manchester Yolu"
                    : "Manchester Road",

                  image: "/images/Manchester.webp",
                },

                {
                  title: isTurkish
                    ? "Kavşak Tasarımı"
                    : "Roundabout Design",

                  image: "/images/roundabout.webp",
                },

                {
                  title: isTurkish
                    ? "Aktif Ulaşım Projesi"
                    : "Active Travel Scheme",

                  image: "/images/Guide.webp",
                },
              ].map((project) => (
                <div
                  key={project.title}
                  className="group relative overflow-hidden rounded-3xl border border-[#B6D957]/20 bg-[#003C3F]/5 shadow-xl transition duration-500 hover:-translate-y-2 hover:shadow-2xl"
                >
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#003C3F]/90 via-[#003C3F]/20 to-transparent" />
                  </div>

                  <div className="absolute bottom-0 left-0 p-6">
                    <p className="text-sm uppercase tracking-[0.25em] text-[#B6D957]">
                      {isTurkish ? "Öne Çıkan Proje" : "Featured Project"}
                    </p>

                    <h3 className="mt-2 font-[var(--font-space-grotesk)] text-2xl font-bold text-white">
                      {project.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

            

            <Reveal delay={0.18}>
            <div>
              <h2 className="font-[var(--font-space-grotesk)] text-4xl font-bold leading-tight tracking-tight text-[#003C3F] md:text-5xl">
                {isTurkish
                  ? "Her gün sokaklarımızı kullanan topluluklar için daha güvenli, daha akıllı ve daha erişilebilir ulaşım altyapıları tasarlamaya odaklanıyorum."
                  : "I am focused on designing safer, smarter and more accessible transport infrastructure for the communities who use our streets every day."}
              </h2>

              <div className="mt-8 space-y-6 text-lg leading-8 text-slate-700">

                <p>
                  {isTurkish
                    ? "Ulaşım sistemleri ve kentsel mobiliteye karşı güçlü bir tutku geliştirdikten sonra, daha güvenli, daha verimli ve sürdürülebilir yol ağları sunmaya odaklanan bir Trafik Mühendisi olarak kariyerimi sürdürmekteyim."
                    : "Having developed a strong passion for transport systems and urban mobility, I am pursuing a career as a Traffic Engineer focused on delivering safer, more efficient and sustainable road networks."}
                </p>

                <p>
                  {isTurkish
                    ? "Ben Huseyin Alsan. İnşaat Mühendisliği ve Ulaşım Planlama alanlarında altyapıya sahip deneyimli ve tutkulu bir Trafik Mühendisiyim. Birleşik Krallık merkezli olarak, kentsel çevrelerde altyapı projelerinin hem tasarım hem de uygulama süreçlerinde çeşitli trafik mühendisliği projelerinde görev aldım."
                    : "My name is Huseyin Alsan and I am an experienced and passionate Traffic Engineer with a background in Civil Engineering and Transportation Planning. Currently based in the United Kingdom, I have gained experience working on a wide range of traffic engineering projects, contributing to both the design and delivery of infrastructure schemes across urban environments."}
                </p>

                <p>
                  {isTurkish
                    ? "Aktif ulaşım altyapıları, Trafik Düzenleme Emirleri (TRO), trafik veri analizi, trafik modelleme ve sinyal modelleme projelerinde görev aldım ve katkı sağladım. Birleşik Krallık ve İrlanda genelindeki yerel yönetimler ve kuruluşlarla çalışmak, gerçek dünya trafik sorunları ve mühendislik çözümlerinin pratik uygulamaları konusunda güçlü bir anlayış geliştirmemi sağladı."
                    : "I have supported and delivered elements of projects involving active travel infrastructure, Traffic Regulation Orders (TROs), traffic data analysis, traffic modelling and signal modelling. My work with local authorities and organisations across the UK and Ireland has enabled me to develop a strong understanding of real-world traffic challenges and the practical application of engineering solutions."}
                </p>

                <p>
                  {isTurkish
                    ? "AutoCAD, Vissim ve LinSig konularında yetkin olarak; trafik modelleme, ağ analizi ve tasarım geliştirme süreçlerinde veri odaklı metodolojiler uygulamaktayım. Temel Birleşik Krallık standartları ve rehberleri ile çalışma deneyimine sahibim ve tüm çıktılarımın teknik olarak sağlam, uyumlu ve en iyi uygulamalarla örtüşmesini sağlamaktayım."
                    : "Highly skilled in AutoCAD, Vissim and LinSig, I apply data-driven methodologies to traffic modelling, network analysis and design development. I have experience working with key UK guidance and standards, ensuring that all outputs are technically robust, compliant and aligned with best practice."}
                </p>

                <p>
                  {isTurkish
                    ? "Deneyimlerim; aktif ulaşım koridorları, kavşak iyileştirmeleri, mobilite merkezleri ve büyük ölçekli TRO geliştirmeleri gibi çeşitli projeleri kapsamaktadır. Bu projelerde karmaşık gereksinimleri uygulanabilir ve sürdürülebilir tasarımlara dönüştürmekten sorumluydum."
                    : "My experience spans a variety of schemes including active travel corridors, junction improvements, mobility hubs and large-scale TRO developments, where I have been responsible for translating complex requirements into practical and buildable designs."}
                </p>

                <p>
                  {isTurkish
                    ? "Temel hedefim; trafik modelleme, tasarım ve ağ optimizasyonu alanlarında uzmanlığımı geliştirirken, insanların kentsel çevrelerdeki hareket biçimini iyileştiren yenilikçi ve sürdürülebilir ulaşım çözümlerine katkı sağlamaya devam etmektir."
                    : "My primary focus is to continue developing as a Traffic Engineer, expanding my expertise in traffic modelling, design and network optimisation while contributing to innovative and sustainable transport solutions that improve the way people move through urban environments."}
                </p>

              </div>
            </div>
            </Reveal>
          </div>
        </div>
      </section>
{/* Resume */}
<section id="resume" className="bg-[#003C3F] px-6 py-24 text-white">
  <div className="mx-auto max-w-7xl">
    <div className="grid gap-16 lg:grid-cols-[0.7fr_1.3fr]">

      {/* LEFT SIDE */}
      <Reveal>
        <div>
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#B6D957]">
          {isTurkish ? "Özgeçmiş" : "Resume"}
        </p>

        <h2 className="mt-4 font-[var(--font-space-grotesk)] text-5xl font-bold tracking-tight text-white md:text-6xl">
          {isTurkish
            ? "Deneyim, eğitim ve profesyonel odak alanı."
            : "Experience, education and professional focus."}
        </h2>

        <p className="mt-6 text-lg leading-8 text-white/80">
          {isTurkish
            ? "Yol tasarımı, sokak düzenlemeleri, aktif ulaşım, trafik modelleme, Trafik Düzenleme Emirleri (TRO) ve altyapı planlamasıyla şekillenen ulaşım ve inşaat mühendisliği geçmişi."
            : "A transport and civil engineering background shaped by roads, street design, active travel, traffic modelling, Traffic Regulation Orders and infrastructure planning."}
        </p>

          {/* Project Image Stack */}
          <div className="mt-16 hidden space-y-6 lg:block">
            {[
             {
              title: isTurkish
                ? "Yol Ağı Tasarımı"
                : "Road Network Design",

              label: isTurkish
                ? "Altyapı"
                : "Infrastructure",

              image: "/images/Roadnumbers.webp",
            },

            {
              title: isTurkish
                ? "Aktif Ulaşım ve Kamusal Alan"
                : "Active Travel & Public Realm",

              label: isTurkish
                ? "Kentsel Sokaklar"
                : "Urban Streets",

              image: "/images/Palving.webp",
            },

            {
              title: isTurkish
                ? "Sürdürülebilir Ulaşım Sistemleri"
                : "Sustainable Transport Systems",

              label: isTurkish
                ? "Trafik Mühendisliği"
                : "Traffic Engineering",

              image: "/images/roads.webp",
            },
            ].map((item) => (
              <div
                key={item.title}
                className="group overflow-hidden rounded-3xl border border-white/10 bg-[#002C2F] shadow-2xl transition duration-500 hover:-translate-y-2 hover:border-[#B6D957]/40"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={900}
                  height={550}
                  className="h-56 w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="p-5">
                  <p className="text-xs uppercase tracking-[0.25em] text-[#B6D957]">
                    {item.label}
                  </p>

                  <h4 className="mt-2 text-lg font-bold text-white">
                    {item.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* RIGHT SIDE */}
      <Reveal delay={0.15}>
        <div className="space-y-12">

          {/* Experience */}
          <div className="border-t border-white/20 pt-8">
          <h3 className="font-[var(--font-space-grotesk)] text-2xl font-bold text-[#B6D957]">
            {isTurkish ? "Deneyim" : "Experience"}
          </h3>

            <div className="mt-8 grid gap-8 md:grid-cols-2">
              {resumeExperience.map((item) => (
                <div
                  key={`${item.role}-${item.company}`}
                  className="rounded-2xl border border-white/10 bg-[#002C2F] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#B6D957]/40"
                >
                  <h4 className="font-bold text-white">
                    {item.role}
                  </h4>

                  <p className="mt-1 text-white/80">
                    {item.company}
                  </p>

                  <p className="mt-1 text-sm text-white/55">
                    {item.date}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="border-t border-white/20 pt-8">
          <h3 className="font-[var(--font-space-grotesk)] text-2xl font-bold text-[#B6D957]">
            {isTurkish ? "Eğitim" : "Education"}
          </h3>

            <div className="mt-8 space-y-8">

              {/* MSc */}
              <div className="rounded-3xl border border-white/10 bg-[#002C2F] p-8 transition duration-300 hover:border-[#B6D957]/40">
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h4 className="text-3xl font-bold text-white">
                      {isTurkish
                        ? "MSc Ulaşım Planlama ve Mühendisliği"
                        : "MSc Transportation Planning and Engineering"}
                    </h4>

                    <p className="mt-2 text-white/80">
                      {isTurkish
                        ? "Southampton Üniversitesi"
                        : "University of Southampton"}
                    </p>

                    <p className="mt-1 text-sm text-white/50">
                      2022 – 2023
                    </p>
                  </div>

                  <div className="rounded-full border border-[#B6D957]/30 px-5 py-2 text-xs uppercase tracking-[0.25em] text-[#B6D957]">
                    {isTurkish ? "Eğitim" : "Education"}
                  </div>
                </div>

                <div className="mt-6 rounded-2xl border border-[#B6D957]/20 bg-[#003C3F] p-5">
                  <p className="text-xs uppercase tracking-[0.25em] text-[#B6D957]">
                    {isTurkish ? "Araştırma Projesi" : "Research Project"}
                  </p>

                  <p className="mt-2 text-white/80">
                    {isTurkish
                      ? "Avrupa'da Stratejik Gece Tren Ağı"
                      : "Strategic Overnight Train Network in Europe"}
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  {[
                isTurkish
                  ? "Ulaşım Ekonomisi"
                  : "Transport Economics",

                isTurkish
                  ? "Ulaşım Veri Analizi ve Teknikleri"
                  : "Transport Data Analysis and Techniques",

                isTurkish
                  ? "Ulaşım Planlaması: Politika ve Yönetişim"
                  : "Transport Planning: Policy and Governance",

                isTurkish
                  ? "Ulaşım Modellemesi"
                  : "Transport Modelling",

                isTurkish
                  ? "Karayolu ve Trafik Mühendisliği"
                  : "Highway and Traffic Engineering",

                isTurkish
                  ? "Demiryolu Mühendisliği ve Operasyonları"
                  : "Railway Engineering and Operations",

                isTurkish
                  ? "Ulaşım Yönetimi ve Güvenliği"
                  : "Transport Management and Safety",

                isTurkish
                  ? "Ulaşım Planlaması: Uygulama"
                  : "Transport Planning: Practice",
              ].map((module) => (
                    <span
                      key={module}
                      className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/75 transition hover:border-[#B6D957]/40 hover:text-white"
                    >
                      {module}
                    </span>
                  ))}
                </div>
              </div>

              {/* BEng */}
              <div className="rounded-3xl border border-white/10 bg-[#002C2F] p-8 transition duration-300 hover:border-[#B6D957]/40">
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                 <div>
                <h4 className="text-3xl font-bold text-white">
                  {isTurkish
                    ? "BEng (Hons) İnşaat Mühendisliği"
                    : "BEng (Hons) Civil Engineering"}
                </h4>

                <p className="mt-2 text-white/80">
                  {isTurkish
                    ? "Cardiff Üniversitesi"
                    : "Cardiff University"}
                </p>

                <p className="mt-1 text-sm text-white/50">
                  2019 – 2022
                </p>
              </div>

              <div className="rounded-full border border-[#B6D957]/30 px-5 py-2 text-xs uppercase tracking-[0.25em] text-[#B6D957]">
                {isTurkish ? "Eğitim" : "Education"}
              </div>
              </div>

              <div className="mt-6 rounded-2xl border border-[#B6D957]/20 bg-[#003C3F] p-5">
                <p className="text-xs uppercase tracking-[0.25em] text-[#B6D957]">
                  {isTurkish ? "Bitirme Projesi" : "Dissertation"}
                </p>

                <p className="mt-2 text-white/80">
                  {isTurkish
                    ? "HPFRC – Yüksek Performanslı Lif Takviyeli Beton"
                    : "HPFRC – High Performance Fibre Reinforced Concrete"}
                </p>
              </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  {[
                      isTurkish
                        ? "Mühendislik Analizi"
                        : "Engineering Analysis",

                      isTurkish
                        ? "İnşaat Mühendisliği Tasarımı"
                        : "Civil Engineering Design",

                      isTurkish
                        ? "Malzemeler ve Yapım"
                        : "Materials and Construction",

                      isTurkish
                        ? "Profesyonel Mühendislik"
                        : "Professional Engineering",

                      isTurkish
                        ? "Yapısal Analiz ve Tasarım"
                        : "Structural Analysis and Design",

                      isTurkish
                        ? "İnşaat Yönetimi"
                        : "Construction Management",

                      isTurkish
                        ? "Beton Yapılar"
                        : "Concrete Structures",
                    ].map((module) => (
                    <span
                      key={module}
                      className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/75 transition hover:border-[#B6D957]/40 hover:text-white"
                    >
                      {module}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Professional Memberships */}
          <div className="border-t border-white/20 pt-8">
          <h3 className="font-[var(--font-space-grotesk)] text-2xl font-bold text-[#B6D957]">
            {isTurkish
              ? "Profesyonel Üyelikler"
              : "Professional Memberships"}
          </h3>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {memberships.map((membership) => (
              <div
                key={membership}
                className="rounded-2xl border border-white/10 bg-[#002C2F] p-5 transition hover:-translate-y-1 hover:border-[#B6D957]"
              >
                <p className="font-semibold text-white">
                  {membership}
                </p>
              </div>
            ))}
          </div>
          </div>

          <MagneticLink
            href="/projects"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#B6D957] px-6 py-3 text-sm font-semibold text-[#003C3F] transition hover:bg-[#CBEA6A]"
          >
            {isTurkish
              ? "Tüm Proje Portföyünü Görüntüle"
              : "View Full Project Portfolio"}

            <ArrowRight size={18} />
          </MagneticLink>

        </div>
      </Reveal>
    </div>
  </div>
</section>

      {/* Expertise */}
        <section
          id="services"
          className="relative overflow-hidden bg-white px-6 py-24 text-[#003C3F]"
        >
          {/* Background glow */}
          <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-[#B6D957]/10 blur-3xl" />

          <div className="relative mx-auto max-w-7xl">
          <Reveal className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#7EA629]">
              {isTurkish ? "Uzmanlık" : "Expertise"}
            </p>

            <h2 className="mt-4 font-[var(--font-space-grotesk)] text-4xl font-bold tracking-tight md:text-5xl">
              {isTurkish
                ? "Güvenli ve verimli ulaşım hareketine odaklanan trafik mühendisliği uzmanlığı."
                : "Traffic engineering expertise focused on safe and efficient movement."}
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              {isTurkish
                ? "Çalışmalarım; yayaları, bisiklet kullanıcılarını, toplu taşıma yolcularını ve araçları destekleyen pratik mühendislik çözümlerine odaklanmaktadır. Bu çözümler çoğu zaman kısıtlı kentsel sokak ortamlarında uygulanmaktadır."
                : "My work focuses on practical engineering solutions that support pedestrians, cyclists, public transport users and vehicles within often constrained urban street environments."}
            </p>
</Reveal>

            <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
              {services.map((service, index) => {
                const Icon = service.icon;

                return (
                  <Reveal key={service.title} delay={index * 0.08}>
                    <div className="group relative overflow-hidden rounded-3xl border border-[#003C3F]/10 bg-white p-7 shadow-lg transition duration-500 hover:-translate-y-3 hover:border-[#B6D957] hover:shadow-[0_0_40px_rgba(182,217,87,0.22)]">
                      
                      {/* Animated glow */}
                      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#B6D957]/10 blur-2xl transition duration-700 group-hover:scale-150" />

                      {/* Icon */}
                      <div className="relative mb-6 inline-flex rounded-2xl bg-[#003C3F] p-4 text-[#B6D957] transition duration-500 group-hover:rotate-6 group-hover:scale-110">
                        <Icon size={28} />
                      </div>

                      {/* Title */}
                      <h3 className="relative text-xl font-bold text-[#003C3F] transition duration-300 group-hover:text-[#7EA629]">
                        {service.title}
                      </h3>

                      {/* Small animated line */}
                      <div className="mt-4 h-[2px] w-12 bg-[#B6D957] transition-all duration-500 group-hover:w-24" />

                      {/* Description */}
                      <p className="relative mt-5 text-sm leading-7 text-slate-600">
                        {service.description}
                      </p>

                      {/* Corner highlight */}
                      <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#B6D957] transition-all duration-500 group-hover:w-full" />
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>
  <ProcessTimeline isTurkish={isTurkish} />
{/* Skills */}
<section id="skills" className="bg-[#F4F7EF] px-6 py-24 text-[#003C3F]">
  <Reveal className="mx-auto max-w-5xl border-t border-[#003C3F]/10 pt-14">
  <div className="text-center">
    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#7EA629]">
      {isTurkish
        ? "Yetenekler ve Sektör Bilgisi"
        : "Skills & Industry Knowledge"}
    </p>

    <h2 className="mt-4 font-[var(--font-space-grotesk)] text-4xl font-bold tracking-tight md:text-5xl">
      {isTurkish
        ? "Ulaşım mühendisliği ve altyapı alanlarında teknik uzmanlık."
        : "Technical expertise across transport engineering and infrastructure."}
    </h2>

    <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
      {isTurkish
        ? "Birleşik Krallık ve İrlanda genelindeki akademik ve profesyonel proje deneyimleriyle geliştirilen ulaşım mühendisliği, modelleme, altyapı tasarımı ve teknik yazılım yetkinliklerinin birleşimi."
        : "A blend of transport engineering, modelling, infrastructure design and technical software capability developed through academic and professional project experience across the UK and Ireland."}
    </p>
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
          {/* Glow */}
          <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-[#B6D957]/10 blur-2xl transition duration-500 group-hover:scale-150" />

          {/* Text */}
          <p className="relative z-10 font-medium text-[#003C3F] transition duration-300 group-hover:text-[#5F7F1F]">
            {skill}
          </p>

          {/* Animated underline */}
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

    {/* LinkedIn CTA */}
    <div className="mt-20 flex justify-center">
      <MagneticLink
        href={linkedinUrl}
        external
        className="
          group inline-flex items-center justify-center gap-3
          rounded-2xl
          border-2 border-[#B6D957]
          bg-white
          px-10 py-5
          text-sm font-bold uppercase tracking-[0.25em]
          text-[#003C3F]
          transition-all duration-300
          hover:-translate-y-1
          hover:bg-[#B6D957]
          hover:shadow-[0_10px_30px_rgba(182,217,87,0.25)]
        "
      >
        <span className="transition group-hover:translate-x-1">
          {isTurkish
            ? "LinkedIn Profilimi Ziyaret Et"
            : "Visit My LinkedIn"}
        </span>

        <ExternalLink
          size={18}
          className="transition group-hover:rotate-12"
        />
      </MagneticLink>
    </div>
  </Reveal>
</section>

      {/* Engineering Approach */}
      <section className="bg-white px-6 py-24 text-[#003C3F]">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#7EA629]">
                {isTurkish
                  ? "Mühendislik Yaklaşımı"
                  : "Engineering Approach"}
              </p>

              <h2 className="mt-4 font-[var(--font-space-grotesk)] text-4xl font-bold tracking-tight">
                {isTurkish
                  ? "Daha güvenli ve erişilebilir kamusal alanlar için pratik tasarım kararları."
                  : "Practical design decisions for safer and more accessible public spaces."}
              </h2>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="space-y-5">
              {[
                isTurkish
                  ? "Yayalar, bisiklet kullanıcıları ve araçlar için güvenlik odaklı tasarım."
                  : "Safety-led design for pedestrians, cyclists and vehicles.",

                isTurkish
                  ? "Kentsel çevrelerde kısıtlı yol alanlarının verimli kullanımı."
                  : "Efficient use of constrained road space in urban environments.",

                isTurkish
                  ? "Modelleme ve analiz yoluyla kanıta dayalı karar verme."
                  : "Evidence-based decision making through modelling and analysis.",

                isTurkish
                  ? "Toplulukların günlük hareketliliğini geliştiren erişilebilir sokaklar."
                  : "Accessible streets that improve everyday movement for communities.",
              ].map((item) => (
                <div
                  key={item}
                  className="flex gap-4 transition hover:translate-x-2"
                >
                  <CheckCircle2
                    className="mt-1 text-[#7EA629]"
                    size={22}
                  />

                  <p className="text-lg leading-8 text-slate-700">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-[#F4F7EF] px-6 py-24 text-[#003C3F]">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#7EA629]">
              {isTurkish
                ? "İletişime Geçin"
                : "Get In Touch"}
            </p>

            <h2 className="mt-4 font-[var(--font-space-grotesk)] text-5xl font-bold tracking-tight">
              {isTurkish
                ? "Ulaşım, karayolları ve sokak tasarımı hakkında konuşalım."
                : "Let’s discuss transport, highways and street design."}
            </h2>

            <div className="mt-8 space-y-4 text-lg">
              <a
                href={`mailto:${emailAddress}`}
                className="flex items-center gap-3 font-semibold text-[#5F7F1F] underline underline-offset-4"
              >
                <Mail size={20} />
                {emailAddress}
              </a>

              <a
                href={linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 font-semibold text-[#5F7F1F] underline underline-offset-4"
              >
                <ExternalLink size={20} />

                {isTurkish
                  ? "LinkedIn Profili"
                  : "LinkedIn"}
              </a>
            </div>
          </div>
        </Reveal>

          <Reveal delay={0.12}>
          <form
            action={`mailto:${emailAddress}`}
            method="post"
            encType="text/plain"
            className="space-y-6"
          >
            {[
            {
              en: "First Name",
              tr: "Ad",
            },
            {
              en: "Last Name",
              tr: "Soyad",
            },
            {
              en: "Email Address",
              tr: "E-posta Adresi",
            },
            {
              en: "Subject",
              tr: "Konu",
            },
          ].map((field) => (
            <div key={field.en}>
              <label className="flex items-center gap-2 text-sm font-semibold text-[#003C3F]">
                {isTurkish ? field.tr : field.en}

                <span className="rounded-full border border-[#B6D957]/40 bg-[#B6D957]/10 px-2 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#7EA629]">
                  {isTurkish ? "Zorunlu" : "Required"}
                </span>
              </label>

              <input
                type={field.en === "Email Address" ? "email" : "text"}
                name={field.en.replaceAll(" ", "").toLowerCase()}
                required
                className="mt-2 w-full rounded-xl border border-[#003C3F]/20 bg-white px-4 py-3 outline-none transition duration-300 focus:border-[#7EA629] focus:ring-2 focus:ring-[#B6D957]/20"
              />
            </div>
          ))}

            <div>
            <label className="flex items-center gap-2 text-sm font-semibold text-[#003C3F]">
              {isTurkish ? "Mesaj" : "Message"}

              <span className="rounded-full border border-[#B6D957]/40 bg-[#B6D957]/10 px-2 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#7EA629]">
                {isTurkish ? "Zorunlu" : "Required"}
              </span>
            </label>

              <textarea
                name="message"
                required
                rows={6}
                className="mt-2 w-full rounded-xl border border-[#003C3F]/20 bg-white px-4 py-3 outline-none transition duration-300 focus:border-[#7EA629] focus:ring-2 focus:ring-[#B6D957]/20"
              />
            </div>

            <button
            type="submit"
            className="group inline-flex items-center justify-center gap-3 rounded-xl border-2 border-[#B6D957] px-12 py-4 text-sm font-bold uppercase tracking-[0.25em] text-[#003C3F] transition duration-300 hover:-translate-y-1 hover:bg-[#B6D957]"
          >
            {isTurkish ? "Gönder" : "Submit"}

            <ArrowRight
              size={18}
              className="transition group-hover:translate-x-1"
            />
          </button>
          </form>
          </Reveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#003C3F] px-6 py-12 text-center text-white">
        <a
          href={`mailto:${emailAddress}`}
          className="font-[var(--font-space-grotesk)] text-2xl font-bold underline underline-offset-8 md:text-4xl"
        >
          {emailAddress}
        </a>

        <div className="mt-8 flex justify-center gap-6 text-sm uppercase tracking-[0.25em] text-[#B6D957]">
          <a href={linkedinUrl} target="_blank" rel="noreferrer">
            LinkedIn
          </a>

          <Link href="/projects">
            {isTurkish ? "Projeler" : "Projects"}
          </Link>
        </div>

        <p className="mt-8 text-sm text-white/55">
          {isTurkish
            ? "© 2026 Huseyin Alsan. Birleşik Krallık merkezli Trafik Mühendisi."
            : "© 2026 Huseyin Alsan. Traffic Engineer based in the UK."}
        </p>
      </footer>
    </main>
    </SmoothScrollProvider>
  );
}