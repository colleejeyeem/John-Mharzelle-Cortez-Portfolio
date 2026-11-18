import SmartSipGallery from "@/components/SmartSipGallery";
export default function SmartSipPage() {
  return (
    <main className="min-h-screen bg-[#F4F1EA] text-[#171717]">

      {/* Navigation */}
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-12">
        <a
          href="/"
          className="text-xl font-semibold tracking-tight"
        >
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
      <section className="mx-auto max-w-7xl px-6 pb-12 pt-16 md:px-12 md:pt-20">

        <p className="mb-6 text-xs tracking-[0.2em] text-[#6B675F]">
          SELECTED WORK / 01
        </p>

        <p className="mb-5 text-sm tracking-[0.15em] text-[#6B675F]">
          CAPSTONE PROJECT
        </p>

        <h1 className="text-5xl font-medium tracking-tight md:text-8xl">
          SmartSip.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#6B675F] md:text-xl">
          Kiosk-Powered Cafe Management System for Mi Amore
        </p>

        {/* SmartSip Screenshot Slideshow */}
        <div className="mt-8">
          <SmartSipGallery />
        </div>

        {/* Project Overview */}
        <div className="mt-16 grid grid-cols-1 gap-10 border-t border-[#DED9CF] pt-8 md:grid-cols-3">

          <div>
            <p className="text-xs tracking-[0.15em] text-[#6B675F]">
              PROJECT TYPE
            </p>
            <p className="mt-3 text-sm font-medium">
              Academic Capstone Project
            </p>
          </div>

          <div>
            <p className="text-xs tracking-[0.15em] text-[#6B675F]">
              CLIENT
            </p>
            <p className="mt-3 text-sm font-medium">
              Mi Amore Café
            </p>
          </div>

          <div>
            <p className="text-xs tracking-[0.15em] text-[#6B675F]">
              INSTITUTION
            </p>
            <p className="mt-3 text-sm font-medium">
              PUP Santa Rosa Campus
            </p>
          </div>

        </div>
      </section>

      {/* Project Background */}
      <section className="border-t border-[#DED9CF]">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-24 md:grid-cols-2 md:px-12">

          <div>
            <p className="text-xs tracking-[0.2em] text-[#6B675F]">
              01 / OVERVIEW
            </p>

            <h2 className="mt-5 text-3xl font-medium tracking-tight md:text-4xl">
              The project behind the solution.
            </h2>
          </div>

          <div>
            <p className="text-base leading-8 text-[#6B675F]">
              SmartSip is a kiosk-powered cafe management
              system developed for Mi Amore Café. The project
              aims to improve the ordering experience and
              streamline cafe operations through an integrated
              digital platform.
            </p>

            <p className="mt-6 text-base leading-8 text-[#6B675F]">
              The proposed system brings together customer
              ordering, order management, loyalty features,
              and administrative functions to support more
              organized and efficient cafe operations.
            </p>
          </div>

        </div>
      </section>

      {/* My Contributions */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:px-12">

        <p className="text-xs tracking-[0.2em] text-[#6B675F]">
          02 / MY CONTRIBUTIONS
        </p>

        <h2 className="mt-5 max-w-2xl text-3xl font-medium tracking-tight md:text-4xl">
          My role in bringing SmartSip to life.
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-8 border-t border-[#DED9CF] pt-8 sm:grid-cols-2">

          <div>
            <h3 className="text-lg font-medium">
              Project Management
            </h3>
            <p className="mt-3 text-sm leading-7 text-[#6B675F]">
              Coordinated project activities, monitored
              deliverables, and helped organize the team's
              development progress.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium">
              Business Analysis
            </h3>
            <p className="mt-3 text-sm leading-7 text-[#6B675F]">
              Helped identify project requirements and
              translate business needs into system
              requirements and documentation.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium">
              Quality Assurance
            </h3>
            <p className="mt-3 text-sm leading-7 text-[#6B675F]">
              Contributed to system testing and evaluation
              to assess functionality and software quality.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium">
              Documentation
            </h3>
            <p className="mt-3 text-sm leading-7 text-[#6B675F]">
              Prepared and organized project documentation
              throughout the system development process.
            </p>
          </div>

        </div>
      </section>

      {/* Project Features */}
      <section className="border-y border-[#DED9CF]">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-12">

          <p className="text-xs tracking-[0.2em] text-[#6B675F]">
            03 / SYSTEM FEATURES
          </p>

          <h2 className="mt-5 max-w-2xl text-3xl font-medium tracking-tight md:text-4xl">
            An integrated cafe management experience.
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">

            {[
              {
                title: "Self-Service Ordering",
                description: "Digital ordering through a customer-facing kiosk interface.",
              },
              {
                title: "Customer Experience",
                description: "Customer-oriented features including loyalty and order assistance.",
              },
              {
                title: "Order Management",
                description: "Tools to support staff in handling and monitoring customer orders.",
              },
              {
                title: "Administrative Management",
                description: "Administrative functions for managing cafe operations.",
              },
              {
                title: "Sales Forecasting",
                description: "A forecasting feature designed to support operational planning.",
              },
              {
                title: "System Evaluation",
                description: "Software quality evaluation guided by ISO/IEC 25010.",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="border-t border-[#DED9CF] pt-5"
              >
                <h3 className="text-base font-medium">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#6B675F]">
                  {feature.description}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:px-12">

        <p className="text-xs tracking-[0.2em] text-[#6B675F]">
          04 / SKILLS & TECHNOLOGIES
        </p>

        <h2 className="mt-5 text-3xl font-medium tracking-tight md:text-4xl">
          Tools and disciplines applied.
        </h2>

        <div className="mt-10 flex flex-wrap gap-3">
          {[
            "Project Management",
            "Business Analysis",
            "Quality Assurance",
            "System Documentation",
            "UI/UX Design",
            "Software Development",
            "ISO/IEC 25010",
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
