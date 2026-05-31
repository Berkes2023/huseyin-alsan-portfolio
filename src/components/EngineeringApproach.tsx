"use client";

import { CheckCircle2 } from "lucide-react";
import Reveal from "@/components/Reveal";

type EngineeringApproachProps = {
  isTurkish: boolean;
};

export default function EngineeringApproach({
  isTurkish,
}: EngineeringApproachProps) {
  return (
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
  );
}