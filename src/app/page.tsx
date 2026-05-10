import Image from "next/image";
import {
  ArrowRight,
  Bike,
  Bus,
  Car,
  CheckCircle2,
  GraduationCap,
  Map,
  Route,
  ShieldCheck,
  TrafficCone,
} from "lucide-react";

const services = [
  {
    title: "Road & Street Design",
    description:
      "Design support for streets, road layouts and public realm improvements with a focus on safety, accessibility and usability.",
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

const projects = [
  {
    title: "Strategic Overnight Train Network for Europe",
    type: "Transport Planning",
    description:
      "Reviewed existing overnight rail provision and future proposals to explore what a coherent continent-wide European night train network could look like.",
  },
  {
    title: "Railway Engineering and Operations Case Study",
    type: "Railway Infrastructure",
    description:
      "Developed a multidisciplinary case study for a new railway line from Brackley to Banbury, covering route planning, structures, signalling, safety and capacity.",
  },
  {
    title: "GIS & Transport Modelling",
    type: "GIS / Transport Analysis",
    description:
      "Used ArcGIS to analyse commuting patterns, station catchments, accessibility, travel times and route planning in Blackburn with Darwen.",
  },
  {
    title: "Junction Design",
    type: "Highways / Junction Modelling",
    description:
      "Analysed and compared roundabout design options using safety, capacity, fairness and environmental impact principles, supported by AutoCAD and ARCADY.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Hero */}
      <section className="mx-auto flex min-h-screen max-w-7xl flex-col px-6 py-8 lg:px-8">
        <nav className="flex items-center justify-between">
          <div className="text-lg font-bold tracking-tight">
            Hüseyin<span className="text-cyan-400"> Alşan</span>
          </div>

          <div className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            <a href="#services" className="hover:text-white">
              Expertise
            </a>
            <a href="#projects" className="hover:text-white">
              Projects
            </a>
            <a href="#experience" className="hover:text-white">
              Experience
            </a>
            <a href="#contact" className="hover:text-white">
              Contact
            </a>
          </div>
        </nav>

        <div className="grid flex-1 items-center gap-12 py-20 lg:grid-cols-2">
          <section>
            <p className="mb-5 inline-flex rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-300">
              Graduate Traffic Engineer · Bristol, UK
            </p>

            <h1 className="max-w-3xl text-5xl font-bold tracking-tight md:text-7xl">
              Designing safer, smarter and more accessible streets.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Hüseyin Alşan is a Graduate Traffic Engineer working across road
              and street design, active travel, traffic modelling, traffic
              signals, signage and public transport infrastructure.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                View Projects
                <ArrowRight size={18} />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl border border-slate-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-slate-950"
              >
                Contact
              </a>
            </div>
          </section>

          {/* Profile Card - better for LinkedIn/compressed images */}
          <section className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8 shadow-2xl">
            <div className="flex flex-col items-center text-center">
              <div className="relative h-48 w-48 overflow-hidden rounded-full border-4 border-cyan-400/40 shadow-2xl">
                <Image
                  src="/images/huseyin-alsan.webp"
                  alt="Hüseyin Alşan, Graduate Traffic Engineer"
                  width={500}
                  height={500}
                  priority
                  quality={100}
                  className="h-full w-full object-cover object-center"
                />
              </div>

              <h2 className="mt-6 text-3xl font-bold">Hüseyin Alşan</h2>

              <p className="mt-2 text-cyan-300">Graduate Traffic Engineer</p>

              <p className="mt-4 max-w-md text-sm leading-6 text-slate-300">
                Roads · Streets · Active Travel · Traffic Modelling · Public
                Transport
              </p>

              <div className="mt-8 grid w-full grid-cols-2 gap-4 text-sm text-slate-300">
                <div className="rounded-xl bg-slate-950/50 p-4">
                  Road Design
                </div>
                <div className="rounded-xl bg-slate-950/50 p-4">
                  Active Travel
                </div>
                <div className="rounded-xl bg-slate-950/50 p-4">
                  Traffic Signals
                </div>
                <div className="rounded-xl bg-slate-950/50 p-4">
                  PTV Vissim
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>

      {/* Expertise */}
      <section id="services" className="bg-white px-6 py-24 text-slate-950">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-600">
              Expertise
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight">
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
                  <div className="mb-5 inline-flex rounded-xl bg-slate-950 p-3 text-white">
                    <Icon size={24} />
                  </div>

                  <h3 className="text-lg font-bold">{service.title}</h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="bg-slate-100 px-6 py-24 text-slate-950">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-600">
              About
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight">
              A transport professional shaping streets that work better for
              everyone.
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-8 text-slate-600">
            <p>
              Hüseyin Alşan is a Graduate Traffic Engineer at AECOM, working
              within the Streets team in Bristol. Since beginning his
              professional engineering career in 2023, he has contributed to a
              range of transport-related projects involving road layouts, active
              travel, bus infrastructure, traffic signals, signage and traffic
              modelling.
            </p>

            <p>
              His engineering approach is centred on developing safe, practical
              and efficient transport solutions that consider traffic flow, road
              space allocation, cycling infrastructure, pedestrian
              accessibility, traffic signals and smart transport technologies.
            </p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="bg-white px-6 py-24 text-slate-950">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-600">
            Skills & Tools
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight">
            Technical capability across highways, transport modelling and
            design.
          </h2>

          <div className="mt-10 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="bg-slate-950 px-6 py-24 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Projects
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight">
            Selected transport and civil engineering projects.
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <div
                key={project.title}
                className="rounded-3xl border border-slate-800 bg-slate-900 p-8 transition hover:-translate-y-1 hover:border-cyan-400"
              >
                <p className="text-sm font-semibold text-cyan-400">
                  {project.type}
                </p>

                <h3 className="mt-4 text-2xl font-bold">{project.title}</h3>

                <p className="mt-4 leading-7 text-slate-300">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="bg-white px-6 py-24 text-slate-950">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-600">
            Experience & Education
          </p>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 p-8">
              <div className="mb-5 inline-flex rounded-xl bg-slate-950 p-3 text-white">
                <TrafficCone size={24} />
              </div>

              <h3 className="text-2xl font-bold">Graduate Engineer</h3>

              <p className="mt-2 font-medium text-slate-600">
                AECOM · Oct 2023 – Present · Bristol
              </p>

              <p className="mt-5 leading-7 text-slate-600">
                Working within the Streets team on transport and highways
                projects, using industry software and BIM modelling workflows
                across road design, active travel, traffic modelling, signals
                and signage.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 p-8">
              <div className="mb-5 inline-flex rounded-xl bg-slate-950 p-3 text-white">
                <GraduationCap size={24} />
              </div>

              <h3 className="text-2xl font-bold">
                MSc Transportation Planning and Engineering
              </h3>

              <p className="mt-2 font-medium text-slate-600">
                University of Southampton · 2022 – 2023
              </p>

              <p className="mt-5 leading-7 text-slate-600">
                Postgraduate study focused on transportation planning,
                infrastructure, traffic modelling, railway engineering, GIS and
                transport data analysis.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 p-8">
              <div className="mb-5 inline-flex rounded-xl bg-slate-950 p-3 text-white">
                <Map size={24} />
              </div>

              <h3 className="text-2xl font-bold">BEng Civil Engineering</h3>

              <p className="mt-2 font-medium text-slate-600">
                Cardiff University · 2019 – 2022
              </p>

              <p className="mt-5 leading-7 text-slate-600">
                Undergraduate engineering foundation across structural,
                geotechnical, construction, transport and civil engineering
                design principles.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 p-8">
              <div className="mb-5 inline-flex rounded-xl bg-slate-950 p-3 text-white">
                <ShieldCheck size={24} />
              </div>

              <h3 className="text-2xl font-bold">Professional Memberships</h3>

              <p className="mt-2 font-medium text-slate-600">
                ICE · IHE · KTMMOB / UCCTEA
              </p>

              <p className="mt-5 leading-7 text-slate-600">
                Member of professional engineering organisations supporting
                continued development in civil engineering, highways and
                transportation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Approach */}
      <section className="bg-slate-100 px-6 py-24 text-slate-950">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-600">
                Engineering Approach
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-tight">
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
                  <CheckCircle2 className="mt-1 text-cyan-600" size={22} />

                  <p className="text-lg leading-8 text-slate-600">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-slate-950 px-6 py-24 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Contact
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight">
            Let’s discuss transport, highways and street design.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Get in touch to discuss traffic engineering, transport planning,
            street design, active travel, traffic modelling or project
            collaboration.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="mailto:huseyin2alsan@gmail.com"
              className="inline-flex rounded-xl bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              Email Hüseyin
            </a>

            <a
              href="#projects"
              className="inline-flex rounded-xl border border-slate-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-slate-950"
            >
              View Projects
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}