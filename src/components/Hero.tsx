import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-100 text-gray-900 dark:from-gray-900 dark:via-gray-800 dark:to-black dark:text-white">
      {/* Animated Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply dark:mix-blend-multiply filter blur-3xl opacity-15 dark:opacity-20 animate-blob"></div>
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply dark:mix-blend-multiply filter blur-3xl opacity-15 dark:opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply dark:mix-blend-multiply filter blur-3xl opacity-15 dark:opacity-20 animate-blob animation-delay-4000"></div>

      <div className="container mx-auto px-6 relative z-10 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white/40 dark:border-white/10 shadow-2xl mb-8"
        >
          <img src="/images/avatar.jpg" alt="Anouar Baoutoul" className="w-full h-full object-cover" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold mb-4 tracking-tight"
        >
          Bonjour, je suis <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Anouar</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-2xl font-light mb-10"
        >
          Étudiant Ingénieur en <span className="text-gray-900 dark:text-white font-medium">Informatique & Réseaux</span> — Passionné par l&apos;<span className="text-gray-900 dark:text-white font-medium">Intelligence Artificielle</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col items-center gap-6"
        >
          <div className="flex space-x-6">
            <a
              href="https://github.com/anouar-baoutoul"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group p-3 bg-white/70 dark:bg-white/5 hover:bg-white dark:hover:bg-white/10 rounded-full transition-all hover:scale-110 shadow-lg backdrop-blur-sm border border-gray-200 dark:border-white/5"
              aria-label="GitHub"
              title="GitHub"
            >
              <FaGithub size={24} />
              <span className="absolute left-1/2 -top-8 -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-lg">
                GitHub
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/anouar-baoutoul-701b5738a/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group p-3 bg-white/70 dark:bg-white/5 hover:bg-white dark:hover:bg-white/10 rounded-full transition-all hover:scale-110 shadow-lg backdrop-blur-sm border border-gray-200 dark:border-white/5"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <FaLinkedin size={24} />
              <span className="absolute left-1/2 -top-8 -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-lg">
                LinkedIn
              </span>
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=anoir.baoutoul@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group p-3 bg-white/70 dark:bg-white/5 hover:bg-white dark:hover:bg-white/10 rounded-full transition-all hover:scale-110 shadow-lg backdrop-blur-sm border border-gray-200 dark:border-white/5"
              aria-label="Ouvrir Gmail"
              title="Ouvrir Gmail"
            >
              <FaEnvelope size={24} />
              <span className="absolute left-1/2 -top-8 -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-lg">
                Email
              </span>
            </a>
          </div>
          
          
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce flex-col items-center opacity-60 dark:opacity-50 hidden sm:flex">
        <span className="text-sm mb-2 font-light">Défiler</span>
        <div className="w-1 h-8 rounded-full bg-gradient-to-b from-gray-900 dark:from-white to-transparent"></div>
      </div>
    </section>
  );
}