import { motion } from "framer-motion";
import { experiences } from "../data/experience";
import { FaBriefcase } from "react-icons/fa";

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-white text-gray-900 dark:bg-black dark:text-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-14 text-center flex items-center justify-center gap-3"
        >
          <FaBriefcase className="text-blue-500 dark:text-cyan-400" size={22} />
          <span className="text-blue-500 dark:text-purple-400">02.</span>
          <span>Experience</span>
        </motion.h2>

        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/70 via-blue-400/40 dark:from-cyan-400/70 dark:via-blue-500/40 to-transparent -translate-x-1/2 hidden md:block" />

          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className={`relative mb-8 md:mb-14 flex ${
                idx % 2 === 0 ? "md:justify-end" : "md:justify-start"
              }`}
            >
              <div className="hidden md:block absolute left-1/2 top-8 -translate-x-1/2 z-10">
                <span className="block h-3 w-3 rounded-full bg-blue-500 dark:bg-cyan-300 shadow-[0_0_12px_2px_rgba(59,130,246,0.45)] dark:shadow-[0_0_12px_2px_rgba(34,211,238,0.7)]" />
              </div>

              <div className="w-full md:w-[46%] rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-[#0a1020] p-6 shadow-md dark:shadow-[0_0_0_1px_rgba(103,232,249,0.06),0_20px_40px_rgba(0,0,0,0.45)] backdrop-blur-sm">
                <p className="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3">{exp.period}</p>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{exp.title}</h3>
                <p className="text-sm text-blue-600 dark:text-cyan-300 mt-1">{exp.location}</p>

                <ul className="mt-4 space-y-2 text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                  {exp.responsibilities.map((r, i) => (
                    <li key={i}>- {r}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}