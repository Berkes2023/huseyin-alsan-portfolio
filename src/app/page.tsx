import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Bike,
  Bus,
  Car,
  CheckCircle2,
  ExternalLink,
  Mail,
  Route,
} from "lucide-react";

const linkedinUrl = "https://www.linkedin.com/in/huseyinalsan/";

const services = [
  {
    title: "Road & Street Design",
    description:
      "Design support for road layouts, streets and public realm improvements with a focus on safety, accessibility and usability.",
    icon: Route,
  },
  {
    title: "Active Travel Design",
    description:
      "Cycle lane, pedestrian movement and active travel infrastructure design for safer and more inclusive urban environments.",
    icon: Bike,
  },
  {
    title: "Bus Infrastructure",
    description:
      "Support for bus lane, bus stop and public transport priority design to improve sustainable transport movement.",
    icon: Bus,
  },
  {
    title: "Traffic Modelling",
    description:
      "Microsimulation, junction analysis and data-led transport modelling to support evidence-based design decisions.",
    icon: Car,
  },
];

const skills = [
  "Road & street design",
  "Cycle lane design",
  "Bus lane and bus stop design",
  "Traffic microsimulation",
  "Traffic signal design",
  "Traffic signage design",
  "Traffic Regulation Orders",
  "Active travel design",
  "AutoCAD",
  "PTV Vissim",
  "ArcGIS",
  "ARCADY",
  "BIM modelling",
  "ProjectWise",
];

const resumeExperience = [
  {
    role: "Engineer",
    company: "AECOM",
    date: "Oct 2023 – Present",
  },
  {
    role: "Engineering Intern",
    company: "Tasyapi Insaat",
    date: "Jul 2021 – Aug 2021",
  },
  {
    role: "Engineering Intern",
    company:
      "Planning and Construction Department, Ministry of Transport and Infrastructure",
    date: "Jun 2020 – Jul 2020",
  },
  {
    role: "Apprentice / Assistant Worker",
    company: "Asik Trading",
    date: "Jun 2017 – Aug 2017",
  },
];

const education = [
  {
    degree: "MSc Transportation Planning and Engineering",
    institution: "University of Southampton",
    date: "2022 – 2023",
  },
  {
    degree: "BEng Civil Engineering",
    institution: "Cardiff University",
    date: "2019 – 2022",
  },
];

