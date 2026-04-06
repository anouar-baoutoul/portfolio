import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";
import { certificatesData } from "@/data/certificates";
import { FaCertificate } from "react-icons/fa";

export default function Certificates() {
    return (
        <section id="certificates" className="py-24 bg-gray-50 text-gray-900 dark:bg-black dark:text-white">
            <div className="container mx-auto px-6 max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center gap-3">
                        <FaCertificate className="text-blue-500 dark:text-cyan-400" size={22} />
                        <span className="text-blue-500 dark:text-purple-400">04.</span>
                        <span>Certificats</span>
                    </h2>
                    <div className="w-24 h-1 bg-linear-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certificatesData.map((cert, index) => (
                        <motion.a
                            key={cert.id}
                            href={cert.verifyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group bg-white dark:bg-gray-950 rounded-2xl p-6 border border-gray-200 dark:border-gray-800 hover:shadow-xl hover:border-blue-300 dark:hover:border-blue-700 transition-all hover:-translate-y-1"
                        >
                            <div className="flex items-start gap-4">
                                <div className="w-11 h-11 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 flex items-center justify-center shrink-0 overflow-hidden">
                                    {cert.image ? (
                                        <img
                                            src={cert.image}
                                            alt={cert.title}
                                            className="w-full h-full object-contain p-2"
                                            loading="lazy"
                                        />
                                    ) : (
                                        <span className="text-lg">🏆</span>
                                    )}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h3 className="text-base font-bold text-gray-900 dark:text-white group-hover:text-blue-500 transition-colors leading-snug">
                                        {cert.title}
                                    </h3>
                                    <p className="text-sm text-purple-500 font-medium mt-1">{cert.issuer}</p>
                                </div>
                                <FaExternalLinkAlt className="text-gray-400 dark:text-gray-500 group-hover:text-blue-500 transition-colors shrink-0 mt-1" size={14} />
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
}
