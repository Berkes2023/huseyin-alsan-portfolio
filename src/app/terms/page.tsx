import Link from "next/link";
import {
  ArrowLeft,
  BriefcaseBusiness,
  CheckCircle2,
  Copyright,
  ExternalLink,
  FileText,
  Gavel,
  Globe2,
  Info,
  Link2,
  Scale,
  ShieldCheck,
  TriangleAlert,
} from "lucide-react";

export const metadata = {
  title: "Website Terms | Hüseyin Alşan",
  description:
    "Terms governing the use of the professional portfolio website of Hüseyin Alşan.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#F4F7F2] text-[#123C3D]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#003C3F] px-6 py-24 text-white">
        {/* Background decoration */}
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full border border-[#B6D957]/20" />
        <div className="absolute -right-8 top-12 h-52 w-52 rounded-full border border-[#B6D957]/15" />
        <div className="absolute -bottom-32 -left-20 h-96 w-96 rounded-full bg-[#B6D957]/5" />

        <div className="relative mx-auto max-w-7xl">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:border-[#B6D957]/50 hover:bg-[#B6D957]/10 hover:text-[#B6D957]"
          >
            <ArrowLeft size={17} />
            Return to homepage
          </Link>

          <div className="mt-16 max-w-4xl">
            <div className="inline-flex items-center gap-3 rounded-full border border-[#B6D957]/30 bg-[#B6D957]/10 px-4 py-2">
              <FileText size={18} className="text-[#B6D957]" />

              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#B6D957]">
                Website Use & Information
              </span>
            </div>

            <h1 className="mt-8 font-[var(--font-space-grotesk)] text-5xl font-bold tracking-tight md:text-7xl">
              Website Terms
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70 md:text-xl">
              These terms explain how this personal portfolio website may be
              accessed and used.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <div className="rounded-xl border border-white/10 bg-white/5 px-5 py-3">
                <p className="text-xs uppercase tracking-[0.2em] text-white/45">
                  Website Owner
                </p>

                <p className="mt-1 font-semibold text-white">
                  Hüseyin Alşan
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/5 px-5 py-3">
                <p className="text-xs uppercase tracking-[0.2em] text-white/45">
                  Last Updated
                </p>

                <p className="mt-1 font-semibold text-white">
                  13 July 2026
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Summary cards */}
      <section className="px-6 py-16">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-[#003C3F]/10 bg-white p-8 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#B6D957]/20 text-[#003C3F]">
              <BriefcaseBusiness size={24} />
            </div>

            <h2 className="mt-6 text-xl font-bold">
              Personal portfolio
            </h2>

            <p className="mt-3 leading-7 text-[#426364]">
              This website presents professional experience, skills and project
              information for portfolio purposes.
            </p>
          </div>

          <div className="rounded-3xl border border-[#003C3F]/10 bg-white p-8 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#B6D957]/20 text-[#003C3F]">
              <Info size={24} />
            </div>

            <h2 className="mt-6 text-xl font-bold">
              General information
            </h2>

            <p className="mt-3 leading-7 text-[#426364]">
              Website content is provided for general informational and
              portfolio purposes rather than as professional advice.
            </p>
          </div>

          <div className="rounded-3xl border border-[#003C3F]/10 bg-white p-8 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#B6D957]/20 text-[#003C3F]">
              <Copyright size={24} />
            </div>

            <h2 className="mt-6 text-xl font-bold">
              Original content protected
            </h2>

            <p className="mt-3 leading-7 text-[#426364]">
              Original website text, design and media may not be copied or
              commercially reused without appropriate permission.
            </p>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="px-6 pb-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.3fr_0.7fr]">
          {/* Side navigation */}
          <aside className="h-fit rounded-3xl bg-[#003C3F] p-8 text-white lg:sticky lg:top-8">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#B6D957]">
              Terms Contents
            </p>

            <nav className="mt-6 space-y-3 text-sm text-white/65">
              <a href="#acceptance" className="block hover:text-[#B6D957]">
                01. Acceptance
              </a>

              <a href="#purpose" className="block hover:text-[#B6D957]">
                02. Website purpose
              </a>

              <a href="#accuracy" className="block hover:text-[#B6D957]">
                03. Accuracy and availability
              </a>

              <a href="#ownership" className="block hover:text-[#B6D957]">
                04. Intellectual property
              </a>

              <a href="#use" className="block hover:text-[#B6D957]">
                05. Acceptable use
              </a>

              <a href="#external" className="block hover:text-[#B6D957]">
                06. External links
              </a>

              <a href="#employers" className="block hover:text-[#B6D957]">
                07. Employers and projects
              </a>

              <a href="#liability" className="block hover:text-[#B6D957]">
                08. Responsibility
              </a>

              <a href="#general" className="block hover:text-[#B6D957]">
                09. General terms
              </a>
            </nav>

            <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-5">
              <ShieldCheck className="text-[#B6D957]" size={25} />

              <p className="mt-4 text-sm leading-6 text-white/65">
                Please use this website lawfully and respect the rights of its
                owner, contributors and third parties.
              </p>
            </div>
          </aside>

          {/* Terms */}
          <article className="space-y-6">
            {/* Introduction */}
            <section className="rounded-3xl border border-[#003C3F]/10 bg-white p-8 shadow-sm md:p-10">
              <p className="text-lg leading-8 text-[#426364]">
                These Website Terms apply when you access or use the personal
                portfolio website of Hüseyin Alşan. Please read them together
                with the Privacy Policy.
              </p>
            </section>

            {/* Acceptance */}
            <section
              id="acceptance"
              className="scroll-mt-8 rounded-3xl border border-[#003C3F]/10 bg-white p-8 shadow-sm md:p-10"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#B6D957]/20 text-[#003C3F]">
                  <CheckCircle2 size={23} />
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#668000]">
                    Section 01
                  </p>

                  <h2 className="mt-2 text-3xl font-bold">
                    Acceptance of these terms
                  </h2>
                </div>
              </div>

              <div className="mt-7 space-y-4 leading-8 text-[#426364]">
                <p>
                  By accessing and using this website, you agree to use it in
                  accordance with these terms and all applicable laws.
                </p>

                <p>
                  If you do not agree with these terms, you should discontinue
                  use of the website.
                </p>
              </div>
            </section>

            {/* Purpose */}
            <section
              id="purpose"
              className="scroll-mt-8 rounded-3xl border border-[#003C3F]/10 bg-white p-8 shadow-sm md:p-10"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#B6D957]/20 text-[#003C3F]">
                  <BriefcaseBusiness size={23} />
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#668000]">
                    Section 02
                  </p>

                  <h2 className="mt-2 text-3xl font-bold">
                    Website purpose
                  </h2>
                </div>
              </div>

              <div className="mt-7 space-y-5 leading-8 text-[#426364]">
                <p>
                  This website is a personal professional portfolio. It is
                  intended to present information relating to professional
                  experience, education, skills, projects and areas of
                  interest.
                </p>

                <div className="rounded-2xl border border-[#B6D957]/40 bg-[#B6D957]/10 p-6 text-[#123C3D]">
                  <h3 className="font-bold">
                    Information only
                  </h3>

                  <p className="mt-2 leading-7">
                    Content on this website is provided for general
                    informational and portfolio purposes. It is not intended to
                    constitute engineering, transport-planning, legal,
                    financial or other professional advice.
                  </p>
                </div>

                <p>
                  You should obtain appropriate professional advice before
                  relying on information for a specific project, decision or
                  circumstance.
                </p>
              </div>
            </section>

            {/* Accuracy */}
            <section
              id="accuracy"
              className="scroll-mt-8 rounded-3xl border border-[#003C3F]/10 bg-white p-8 shadow-sm md:p-10"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#B6D957]/20 text-[#003C3F]">
                  <Info size={23} />
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#668000]">
                    Section 03
                  </p>

                  <h2 className="mt-2 text-3xl font-bold">
                    Accuracy and website availability
                  </h2>
                </div>
              </div>

              <div className="mt-7 space-y-4 leading-8 text-[#426364]">
                <p>
                  Reasonable efforts are made to keep website information
                  accurate and up to date. However, professional roles,
                  qualifications, project information, external links and other
                  content may change over time.
                </p>

                <p>
                  The website may be updated, changed, suspended or withdrawn
                  without prior notice.
                </p>

                <p>
                  Continuous, uninterrupted or error-free access cannot be
                  guaranteed. Temporary interruptions may occur because of
                  maintenance, hosting services, technical faults, security
                  work or circumstances outside reasonable control.
                </p>
              </div>
            </section>

            {/* IP */}
            <section
              id="ownership"
              className="scroll-mt-8 rounded-3xl border border-[#003C3F]/10 bg-white p-8 shadow-sm md:p-10"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#B6D957]/20 text-[#003C3F]">
                  <Copyright size={23} />
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#668000]">
                    Section 04
                  </p>

                  <h2 className="mt-2 text-3xl font-bold">
                    Intellectual property
                  </h2>
                </div>
              </div>

              <div className="mt-7 space-y-5 leading-8 text-[#426364]">
                <p>
                  Unless otherwise stated, original website text, design,
                  branding, layout, graphics and other original content are
                  owned by or used with the permission of Hüseyin Alşan.
                </p>

                <p>
                  Third-party names, company names, project names, trademarks,
                  photographs and other materials remain the property of their
                  respective owners where applicable.
                </p>

                <p>
                  You may view the website and share links to its publicly
                  available pages for lawful personal or professional purposes.
                </p>

                <p>
                  You must not copy, reproduce, republish, sell, commercially
                  exploit, falsely attribute or substantially redistribute
                  original website content without appropriate permission,
                  except where permitted by law.
                </p>
              </div>
            </section>

            {/* Acceptable use */}
            <section
              id="use"
              className="scroll-mt-8 rounded-3xl border border-[#003C3F]/10 bg-white p-8 shadow-sm md:p-10"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#B6D957]/20 text-[#003C3F]">
                  <ShieldCheck size={23} />
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#668000]">
                    Section 05
                  </p>

                  <h2 className="mt-2 text-3xl font-bold">
                    Acceptable use
                  </h2>
                </div>
              </div>

              <div className="mt-7 space-y-5 leading-8 text-[#426364]">
                <p>
                  You must use the website lawfully and must not knowingly:
                </p>

                <div className="grid gap-3 md:grid-cols-2">
                  {[
                    "Attempt unauthorised access",
                    "Interfere with website operation",
                    "Introduce malicious software",
                    "Submit unlawful or harmful content",
                    "Impersonate another person",
                    "Use the website for fraud",
                    "Misrepresent website content",
                    "Conduct abusive automated activity",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-xl border border-[#003C3F]/10 px-4 py-4"
                    >
                      <TriangleAlert
                        size={18}
                        className="shrink-0 text-[#668000]"
                      />

                      <span className="font-medium text-[#123C3D]">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <p>
                  Access may be restricted where reasonably necessary to protect
                  the website, its owner, service providers, visitors or other
                  parties.
                </p>
              </div>
            </section>

            {/* External links */}
            <section
              id="external"
              className="scroll-mt-8 rounded-3xl border border-[#003C3F]/10 bg-white p-8 shadow-sm md:p-10"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#B6D957]/20 text-[#003C3F]">
                  <Link2 size={23} />
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#668000]">
                    Section 06
                  </p>

                  <h2 className="mt-2 text-3xl font-bold">
                    External links and services
                  </h2>
                </div>
              </div>

              <div className="mt-7 space-y-4 leading-8 text-[#426364]">
                <p>
                  The website may contain links to third-party websites,
                  professional profiles, social-media platforms or services.
                </p>

                <p>
                  External links are provided for convenience and information.
                  Unless expressly stated, a link does not mean that Hüseyin
                  Alşan controls, endorses or is responsible for the external
                  website, its availability, security, content or privacy
                  practices.
                </p>

                <p>
                  Visitors should review the terms and privacy information of
                  external websites before using them or submitting personal
                  information.
                </p>
              </div>
            </section>

            {/* Employers */}
            <section
              id="employers"
              className="scroll-mt-8 rounded-3xl border border-[#003C3F]/10 bg-white p-8 shadow-sm md:p-10"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#B6D957]/20 text-[#003C3F]">
                  <Globe2 size={23} />
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#668000]">
                    Section 07
                  </p>

                  <h2 className="mt-2 text-3xl font-bold">
                    Employers, organisations and projects
                  </h2>
                </div>
              </div>

              <div className="mt-7 space-y-5 leading-8 text-[#426364]">
                <p>
                  References to employers, universities, clients,
                  organisations and projects are included to describe personal
                  professional experience and portfolio work.
                </p>

                <div className="rounded-2xl bg-[#003C3F] p-6 text-white">
                  <p className="font-semibold leading-7">
                    This is an independent personal portfolio website. The
                    views and descriptions presented are personal and do not
                    necessarily represent the views of any current or previous
                    employer, client, university or other organisation.
                  </p>
                </div>

                <p>
                  References to an organisation do not imply sponsorship,
                  partnership, endorsement or official affiliation beyond any
                  professional relationship specifically described.
                </p>

                <p>
                  Project descriptions may be summarised or adapted for
                  portfolio purposes and may omit confidential, commercially
                  sensitive or restricted information.
                </p>
              </div>
            </section>

            {/* Liability */}
            <section
              id="liability"
              className="scroll-mt-8 rounded-3xl border border-[#003C3F]/10 bg-white p-8 shadow-sm md:p-10"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#B6D957]/20 text-[#003C3F]">
                  <Scale size={23} />
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#668000]">
                    Section 08
                  </p>

                  <h2 className="mt-2 text-3xl font-bold">
                    Responsibility and limitations
                  </h2>
                </div>
              </div>

              <div className="mt-7 space-y-4 leading-8 text-[#426364]">
                <p>
                  You are responsible for how you use or rely upon information
                  available through this website.
                </p>

                <p>
                  To the extent permitted by applicable law, Hüseyin Alşan will
                  not be responsible for losses arising solely from reliance on
                  general portfolio information, temporary website
                  unavailability or the content and operation of third-party
                  websites.
                </p>

                <p>
                  Nothing in these terms is intended to exclude or limit any
                  responsibility that cannot lawfully be excluded or limited.
                </p>
              </div>
            </section>

            {/* General */}
            <section
              id="general"
              className="scroll-mt-8 rounded-3xl border border-[#003C3F]/10 bg-white p-8 shadow-sm md:p-10"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#B6D957]/20 text-[#003C3F]">
                  <Gavel size={23} />
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#668000]">
                    Section 09
                  </p>

                  <h2 className="mt-2 text-3xl font-bold">
                    Privacy, changes and applicable law
                  </h2>
                </div>
              </div>

              <div className="mt-7 space-y-7 leading-8 text-[#426364]">
                <div>
                  <h3 className="text-xl font-bold text-[#123C3D]">
                    Privacy
                  </h3>

                  <p className="mt-3">
                    Information about how personal information is handled is
                    provided in the website Privacy Policy.
                  </p>

                  <Link
                    href="/privacy"
                    className="mt-4 inline-flex items-center gap-2 font-bold text-[#668000] underline underline-offset-4"
                  >
                    Read the Privacy Policy
                    <ExternalLink size={16} />
                  </Link>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#123C3D]">
                    Changes to these terms
                  </h3>

                  <p className="mt-3">
                    These terms may be updated when the website, its content,
                    its services or relevant legal requirements change. The
                    latest version will be displayed on this page together with
                    its updated date.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#123C3D]">
                    Applicable law
                  </h3>

                  <p className="mt-3">
                    Subject to any mandatory rights that apply, these terms are
                    governed by the laws of England and Wales.
                  </p>
                </div>
              </div>
            </section>

            {/* Bottom action */}
            <section className="rounded-3xl bg-[#003C3F] p-8 text-white md:p-10">
              <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#B6D957]">
                    Website Question?
                  </p>

                  <h2 className="mt-3 text-3xl font-bold">
                    Get in touch
                  </h2>

                  <p className="mt-3 max-w-xl leading-7 text-white/65">
                    Questions about the website or these terms can be submitted
                    through the contact section.
                  </p>
                </div>

                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center rounded-xl bg-[#B6D957] px-7 py-4 font-bold text-[#003C3F] transition hover:bg-[#CBEA6A]"
                >
                  Contact Hüseyin
                </Link>
              </div>
            </section>
          </article>
        </div>
      </section>
    </main>
  );
}