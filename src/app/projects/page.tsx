"use client";

import Link from "next/link";
import Reveal from "@/components/Reveal";
import ProjectHoverCard from "@/components/ProjectHoverCard";
import { useLanguage } from "@/components/LanguageProvider";

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
      ? "A4 Bath Road – Bath–Bristol Sürdürülebilir Koridoru"
      : "A4 Bath Road – Bath to Bristol Sustainable Corridor",
    type: isTurkish ? "Aktif Ulaşım" : "Active Travel",
    date: isTurkish
      ? "Bath & North East Somerset Council (BANES) · Ağustos 2024 – Şubat 2025"
      : "Bath & North East Somerset Council (BANES) · August 2024 – February 2025",
    icon: Route,
    description: isTurkish
      ? "A4 Bath–Bristol Sürdürülebilir Koridoru’nun 2,5 km’lik bölümünün tasarımına katkı sağlanarak sürdürülebilir ulaşım hedefleri doğrultusunda yürüme, bisiklet ve toplu taşıma entegrasyonu desteklendi."
      : "Contributed to the design of a 2.5 km section of the A4 Bath to Bristol Sustainable Corridor, supporting improved walking, cycling, and public transport integration in line with sustainable transport objectives.",
    details: [
      isTurkish
        ? "AutoCAD kullanılarak taşıt yolları, bordür hizalamaları, otobüs şeritleri, bisiklet yolları ve kaldırımları kapsayan konsept ve ön tasarımların geliştirilmesine destek sağlandı."
        : "Supported development of concept and preliminary designs, including carriageways, kerb alignments, bus lanes, cycle tracks, and footways using AutoCAD.",
      isTurkish
        ? "Tasarım hususlarını, riskleri ve ilgili kılavuzlara uyumu ele alan Konsept Tasarım İnceleme Teknik Notu hazırlandı."
        : "Prepared a Concept Design Review Technical Note addressing design considerations, risks, and compliance with relevant guidance.",
      isTurkish
        ? "Yerel ve ulusal standartlara uygun yaya geçitleri, sürekli kaldırımlar ve yükseltilmiş platformlar dâhil yaya ve kavşak unsurları tasarlandı."
        : "Designed pedestrian and junction features including crossings, continuous footways, and raised tables in accordance with local and national standards.",
      isTurkish
        ? "Erişilebilir biniş alanları, durak barınakları ve standartlara uygun işaretlemeleri içeren otobüs durağı iyileştirmelerine katkı sağlandı."
        : "Contributed to bus stop layout improvements, incorporating accessible boarding, shelters, and compliant markings.",
      isTurkish
        ? "Altyapı tesisleri ve drenaj kısıtlarıyla koordinasyon sağlanarak tasarım gelişimini destekleyen uygun düzenlemeler önerildi."
        : "Coordinated with utilities and drainage constraints, proposing appropriate adjustments to support design development.",
      isTurkish
        ? "Kavşak yerleşimlerinin doğrulanması için taşıt iz analizi gerçekleştirildi ve çok disiplinli tasarım koordinasyonuna katkı sağlandı."
        : "Undertook swept path analysis to support junction layout validation and contributed to multidisciplinary design coordination.",
    ],
  },
  {
    title: isTurkish
      ? "Ulusal Mobilite Merkezleri Programı – İrlanda"
      : "National Mobility Hubs Programme – Ireland",
    type: isTurkish ? "Mobilite Merkezleri" : "Mobility Hubs",
    date: isTurkish
      ? "National Transport Authority · Ağustos 2025 – Kasım 2025"
      : "National Transport Authority · August 2025 – November 2025",
    icon: Building2,
    description: isTurkish
      ? "Düşük emisyonlu ve paylaşımlı ulaşım seçeneklerini teşvik eden bütünleşik ve sürdürülebilir ulaşım tesislerinin tasarımına katkı sağlayarak ülke çapındaki mobilite merkezi programının sunumu desteklendi."
      : "Supported the delivery of a nationwide mobility hub programme, contributing to the design of integrated, sustainable transport facilities promoting low-emission and shared travel options.",
    details: [
      isTurkish
        ? "Ulusal standartlar ve yerel gerekliliklerle uyumlu olarak birden fazla sahada yerleşim tasarımları geliştirildi."
        : "Developed layout designs across multiple sites, aligning with national standards and local requirements.",
      isTurkish
        ? "Doğru ve bağlama duyarlı tasarım yerleşimleri üretmek için OS harita verileri kullanıldı."
        : "Utilised OS mapping data to produce accurate, context-driven design layouts.",
      isTurkish
        ? "Bisiklet parkları, e-scooter alanları, elektrikli araç şarj noktaları ve paylaşımlı ulaşım tesisleri tasarımlara entegre edildi."
        : "Integrated infrastructure such as cycle parking, e-scooter bays, EV charging, and shared mobility facilities.",
      isTurkish
        ? "İlgili kılavuzlara uygun yol işaretlemeleri ve trafik levhaları uygulandı."
        : "Applied compliant road markings and signage in accordance with relevant guidance.",
      isTurkish
        ? "Kesintisiz ve daha çevreci ulaşım seçeneklerini desteklemek amacıyla erişilebilirlik, güvenlik ve kullanıcı deneyimi dikkate alındı."
        : "Considered accessibility, safety, and user experience to support seamless and greener travel choices.",
      isTurkish
        ? "Tutarlı tasarım standartları korunarak birden fazla saha tasarımı eş zamanlı yönetildi."
        : "Managed multiple site designs concurrently while maintaining consistent design standards.",
    ],
  },
  {
    title: isTurkish
      ? "A48 Newport Road – Seçenek Geliştirme Çalışması"
      : "A48 Newport Road – Option Development Study",
    type: isTurkish ? "Trafik Modellemesi" : "Traffic Modelling",
    date: isTurkish
      ? "Transport for Wales · Eylül 2023 – Nisan 2024"
      : "Transport for Wales · September 2023 – April 2024",
    icon: BarChart3,
    description: isTurkish
      ? "A48 Newport koridorundaki mevcut ulaşım koşullarını ve gelecekteki iyileştirmeleri değerlendiren seçenek geliştirme çalışmasına destek sağlandı."
      : "Supported an option development study assessing transport conditions and future improvements along the A48 Newport corridor.",
    details: [
      isTurkish
        ? "Ağ performansını simüle etmek amacıyla bir Vissim trafik modelinin geliştirilmesine yardımcı olundu."
        : "Assisted in development of a Vissim traffic model to simulate network performance.",
      isTurkish
        ? "Eğilimleri ve trafik örüntülerini belirlemek için MCTC, ANPR ve ATC ulaşım veri setleri Excel kullanılarak analiz edildi."
        : "Analysed transport datasets (MCTC, ANPR, ATC) using Excel to identify trends and traffic patterns.",
      isTurkish
        ? "Model kalibrasyonu ve doğrulama çalışmalarına katkı sağlandı."
        : "Contributed to model calibration and validation activities.",
      isTurkish
        ? "Temel ağ performansını özetleyen Mevcut Durum Raporu’nun hazırlanmasına destek sağlandı."
        : "Supported preparation of the Existing Conditions Report, summarising baseline network performance.",
      isTurkish
        ? "Veriye dayalı çıkarımlar sunmak üzere çok disiplinli bir ekip içinde çalışıldı."
        : "Worked within a multidisciplinary team to deliver data-driven insights.",
    ],
  },
  {
    title: isTurkish
      ? "Etkinlik Günü Otoparkı ve Acil Durum Güzergâhları"
      : "Event Day Parking & Emergency Routes",
    type: isTurkish
      ? "Trafik Düzenleme Emirleri (TRO)"
      : "Traffic Regulation Orders (TROs)",
    date: isTurkish
      ? "Glasgow City Council · Nisan 2024 – Haziran 2024"
      : "Glasgow City Council · April 2024 – June 2024",
    icon: CircleDot,
    description: isTurkish
      ? "Büyük stadyum bölgeleri için etkinlik günü park düzenlemeleri ve acil erişim şemalarının geliştirilmesine destek sağlandı."
      : "Supported the development of event day parking and emergency access schemes for major stadium areas.",
    details: [
      isTurkish
        ? "Otopark yerleşimleri ve acil durum güzergâhı tasarımlarının hazırlanmasına yardımcı olundu."
        : "Assisted in preparation of parking layouts and emergency route designs.",
      isTurkish
        ? "Düzenleyici gerekliliklerle uyum sağlanarak TRO sürecine katkı sunuldu."
        : "Contributed to the TRO process, ensuring alignment with regulatory requirements.",
      isTurkish
        ? "Paydaş koordinasyonu ve tasarım geliştirme çalışmalarına destek sağlandı."
        : "Supported stakeholder coordination and design development.",
      isTurkish
        ? "Etkinlikler sırasında trafik yönetimini ve güvenliği iyileştirecek uygulanabilir çözümlerin geliştirilmesine yardımcı olundu."
        : "Helped deliver practical solutions to improve traffic management and safety during events.",
    ],
  },
  {
    title: isTurkish
      ? "Yerleşik Otopark Bölgeleri"
      : "Residents’ Parking Zones",
    type: isTurkish
      ? "Trafik Düzenleme Emirleri (TRO)"
      : "Traffic Regulation Orders (TROs)",
    date: isTurkish
      ? "Bath & North East Somerset Council · Haziran 2025 – Devam Ediyor"
      : "Bath & North East Somerset Council · June 2025 – Ongoing",
    icon: Landmark,
    description: isTurkish
      ? "Otopark talebini yönetmek ve yerel erişilebilirliği geliştirmek amacıyla yerleşim alanı otopark şemalarının tasarım ve geliştirme çalışmalarına katkı sağlanmaktadır."
      : "Contributing to the design and development of residential parking schemes to manage demand and improve local accessibility.",
    details: [
      isTurkish
        ? "Otopark ve erişim gereksinimlerini anlamak amacıyla saha değerlendirmeleri gerçekleştirildi."
        : "Undertook site assessments to understand parking and access requirements.",
      isTurkish
        ? "Yerleşikler, ziyaretçiler ve hizmet erişimi ihtiyaçlarını dengeleyen tasarım önerileri geliştirildi."
        : "Developed design proposals balancing resident, visitor, and service access needs.",
      isTurkish
        ? "Otopark kısıtlamaları ve yerleşimlerini içeren standartlara uygun TRO çizimleri üretildi."
        : "Produced compliant TRO drawings including parking restrictions and layouts.",
      isTurkish
        ? "Görselleştirme ve danışma süreçlerini desteklemek üzere GIS shapefile dosyaları oluşturuldu."
        : "Created GIS shapefiles to support visualisation and consultation.",
      isTurkish
        ? "Dijital çıktılar aracılığıyla önerilerin açık biçimde iletilmesi desteklendi."
        : "Supported clear communication of proposals through digital outputs.",
    ],
  },
  {
    title: isTurkish
      ? "Okul Sokakları ve Trafik Yönetimi"
      : "School Streets & Traffic Management",
    type: isTurkish
      ? "Trafik Düzenleme Emirleri (TRO)"
      : "Traffic Regulation Orders (TROs)",
    date: isTurkish
      ? "Cardiff City Council · Şubat 2025 – Devam Ediyor"
      : "Cardiff City Council · February 2025 – Ongoing",
    icon: Landmark,
    description: isTurkish
      ? "Güvenliği artırmayı ve aktif ulaşımı teşvik etmeyi amaçlayan çok sayıda trafik yönetimi şemasının sunumuna destek sağlanmaktadır."
      : "Supported the delivery of multiple traffic management schemes aimed at improving safety and promoting active travel.",
    details: [
      isTurkish
        ? "Otopark kontrollerini ve erişim kısıtlamalarını kapsayan TRO çizimleri geliştirildi."
        : "Developed TRO drawings covering parking controls and access restrictions.",
      isTurkish
        ? "İlgili yol işaretlemeleri ve yerleşim düzenleri tasarlandı."
        : "Designed associated road markings and layouts.",
      isTurkish
        ? "Tasarımlar farklı kentsel ortam ve kısıtlara uyarlanarak geliştirildi."
        : "Adapted designs to suit varied urban environments and constraints.",
      isTurkish
        ? "Paydaş katılımı ve tasarım iyileştirme süreçlerine katkı sağlandı."
        : "Contributed to stakeholder engagement and design refinement.",
    ],
  },
  {
    title: isTurkish
      ? "Cardiff Şehir Merkezi Güney"
      : "Cardiff City Centre South",
    type: isTurkish ? "Ulaşım Modellemesi" : "Transport Modelling",
    date: isTurkish
      ? "Cardiff City Council · Şubat 2026 – Devam Ediyor"
      : "Cardiff City Council · February 2026 – Ongoing",
    icon: Map,
    description: isTurkish
      ? "Ağ optimizasyonunu desteklemek amacıyla trafik modelleme ve kavşak analizi çalışmalarına katkı sağlanmaktadır."
      : "Supporting traffic modelling and junction analysis to inform network optimisation.",
    details: [
      isTurkish
        ? "LinSig modellemesi ve trafik sinyal verisi analizlerine yardımcı olundu."
        : "Assisted with LinSig modelling and traffic signal data analysis.",
      isTurkish
        ? "Doğru temsil sağlamak amacıyla fazlama ve döngü süreleri incelendi."
        : "Reviewed phasing and cycle times to ensure accurate representation.",
      isTurkish
        ? "Gecikme, kuyruk ve kavşak performansı analizlerine katkı sağlandı."
        : "Contributed to analysis of delays, queues, and junction performance.",
      isTurkish
        ? "Trafik verileri kullanılarak talep profillemesi desteklendi."
        : "Supported demand profiling using traffic data.",
      isTurkish
        ? "Yoğun saat analizleri için grafik çıktılar üretildi."
        : "Produced graphical outputs for peak period analysis.",
    ],
  },
  {
    title: isTurkish
      ? "Manchester Road Koridoru"
      : "Manchester Road Corridor",
    type: isTurkish ? "Aktif Ulaşım" : "Active Travel",
    date: isTurkish
      ? "Transport for Greater Manchester · Eylül 2026 – Devam Ediyor"
      : "Transport for Greater Manchester · September 2026 – Ongoing",
    icon: CircleDot,
    description: isTurkish
      ? "Aktif ulaşım ve CYCLOPS prensiplerini içeren çok sayıda kavşağın tasarımına katkı sağlanmaktadır."
      : "Contributing to the design of multiple junctions incorporating active travel and CYCLOPS principles.",
    details: [
      isTurkish
        ? "Kavşak tasarımlarının ve bisiklet altyapısı yerleşimlerinin geliştirilmesi desteklendi."
        : "Supported development of junction designs and cycle infrastructure layouts.",
      isTurkish
        ? "Farklı bisiklet tesisi düzenlerini içeren tasarım seçenekleri hazırlandı."
        : "Prepared design options including different cycle facility configurations.",
      isTurkish
        ? "Geçitler, bordürler, işaret levhaları ve yol çizgilerinin standartlara uygun yerleşimlerine katkı sağlandı."
        : "Contributed to compliant layouts of crossings, kerbs, signage, and markings.",
      isTurkish
        ? "Çok disiplinli ekipler arasındaki koordinasyona yardımcı olundu."
        : "Assisted with coordination across multidisciplinary teams.",
      isTurkish
        ? "Kısıtlar ve geri bildirimler doğrultusunda yinelemeli tasarım geliştirmeleri desteklendi."
        : "Supported iterative design improvements responding to constraints and feedback.",
    ],
  },
  {
    title: isTurkish
      ? "Great Grid Upgrade (WMEL) – Geçici Erişim Güzergâhları"
      : "Great Grid Upgrade (WMEL) – Temporary Access Routes",
    type: isTurkish
      ? "Geçici İşler / İnşaat Erişimi"
      : "Temporary Works / Construction Access",
    date: isTurkish
      ? "Ulusal Altyapı Projesi · Nisan 2026 – Devam Ediyor"
      : "National Infrastructure Project · April 2026 – Ongoing",
    icon: Route,
    description: isTurkish
      ? "Büyük ölçekli altyapı çalışmalarını destekleyen geçici erişim güzergâhlarının tasarımına katkı sağlanmaktadır."
      : "Contributing to the design of temporary access routes supporting major infrastructure delivery.",
    details: [
      isTurkish
        ? "Civil 3D kullanılarak servis ve nakliye yolu güzergâhlarının geliştirilmesine yardımcı olundu."
        : "Assisted in development of haul route alignments using Civil 3D.",
      isTurkish
        ? "Güzergâh tasarımında çevresel ve planlama kısıtları dikkate alındı."
        : "Considered environmental and planning constraints in route design.",
      isTurkish
        ? "Araç erişim gereksinimlerini desteklemek amacıyla taşıt iz analizi gerçekleştirildi."
        : "Undertook swept path analysis to support vehicle access requirements.",
      isTurkish
        ? "Karayolu ağına güvenli erişim bağlantılarının tasarımına katkı sağlandı."
        : "Contributed to design of safe access connections to the highway network.",
      isTurkish
        ? "Geçici trafik yönetimi yerleşimlerinin hazırlanması desteklendi."
        : "Supported preparation of temporary traffic management layouts.",
    ],
  },
  {
    title: isTurkish
      ? "20mph Tavsiye Bölgeleri – Hereford LUF"
      : "20mph Advisory Zones – Hereford LUF",
    type: isTurkish
      ? "Trafik Düzenleme Emirleri (TRO)"
      : "Traffic Regulation Orders (TROs)",
    date: isTurkish
      ? "Hereford LUF Programme · Ekim 2023 – Ocak 2024"
      : "Hereford LUF Programme · October 2023 – January 2024",
    icon: Route,
    description: isTurkish
      ? "Kentsel güvenliği geliştirmek amacıyla tavsiye niteliğindeki hız azaltma önlemlerinin geliştirilmesine destek sağlandı."
      : "Supported development of advisory speed reduction measures to improve urban safety.",
    details: [
      isTurkish
        ? "Şema geliştirmeyi desteklemek üzere trafik ve çarpışma verileri analiz edildi."
        : "Analysed traffic and collision data to inform scheme development.",
      isTurkish
        ? "Tasarım çizimleri ve yerleşimlerin hazırlanmasına yardımcı olundu."
        : "Assisted in preparation of design drawings and layouts.",
      isTurkish
        ? "TRO dokümantasyonu ve koordinasyon çalışmalarına destek sağlandı."
        : "Supported TRO documentation and coordination.",
      isTurkish
        ? "Standartlara uygun trafik levhası tasarımına katkı sağlandı."
        : "Contributed to compliant signage design.",
    ],
  },
  {
    title: isTurkish
      ? "A4174 / M32 Koridoru"
      : "A4174 / M32 Corridor",
    type: isTurkish ? "Aktif Ulaşım" : "Active Travel",
    date: isTurkish
      ? "Bristol City Council · Ekim 2023 – Ocak 2024"
      : "Bristol City Council · October 2023 – January 2024",
    icon: Route,
    description: isTurkish
      ? "Yeni bir Park & Ride şemasıyla bağlantılı aktif ulaşım iyileştirmelerinin erken aşama tasarımına destek sağlandı."
      : "Supported early-stage design for active travel improvements linked to a new Park & Ride scheme.",
    details: [
      isTurkish
        ? "Saha değerlendirmeleri ve kısıt belirleme çalışmaları gerçekleştirildi."
        : "Undertook site assessments and constraint identification.",
      isTurkish
        ? "Ön tasarım yerleşimlerinin geliştirilmesine yardımcı olundu."
        : "Assisted in development of preliminary design layouts.",
      isTurkish
        ? "Yaya geçitleri, bisiklet altyapısı ve kavşakların tasarımına katkı sağlandı."
        : "Contributed to design of crossings, cycle infrastructure, and junctions.",
      isTurkish
        ? "Araç izleme ve yerleşim doğrulama çalışmaları desteklendi."
        : "Supported vehicle tracking and layout validation.",
      isTurkish
        ? "Standartlara uygun yol işaretleme tasarımları hazırlandı."
        : "Prepared compliant road marking designs.",
    ],
  },
  {
    title: isTurkish
      ? "A4 Bath Road – Otobüs Durağı İyileştirmeleri"
      : "A4 Bath Road – Bus Stop Improvements",
    type: isTurkish ? "Otobüs Altyapısı" : "Bus Infrastructure",
    date: isTurkish
      ? "Bristol City Council · Aralık 2025 – Ocak 2026"
      : "Bristol City Council · December 2025 – January 2026",
    icon: Building2,
    description: isTurkish
      ? "Otobüs durağı altyapısı iyileştirmelerinin tasarım ve inceleme çalışmalarına destek sağlandı."
      : "Supported design and review of bus stop infrastructure improvements.",
    details: [
      isTurkish
        ? "Standartlara uygun otobüs durağı yerleşimlerinin geliştirilmesine yardımcı olundu."
        : "Assisted in development of compliant bus stop layouts.",
      isTurkish
        ? "Durak barınakları, gerçek zamanlı bilgi sistemleri ve erişilebilirlik unsurlarının entegrasyonuna katkı sağlandı."
        : "Contributed to integration of shelters, RTI systems, and accessibility features.",
      isTurkish
        ? "İlgili yaya geçitleri ve erişim iyileştirmelerinin tasarımı desteklendi."
        : "Supported design of associated crossings and access improvements.",
      isTurkish
        ? "Drenaj hususları ve yerleşim kısıtları incelendi."
        : "Reviewed drainage considerations and layout constraints.",
      isTurkish
        ? "Tasarım çıktılarının standartlar ve paydaş girdileri doğrultusunda koordinasyonuna yardımcı olundu."
        : "Helped coordinate design outputs in line with standards and stakeholder input.",
    ],
  },
];

