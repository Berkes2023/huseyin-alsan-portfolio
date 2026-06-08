"use client";

import {
  Bike,
  Building2,
  Bus,
  Car,
  Map,
  Route,
  TrafficCone,
  TrainFront,
  ClipboardCheck,
} from "lucide-react";
import Reveal from "@/components/Reveal";

type ExpertiseSectionProps = {
  isTurkish: boolean;
};

export default function ExpertiseSection({
  isTurkish,
}: ExpertiseSectionProps) {
  const services = [
    {
      title: isTurkish ? "Aktif Ulaşım Tasarımı" : "Active Travel Design",
      description: isTurkish
        ? "Bisiklet yolları, yaya altyapıları, CYCLOPS kavşakları ve sürdürülebilir ulaşım koridorlarının tasarımı."
        : "Design of cycle infrastructure, pedestrian facilities, CYCLOPS junctions and sustainable transport corridors.",
      icon: Bike,
    },
    {
      title: isTurkish ? "Trafik Modellemesi" : "Traffic Modelling",
      description: isTurkish
        ? "Vissim, LinSig ve veri analizleri kullanılarak trafik performansının değerlendirilmesi."
        : "Traffic analysis using Vissim, LinSig and transport datasets to support evidence-based decisions.",
      icon: Car,
    },
    {
      title: isTurkish
        ? "Trafik Düzenleme Emirleri"
        : "Traffic Regulation Orders",
      description: isTurkish
        ? "Park düzenlemeleri, okul caddeleri, hız yönetimi ve erişim kısıtlamaları için TRO tasarımı ve uygulamaları."
        : "Design and delivery of TRO schemes including parking controls, school streets and speed management measures.",
      icon: Map,
    },
    {
      title: isTurkish ? "Otobüs Altyapısı" : "Bus Infrastructure",
      description: isTurkish
        ? "Otobüs durakları, RTI sistemleri, yol işaretlemeleri ve erişilebilir toplu taşıma tasarımları."
        : "Bus stop design, RTI infrastructure, road markings and public transport accessibility improvements.",
      icon: Bus,
    },
    {
      title: isTurkish ? "Mobilite Merkezleri" : "Mobility Hubs",
      description: isTurkish
        ? "Bisiklet parkları, e-scooter alanları, elektrikli araç şarj noktaları ve çok modlu ulaşım merkezlerinin tasarımı."
        : "Integrated mobility hubs including cycle parking, e-scooter bays, EV charging and shared mobility facilities.",
      icon: Building2,
    },
    {
      title: isTurkish ? "Yol ve Sokak Tasarımı" : "Road & Street Design",
      description: isTurkish
        ? "Yol düzenleri, sokak tasarımları, kavşak geometrileri ve kamusal alan iyileştirmeleri için uygulanabilir tasarım çözümleri."
        : "Practical design solutions for road layouts, streetscapes, junction geometry and public realm improvements.",
      icon: Route,
    },
    {
      title: isTurkish ? "Trafik Sinyalizasyonu" : "Traffic Signalling",
      description: isTurkish
        ? "Sinyal zamanlamaları, kavşak performansı ve yaya/araç hareketlerini destekleyen sinyalizasyon analizleri."
        : "Signal analysis supporting junction performance, signal timings and pedestrian and vehicle movement.",
      icon: TrafficCone,
    },
    {
      title: isTurkish ? "Toplu Taşıma Planlaması" : "Public Transport Planning",
      description: isTurkish
        ? "Otobüs öncelik sistemleri, toplu taşıma erişilebilirliği ve sürdürülebilir ulaşım entegrasyonuna yönelik tasarım desteği."
        : "Design support for bus priority, public transport accessibility and sustainable transport integration.",
      icon: TrainFront,
    },
    {
      title: isTurkish ? "Standartlar ve Uygunluk" : "Standards & Compliance",
      description: isTurkish
        ? "LTN 1/20, TSRGD, Traffic Signs Manual ve yerel otorite standartlarına uygun teknik tasarım çıktıları."
        : "Technical design outputs aligned with LTN 1/20, TSRGD, Traffic Signs Manual and local authority standards.",
      icon: ClipboardCheck,
    },
  ];

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-white px-6 py-24 text-[#003C3F]"
    >
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
              ? "Çalışmalarım; yayaları, bisiklet kullanıcılarını, toplu taşıma kullanıcılarını ve araçları destekleyen pratik mühendislik çözümlerine odaklanmaktadır."
              : "My work focuses on practical engineering solutions that support pedestrians, cyclists, public transport users and vehicles within often constrained urban street environments."}
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <Reveal key={service.title} delay={index * 0.08}>
                <div className="group relative h-full overflow-hidden rounded-3xl border border-[#003C3F]/10 bg-white p-7 shadow-lg transition duration-500 hover:-translate-y-3 hover:border-[#B6D957] hover:shadow-[0_0_40px_rgba(182,217,87,0.22)]">
                  <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#B6D957]/10 blur-2xl transition duration-700 group-hover:scale-150" />

                  <div className="relative mb-6 inline-flex rounded-2xl bg-[#003C3F] p-4 text-[#B6D957] transition duration-500 group-hover:rotate-6 group-hover:scale-110">
                    <Icon size={28} />
                  </div>

                  <h3 className="relative text-xl font-bold text-[#003C3F] transition duration-300 group-hover:text-[#7EA629]">
                    {service.title}
                  </h3>

                  <div className="mt-4 h-[2px] w-12 bg-[#B6D957] transition-all duration-500 group-hover:w-24" />

                  <p className="relative mt-5 text-sm leading-7 text-slate-600">
                    {service.description}
                  </p>

                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#B6D957] transition-all duration-500 group-hover:w-full" />
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}