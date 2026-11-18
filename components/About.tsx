
import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-7xl px-6 py-24 md:px-12 md:py-32"
    >
      {/* Section Heading */}
      <div className="mb-16">
        <p className="mb-5 text-xs tracking-[0.2em] text-[#6B675F]">
          01 / ABOUT ME
        </p>

        <h2 className="max-w-2xl text-3xl font-medium tracking-tight md:text-5xl">
          A closer look at my professional journey.
        </h2>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-[0.85fr_1.15fr] md:gap-20">

        {/* Left: Portrait */}
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm">
          <Image
            src="/images/johnmharzellecortez_graduationpic.jpg"
            alt="John Mharzelle Cortez"
            fill
            priority
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 40vw"
          />
        </div>

        {/* Right: Professional Background */}
        <div className="flex flex-col justify-center">

          <p className="text-lg leading-relaxed text-[#171717] md:text-xl">
            My journey in technology has allowed me to work across
            different areas of IT, from supporting administrative
            operations and improving digital systems to coordinating
            projects and ensuring software quality.
          </p>

          <p className="mt-6 text-base leading-8 text-[#6B675F]">
            Through my experience at the Polytechnic University of
            the Philippines – Santa Rosa Campus, I gained practical
            exposure to technical support, system development,
            quality assurance, documentation, and academic
            administration.
          </p>

          <p className="mt-6 text-base leading-8 text-[#6B675F]">
            Beyond technical work, I have also taken on leadership
            and project coordination responsibilities, particularly
            in youth technology initiatives and hackathon events.
            These experiences strengthened my ability to collaborate
            with teams, organize projects, understand requirements,
            and turn ideas into actionable solutions.
          </p>

          <div className="mt-8 border-l-2 border-[#C8BBA7] pl-5">
            <p className="text-sm font-medium leading-7 text-[#171717]">
              Focused on continuous improvement, meaningful
              collaboration, and practical digital solutions.
            </p>
          </div>

        </div>
      </div>

      {/* Professional Information */}
      <div className="mt-20 grid grid-cols-1 gap-10 border-t border-[#DED9CF] pt-10 md:grid-cols-3">

        {/* Education */}
        <div>
          <p className="mb-4 text-xs tracking-[0.15em] text-[#6B675F]">
            EDUCATION
          </p>

          <h3 className="text-base font-medium">
            BS Information Technology
          </h3>

          <p className="mt-3 text-sm leading-7 text-[#6B675F]">
            Polytechnic University of the Philippines
            <br />
            Santa Rosa Campus
          </p>
        </div>

        {/* Professional Focus */}
        <div>
          <p className="mb-4 text-xs tracking-[0.15em] text-[#6B675F]">
            PROFESSIONAL FOCUS
          </p>

          <ul className="space-y-2 text-sm leading-6 text-[#6B675F]">
            <li>Project Management</li>
            <li>Business Analysis</li>
            <li>Quality Assurance</li>
            <li>Systems Development</li>
            <li>Technical Support</li>
          </ul>
        </div>

        {/* Core Strengths */}
        <div>
          <p className="mb-4 text-xs tracking-[0.15em] text-[#6B675F]">
            CORE STRENGTHS
          </p>

          <ul className="space-y-2 text-sm leading-6 text-[#6B675F]">
            <li>Analytical Thinking</li>
            <li>Project Coordination</li>
            <li>Team Collaboration</li>
            <li>Technical Documentation</li>
            <li>Continuous Learning</li>
          </ul>
        </div>

      </div>
    </section>
  );
}
