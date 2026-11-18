
const toolCategories = [
  {
    title: "PROJECT MANAGEMENT & COLLABORATION",
    tools: ["Jira", "Trello", "ClickUp", "Microsoft Teams", "Google Workspace"],
  },
  {
    title: "BUSINESS ANALYSIS & DOCUMENTATION",
    tools: [
      "BRD & SRS",
      "User Stories",
      "Process Flow Diagrams",
      "UAT Documentation",
      "Draw.io",
    ],
  },
  {
    title: "QUALITY ASSURANCE & TESTING",
    tools: [
      "Manual Testing",
      "Functional Testing",
      "Regression Testing",
      "Test Cases",
      "Bug Tracking",
    ],
  },
  {
    title: "DEVELOPMENT & DESIGN",
    tools: [
      "HTML & CSS",
      "JavaScript",
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "Figma",
    ],
  },
  {
    title: "DATA & PRODUCTIVITY",
    tools: [
      "Microsoft Excel",
      "Power BI",
      "Google Sheets",
      "Google Apps Script",
    ],
  },
];

export default function Tools() {
  return (
    <section
      id="tools"
      className="mx-auto max-w-7xl px-6 py-24 md:px-12 md:py-32"
    >
      {/* Section Heading */}
      <div className="mb-16">
        <p className="mb-5 text-xs tracking-[0.2em] text-[#6B675F]">
          03 / TOOLS & TECHNOLOGIES
        </p>

        <h2 className="max-w-3xl text-3xl font-medium tracking-tight md:text-5xl">
          Tools I use to turn ideas into solutions.
        </h2>

        <p className="mt-6 max-w-xl text-base leading-8 text-[#6B675F]">
          A collection of platforms, technologies, and tools
          I have used across project management, business
          analysis, quality assurance, and development.
        </p>
      </div>

      {/* Tool Categories */}
      <div className="border-t border-[#DED9CF]">
        {toolCategories.map((category, index) => (
          <div
            key={category.title}
            className="grid grid-cols-1 gap-5 border-b border-[#DED9CF] py-8 md:grid-cols-[0.8fr_1.2fr] md:gap-12"
          >
            {/* Category Title */}
            <div>
              <p className="text-xs tracking-[0.15em] text-[#6B675F]">
                0{index + 1} / {category.title}
              </p>
            </div>

            {/* Tools */}
            <div className="flex flex-wrap gap-2">
              {category.tools.map((tool) => (
                <span
                  key={tool}
                  className="rounded-full border border-[#DED9CF] px-4 py-2 text-sm text-[#171717] transition-all duration-300 hover:border-[#C8BBA7] hover:bg-[#DED9CF]"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
