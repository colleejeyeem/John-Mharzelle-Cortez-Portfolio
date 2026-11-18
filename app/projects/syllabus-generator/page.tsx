import SyllabusGallery from "@/components/SyllabusGallery";
export default function SyllabusGeneratorPage() {
  return (
    <main className="min-h-screen bg-[#F4F1EA] text-[#171717]">

      {/* Navigation */}
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-12">
        <a href="/" className="text-xl font-semibold tracking-tight">
          JC.
        </a>

        <a
          href="/#projects"
          className="text-sm text-[#6B675F] transition-colors hover:text-[#171717]"
        >
          ← Back to Projects
        </a>
      </nav>

      {/* Project Hero */}
      <section className="mx-auto max-w-7xl px-6 pb-24 pt-16 md:px-12 md:pt-24">
        <p className="mb-6 text-xs tracking-[0.2em] text-[#6B675F]">
          SELECTED WORK / 02
        </p>

        <p className="mb-5 text-sm tracking-[0.15em] text-[#6B675F]">
          SYSTEM DEVELOPMENT PROJECT
        </p>

        <h1 className="text-5xl font-medium tracking-tight md:text-8xl">
          Syllabus Generator.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#6B675F] md:text-xl">
          An academic system initiative focused on improving
          syllabus preparation and document management.
        </p>
      {/* Syllabus Generator Screenshot Slideshow */}
        <div className="mt-8">
          <SyllabusGallery />
        </div>

        {/* Project Overview */}
        <div className="mt-16 grid grid-cols-1 gap-10 border-t border-[#DED9CF] pt-8 md:grid-cols-3">
          <div>
            <p className="text-xs tracking-[0.15em] text-[#6B675F]">
              PROJECT TYPE
            </p>
            <p className="mt-3 text-sm font-medium">
              Academic System Development
            </p>
          </div>

          <div>
            <p className="text-xs tracking-[0.15em] text-[#6B675F]">
              PROJECT MANAGEMENT
            </p>
            <p className="mt-3 text-sm font-medium">
              Jira
            </p>
          </div>

          <div>
            <p className="text-xs tracking-[0.15em] text-[#6B675F]">
              ENVIRONMENT
            </p>
            <p className="mt-3 text-sm font-medium">
              PUP Santa Rosa Campus
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="border-t border-[#DED9CF]">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-24 md:grid-cols-2 md:px-12">
          <div>
            <p className="text-xs tracking-[0.2em] text-[#6B675F]">
              01 / OVERVIEW
            </p>

            <h2 className="mt-5 text-3xl font-medium tracking-tight md:text-4xl">
              Organizing academic processes through technology.
            </h2>
          </div>

          <div>
            <p className="text-base leading-8 text-[#6B675F]">
              The Syllabus Generator project focuses on supporting
              the preparation and management of academic syllabus
              documents through a structured digital workflow.
            </p>

            <p className="mt-6 text-base leading-8 text-[#6B675F]">
              The initiative involves organizing requirements,
              coordinating project activities, monitoring tasks,
              and supporting quality assurance to help ensure
              that the system aligns with academic office needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contributions */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:px-12">
        <p className="text-xs tracking-[0.2em] text-[#6B675F]">
          02 / MY CONTRIBUTIONS
        </p>

        <h2 className="mt-5 max-w-2xl text-3xl font-medium tracking-tight md:text-4xl">
          Coordinating requirements, tasks, and quality.
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-8 border-t border-[#DED9CF] pt-8 sm:grid-cols-2">

          <div>
            <h3 className="text-lg font-medium">
              Project Management
            </h3>
            <p className="mt-3 text-sm leading-7 text-[#6B675F]">
              Organized project tasks, monitored progress,
              and supported coordination of development
              activities using Jira.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium">
              Business Analysis
            </h3>
            <p className="mt-3 text-sm leading-7 text-[#6B675F]">
              Helped translate academic office needs into
              structured requirements, workflows, and
              project documentation.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium">
              Quality Assurance
            </h3>
            <p className="mt-3 text-sm leading-7 text-[#6B675F]">
              Supported the review of system functionality
              and helped identify issues requiring
              correction or improvement.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium">
              Documentation
            </h3>
            <p className="mt-3 text-sm leading-7 text-[#6B675F]">
              Maintained project records, requirements,
              task descriptions, and supporting
              documentation.
            </p>
          </div>

        </div>
      </section>

      {/* Workflow */}
      <section className="border-y border-[#DED9CF]">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-12">
          <p className="text-xs tracking-[0.2em] text-[#6B675F]">
            03 / PROJECT WORKFLOW
          </p>

          <h2 className="mt-5 max-w-2xl text-3xl font-medium tracking-tight md:text-4xl">
            From requirements to quality review.
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
            {[
              {
                title: "Requirements",
                description: "Identify academic needs and document system requirements.",
              },
              {
                title: "Planning",
                description: "Organize tasks, priorities, and project activities in Jira.",
              },
              {
                title: "Development",
                description: "Coordinate progress and monitor implementation activities.",
              },
              {
                title: "Quality Review",
                description: "Review functionality and document issues for improvement.",
              },
            ].map((step, index) => (
              <div key={step.title} className="border-t border-[#DED9CF] pt-5">
                <p className="text-xs text-[#6B675F]">
                  STEP 0{index + 1}
                </p>
                <h3 className="mt-4 text-base font-medium">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#6B675F]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:px-12">
        <p className="text-xs tracking-[0.2em] text-[#6B675F]">
          04 / TOOLS & SKILLS
        </p>

        <h2 className="mt-5 text-3xl font-medium tracking-tight md:text-4xl">
          Platforms and disciplines applied.
        </h2>

        <div className="mt-10 flex flex-wrap gap-3">
          {[
            "Jira",
            "Project Management",
            "Business Analysis",
            "Requirements Documentation",
            "Process Flows",
            "Quality Assurance",
            "Task Management",
            "Documentation",
          ].map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-[#DED9CF] px-4 py-2 text-sm text-[#6B675F]"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#DED9CF] px-6 py-8 md:px-12">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-xs text-[#6B675F] sm:flex-row">
          <p>JOHN MHARZELLE CORTEZ</p>
          <a href="/#projects" className="hover:text-[#171717]">
            Back to all projects ↑
          </a>
        </div>
      </footer>

    </main>
  );
}
