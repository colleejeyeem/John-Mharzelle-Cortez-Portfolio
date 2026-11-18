import GSiteGallery from "@/components/GSiteGallery";
export default function GSitePage() {
  return (
    <main className="min-h-screen bg-[#F4F1EA] text-[#171717]">

      {/* Navigation */}
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-8 md:px-12">
        <a href="/" className="text-xl font-bold tracking-tight">
          JC.
        </a>

        <a
          href="/#projects"
          className="text-sm text-[#6B675F] transition-colors hover:text-[#171717]"
        >
          ← Back to Projects
        </a>
      </nav>

      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-6 pb-20 pt-16 md:px-12 md:pb-28">
        <p className="mb-6 text-xs font-medium tracking-[0.2em] text-[#6B675F]">
          03 / WEB-BASED PORTAL
        </p>

        <h1 className="max-w-4xl text-5xl font-medium tracking-tight md:text-7xl">
          GSite
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[#6B675F]">
          A research and extension portal initiative designed to support
          the organization and accessibility of institutional information.
        </p>

      {/* GSite Screenshot Slideshow */}
        <div className="mt-8">
          <GSiteGallery />
        </div>
        
        <div className="mt-12 grid grid-cols-1 gap-8 border-t border-[#DED9CF] pt-8 sm:grid-cols-3">
          <div>
            <p className="text-xs tracking-wider text-[#6B675F]">PROJECT TYPE</p>
            <p className="mt-2 text-sm">Web-Based Portal</p>
          </div>

          <div>
            <p className="text-xs tracking-wider text-[#6B675F]">MY ROLE</p>
            <p className="mt-2 text-sm">Technical Support · UI/UX · Coordination</p>
          </div>

          <div>
            <p className="text-xs tracking-wider text-[#6B675F]">ORGANIZATION</p>
            <p className="mt-2 text-sm">PUP Santa Rosa Campus</p>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="border-t border-[#DED9CF]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-3 md:px-12 md:py-28">
          <div>
            <p className="text-xs font-medium tracking-[0.2em] text-[#6B675F]">
              01 / OVERVIEW
            </p>
            <h2 className="mt-4 text-3xl font-medium">Project Overview</h2>
          </div>

          <div className="space-y-5 text-sm leading-7 text-[#6B675F] md:col-span-2">
            <p>
              GSite is a research and extension portal initiative associated
              with PUP Santa Rosa Campus. It aims to provide a more organized
              and accessible way of presenting institutional research and
              extension-related information.
            </p>

            <p>
              The project focuses on supporting the campus in organizing
              information and improving how users access relevant research
              and extension resources through a web-based platform.
            </p>
          </div>
        </div>
      </section>

      {/* My Contributions */}
      <section className="border-t border-[#DED9CF]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-12 md:py-28">
          <p className="text-xs font-medium tracking-[0.2em] text-[#6B675F]">
            02 / RESPONSIBILITIES
          </p>

          <h2 className="mt-4 text-3xl font-medium">My Contributions</h2>

          <div className="mt-12 grid gap-10 md:grid-cols-3">
            <div>
              <span className="text-sm text-[#6B675F]">01</span>
              <h3 className="mt-4 text-xl font-medium">Technical Support</h3>
              <p className="mt-4 text-sm leading-7 text-[#6B675F]">
                Assisted with technical requirements and project-related
                support to help move the portal initiative forward.
              </p>
            </div>

            <div>
              <span className="text-sm text-[#6B675F]">02</span>
              <h3 className="mt-4 text-xl font-medium">UI/UX Support</h3>
              <p className="mt-4 text-sm leading-7 text-[#6B675F]">
                Contributed to user interface and experience considerations
                with a focus on clarity, usability, and information access.
              </p>
            </div>

            <div>
              <span className="text-sm text-[#6B675F]">03</span>
              <h3 className="mt-4 text-xl font-medium">Coordination</h3>
              <p className="mt-4 text-sm leading-7 text-[#6B675F]">
                Supported project coordination and communication related
                to the portal initiative.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Tools */}
      <section className="border-t border-[#DED9CF]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-3 md:px-12 md:py-28">
          <div>
            <p className="text-xs font-medium tracking-[0.2em] text-[#6B675F]">
              03 / CAPABILITIES
            </p>
            <h2 className="mt-4 text-3xl font-medium">Skills & Tools</h2>
          </div>

          <div className="flex flex-wrap content-start gap-3 md:col-span-2">
            {[
              "Technical Support",
              "UI/UX Design",
              "Project Coordination",
              "Web-Based Systems",
              "Information Organization",
              "Documentation",
            ].map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-[#DED9CF] px-5 py-3 text-sm text-[#6B675F]"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mx-auto flex max-w-7xl justify-between border-t border-[#DED9CF] px-6 py-6 text-xs text-[#6B675F] md:px-12">
        <p>BASED IN THE PHILIPPINES</p>
        <p>© 2026 JOHN CORTEZ</p>
      </footer>

    </main>
  );
}
