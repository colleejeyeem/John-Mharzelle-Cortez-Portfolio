
import Navbar from "@/components/Navbar";
import Home from "@/components/Home";
import About from "@/components/About";
import Tools from "@/components/Tools";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects";

export default function Page() {
  return (
    <main className="min-h-screen bg-[#F4F1EA] text-[#171717]">

      <Navbar />

      <Home />

      <About />

      <Projects />

      <Tools />

      <Contact />

      {/* Footer */}
      <footer className="mx-auto flex max-w-7xl justify-between border-t border-[#DED9CF] px-6 py-6 text-xs text-[#6B675F] md:px-12">
        <p>BASED IN THE PHILIPPINES</p>
        <p>© 2026 JOHN MHARZELLE CORTEZ</p>
      </footer>

    </main>
  );
}
