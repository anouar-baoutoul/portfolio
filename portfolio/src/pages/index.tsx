import Hero from "@/components/Hero";
import Sidebar from "@/components/Sidebar";
import About from "@/components/About";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Certificates from "@/components/Certificates";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Sidebar />
      <div className="ml-0 sm:ml-20 lg:ml-24">
        <Hero />
        <About />
        <Education />
        <Skills />
        <Certificates />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}