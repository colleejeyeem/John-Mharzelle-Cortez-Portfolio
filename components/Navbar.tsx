"use client";
import { useEffect, useState } from "react";
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

useEffect(() => {
  const sections = ["home", "about", "tools", "contact", "projects"];

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    },
    {
      threshold: 0.4,
    }
  );

  sections.forEach((id) => {
    const section = document.getElementById(id);
    if (section) observer.observe(section);
  });

  return () => observer.disconnect();
}, []);

  return (
    <nav className="sticky top-0 z-50 border-b border-[#DED9CF] bg-[#F4F1EA]/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-12">

        {/* Logo */}
        <a
          href="#home"
          className="text-xl font-semibold tracking-tight transition-opacity duration-300 hover:opacity-60"
        >
          JC.
        </a>

        {/* Navigation Links */}
        <div className="hidden items-center gap-2 md:flex">
          {[
            { name: "Home", href: "#home" },
            { name: "About Me", href: "#about" },
            { name: "Projects", href: "#projects" },
            { name: "Tools", href: "#tools" },
            { name: "Contact", href: "#contact" },
          ].map((item) => (
            <a
              key={item.name}
              href={item.href}
              
            className={`rounded-full px-5 py-2.5 text-sm transition-all duration-300 ease-in-out hover:bg-[#DED9CF] hover:text-[#171717] active:scale-95 ${
            activeSection === item.href.replace("#", "")
                ? "bg-[#DED9CF] text-[#171717]"
                : "text-[#6B675F]"
            }`}

            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="flex flex-col gap-1.5 md:hidden"
        aria-label="Toggle navigation menu"
        aria-expanded={isMenuOpen}
        >
        <span className="h-0.5 w-6 bg-[#171717]" />
        <span className="h-0.5 w-6 bg-[#171717]" />
        </button>

        {/* Mobile Navigation */}
        {isMenuOpen && (
        <div className="absolute left-0 top-full flex w-full flex-col border-b border-[#DED9CF] bg-[#F4F1EA] px-6 py-5 md:hidden">
            {[
            { name: "Home", href: "#home" },
            { name: "About Me", href: "#about" },
            { name: "Projects", href: "#projects" },
            { name: "Tools", href: "#tools" },
            { name: "Contact", href: "#contact" }
            ].map((item) => (
            <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}  
                className={`border-b border-[#DED9CF] py-4 text-sm transition-colors duration-300 hover:text-[#171717] ${
                activeSection === item.href.replace("#", "")
                    ? "font-semibold text-[#171717]"
                    : "text-[#6B675F]"
                }`}
            >
                {item.name}
            </a>
            ))}
        </div>
        )}


      </div>
    </nav>
  );
}