export default function ProjectsPage() {
  const { isTurkish, toggleLanguage } = useLanguage();

  const projects = projectsData(isTurkish);

  return (
    <main className="min-h-screen bg-[#003C3F] text-white">
      <section className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
        <nav className="flex items-center justify-between">
          <Link
            href="/"
            className="font-[var(--font-space-grotesk)] text-lg font-bold tracking-tight text-white"
          >
            {isTurkish ? "Hüseyin" : "Huseyin"}
            <span className="text-[#B6D957]">
              {isTurkish ? " Alşan" : " Alsan"}
            </span>
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

            <div className="mt-10">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center rounded-xl border border-[#B6D957]/30 bg-[#B6D957] px-6 py-3 text-sm font-semibold text-[#003C3F] transition duration-300 hover:bg-[#CBEA6A]"
              >
                {isTurkish
                  ? "Sorular ve CV İçin İletişime Geçin"
                  : "Get In Touch for Enquiries and CV"}
              </Link>
            </div>
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

      <section className="border-t border-white/10 bg-[#002C2F] px-6 py-14">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-3xl border border-[#B6D957]/20 bg-white/5 p-8 backdrop-blur-sm md:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#B6D957]">
              {isTurkish
                ? "Bağımsız Kişisel Portföy"
                : "Independent Personal Portfolio"}
            </p>

            <h2 className="mt-4 font-[var(--font-space-grotesk)] text-2xl font-bold text-white md:text-3xl">
              {isTurkish
                ? "Proje ve kuruluş bilgileri"
                : "Project and organisation information"}
            </h2>

            <p className="mt-5 max-w-5xl text-sm leading-7 text-white/65 md:text-base">
              {isTurkish
                ? "Bu web sitesi bağımsız bir kişisel portföydür. Burada sunulan görüşler, deneyimler ve proje açıklamaları kişiseldir ve herhangi bir mevcut veya önceki işverenin, müşterinin, yerel yönetimin ya da diğer kuruluşun resmi görüşlerini temsil etmek zorunda değildir. Proje bilgileri portföy amacıyla özetlenmiştir ve gizli, kısıtlı veya ticari açıdan hassas bilgileri kasıtlı olarak içermemektedir."
                : "This website is an independent personal portfolio. The views, experiences and project descriptions presented are personal and do not necessarily represent the official views of any current or previous employer, client, local authority or other organisation. Project information has been summarised for portfolio purposes and is not intended to include confidential, restricted or commercially sensitive information."}
            </p>

            <p className="mt-4 max-w-5xl text-sm leading-7 text-white/50">
              {isTurkish
                ? "Kuruluşlara ve projelere yapılan atıflar yalnızca mesleki deneyim ve portföy çalışmalarını açıklamak amacıyla kullanılmıştır ve sponsorluk, ortaklık veya resmi onay anlamına gelmez."
                : "References to organisations and projects are included only to describe professional experience and portfolio work and do not imply sponsorship, partnership or official endorsement."}
            </p>

            <div className="mt-7">
              <Link
                href="/terms"
                className="inline-flex rounded-xl border border-[#B6D957]/30 bg-[#B6D957]/10 px-5 py-3 text-sm font-bold text-[#B6D957] transition hover:bg-[#B6D957] hover:text-[#003C3F]"
              >
                {isTurkish
                  ? "Web Sitesi Koşullarını Görüntüle"
                  : "View Website Terms"}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <button
        type="button"
        onClick={toggleLanguage}
        className="fixed bottom-6 right-6 z-[999] inline-flex items-center gap-3 rounded-full border border-white/15 bg-[#002C2F]/90 px-5 py-3 text-sm font-bold uppercase tracking-[0.16em] text-white shadow-2xl backdrop-blur-xl transition hover:border-[#B6D957] hover:text-[#B6D957]"
        aria-label={isTurkish ? "Switch to English" : "Türkçeye geç"}
      >
        <Globe2 size={18} />
        {isTurkish ? "EN" : "TR"}
      </button>
    </main>
  );
}