"use client";

import {
  Bike,
  Building2,
  Bus,
  Car,
  Map,
  Route,
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
      title: isTurkish
        ? "Yol ve Sokak Tasarımı"
        : "Road & Street Design",
      description: isTurkish
        ? "Güvenlik, erişilebilirlik ve kullanıcı deneyimine odaklanarak yol düzenleri, sokak tasarımları ve kamusal alan iyileştirmeleri için tasarım desteği."
        : "Design support for road layouts, streetscapes, and public realm improvements with a focus on safety, accessibility, and user experience.",
      icon: Route,
    },
    {
      title: isTurkish
        ? "Aktif Ulaşım Tasarımı"
        : "Active Travel Design",
      description: isTurkish
        ? "Daha güvenli ve kapsayıcı kentsel ortamlar oluşturmak amacıyla bisiklet yolları, yaya hareketliliği ve aktif ulaşım altyapılarının tasarımı."
        : "Cycle lane, pedestrian movement and active travel infrastructure design to create safer and more inclusive urban environments.",
      icon: Bike,
    },
    {
      title: isTurkish
        ? "Otobüs Altyapısı"
        : "Bus Infrastructure",
      description: isTurkish
        ? "Otobüs durakları, gerçek zamanlı bilgi sistemleri, yol işaretlemeleri, erişilebilirlik çözümleri ve güzergâh optimizasyonunu kapsayan bütüncül otobüs altyapısı tasarımı ve iyileştirmeleri."
        : "Contribution to the design of bus lanes, bus stops, and public transport priority measures to improve sustainable mobility.",
      icon: Bus,
    },
    {
      title: isTurkish
        ? "Trafik Modellemesi"
        : "Traffic Modelling",
      description: isTurkish
        ? "Vissim, LinSig ve veri analizleri kullanılarak trafik performansının değerlendirilmesi ve yeni tasarım seçeneklerinin geliştirilmesi."
        : "Microsimulation, junction analysis, and transport modelling to support data-driven design and planning decisions.",
      icon: Car,
    },
    {
      title: isTurkish
        ? "Mobilite Merkezleri"
        : "Mobility Hubs",
      description: isTurkish
        ? "Kesintisiz, sürdürülebilir ve daha çevreci ulaşım seçeneklerini desteklemek amacıyla bisiklet parkları, e-scooter alanları, elektrikli araç şarj noktaları ve paylaşımlı ulaşım hizmetlerini içeren çok modlu ulaşım merkezlerinin tasarımı ve entegrasyonu."
        : "Design and integration of multi-modal transport hubs, incorporating facilities such as cycle parking, e-scooter bays, EV charging, and shared mobility services to support seamless, sustainable, and greener travel choices.",
      icon: Building2,
    },
    {
      title: isTurkish
        ? "Trafik Düzenleme Emirleri (TRO)"
        : "Traffic Regulation Orders (TROs)",
      description: isTurkish
        ? "Park kontrolleri, bekleme ve yükleme kısıtlamaları, Okul Sokakları, hız yönetimi tedbirleri ile ilgili trafik işaretleri ve yol çizgilerini içeren TRO projelerinin tasarımı, geliştirilmesi ve uygulanması."
        : "Design, development and delivery of TRO schemes, including parking controls, waiting and loading restrictions, School Streets, speed management measures and associated traffic signing and road markings.",
      icon: Map,
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
              ? "Güvenli, erişilebilir ve sürdürülebilir ulaşım çözümlerine odaklanan trafik mühendisliği uzmanlığı."
              : "Traffic engineering expertise focused on safe, accessible and sustainable transport solutions."}
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            {isTurkish
              ? "Çalışmalarım, kısıtlı kentsel sokak ortamlarında yayaları, bisiklet kullanıcılarını, toplu taşımayı ve araç hareketliliğini destekleyen uygulanabilir mühendislik çözümleri sunmaya odaklanmaktadır."
              : "My work focuses on delivering practical engineering solutions that support pedestrians, cyclists, public transport and vehicular movement within constrained urban street environments."}
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