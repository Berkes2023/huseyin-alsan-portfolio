"use client";

import Link from "next/link";
import { ArrowRight, ExternalLink, Mail } from "lucide-react";
import Reveal from "@/components/Reveal";

type ContactSectionProps = {
  isTurkish: boolean;
};

const linkedinUrl = "https://www.linkedin.com/in/huseyinalsan/";
const emailAddress = "huseyin.alsan@outlook.com";

export default function ContactSection({ isTurkish }: ContactSectionProps) {
  return (
    <>
      {/* Contact */}
      <section id="contact" className="bg-[#003C3F] px-6 py-24 text-white">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#B6D957]">
                {isTurkish ? "İletişime Geçin" : "Get In Touch"}
              </p>

              <h2 className="mt-4 font-[var(--font-space-grotesk)] text-5xl font-bold tracking-tight">
                {isTurkish
                  ? "Ulaşım, karayolları ve sokak tasarımı hakkında konuşalım."
                  : "Let’s discuss transport, highways and street design."}
              </h2>

              <div className="mt-8 space-y-4 text-lg">
                <a
                  href={`mailto:${emailAddress}`}
                  className="flex items-center gap-3 font-semibold text-[#B6D957]"
                >
                  <Mail size={20} />
                  {emailAddress}
                </a>

                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 font-semibold text-[#B6D957]"
                >
                  <ExternalLink size={20} />
                  {isTurkish ? "LinkedIn Profili" : "LinkedIn"}
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
              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-white">
                  {isTurkish ? "Ad Soyad" : "Full Name"}

                  <span className="rounded-full border border-[#B6D957]/40 bg-[#B6D957]/10 px-2 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#B6D957]">
                    {isTurkish ? "Zorunlu" : "Required"}
                  </span>
                </label>

                <input
                  type="text"
                  name="fullname"
                  required
                  className="mt-2 w-full rounded-xl border border-white/15 bg-[#002C2F] px-4 py-3 text-white outline-none transition duration-300 focus:border-[#B6D957] focus:ring-2 focus:ring-[#B6D957]/20"
                />
              </div>

              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-white">
                  {isTurkish ? "E-posta Adresi" : "Email Address"}

                  <span className="rounded-full border border-[#B6D957]/40 bg-[#B6D957]/10 px-2 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#B6D957]">
                    {isTurkish ? "Zorunlu" : "Required"}
                  </span>
                </label>

                <input
                  type="email"
                  name="email"
                  required
                  className="mt-2 w-full rounded-xl border border-white/15 bg-[#002C2F] px-4 py-3 text-white outline-none transition duration-300 focus:border-[#B6D957] focus:ring-2 focus:ring-[#B6D957]/20"
                />
              </div>

              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-white">
                  {isTurkish ? "Konu" : "Subject"}

                  <span className="rounded-full border border-[#B6D957]/40 bg-[#B6D957]/10 px-2 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#B6D957]">
                    {isTurkish ? "Zorunlu" : "Required"}
                  </span>
                </label>

                <input
                  type="text"
                  name="subject"
                  required
                  className="mt-2 w-full rounded-xl border border-white/15 bg-[#002C2F] px-4 py-3 text-white outline-none transition duration-300 focus:border-[#B6D957] focus:ring-2 focus:ring-[#B6D957]/20"
                />
              </div>

              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-white">
                  {isTurkish ? "Mesaj" : "Message"}

                  <span className="rounded-full border border-[#B6D957]/40 bg-[#B6D957]/10 px-2 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#B6D957]">
                    {isTurkish ? "Zorunlu" : "Required"}
                  </span>
                </label>

                <textarea
                  name="message"
                  required
                  rows={6}
                  className="mt-2 w-full rounded-xl border border-white/15 bg-[#002C2F] px-4 py-3 text-white outline-none transition duration-300 focus:border-[#B6D957] focus:ring-2 focus:ring-[#B6D957]/20"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center gap-3 rounded-xl bg-[#B6D957] px-12 py-4 text-sm font-bold uppercase tracking-[0.25em] text-[#003C3F] transition duration-300 hover:bg-[#CBEA6A]"
              >
                {isTurkish ? "Gönder" : "Submit"}
                <ArrowRight size={18} />
              </button>
            </form>
          </Reveal>
        </div>
      </section>

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

          <Link href="/projects">{isTurkish ? "Projeler" : "Projects"}</Link>
        </div>

        <p className="mt-8 text-sm text-white/55">
          {isTurkish
            ? "© 2026 Huseyin Alsan. Birleşik Krallık merkezli Trafik Mühendisi."
            : "© 2026 Huseyin Alsan. Traffic Engineer based in the UK."}
        </p>
      </footer>
    </>
  );
}