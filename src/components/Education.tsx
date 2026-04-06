import { motion } from "framer-motion";
import { education } from "../data/education";
import { FaGraduationCap } from "react-icons/fa";

export default function Education() {
  return (
    <section id="education" className="py-20 bg-gray-50 text-gray-900 dark:bg-black dark:text-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-10 text-center flex items-center justify-center gap-3"
        >
          <FaGraduationCap className="text-blue-500 dark:text-cyan-400" size={22} />
          <span className="text-blue-500 dark:text-purple-400">02.</span>
          <span>Education</span>
        </motion.h2>

        <p className="text-center text-gray-600 dark:text-gray-400 -mt-5 mb-12">
          Academic background
        </p>

        <div className="relative pl-10 md:pl-12">
          <div className="absolute left-4 md:left-5 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-800" />

          <div className="space-y-8">
            {education.map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute left-4 md:left-5 top-7 -translate-x-1/2">
                  <div className="h-3 w-3 rounded-full bg-white dark:bg-black border-2 border-gray-300 dark:border-gray-700" />
                </div>

                <div className="bg-white/80 dark:bg-gray-950/70 backdrop-blur rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800 p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between gap-6">
                    <div className="min-w-0 flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-blue-100/80 dark:bg-cyan-900/30 border border-blue-200 dark:border-cyan-800 flex items-center justify-center shrink-0 mt-0.5 overflow-hidden">
                        <img
                          src="/images/icon%20education.png"
                          alt="Education icon"
                          className="w-5 h-5 object-contain"
                          loading="lazy"
                        />
                      </div>
                      <div className="min-w-0">
                      <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white">
                        {edu.institution}
                      </h3>
                      <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">
                        {edu.degree}
                      </p>
                      {edu.highlights.length > 0 && (
                        <ul className="mt-4 space-y-2 text-sm text-gray-600 dark:text-gray-400">
                          {edu.highlights.map((h, idx) => (
                            <li key={idx} className="flex gap-2">
                              <span className="mt-0.5 text-gray-400">•</span>
                              <span>{h}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                      </div>
                    </div>

                    <div className="shrink-0 text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap">
                      {edu.period.replace(" - ", " — ")}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}