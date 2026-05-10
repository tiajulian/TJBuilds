import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Philosophy from "@/components/Philosophy";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="bg-[#0a0a12]">
      <Navigation />
      <Hero />
      <Philosophy />
      <Projects />
      <Experience />
      <Skills />
      <Contact />
    </main>
  );
}
