import { FaUser } from "react-icons/fa";
import { FaArrowRight, FaEnvelope } from "react-icons/fa";

export default function About() {
  const tags = ["Python", "FastAPI", "Laravel", "RAG", "MySQL", "Git/Linux"];

  return (
    <section id="about" className="py-20 bg-white text-gray-900 dark:bg-black dark:text-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center flex items-center justify-center gap-3">
          <FaUser className="text-blue-500 dark:text-cyan-400" size={20} />
          <span className="text-blue-500 dark:text-purple-400">01.</span>
          <span>About Me</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <span className="inline-flex items-center rounded-full border border-gray-300 dark:border-gray-700 px-3 py-1 text-xs font-medium text-gray-700 dark:text-gray-300">
              Open for Internship - PFA 2026
            </span>

            <div>
              <h3 className="text-4xl md:text-5xl font-bold tracking-tight">
                Anouar Baoutoul
              </h3>
              <p className="text-2xl font-semibold mt-2 text-gray-800 dark:text-gray-100">
                AI & Software Engineering
              </p>
            </div>

            <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300 max-w-2xl">
              Étudiant ingénieur en Informatique & Réseaux, passionné par l&apos;intelligence artificielle
              et le développement logiciel. Je construis des projets concrets en microservices, vision
              par ordinateur et applications web, et je recherche un stage PFA à partir de 2026.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gray-900 text-white dark:bg-white dark:text-gray-900 font-medium hover:opacity-90 transition"
              >
                View Projects <FaArrowRight size={14} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white/80 dark:bg-gray-900/60 font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              >
                <FaEnvelope size={14} />
                Contact
              </a>
            </div>

            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-lg bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-sm text-gray-700 dark:text-gray-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-900 shadow-2xl">
              <img
                src="/images/avatar.jpg"
                alt="Anouar Baoutoul"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}