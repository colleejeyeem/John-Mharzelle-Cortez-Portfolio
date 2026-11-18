
import AccreditationGallery from "@/components/AccreditationGallery";
export default function AccreditationPage() {
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
      <section className="mx-auto max-w-7xl px-6 pb-12 pt-16 md:px-12 md:pt-20">

        <p className="mb-6 text-xs tracking-[0.2em] text-[#6B675F]">
          SELECTED WORK / 04
        </p>

        <p className="mb-5 text-sm tracking-[0.15em] text-[#6B675F]">
          INSTITUTIONAL WEB-BASED SYSTEM
        </p>

        <h1 className="text-5xl font-medium tracking-tight md:text-8xl">
          PUP Accreditation.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#6B675F] md:text-xl">
          A web-based platform supporting the organization
          and accessibility of institutional accreditation
          information and documentation.
        </p>

        {/* Accreditation Screenshot Slideshow */}
        <div className="mt-8">
          <AccreditationGallery />
        </div>

        {/* Project Information */}
        <div className="mt-12 grid grid-cols-1 gap-10 border-t border-[#DED9CF] pt-8 md:grid-cols-3">

          <div>
            <p className="text-xs tracking-[0.15em] text-[#6B675F]">
              PROJECT TYPE
            </p>
            <p className="mt-3 text-sm font-medium">
              Institutional Web-Based System
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

          <div>
            <p className="text-xs tracking-[0.15em] text-[#6B675F]">
              PROJECT AREA
            </p>
            <p className="mt-3 text-sm font-medium">
              Academic Accreditation
            </p>
          </div>

        </div>
      </section>

      {/* Overview */}
      <section className="border-t border-[#DED9CF]">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-20 md:grid-cols-2 md:px-12">

          <div>
            <p className="text-xs tracking-[0.2em] text-[#6B675F]">
              01 / OVERVIEW
            </p>

            <h2 className="mt-5 text-3xl font-medium tracking-tight md:text-4xl">
              Supporting institutional accreditation through technology.
            </h2>
          </div>

          <div>
            <p className="text-base leading-8 text-[#6B675F]">
              The PUP Accreditation Website is a separate
              institutional web-based project intended to
              support the presentation and organization of
              accreditation-related information and resources.
            </p>

            <p className="mt-6 text-base leading-8 text-[#6B675F]">
              The platform provides a digital interface for
              accessing relevant accreditation materials,
              including sample program compliance documents.
            </p>
          </div>

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
