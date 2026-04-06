import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import { FaEnvelope, FaFileAlt } from "react-icons/fa";

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

export default function Contact() {
  const [copiedField, setCopiedField] = useState<"email" | "phone" | null>(null);

  const copyToClipboard = async (text: string, field: "email" | "phone") => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 1500);
    } catch {
      setCopiedField(null);
    }
  };

  return (
    <section id="contact" className="py-24 bg-gray-50 text-gray-900 dark:bg-black dark:text-white">
      <div className="container mx-auto px-6 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center gap-3">
            <FaEnvelope className="text-blue-500 dark:text-cyan-400" size={22} />
            <span className="text-blue-500 dark:text-purple-400">06.</span>
            <span>Contact</span>
          </h2>
          <div className="w-24 h-1 bg-linear-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-8"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            Je suis activement à la recherche d'un stage PFA en Data Science / IA.
            N'hésitez pas à me contacter pour toute opportunité ou collaboration.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-white dark:bg-gray-950 p-8 md:p-10 rounded-3xl shadow-xl border border-gray-200 dark:border-gray-800 space-y-6"
        >
          {/* Email */}
          
          <div className="flex items-center justify-between gap-4 p-4 rounded-2xl hover:bg-gray-100 dark:hover:bg-gray-900 transition group">
            <a href="mailto:anoir.baoutoul@gmail.com" className="flex items-center gap-4 min-w-0">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 shrink-0">
                <Mail size={20} />
              </div>
              <div className="min-w-0">
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-0.5">Email</p>
                <p className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-500 dark:group-hover:text-blue-400 transition break-all">
                  anoir.baoutoul@gmail.com
                </p>
              </div>
            </a>
            <button
              type="button"
              onClick={() => copyToClipboard("anoir.baoutoul@gmail.com", "email")}
              className="shrink-0 px-3 py-1.5 rounded-lg border border-gray-300 dark:border-gray-700 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              {copiedField === "email" ? "Copié" : "Copier"}
            </button>
          </div>

          {/* Téléphone */}
          
          <div className="flex items-center justify-between gap-4 p-4 rounded-2xl hover:bg-gray-100 dark:hover:bg-gray-900 transition group">
            <a href="tel:+212674409769" className="flex items-center gap-4 min-w-0">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-100 text-green-600 shrink-0">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-0.5">Téléphone</p>
                <p className="font-semibold text-gray-900 dark:text-white group-hover:text-green-500 dark:group-hover:text-green-400 transition">
                  +212 674 409 769
                </p>
              </div>
            </a>
            <button
              type="button"
              onClick={() => copyToClipboard("+212 674 409 769", "phone")}
              className="shrink-0 px-3 py-1.5 rounded-lg border border-gray-300 dark:border-gray-700 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              {copiedField === "phone" ? "Copié" : "Copier"}
            </button>
          </div>

          {/* Localisation */}
          <div className="flex items-center gap-4 p-4 rounded-2xl">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400 shrink-0">
              <MapPin size={20} />
            </div>
            <div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-0.5">Localisation</p>
              <p className="font-semibold text-gray-900 dark:text-white">
                Marrakech, Maroc
              </p>
            </div>
          </div>

          <div className="border-t border-gray-200 dark:border-gray-800 pt-6 flex gap-4 justify-center">
            {/* GitHub */}
            
            <a
              href="https://github.com/anouar-baoutoul"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-gray-900 dark:bg-gray-700 text-white font-semibold hover:scale-105 transition shadow"
            >
              <GithubIcon />
              GitHub
            </a>

            {/* LinkedIn */}
            
            <a
              href="https://www.linkedin.com/in/anouar-baoutoul-701b5738a/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 text-white font-semibold hover:scale-105 transition shadow"
            >
              <LinkedinIcon />
              LinkedIn
            </a>

            {/* CV */}
            <a
              href="/cv.pdf"
              download="Anouar_Baoutoul_CV.pdf"
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white font-semibold hover:scale-105 transition shadow border border-gray-200 dark:border-gray-700"
            >
              <FaFileAlt size={18} />
              CV
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}