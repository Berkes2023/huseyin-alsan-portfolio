import Link from "next/link";
import Reveal from "@/components/Reveal";
import {
  ArrowLeft,
  BarChart3,
  Building2,
  CircleDot,
  Droplets,
  Landmark,
  Map,
  Route,
  Train,
} from "lucide-react";

const projects = [
  {
    title: "Strategic Overnight Train Network for Europe",
    type: "Transport Planning",
    date: "Jun 2023 – Oct 2023",
    icon: Train,
    description:
      "Reviewed existing overnight rail provision and future proposals to explore how a coherent continent-wide European night train network could be developed.",
    details: [
      "Analysed current and latent demand for long-distance travel in Europe.",
      "Considered environmental impacts and potential mode shift from aviation.",
      "Explored criteria for prioritising future overnight rail routes.",
    ],
  },
  {
    title: "Railway Engineering and Operations Case Study Portfolio",
    type: "Railway Infrastructure",
    date: "Feb 2023 – May 2023",
    icon: Route,
    description:
      "Completed a multidisciplinary railway engineering case study for a proposed new railway line from Brackley to Banbury.",
    details: [
      "Covered route planning, earthworks, structures and stations.",
      "Considered signalling, capacity, timetabling and safety factors.",
      "Explored regulation, governance, organisation and human factors.",
    ],
  },
  {
    title: "Transport Data Analysis",
    type: "Data Analysis",
    date: "Feb 2023 – May 2023",
    icon: BarChart3,
    description:
      "Analysed bus dwell time and travel mode choice data using statistical analysis and transport modelling tools.",
    details: [
      "Used IBM SPSS and Biogeme for analysis.",
      "Developed regression models for bus dwell time.",
      "Carried out exploratory data analysis and hypothesis testing.",
    ],
  },
  {
    title: "GIS & Transport Modelling",
    type: "GIS / Transport Analysis",
    date: "Nov 2022 – Jan 2023",
    icon: Map,
    description:
      "Used ArcGIS to analyse commuting patterns, station catchments, accessibility, route planning and travel times.",
    details: [
      "Produced thematic transport maps for Blackburn with Darwen.",
      "Generated station catchments using road-network analysis.",
      "Assessed accessibility to nearby services by walking, cycling and car.",
    ],
  },
  {
    title: "Junction Design",
    type: "Highways / Junction Modelling",
    date: "Oct 2022 – Dec 2022",
    icon: CircleDot,
    description:
      "Analysed a junction north of Southampton and proposed roundabout design options based on safety, capacity and environmental impact.",
    details: [
      "Used AutoCAD and ARCADY 9.",
      "Followed UK roundabout design standards including CD116.",
      "Compared design options using capacity, fairness and safety criteria.",
    ],
  },
  {
    title: "Pipeline Feasibility Study",
    type: "Water Infrastructure",
    date: "Nov 2021 – Dec 2021",
    icon: Droplets,
    description:
      "Designed pipeline options to supply drinking water to 2000 houses in Poundbury.",
    details: [
      "Compared route, pipe diameter and pipe material options.",
      "Considered pumped trunk main and gravity distribution main alternatives.",
      "Focused on cost-effective infrastructure solutions.",
    ],
  },
  {
    title: "Student Hub Design",
    type: "Building Design",
    date: "Oct 2021 – Dec 2021",
    icon: Building2,
    description:
      "Designed a student hub learning lab using structural brickwork, timber and glass materials.",
    details: [
      "Developed a concept for a creative and collaborative learning space.",
      "Used Revit and engineering design principles.",
      "Considered structural materials and architectural functionality.",
    ],
  },
  {
    title: "5 Storey Hotel Design",
    type: "Structural Engineering",
    date: "Feb 2021 – May 2021",
    icon: Landmark,
    description:
      "Designed a five-storey hotel building using both steel and reinforced concrete solutions.",
    details: [
      "Designed slabs, beams, columns, connections and foundations.",
      "Worked with Eurocode 2 and Eurocode 3 principles.",
      "Compared steel and reinforced concrete structural solutions.",
    ],
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#003C3F] text-white">
      <section className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
        <nav className="flex items-center justify-between">
          <Link
            href="/"
            className="font-[var(--font-space-grotesk)] text-lg font-bold tracking-tight text-white"
          >
            Huseyin<span className="text-[#B6D957]"> Alsan</span>
          </Link>

          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-4 py-2 text-sm text-white/80 transition hover:bg-white hover:text-[#003C3F]"
          >
            <ArrowLeft size={16} />
            Back Home
          </Link>
        </nav>

        <Reveal>
          <header className="py-20">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#B6D957]">
              Project Portfolio
            </p>

            <h1 className="mt-5 max-w-4xl font-[var(--font-space-grotesk)] text-5xl font-bold tracking-tight text-white md:text-7xl">
              Selected transport and civil engineering projects.
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/80">
              A selection of academic and professional engineering projects
              across transport planning, railway infrastructure, GIS, highways,
              junction design, water infrastructure and structural engineering.
            </p>
          </header>
        </Reveal>

        <section className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => {
            const Icon = project.icon;

            return (
              <Reveal key={project.title} delay={index * 0.06}>
                <article className="group rounded-3xl border border-white/10 bg-[#002C2F] p-8 shadow-xl transition duration-300 hover:-translate-y-2 hover:border-[#B6D957] hover:bg-[#00282B]">
                  <div className="mb-6 inline-flex rounded-xl bg-[#B6D957] p-3 text-[#003C3F] transition group-hover:scale-110">
                    <Icon size={24} />
                  </div>

                  <p className="text-sm font-semibold text-[#B6D957]">
                    {project.type}
                  </p>

                  <h2 className="mt-3 font-[var(--font-space-grotesk)] text-2xl font-bold text-white">
                    {project.title}
                  </h2>

                  <p className="mt-2 text-sm text-white/60">{project.date}</p>

                  <p className="mt-5 leading-7 text-white/80">
                    {project.description}
                  </p>

                  <ul className="mt-6 space-y-3 text-sm leading-6 text-white/75">
                    {project.details.map((detail) => (
                      <li key={detail} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#B6D957]" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </section>
      </section>
    </main>
  );
}