import Link from "next/link";
import {
  ArrowLeft,
  CheckCircle2,
  Eye,
  Keyboard,
  Mail,
  MonitorSmartphone,
  MousePointer2,
  Search,
  ShieldCheck,
  Type,
} from "lucide-react";

export const metadata = {
  title: "Accessibility | Hüseyin Alşan",
  description:
    "Accessibility information for the professional portfolio website of Hüseyin Alşan.",
};

export default function AccessibilityPage() {
  return (
    <main className="min-h-screen bg-[#F4F7F2] text-[#123C3D]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#003C3F] px-6 py-24 text-white">
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full border border-[#B6D957]/20" />
        <div className="absolute -right-8 top-12 h-52 w-52 rounded-full border border-[#B6D957]/15" />
        <div className="absolute -bottom-32 -left-20 h-96 w-96 rounded-full bg-[#B6D957]/5" />

        <div className="relative mx-auto max-w-7xl">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold transition hover:border-[#B6D957]/50 hover:bg-[#B6D957]/10 hover:text-[#B6D957]"
          >
            <ArrowLeft size={17} />
            Return to homepage
          </Link>

          <div className="mt-16 max-w-4xl">
            <div className="inline-flex items-center gap-3 rounded-full border border-[#B6D957]/30 bg-[#B6D957]/10 px-4 py-2">
              <Eye size={18} className="text-[#B6D957]" />

              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#B6D957]">
                Inclusive Digital Experience
              </span>
            </div>

            <h1 className="mt-8 font-[var(--font-space-grotesk)] text-5xl font-bold tracking-tight md:text-7xl">
              Accessibility
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70 md:text-xl">
              This website aims to provide an accessible and inclusive
              experience for all visitors.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <div className="rounded-xl border border-white/10 bg-white/5 px-5 py-3">
                <p className="text-xs uppercase tracking-[0.2em] text-white/45">
                  Website Owner
                </p>

                <p className="mt-1 font-semibold">
                  Hüseyin Alşan
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/5 px-5 py-3">
                <p className="text-xs uppercase tracking-[0.2em] text-white/45">
                  Last Updated
                </p>

                <p className="mt-1 font-semibold">
                  13 July 2026
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accessibility highlights */}
      <section className="px-6 py-16">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-[#003C3F]/10 bg-white p-8 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#B6D957]/20">
              <Keyboard size={24} />
            </div>

            <h2 className="mt-6 text-xl font-bold">
              Clear navigation
            </h2>

            <p className="mt-3 leading-7 text-[#426364]">
              The website aims to provide clear navigation, meaningful links
              and an understandable page structure.
            </p>
          </div>

          <div className="rounded-3xl border border-[#003C3F]/10 bg-white p-8 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#B6D957]/20">
              <Type size={24} />
            </div>

            <h2 className="mt-6 text-xl font-bold">
              Readable content
            </h2>

            <p className="mt-3 leading-7 text-[#426364]">
              Text, headings and colour contrast are designed to support
              readability across different screen sizes.
            </p>
          </div>

          <div className="rounded-3xl border border-[#003C3F]/10 bg-white p-8 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#B6D957]/20">
              <MonitorSmartphone size={24} />
            </div>

            <h2 className="mt-6 text-xl font-bold">
              Responsive design
            </h2>

            <p className="mt-3 leading-7 text-[#426364]">
              The website is designed to work across desktop computers,
              tablets and mobile devices.
            </p>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="px-6 pb-24">
        <article className="mx-auto max-w-5xl space-y-6">
          <section className="rounded-3xl border border-[#003C3F]/10 bg-white p-8 shadow-sm md:p-10">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#B6D957]/20">
                <ShieldCheck size={23} />
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#668000]">
                  Our Approach
                </p>

                <h2 className="mt-2 text-3xl font-bold">
                  Commitment to accessibility
                </h2>
              </div>
            </div>

            <div className="mt-7 space-y-4 leading-8 text-[#426364]">
              <p>
                Hüseyin Alşan is committed to making this personal portfolio
                website as accessible and usable as reasonably possible.
              </p>

              <p>
                Accessibility is considered as part of the website&apos;s
                design, development and ongoing improvement.
              </p>

              <p>
                The website has not currently undergone a formal independent
                accessibility audit. Therefore, no claim of complete
                accessibility compliance is made.
              </p>
            </div>
          </section>

          <section className="rounded-3xl border border-[#003C3F]/10 bg-white p-8 shadow-sm md:p-10">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#B6D957]/20">
                <CheckCircle2 size={23} />
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#668000]">
                  Website Features
                </p>

                <h2 className="mt-2 text-3xl font-bold">
                  Accessibility considerations
                </h2>
              </div>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {[
                "Clear page headings and content structure",
                "Responsive layouts for different screen sizes",
                "Readable text and consistent visual styling",
                "Descriptive links and navigation labels",
                "Visible labels for contact-form fields",
                "Keyboard-accessible standard links and controls",
                "Alternative text for meaningful images where appropriate",
                "Colour contrast considered throughout the design",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-2xl bg-[#F4F7F2] p-5"
                >
                  <CheckCircle2
                    size={19}
                    className="mt-1 shrink-0 text-[#668000]"
                  />

                  <p className="leading-7 text-[#426364]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-3xl border border-[#003C3F]/10 bg-white p-8 shadow-sm md:p-10">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#B6D957]/20">
                <Search size={23} />
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#668000]">
                  Known Limitations
                </p>

                <h2 className="mt-2 text-3xl font-bold">
                  Areas being reviewed
                </h2>
              </div>
            </div>

            <div className="mt-7 space-y-4 leading-8 text-[#426364]">
              <p>
                The website continues to be reviewed as its design and content
                develop.
              </p>

              <p>
                Some animations, third-party content, external websites or
                older content may not provide the same level of accessibility
                as the main website.
              </p>

              <p>
                Accessibility improvements may be introduced following testing,
                visitor feedback or future website updates.
              </p>
            </div>
          </section>

          <section className="rounded-3xl border border-[#003C3F]/10 bg-white p-8 shadow-sm md:p-10">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#B6D957]/20">
                <MousePointer2 size={23} />
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#668000]">
                  External Content
                </p>

                <h2 className="mt-2 text-3xl font-bold">
                  Third-party websites
                </h2>
              </div>
            </div>

            <div className="mt-7 space-y-4 leading-8 text-[#426364]">
              <p>
                This website may contain links to external websites, including
                professional and social-media platforms.
              </p>

              <p>
                The accessibility of external websites is controlled by their
                respective owners and cannot be guaranteed through this
                website.
              </p>
            </div>
          </section>

          {/* Contact */}
          <section className="rounded-3xl bg-[#003C3F] p-8 text-white md:p-10">
            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
              <div>
                <div className="flex items-center gap-3">
                  <Mail className="text-[#B6D957]" />

                  <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#B6D957]">
                    Accessibility Feedback
                  </p>
                </div>

                <h2 className="mt-4 text-3xl font-bold">
                  Found an accessibility problem?
                </h2>

                <p className="mt-4 max-w-2xl leading-7 text-white/65">
                  Please get in touch if you experience difficulty accessing
                  any part of the website. Where possible, describe the page,
                  feature and problem you encountered.
                </p>
              </div>

              <Link
                href="/#contact"
                className="inline-flex shrink-0 items-center justify-center rounded-xl bg-[#B6D957] px-7 py-4 font-bold text-[#003C3F] transition hover:bg-[#CBEA6A]"
              >
                Report an issue
              </Link>
            </div>
          </section>
        </article>
      </section>
    </main>
  );
}