const memberships = [
  "ICE Member",
  "IHE Student Member",
  "KTMMOB / UCCTEA Member",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#003C3F] text-white">
      {/* Hero */}
      <section className="mx-auto flex min-h-screen max-w-7xl flex-col px-6 py-8 lg:px-8">
        <nav className="flex items-center justify-between">
          <Link
            href="/"
            className="font-[var(--font-space-grotesk)] text-lg font-bold tracking-tight text-white"
          >
            Huseyin<span className="text-[#B6D957]"> Alsan</span>
          </Link>

          <div className="hidden items-center gap-8 text-sm text-white/75 md:flex">
            <a href="#about" className="hover:text-white">
              About
            </a>
            <a href="#services" className="hover:text-white">
              Expertise
            </a>
            <a href="#resume" className="hover:text-white">
              Resume
            </a>
            <Link href="/projects" className="hover:text-white">
              Projects
            </Link>
            <a href="#contact" className="hover:text-white">
              Contact
            </a>
          </div>
        </nav>

        <div className="grid flex-1 items-center gap-12 py-20 lg:grid-cols-2">
          <section>
            <p className="mb-5 inline-flex rounded-full border border-white/20 px-4 py-2 text-sm text-white/80">
              Traffic Engineer · UK
            </p>

            <h1 className="max-w-3xl font-[var(--font-space-grotesk)] text-5xl font-bold tracking-tight text-white md:text-7xl">
              Designing safer, smarter and more accessible streets.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">
              Huseyin Alsan is a Traffic Engineer working across road and street
              design, active travel, traffic modelling, traffic signals, signage
              and public transport infrastructure.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/projects"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#B6D957] px-6 py-3 text-sm font-semibold text-[#003C3F] transition hover:bg-[#CBEA6A]"
              >
                View Projects
                <ArrowRight size={18} />
              </Link>

              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-[#003C3F]"
              >
                Contact
              </a>
            </div>
          </section>

          {/* Profile Card */}
          <section className="rounded-3xl border border-white/10 bg-[#002C2F]/80 p-8 shadow-2xl">
            <div className="flex flex-col items-center text-center">
              <div className="relative h-48 w-48 overflow-hidden rounded-full border-4 border-[#B6D957]/50 shadow-2xl">
                <Image
                  src="/images/huseyin-alsan.webp"
                  alt="Huseyin Alsan, Traffic Engineer"
                  width={500}
                  height={500}
                  priority
                  quality={100}
                  className="h-full w-full object-cover object-center"
                />
              </div>

              <h2 className="mt-6 font-[var(--font-space-grotesk)] text-3xl font-bold text-white">
                Huseyin Alsan
              </h2>

              <p className="mt-2 text-[#B6D957]">Traffic Engineer</p>

              <p className="mt-4 max-w-md text-sm leading-6 text-white/75">
                Roads · Streets · Active Travel · Traffic Modelling · Public
                Transport
              </p>

              <div className="mt-8 grid w-full grid-cols-2 gap-4 text-sm text-white/80">
                <div className="rounded-xl bg-[#003C3F]/70 p-4">
                  Road Design
                </div>
                <div className="rounded-xl bg-[#003C3F]/70 p-4">
                  Active Travel
                </div>
                <div className="rounded-xl bg-[#003C3F]/70 p-4">
                  Traffic Signals
                </div>
                <div className="rounded-xl bg-[#003C3F]/70 p-4">
                  PTV Vissim
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>

      {/* About Me */}
      <section id="about" className="bg-white px-6 py-24 text-[#003C3F]">
        <div className="mx-auto max-w-7xl">
          <p className="font-[var(--font-space-grotesk)] text-5xl font-bold uppercase tracking-tight text-[#B6D957] md:text-6xl">
            About Me
          </p>

          <div className="mt-10 grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="space-y-8">
              <div className="relative overflow-hidden rounded-2xl border border-[#003C3F]/10 bg-[#F4F7EF] shadow-lg">
                <Image
                  src="/images/huseyin-alsan.webp"
                  alt="Huseyin Alsan, Traffic Engineer"
                  width={900}
                  height={700}
                  className="h-[360px] w-full object-cover object-center"
                />
              </div>

              <div className="rounded-2xl border border-[#003C3F]/10 bg-[#F4F7EF] p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#7EA629]">
                  Professional Focus
                </p>

                <div className="mt-5 grid grid-cols-2 gap-4 text-sm font-medium text-[#003C3F]">
                  <div>Road Design</div>
                  <div>Active Travel</div>
                  <div>Traffic Modelling</div>
                  <div>Public Transport</div>
                  <div>Traffic Signals</div>
                  <div>Urban Streets</div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="font-[var(--font-space-grotesk)] text-4xl font-bold leading-tight tracking-tight text-[#003C3F] md:text-5xl">
                I am focused on designing safer, smarter and more accessible
                transport infrastructure for the communities who use our streets
                every day.
              </h2>

              <div className="mt-8 space-y-6 text-lg leading-8 text-slate-700">
                <p>
                  My name is Huseyin Alsan and I am a Traffic Engineer with
                  experience across road and street design, active travel, public
                  transport infrastructure, traffic modelling, traffic signals
                  and signage.
                </p>

                <p>
                  I currently work within the Streets team at AECOM,
                  contributing to transport-related projects that support the
                  safe and efficient movement of pedestrians, cyclists, public
                  transport users and vehicles.
                </p>

                <p>
                  My engineering approach is centred on practical, evidence-led
                  design decisions. I focus on making the best use of often
                  limited road space, particularly in dense urban environments,
                  while improving safety, accessibility and usability.
                </p>

                <p>
                  My background includes transportation planning, railway
                  engineering, GIS and transport modelling, traffic data
                  analysis, junction design, civil engineering design and
                  infrastructure planning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Industry Knowledge */}
      <section className="bg-[#F4F7EF] px-6 py-24 text-[#003C3F]">
        <div className="mx-auto max-w-4xl border-t border-[#003C3F] pt-14">
          <h2 className="text-center font-[var(--font-space-grotesk)] text-4xl font-medium tracking-tight text-[#7EA629]">
            Skills & Industry Knowledge
          </h2>

          <div className="mx-auto mt-12 grid max-w-3xl gap-x-20 gap-y-6 text-xl leading-8 md:grid-cols-2">
            {skills.map((skill) => (
              <p key={skill} className="text-[#003C3F]">
                {skill}
              </p>
            ))}
          </div>

          <div className="mt-16 flex justify-center">
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-3 border-2 border-[#B6D957] px-10 py-5 text-sm font-bold uppercase tracking-[0.25em] text-[#003C3F] transition hover:bg-[#B6D957]"
            >
              Visit My LinkedIn
              <ExternalLink size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section id="services" className="bg-white px-6 py-24 text-[#003C3F]">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#7EA629]">
              Expertise
            </p>

            <h2 className="mt-4 font-[var(--font-space-grotesk)] text-4xl font-bold tracking-tight">
              Traffic engineering expertise focused on safe and efficient
              movement.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              His work focuses on practical engineering solutions that support
              pedestrians, cyclists, public transport users and vehicles within
              often constrained urban street environments.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.title}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="mb-5 inline-flex rounded-xl bg-[#003C3F] p-3 text-[#B6D957]">
                    <Icon size={24} />
                  </div>

                  <h3 className="text-lg font-bold text-[#003C3F]">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Resume */}
      <section id="resume" className="bg-[#003C3F] px-6 py-24 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#B6D957]">
                Resume
              </p>

              <h2 className="mt-4 font-[var(--font-space-grotesk)] text-5xl font-bold tracking-tight text-white md:text-6xl">
                Experience, education and professional focus.
              </h2>

              <p className="mt-6 text-lg leading-8 text-white/80">
                A transport and civil engineering background shaped by highways,
                street design, active travel, traffic modelling, railway
                engineering and infrastructure planning.
              </p>
            </div>

            <div className="space-y-10">
              <div className="border-t border-white/20 pt-8">
                <h3 className="font-[var(--font-space-grotesk)] text-2xl font-bold text-[#B6D957]">
                  Experience
                </h3>

                <div className="mt-8 grid gap-8 md:grid-cols-2">
                  {resumeExperience.map((item) => (
                    <div key={`${item.role}-${item.company}`}>
                      <h4 className="font-bold text-white">{item.role}</h4>
                      <p className="mt-1 text-white/80">{item.company}</p>
                      <p className="mt-1 text-sm text-white/55">
                        {item.date}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-white/20 pt-8">
                <h3 className="font-[var(--font-space-grotesk)] text-2xl font-bold text-[#B6D957]">
                  Education
                </h3>

                <div className="mt-8 grid gap-8 md:grid-cols-2">
                  {education.map((item) => (
                    <div key={item.degree}>
                      <h4 className="font-bold text-white">{item.degree}</h4>
                      <p className="mt-1 text-white/80">{item.institution}</p>
                      <p className="mt-1 text-sm text-white/55">
                        {item.date}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-white/20 pt-8">
                <h3 className="font-[var(--font-space-grotesk)] text-2xl font-bold text-[#B6D957]">
                  Professional Memberships
                </h3>

                <div className="mt-8 grid gap-4 md:grid-cols-3">
                  {memberships.map((membership) => (
                    <div
                      key={membership}
                      className="rounded-2xl border border-white/10 bg-[#002C2F] p-5"
                    >
                      <p className="font-semibold text-white">{membership}</p>
                    </div>
                  ))}
                </div>
              </div>

              <Link
                href="/projects"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#B6D957] px-6 py-3 text-sm font-semibold text-[#003C3F] transition hover:bg-[#CBEA6A]"
              >
                View Full Project Portfolio
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Approach */}
      <section className="bg-white px-6 py-24 text-[#003C3F]">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#7EA629]">
                Engineering Approach
              </p>

              <h2 className="mt-4 font-[var(--font-space-grotesk)] text-4xl font-bold tracking-tight">
                Practical design decisions for safer and more accessible public
                spaces.
              </h2>
            </div>

            <div className="space-y-5">
              {[
                "Safety-led design for pedestrians, cyclists and vehicles.",
                "Efficient use of constrained road space in urban environments.",
                "Evidence-based decision making through modelling and analysis.",
                "Accessible streets that improve everyday movement for communities.",
              ].map((item) => (
                <div key={item} className="flex gap-4">
                  <CheckCircle2 className="mt-1 text-[#7EA629]" size={22} />

                  <p className="text-lg leading-8 text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-[#F4F7EF] px-6 py-24 text-[#003C3F]">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#7EA629]">
              Get In Touch
            </p>

            <h2 className="mt-4 font-[var(--font-space-grotesk)] text-5xl font-bold tracking-tight">
              Let’s discuss transport, highways and street design.
            </h2>

            <div className="mt-8 space-y-4 text-lg">
              <a
                href="mailto:huseyin2alsan@gmail.com"
                className="flex items-center gap-3 font-semibold text-[#5F7F1F] underline underline-offset-4"
              >
                <Mail size={20} />
                huseyin2alsan@gmail.com
              </a>

              <a
                href={linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 font-semibold text-[#5F7F1F] underline underline-offset-4"
              >
                <ExternalLink size={20} />
                LinkedIn
              </a>
            </div>
          </div>

          <form
            action="mailto:huseyin2alsan@gmail.com"
            method="post"
            encType="text/plain"
            className="space-y-6"
          >
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="text-sm font-semibold">First Name</label>
                <input
                  name="firstName"
                  required
                  className="mt-2 w-full border border-[#003C3F]/20 bg-white px-4 py-3 outline-none transition focus:border-[#7EA629]"
                />
              </div>

              <div>
                <label className="text-sm font-semibold">Last Name</label>
                <input
                  name="lastName"
                  required
                  className="mt-2 w-full border border-[#003C3F]/20 bg-white px-4 py-3 outline-none transition focus:border-[#7EA629]"
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-semibold">Email Address</label>
              <input
                type="email"
                name="email"
                required
                className="mt-2 w-full border border-[#003C3F]/20 bg-white px-4 py-3 outline-none transition focus:border-[#7EA629]"
              />
            </div>

            <div>
              <label className="text-sm font-semibold">Subject</label>
              <input
                name="subject"
                required
                className="mt-2 w-full border border-[#003C3F]/20 bg-white px-4 py-3 outline-none transition focus:border-[#7EA629]"
              />
            </div>

            <div>
              <label className="text-sm font-semibold">Message</label>
              <textarea
                name="message"
                required
                rows={6}
                className="mt-2 w-full border border-[#003C3F]/20 bg-white px-4 py-3 outline-none transition focus:border-[#7EA629]"
              />
            </div>

            <button
              type="submit"
              className="border-2 border-[#B6D957] px-12 py-4 text-sm font-bold uppercase tracking-[0.25em] text-[#003C3F] transition hover:bg-[#B6D957]"
            >
              Submit
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#003C3F] px-6 py-12 text-center text-white">
        <a
          href="mailto:huseyin2alsan@gmail.com"
          className="font-[var(--font-space-grotesk)] text-2xl font-bold underline underline-offset-8 md:text-4xl"
        >
          huseyin2alsan@gmail.com
        </a>

        <div className="mt-8 flex justify-center gap-6 text-sm uppercase tracking-[0.25em] text-[#B6D957]">
          <a href={linkedinUrl} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <Link href="/projects">Projects</Link>
        </div>

        <p className="mt-8 text-sm text-white/55">
          © 2026 Huseyin Alsan. Traffic Engineer based in the UK.
        </p>
      </footer>
    </main>
  );
}