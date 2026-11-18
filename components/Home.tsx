
export default function Home() {
  return (
    <section
      id="home"
      className="mx-auto flex min-h-[80vh] max-w-7xl flex-col justify-center px-6 md:px-12"
    >
      {/* Portfolio Label */}
      <p className="mb-6 text-sm tracking-[0.2em] text-[#6B675F]">
        PORTFOLIO · 2026
      </p>

      {/* Main Heading */}
      <h1 className="max-w-4xl text-5xl font-medium leading-tight tracking-tight md:text-7xl">
        Building digital experiences with purpose.
      </h1>

      {/* Introduction */}
      <p className="mt-8 max-w-xl text-base leading-relaxed text-[#6B675F] md:text-lg">
        Hi, I&apos;m John Mharzelle Cortez.
        An Information Technology graduate passionate
        about technology, project management,
        quality assurance, and systems development.
      </p>

      {/* Explore Button */}
      
      {/* Action Buttons */}
      <div className="mt-10 flex flex-wrap items-center gap-6">

        {/* Explore More */}
        <a
          href="#about"
          className="w-fit border-b border-[#171717] pb-2 text-sm transition-opacity duration-300 hover:opacity-50"
        >
          Explore more ↗
        </a>

        {/* Download Resume */}
        <a
          href="/documents/John_Mharzelle_Cortez_Resume.pdf"
          download="John_Mharzelle_Cortez_Resume.pdf"
          className="inline-flex items-center gap-2 rounded-full border border-[#171717] px-5 py-3 text-sm text-[#171717] transition-all duration-300 hover:bg-[#171717] hover:!text-[#F4F1EA]"
        >
          <span>Download Resume</span>
          <span>↓</span>
        </a>

</div>

    </section>
  );
}
