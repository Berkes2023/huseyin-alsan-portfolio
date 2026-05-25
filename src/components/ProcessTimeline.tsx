"use client";

import { motion } from "motion/react";
import {
  ClipboardCheck,
  BarChart3,
  PencilRuler,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

type Props = {
  isTurkish: boolean;
};

export default function ProcessTimeline({ isTurkish }: Props) {
  const steps = [
    {
      title: isTurkish ? "Analiz" : "Analyse",
      description: isTurkish
        ? "Trafik verileri, yol geometrisi ve kullanıcı hareketleri değerlendirilir."
        : "Traffic data, road geometry and user movement are assessed.",
      icon: BarChart3,
    },

    {
      title: isTurkish ? "Modelleme" : "Model",
      description: isTurkish
        ? "Trafik modelleme ve simülasyon araçlarıyla senaryolar test edilir."
        : "Traffic modelling and simulation tools are used to test scenarios.",
      icon: ClipboardCheck,
    },

    {
      title: isTurkish ? "Tasarım" : "Design",
      description: isTurkish
        ? "Güvenli ve uygulanabilir ulaşım çözümleri geliştirilir."
        : "Safe and buildable transport solutions are developed.",
      icon: PencilRuler,
    },

    {
      title: isTurkish ? "İnceleme" : "Review",
      description: isTurkish
        ? "Standartlar, güvenlik ve erişilebilirlik açısından kontroller yapılır."
        : "Designs are reviewed against standards, safety and accessibility.",
      icon: ShieldCheck,
    },

    {
      title: isTurkish ? "Teslim" : "Deliver",
      description: isTurkish
        ? "Nihai mühendislik çözümleri paydaşlara ve yerel yönetimlere sunulur."
        : "Final engineering solutions are delivered to stakeholders and authorities.",
      icon: CheckCircle2,
    },
  ];

  return (
    <section className="bg-white px-6 py-24 text-[#003C3F]">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#7EA629]">
            {isTurkish
              ? "Mühendislik Süreci"
              : "Engineering Process"}
          </p>

          <h2 className="mt-4 font-[var(--font-space-grotesk)] text-4xl font-bold tracking-tight md:text-5xl">
            {isTurkish
              ? "Trafik mühendisliği projelerine yapılandırılmış yaklaşım."
              : "A structured approach to transport engineering projects."}
          </h2>
        </div>

        <div className="relative mt-20 grid gap-10 lg:grid-cols-5">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="relative"
              >
                {index !== steps.length - 1 && (
                  <div className="absolute left-[50%] top-10 hidden h-[2px] w-full bg-[#B6D957]/30 lg:block" />
                )}

                <div className="relative z-10">
                  <div className="inline-flex rounded-2xl bg-[#003C3F] p-4 text-[#B6D957] shadow-xl">
                    <Icon size={28} />
                  </div>

                  <h3 className="mt-6 font-[var(--font-space-grotesk)] text-2xl font-bold">
                    {step.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}