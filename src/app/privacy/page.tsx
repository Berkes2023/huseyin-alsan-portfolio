import Link from "next/link";
import {
  ArrowLeft,
  Database,
  Eye,
  FileText,
  Globe2,
  LockKeyhole,
  Mail,
  Server,
  ShieldCheck,
  UserRoundCheck,
} from "lucide-react";

export const metadata = {
  title: "Privacy Policy | Hüseyin Alşan",
  description:
    "Privacy information for the professional portfolio website of Hüseyin Alşan.",
};

export default function PrivacyPolicyPage() {
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
              <ShieldCheck size={18} className="text-[#B6D957]" />

              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#B6D957]">
                Privacy & Data Protection
              </span>
            </div>

            <h1 className="mt-8 font-[var(--font-space-grotesk)] text-5xl font-bold tracking-tight md:text-7xl">
              Privacy Policy
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70 md:text-xl">
              This policy explains what information may be collected through
              this website, how it is used and how your privacy is protected.
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
              <Mail size={24} />
            </div>

            <h2 className="mt-6 text-xl font-bold">
              Contact information
            </h2>

            <p className="mt-3 leading-7 text-[#426364]">
              Information entered into the contact form is used only to review
              and respond to your enquiry.
            </p>
          </div>

          <div className="rounded-3xl border border-[#003C3F]/10 bg-white p-8 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#B6D957]/20 text-[#003C3F]">
              <LockKeyhole size={24} />
            </div>

            <h2 className="mt-6 text-xl font-bold">
              No sale of personal data
            </h2>

            <p className="mt-3 leading-7 text-[#426364]">
              Personal information submitted through the website is not sold
              or used for unrelated advertising.
            </p>
          </div>

          <div className="rounded-3xl border border-[#003C3F]/10 bg-white p-8 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#B6D957]/20 text-[#003C3F]">
              <UserRoundCheck size={24} />
            </div>

            <h2 className="mt-6 text-xl font-bold">
              Your privacy rights
            </h2>

            <p className="mt-3 leading-7 text-[#426364]">
              You may have rights to access, correct, delete or restrict the
              use of your personal information.
            </p>
          </div>
        </div>
      </section>

      {/* Policy content */}
      <section className="px-6 pb-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.3fr_0.7fr]">
          {/* Side navigation */}
          <aside className="h-fit rounded-3xl bg-[#003C3F] p-8 text-white lg:sticky lg:top-8">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#B6D957]">
              Policy Contents
            </p>

            <nav className="mt-6 space-y-3 text-sm text-white/65">
              <a href="#responsibility" className="block hover:text-[#B6D957]">
                01. Responsibility
              </a>

              <a href="#information" className="block hover:text-[#B6D957]">
                02. Information collected
              </a>

              <a href="#usage" className="block hover:text-[#B6D957]">
                03. How information is used
              </a>

              <a href="#providers" className="block hover:text-[#B6D957]">
                04. Service providers
              </a>

              <a href="#retention" className="block hover:text-[#B6D957]">
                05. Retention and security
              </a>

              <a href="#rights" className="block hover:text-[#B6D957]">
                06. Your rights
              </a>

              <a href="#complaints" className="block hover:text-[#B6D957]">
                07. Complaints and updates
              </a>
            </nav>

            <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-5">
              <ShieldCheck className="text-[#B6D957]" size={25} />

              <p className="mt-4 text-sm leading-6 text-white/65">
                Please avoid submitting unnecessary confidential or sensitive
                information through the contact form.
              </p>
            </div>
          </aside>

          {/* Main content */}
          <article className="space-y-6">
            {/* Introduction */}
            <section className="rounded-3xl border border-[#003C3F]/10 bg-white p-8 shadow-sm md:p-10">
              <p className="text-lg leading-8 text-[#426364]">
                This Privacy Policy explains how personal information is
                collected, used and protected when you visit or contact
                Hüseyin Alşan through this website.
              </p>
            </section>

            {/* Responsibility */}
            <section
              id="responsibility"
              className="scroll-mt-8 rounded-3xl border border-[#003C3F]/10 bg-white p-8 shadow-sm md:p-10"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#B6D957]/20 text-[#003C3F]">
                  <UserRoundCheck size={23} />
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#668000]">
                    Section 01
                  </p>

                  <h2 className="mt-2 text-3xl font-bold">
                    Who is responsible for your information?
                  </h2>
                </div>
              </div>

              <div className="mt-7 space-y-4 leading-8 text-[#426364]">
                <p>
                  Hüseyin Alşan is responsible for the personal information
                  collected through this website.
                </p>

                <p>
                  For questions about this Privacy Policy, your personal
                  information or your privacy rights, please use the contact
                  form available on this website.
                </p>
              </div>
            </section>

            {/* Information collected */}
            <section
              id="information"
              className="scroll-mt-8 rounded-3xl border border-[#003C3F]/10 bg-white p-8 shadow-sm md:p-10"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#B6D957]/20 text-[#003C3F]">
                  <Database size={23} />
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#668000]">
                    Section 02
                  </p>

                  <h2 className="mt-2 text-3xl font-bold">
                    Information collected
                  </h2>
                </div>
              </div>

              <div className="mt-7 space-y-5 leading-8 text-[#426364]">
                <p>
                  The website may collect information that you voluntarily
                  provide through the contact form, including:
                </p>

                <ul className="grid gap-3 md:grid-cols-2">
                  {[
                    "First name",
                    "Last name",
                    "Email address",
                    "Message subject",
                    "Message content",
                    "Other information you voluntarily include",
                  ].map((item) => (
                    <li
                      key={item}
                      className="rounded-xl bg-[#F4F7F2] px-4 py-3 font-medium text-[#123C3D]"
                    >
                      {item}
                    </li>
                  ))}
                </ul>

                <p>
                  Please do not submit sensitive personal information unless it
                  is necessary for your enquiry.
                </p>

                <p>
                  Limited technical information may also be processed when you
                  access the website. This may include an IP address, browser
                  information, device information, requested pages and
                  technical information used to operate and protect the
                  website.
                </p>
              </div>
            </section>

            {/* Information usage */}
            <section
              id="usage"
              className="scroll-mt-8 rounded-3xl border border-[#003C3F]/10 bg-white p-8 shadow-sm md:p-10"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#B6D957]/20 text-[#003C3F]">
                  <Eye size={23} />
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#668000]">
                    Section 03
                  </p>

                  <h2 className="mt-2 text-3xl font-bold">
                    How your information is used
                  </h2>
                </div>
              </div>

              <div className="mt-7 space-y-5 leading-8 text-[#426364]">
                <p>
                  Information submitted through the contact form may be used
                  to:
                </p>

                <ul className="list-disc space-y-2 pl-6">
                  <li>Read and respond to your enquiry</li>
                  <li>Communicate with you regarding your message</li>
                  <li>Maintain relevant professional correspondence</li>
                  <li>Prevent spam, fraud, misuse or malicious activity</li>
                  <li>Protect the security and operation of the website</li>
                  <li>Comply with legal obligations where required</li>
                </ul>

                <div className="rounded-2xl border border-[#B6D957]/40 bg-[#B6D957]/10 p-5 font-medium text-[#123C3D]">
                  Your personal information will not be sold and will not be
                  added to a marketing mailing list without appropriate
                  permission.
                </div>

                <h3 className="pt-3 text-xl font-bold text-[#123C3D]">
                  Lawful basis
                </h3>

                <p>
                  Where UK data-protection law applies, information submitted
                  through the contact form is processed on the basis of
                  legitimate interests. These interests include receiving and
                  responding to enquiries, maintaining relevant communications
                  and protecting the website from misuse and security threats.
                </p>
              </div>
            </section>

            {/* Providers */}
            <section
              id="providers"
              className="scroll-mt-8 rounded-3xl border border-[#003C3F]/10 bg-white p-8 shadow-sm md:p-10"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#B6D957]/20 text-[#003C3F]">
                  <Server size={23} />
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#668000]">
                    Section 04
                  </p>

                  <h2 className="mt-2 text-3xl font-bold">
                    Website service providers
                  </h2>
                </div>
              </div>

              <div className="mt-8 grid gap-5 md:grid-cols-2">
                <div className="rounded-2xl bg-[#F4F7F2] p-6">
                  <Mail className="text-[#668000]" />

                  <h3 className="mt-4 text-xl font-bold">
                    Contact form
                  </h3>

                  <p className="mt-3 leading-7 text-[#426364]">
                    The contact form may use Formspree to process and deliver
                    submitted messages. Formspree may process and store
                    information as part of its form-delivery, notification and
                    spam-prevention services.
                  </p>
                </div>

                <div className="rounded-2xl bg-[#F4F7F2] p-6">
                  <Server className="text-[#668000]" />

                  <h3 className="mt-4 text-xl font-bold">
                    Website hosting
                  </h3>

                  <p className="mt-3 leading-7 text-[#426364]">
                    This website is hosted using Vercel. Vercel and its
                    infrastructure providers may process limited technical
                    information required to deliver, secure and maintain the
                    website.
                  </p>
                </div>
              </div>

              <div className="mt-6 flex gap-4 rounded-2xl border border-[#003C3F]/10 p-6">
                <Globe2
                  size={25}
                  className="mt-1 shrink-0 text-[#668000]"
                />

                <div>
                  <h3 className="font-bold">
                    International processing
                  </h3>

                  <p className="mt-2 leading-7 text-[#426364]">
                    Some service providers may process information outside the
                    United Kingdom. Relevant providers are responsible for
                    applying appropriate safeguards under applicable
                    data-protection law.
                  </p>
                </div>
              </div>
            </section>

            {/* Retention */}
            <section
              id="retention"
              className="scroll-mt-8 rounded-3xl border border-[#003C3F]/10 bg-white p-8 shadow-sm md:p-10"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#B6D957]/20 text-[#003C3F]">
                  <LockKeyhole size={23} />
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#668000]">
                    Section 05
                  </p>

                  <h2 className="mt-2 text-3xl font-bold">
                    Retention and information security
                  </h2>
                </div>
              </div>

              <div className="mt-7 space-y-5 leading-8 text-[#426364]">
                <p>
                  Contact-form enquiries and related correspondence will
                  normally be retained for no longer than 12 months after the
                  most recent communication.
                </p>

                <p>
                  Information may be kept for longer where reasonably necessary
                  to continue an ongoing conversation, maintain important
                  professional correspondence, resolve a dispute, protect legal
                  rights, meet a legal obligation or prevent security threats.
                </p>

                <p>
                  Reasonable steps are taken to protect personal information
                  against unauthorised access, accidental loss, misuse,
                  alteration or disclosure.
                </p>

                <div className="rounded-2xl bg-[#003C3F] p-6 text-white">
                  <p className="font-semibold">
                    No website, email system or internet transmission can be
                    guaranteed to be completely secure.
                  </p>
                </div>
              </div>
            </section>

            {/* Rights */}
            <section
              id="rights"
              className="scroll-mt-8 rounded-3xl border border-[#003C3F]/10 bg-white p-8 shadow-sm md:p-10"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#B6D957]/20 text-[#003C3F]">
                  <FileText size={23} />
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#668000]">
                    Section 06
                  </p>

                  <h2 className="mt-2 text-3xl font-bold">
                    Your data-protection rights
                  </h2>
                </div>
              </div>

              <div className="mt-7 space-y-5 leading-8 text-[#426364]">
                <p>
                  Depending on the circumstances and applicable law, you may
                  have the right to:
                </p>

                <div className="grid gap-3 md:grid-cols-2">
                  {[
                    "Request access to your information",
                    "Correct inaccurate information",
                    "Request deletion of information",
                    "Restrict certain uses",
                    "Object to certain processing",
                    "Request transfer where applicable",
                  ].map((right) => (
                    <div
                      key={right}
                      className="flex items-center gap-3 rounded-xl border border-[#003C3F]/10 px-4 py-4"
                    >
                      <ShieldCheck
                        size={18}
                        className="shrink-0 text-[#668000]"
                      />

                      <span className="font-medium text-[#123C3D]">
                        {right}
                      </span>
                    </div>
                  ))}
                </div>

                <p>
                  Some rights may be subject to legal conditions or exceptions.
                  To make a privacy request, please use the website contact form
                  and clearly state that your message concerns privacy or data
                  protection.
                </p>

                <h3 className="pt-3 text-xl font-bold text-[#123C3D]">
                  Automated decision-making
                </h3>

                <p>
                  Information submitted through this website is not used to
                  make automated decisions that produce legal or similarly
                  significant effects.
                </p>
              </div>
            </section>

            {/* Complaints */}
            <section
              id="complaints"
              className="scroll-mt-8 rounded-3xl border border-[#003C3F]/10 bg-white p-8 shadow-sm md:p-10"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#B6D957]/20 text-[#003C3F]">
                  <ShieldCheck size={23} />
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#668000]">
                    Section 07
                  </p>

                  <h2 className="mt-2 text-3xl font-bold">
                    Complaints, external links and updates
                  </h2>
                </div>
              </div>

              <div className="mt-7 space-y-6 leading-8 text-[#426364]">
                <div>
                  <h3 className="text-xl font-bold text-[#123C3D]">
                    External websites
                  </h3>

                  <p className="mt-3">
                    This website may include links to external professional or
                    social-media platforms. This Privacy Policy does not apply
                    to websites operated by other organisations.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#123C3D]">
                    Complaints
                  </h3>

                  <p className="mt-3">
                    Please make contact through this website first if you have
                    concerns about how your personal information has been used.
                    You may also have the right to raise a concern with the UK
                    Information Commissioner&apos;s Office.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#123C3D]">
                    Changes to this policy
                  </h3>

                  <p className="mt-3">
                    This policy may be updated when website functionality,
                    service providers, information-processing practices or legal
                    requirements change. The latest version will be displayed
                    on this page with its updated date.
                  </p>
                </div>
              </div>
            </section>

            {/* Bottom action */}
            <section className="rounded-3xl bg-[#003C3F] p-8 text-white md:p-10">
              <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#B6D957]">
                    Privacy Question?
                  </p>

                  <h2 className="mt-3 text-3xl font-bold">
                    Get in touch
                  </h2>

                  <p className="mt-3 max-w-xl leading-7 text-white/65">
                    Questions regarding this policy or personal information can
                    be submitted through the website contact section.
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