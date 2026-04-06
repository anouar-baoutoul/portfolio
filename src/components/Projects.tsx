import { motion } from "framer-motion";
import { projectsData } from "../data/projects";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { FaCode } from "react-icons/fa";

export default function Projects() {
    return (
        <section id="projects" className="py-24 bg-white text-gray-900 dark:bg-black dark:text-white">
            <div className="container mx-auto px-6 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center gap-3">
                        <FaCode className="text-blue-500 dark:text-cyan-400" size={22} />
                        <span className="text-blue-500 dark:text-purple-400">05.</span>
                        <span>Projects</span>
                    </h2>
                    <div className="w-24 h-1 bg-linear-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectsData.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="bg-gray-50 dark:bg-gray-950 rounded-2xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-800 flex flex-col hover:-translate-y-3 hover:scale-[1.01] will-change-transform transition-all duration-150 hover:shadow-[0_20px_60px_-30px_rgba(59,130,246,0.70)] hover:border-blue-300/60 dark:hover:shadow-[0_20px_60px_-30px_rgba(34,211,238,0.35)] dark:hover:border-cyan-500/40"
                        >
                            <div className="h-48 bg-linear-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                />
                            </div>

                            <div className="p-6 flex flex-col grow">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                                    {project.title}
                                </h3>
                                <p className="text-gray-700 dark:text-gray-400 mb-6 grow text-sm leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.technologies.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 text-xs font-semibold rounded-full border border-gray-300 dark:border-gray-700"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center space-x-4 pt-4 border-t border-gray-200 dark:border-gray-800">
                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors flex items-center"
                                        >
                                            <FaGithub className="mr-2" /> <span className="text-sm font-medium">Code</span>
                                        </a>
                                    )}
                                    {project.live && (
                                        <a
                                            href={project.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors flex items-center"
                                        >
                                            <FaExternalLinkAlt className="mr-2" /> <span className="text-sm font-medium">Live</span>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
