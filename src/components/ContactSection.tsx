"use client";

import Link from "next/link";
import { ArrowRight, ExternalLink, Mail } from "lucide-react";
import Reveal from "@/components/Reveal";

type ContactSectionProps = {
  isTurkish: boolean;
};

const linkedinUrl = "https://www.linkedin.com/in/huseyinalsan/";
const emailAddress = "huseyin.alsan@outlook.com";

export default function ContactSection({
  isTurkish,
}: ContactSectionProps) {
  return (
    <>
      {/* Contact */}
      <section
        id="contact"
        className="bg-[#003C3F] px-6 py-24 text-white"
      >
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Left */}
          <Reveal>
            <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#B6D957]">
              {isTurkish
                ? "Sorular ve CV İçin İletişime Geçin"
                : "Get In Touch for Enquiries and CV"}
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

          {/* Form */}
          <Reveal delay={0.12}>
            <form
              action={`mailto:${emailAddress}`}
              method="post"
              encType="text/plain"
              className="space-y-6"
            >
              {/* First + Last Name */}
              <div className="grid gap-6 md:grid-cols-2">
                {/* First Name */}
                <div>
                  <label
                    htmlFor="firstname"
                    className="flex items-center gap-2 text-sm font-semibold text-white"
                  >
                    {isTurkish ? "Ad" : "First Name"}

                    <span className="rounded-full border border-[#B6D957]/40 bg-[#B6D957]/10 px-2 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#B6D957]">
                      {isTurkish ? "Zorunlu" : "Required"}
                    </span>
                  </label>

                  <input
                    id="firstname"
                    type="text"
                    name="firstname"
                    required
                    autoComplete="given-name"
                    maxLength={50}
                    className="mt-2 w-full rounded-xl border border-white/15 bg-[#002C2F] px-4 py-3 text-white outline-none transition duration-300 focus:border-[#B6D957] focus:ring-2 focus:ring-[#B6D957]/20"
                  />
                </div>

                {/* Last Name */}
                <div>
                  <label
                    htmlFor="lastname"
                    className="flex items-center gap-2 text-sm font-semibold text-white"
                  >
                    {isTurkish ? "Soyad" : "Last Name"}

                    <span className="rounded-full border border-[#B6D957]/40 bg-[#B6D957]/10 px-2 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#B6D957]">
                      {isTurkish ? "Zorunlu" : "Required"}
                    </span>
                  </label>

                  <input
                    id="lastname"
                    type="text"
                    name="lastname"
                    required
                    autoComplete="family-name"
                    maxLength={50}
                    className="mt-2 w-full rounded-xl border border-white/15 bg-[#002C2F] px-4 py-3 text-white outline-none transition duration-300 focus:border-[#B6D957] focus:ring-2 focus:ring-[#B6D957]/20"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="flex items-center gap-2 text-sm font-semibold text-white"
                >
                  {isTurkish ? "E-posta Adresi" : "Email Address"}

                  <span className="rounded-full border border-[#B6D957]/40 bg-[#B6D957]/10 px-2 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#B6D957]">
                    {isTurkish ? "Zorunlu" : "Required"}
                  </span>
                </label>

                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  autoComplete="email"
                  maxLength={254}
                  className="mt-2 w-full rounded-xl border border-white/15 bg-[#002C2F] px-4 py-3 text-white outline-none transition duration-300 focus:border-[#B6D957] focus:ring-2 focus:ring-[#B6D957]/20"
                />
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="flex items-center gap-2 text-sm font-semibold text-white"
                >
                  {isTurkish ? "Konu" : "Subject"}

                  <span className="rounded-full border border-[#B6D957]/40 bg-[#B6D957]/10 px-2 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#B6D957]">
                    {isTurkish ? "Zorunlu" : "Required"}
                  </span>
                </label>

                <input
                  id="subject"
                  type="text"
                  name="subject"
                  required
                  minLength={3}
                  maxLength={150}
                  className="mt-2 w-full rounded-xl border border-white/15 bg-[#002C2F] px-4 py-3 text-white outline-none transition duration-300 focus:border-[#B6D957] focus:ring-2 focus:ring-[#B6D957]/20"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="flex items-center gap-2 text-sm font-semibold text-white"
                >
                  {isTurkish ? "Mesaj" : "Message"}

                  <span className="rounded-full border border-[#B6D957]/40 bg-[#B6D957]/10 px-2 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#B6D957]">
                    {isTurkish ? "Zorunlu" : "Required"}
                  </span>
                </label>

                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  minLength={10}
                  maxLength={2000}
                  className="mt-2 w-full rounded-xl border border-white/15 bg-[#002C2F] px-4 py-3 text-white outline-none transition duration-300 focus:border-[#B6D957] focus:ring-2 focus:ring-[#B6D957]/20"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-3 rounded-xl bg-[#B6D957] px-12 py-4 text-sm font-bold uppercase tracking-[0.25em] text-[#003C3F] transition duration-300 hover:bg-[#CBEA6A]"
              >
                {isTurkish ? "Gönder" : "Submit"}
                <ArrowRight size={18} />
              </button>

              {/* Privacy Notice */}
              <p className="max-w-2xl text-sm leading-6 text-white/60">
                {isTurkish
                  ? "Bu form aracılığıyla gönderilen bilgiler yalnızca talebinizi incelemek ve yanıtlamak amacıyla kullanılacaktır."
                  : "Information submitted through this form will only be used to review and respond to your enquiry."}{" "}
                <Link
                  href="/privacy"
                  className="font-semibold text-[#B6D957] underline underline-offset-4 transition hover:text-[#CBEA6A]"
                >
                  {isTurkish
                    ? "Gizlilik Politikasını okuyun"
                    : "Read the Privacy Policy"}
                </Link>
                .
              </p>
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

        <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-4 text-sm uppercase tracking-[0.25em] text-[#B6D957]">
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-[#CBEA6A]"
          >
            LinkedIn
          </a>

          <Link
            href="/projects"
            className="transition hover:text-[#CBEA6A]"
          >
            {isTurkish ? "Projeler" : "Projects"}
          </Link>

          <Link
            href="/privacy"
            className="transition hover:text-[#CBEA6A]"
          >
            {isTurkish ? "Gizlilik Politikası" : "Privacy Policy"}
          </Link>

          <Link
            href="/terms"
            className="transition hover:text-[#CBEA6A]"
          >
            {isTurkish ? "Kullanım Koşulları" : "Website Terms"}
          </Link>

          <Link
            href="/accessibility"
            className="transition hover:text-[#CBEA6A]"
          >
            {isTurkish ? "Erişilebilirlik" : "Accessibility"}
          </Link>
        </div>

        <p className="mt-8 text-sm text-white/55">
          {isTurkish
            ? "© 2026 Hüseyin Alşan. Tüm hakları saklıdır. Birleşik Krallık merkezli Trafik Mühendisi."
            : "© 2026 Hüseyin Alşan. All rights reserved. Traffic Engineer based in the UK."}
        </p>
      </footer>
    </>
  );
}