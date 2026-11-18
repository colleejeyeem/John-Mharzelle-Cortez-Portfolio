
const projects = [
  {
    number: "01",
    name: "SmartSip",
    category: "CAPSTONE PROJECT",
    description:
      "A kiosk-powered café management system developed for Mi Amore Café to streamline ordering, improve service efficiency, and support daily operations.",
    role: "Project Manager · Business Analyst · QA",
    tools: ["React.js", "System Analysis", "Quality Assurance", "UI/UX"],
  },
  {
    number: "02",
    name: "Syllabus Generator",
    category: "SYSTEM DEVELOPMENT",
    description:
      "A Jira-managed system project focused on improving the preparation and management of academic syllabus documents.",
    role: "Project Coordination · Documentation · QA",
    tools: ["Jira", "Requirements Analysis", "Documentation", "QA"],
  },
  {
    number: "03",
    name: "GSite",
    category: "WEB-BASED PORTAL",
    description:
      "A research and extension portal initiative designed to support the organization and accessibility of institutional information.",
    role: "Technical Support · UI/UX · Coordination",
    tools: ["Web Development", "UI/UX", "Technical Support"],
  },
  {
  number: "04",
  name: "PUP Accreditation Website",
  category: "WEB-BASED SYSTEM",
  description:
    "A web-based platform developed to support the organization and management of accreditation-related documents and institutional requirements.",
  role: "Technical Support · Documentation · UI/UX",
  tools: ["Web Development", "UI/UX", "Documentation", "Accreditation"],
},
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-7xl px-6 py-24 md:px-12 md:py-32"
    >
      {/* Section Heading */}
      <div className="mb-16">
        <p className="mb-5 text-xs tracking-[0.2em] text-[#6B675F]">
          02 / SELECTED WORK
        </p>

        <h2 className="max-w-3xl text-3xl font-medium tracking-tight md:text-5xl">
          Projects that bring ideas to life.
        </h2>

        <p className="mt-6 max-w-xl text-base leading-8 text-[#6B675F]">
          A selection of academic and professional projects
          where I applied my skills in project management,
          business analysis, quality assurance, and technology.
        </p>
      </div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.number}
            className="group flex flex-col justify-between border border-[#DED9CF] p-7 transition-all duration-300 hover:border-[#C8BBA7] hover:bg-[#EEEAE1] md:p-9"
          >
            <div>
              <div className="mb-12 flex items-center justify-between">
                <span className="text-xs tracking-[0.15em] text-[#6B675F]">
                  PROJECT / {project.number}
                </span>

                <span className="text-xs text-[#6B675F]">
                  ↗
                </span>
              </div>

              <p className="mb-4 text-xs tracking-[0.15em] text-[#6B675F]">
                {project.category}
              </p>

              <h3 className="text-3xl font-medium tracking-tight">
                {project.name}
              </h3>

              <p className="mt-5 text-sm leading-7 text-[#6B675F]">
                {project.description}
              </p>

              <div className="mt-8">
                <p className="mb-2 text-xs tracking-[0.15em] text-[#6B675F]">
                  MY CONTRIBUTION
                </p>

                <p className="text-sm font-medium">
                  {project.role}
                </p>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-2">
              {project.tools.map((tool) => (
                <span
                  key={tool}
                  className="rounded-full border border-[#DED9CF] px-3 py-1.5 text-xs text-[#6B675F]"
                >
                  {tool}
                </span>
              ))}
            </div>
          
            {/* View Case Study */}
            {["SmartSip", "Syllabus Generator", "GSite", "PUP Accreditation Website"].includes(project.name) && (
              <a
                href={
                      project.name === "SmartSip"
                        ? "/projects/smartsip"
                        : project.name === "Syllabus Generator"
                          ? "/projects/syllabus-generator"
                          : project.name === "GSite"
                            ? "/projects/gsite"
                            : "/projects/pup-accreditation"
                      }
                className="mt-8 inline-flex w-fit items-center gap-2 border-b border-[#171717] pb-2 text-sm font-medium transition-all duration-300 hover:gap-4 hover:opacity-60"
              >
                View Case Study
                <span>↗</span>
              </a>
            )}

          </article>
        ))}
      </div>
    </section>
  );
}
