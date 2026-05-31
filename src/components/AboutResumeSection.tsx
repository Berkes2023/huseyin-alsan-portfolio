"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import MagneticLink from "@/components/MagneticLink";

type AboutResumeSectionProps = {
  isTurkish: boolean;
};

export default function AboutResumeSection({
  isTurkish,
}: AboutResumeSectionProps) {
  const memberships = [
    isTurkish ? "ICE Üyesi" : "ICE Member",
    isTurkish ? "KTMMOB / UCCTEA Üyesi" : "KTMMOB / UCCTEA Member",
  ];

  const resumeExperience = [
    {
      role: isTurkish ? "Mühendis" : "Engineer",
      company: "AECOM",
      date: isTurkish ? "Eki 2023 – Günümüz" : "Oct 2023 – Present",
    },
    {
      role: isTurkish ? "Mühendislik Stajyeri" : "Engineering Intern",
      company: "Tasyapi Insaat",
      date: isTurkish ? "Tem 2021 – Ağu 2021" : "Jul 2021 – Aug 2021",
    },
    {
      role: isTurkish ? "Mühendislik Stajyeri" : "Engineering Intern",
      company: isTurkish
        ? "Ulaştırma ve Altyapı Bakanlığı Planlama ve İnşaat Dairesi"
        : "Planning and Construction Department, Ministry of Transport and Infrastructure",
      date: isTurkish ? "Haz 2020 – Tem 2020" : "Jun 2020 – Jul 2020",
    },
    {
      role: isTurkish ? "Çırak / Yardımcı Çalışan" : "Apprentice / Assistant Worker",
      company: "Asik Trading",
      date: isTurkish ? "Haz 2017 – Ağu 2017" : "Jun 2017 – Aug 2017",
    },
  ];

  return (
    <>
      {/* About Me */}
      <section id="about" className="bg-white px-6 py-24 text-[#003C3F]">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="font-[var(--font-space-grotesk)] text-5xl font-bold uppercase tracking-tight text-[#B6D957] md:text-6xl">
              {isTurkish ? "Hakkımda" : "About Me"}
            </p>
          </Reveal>

          <div className="mt-14 grid gap-16 lg:grid-cols-[0.85fr_1.15fr]">
            <Reveal delay={0.1}>
              <div className="relative overflow-hidden rounded-[2rem] border border-[#003C3F]/10 bg-[#F4F7EF] shadow-2xl">
                <Image
                  src="/images/huseyin-alsanpp.webp"
                  alt="Huseyin Alsan, Traffic Engineer"
                  width={900}
                  height={1000}
                  className="h-[700px] w-full object-cover object-center transition duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#003C3F]/30 via-transparent to-transparent" />
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
                      ? "Ben Huseyin Alsan. İnşaat Mühendisliği ve Ulaşım Planlama alanlarında altyapıya sahip deneyimli ve tutkulu bir Trafik Mühendisiyim."
                      : "My name is Huseyin Alsan and I am an experienced and passionate Traffic Engineer with a background in Civil Engineering and Transportation Planning."}
                  </p>

                  <p>
                    {isTurkish
                      ? "Birleşik Krallık ve İrlanda genelinde yerel yönetimler ve kuruluşlarla çalışarak aktif ulaşım, trafik modelleme, TRO tasarımları ve ulaşım altyapı projelerinde görev aldım."
                      : "I have worked across active travel, traffic modelling, TRO design and transport infrastructure projects with local authorities and organisations across the UK and Ireland."}
                  </p>

                  <p>
                    {isTurkish
                      ? "AutoCAD, Vissim ve LinSig konularında güçlü teknik deneyime sahibim ve veri odaklı mühendislik çözümleri geliştirmekteyim."
                      : "I have strong technical experience in AutoCAD, Vissim and LinSig, applying data-driven engineering methodologies to real-world transport challenges."}
                  </p>

                  <p>
                    {isTurkish
                      ? "Hedefim; insanların kentsel çevrelerde hareket biçimini iyileştiren yenilikçi ve sürdürülebilir ulaşım çözümleri geliştirmeye devam etmektir."
                      : "My goal is to continue contributing to innovative and sustainable transport solutions that improve the way people move through urban environments."}
                  </p>
                </div>

                <div className="mt-12 rounded-[2rem] border border-white/10 bg-[#003C3F] p-8 shadow-2xl">
                  <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#B6D957]">
                    {isTurkish ? "Profesyonel Odak" : "Professional Focus"}
                  </p>

                  <div className="mt-8 grid gap-x-12 gap-y-6 md:grid-cols-2">
                    {[
                      isTurkish ? "Yol Tasarımı" : "Road Design",
                      isTurkish ? "Aktif Ulaşım" : "Active Travel",
                      isTurkish ? "Trafik Modellemesi" : "Traffic Modelling",
                      isTurkish ? "Toplu Taşıma" : "Public Transport",
                      isTurkish ? "Trafik Sinyalizasyonu" : "Traffic Signalling",
                      isTurkish ? "Kentsel Sokaklar" : "Urban Streets",
                      isTurkish ? "Trafik Düzenleme Emirleri" : "Traffic Regulation Orders",
                      isTurkish ? "Mobilite Merkezleri" : "Mobility Hubs",
                    ].map((item) => (
                      <div key={item} className="text-lg font-medium text-white">
                        {item}
                      </div>
                    ))}
                  </div>
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
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="space-y-12">
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
                        <h4 className="font-bold text-white">{item.role}</h4>
                        <p className="mt-1 text-white/80">{item.company}</p>
                        <p className="mt-1 text-sm text-white/55">{item.date}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border-t border-white/20 pt-8">
                  <h3 className="font-[var(--font-space-grotesk)] text-2xl font-bold text-[#B6D957]">
                    {isTurkish ? "Eğitim" : "Education"}
                  </h3>

                  <div className="mt-8 space-y-8">
                    {[
                      {
                        degree: isTurkish
                          ? "MSc Ulaşım Planlama ve Mühendisliği"
                          : "MSc Transportation Planning and Engineering",
                        university: isTurkish
                          ? "Southampton Üniversitesi"
                          : "University of Southampton",
                        date: "2022 – 2023",
                        label: isTurkish ? "Araştırma Projesi" : "Research Project",
                        project: isTurkish
                          ? "Avrupa'da Stratejik Gece Tren Ağı"
                          : "Strategic Overnight Train Network in Europe",
                        modules: [
                          isTurkish ? "Ulaşım Ekonomisi" : "Transport Economics",
                          isTurkish ? "Ulaşım Veri Analizi ve Teknikleri" : "Transport Data Analysis and Techniques",
                          isTurkish ? "Ulaşım Planlaması: Politika ve Yönetişim" : "Transport Planning: Policy and Governance",
                          isTurkish ? "Ulaşım Modellemesi" : "Transport Modelling",
                          isTurkish ? "Karayolu ve Trafik Mühendisliği" : "Highway and Traffic Engineering",
                          isTurkish ? "Demiryolu Mühendisliği ve Operasyonları" : "Railway Engineering and Operations",
                          isTurkish ? "Ulaşım Yönetimi ve Güvenliği" : "Transport Management and Safety",
                          isTurkish ? "Ulaşım Planlaması: Uygulama" : "Transport Planning: Practice",
                        ],
                      },
                      {
                        degree: isTurkish
                          ? "BEng (Hons) İnşaat Mühendisliği"
                          : "BEng (Hons) Civil Engineering",
                        university: isTurkish ? "Cardiff Üniversitesi" : "Cardiff University",
                        date: "2019 – 2022",
                        label: isTurkish ? "Bitirme Projesi" : "Dissertation",
                        project: isTurkish
                          ? "HPFRC – Yüksek Performanslı Lif Takviyeli Beton"
                          : "HPFRC – High Performance Fibre Reinforced Concrete",
                        modules: [
                          isTurkish ? "Mühendislik Analizi" : "Engineering Analysis",
                          isTurkish ? "İnşaat Mühendisliği Tasarımı" : "Civil Engineering Design",
                          isTurkish ? "Malzemeler ve Yapım" : "Materials and Construction",
                          isTurkish ? "Profesyonel Mühendislik" : "Professional Engineering",
                          isTurkish ? "Yapısal Analiz ve Tasarım" : "Structural Analysis and Design",
                          isTurkish ? "İnşaat Yönetimi" : "Construction Management",
                          isTurkish ? "Beton Yapılar" : "Concrete Structures",
                        ],
                      },
                    ].map((edu) => (
                      <div
                        key={edu.degree}
                        className="rounded-3xl border border-white/10 bg-[#002C2F] p-8 transition duration-300 hover:border-[#B6D957]/40"
                      >
                        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                          <div>
                            <h4 className="text-3xl font-bold text-white">
                              {edu.degree}
                            </h4>
                            <p className="mt-2 text-white/80">{edu.university}</p>
                            <p className="mt-1 text-sm text-white/50">{edu.date}</p>
                          </div>

                          <div className="rounded-full border border-[#B6D957]/30 px-5 py-2 text-xs uppercase tracking-[0.25em] text-[#B6D957]">
                            {isTurkish ? "Eğitim" : "Education"}
                          </div>
                        </div>

                        <div className="mt-6 rounded-2xl border border-[#B6D957]/20 bg-[#003C3F] p-5">
                          <p className="text-xs uppercase tracking-[0.25em] text-[#B6D957]">
                            {edu.label}
                          </p>
                          <p className="mt-2 text-white/80">{edu.project}</p>
                        </div>

                        <div className="mt-6 flex flex-wrap gap-3">
                          {edu.modules.map((module) => (
                            <span
                              key={module}
                              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/75 transition hover:border-[#B6D957]/40 hover:text-white"
                            >
                              {module}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border-t border-white/20 pt-8">
                  <h3 className="font-[var(--font-space-grotesk)] text-2xl font-bold text-[#B6D957]">
                    {isTurkish ? "Profesyonel Üyelikler" : "Professional Memberships"}
                  </h3>

                  <div className="mt-8 grid gap-4 md:grid-cols-2">
                    {memberships.map((membership) => (
                      <div
                        key={membership}
                        className="rounded-2xl border border-white/10 bg-[#002C2F] p-5 transition hover:-translate-y-1 hover:border-[#B6D957]"
                      >
                        <p className="font-semibold text-white">{membership}</p>
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
    </>
  );
}