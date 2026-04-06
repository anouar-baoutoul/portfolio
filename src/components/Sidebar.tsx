import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import {
    FaHome,
    FaUser,
    FaGraduationCap,
    FaCode,
    FaEnvelope,
    FaMoon,
    FaSun,
    FaCertificate,
    FaBars,
    FaTimes,
    FaLaptopCode,
    FaFileAlt,
} from "react-icons/fa";

export default function Sidebar() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("hero");

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const sections = navItems.map((item) => item.id);
            const scrollPosition = window.scrollY + 140;
            const pageBottom =
                window.innerHeight + window.scrollY >=
                document.documentElement.scrollHeight - 2;

            if (pageBottom) {
                setActiveSection(sections[sections.length - 1]);
                return;
            }

            for (const section of [...sections].reverse()) {
                const element = document.getElementById(section);
                if (element && scrollPosition >= element.offsetTop) {
                    setActiveSection(section);
                    return;
                }
            }
        };
        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = [
        { id: "hero", icon: <FaHome size={20} />, label: "Accueil" },
        { id: "about", icon: <FaUser size={20} />, label: "À propos" },
        { id: "education", icon: <FaGraduationCap size={20} />, label: "Education" },
        { id: "skills", icon: <FaLaptopCode size={20} />, label: "Compétences" },
        { id: "certificates", icon: <FaCertificate size={20} />, label: "Certificats" },
        { id: "projects", icon: <FaCode size={20} />, label: "Projets" },
        { id: "contact", icon: <FaEnvelope size={20} />, label: "Contact" },
    ];

    const scrollTo = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const yOffset = 24;
            const y =
                element.getBoundingClientRect().top + window.scrollY - yOffset;

            window.scrollTo({
                top: Math.max(0, y),
                behavior: "smooth",
            });
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <>
            <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="fixed top-4 left-4 z-50 sm:hidden w-10 h-10 bg-gray-900 rounded-lg shadow-lg flex items-center justify-center text-gray-200 border border-gray-700"
                aria-label="Menu"
            >
                {isMobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>

            <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="fixed left-0 top-0 h-screen w-20 lg:w-24 bg-black/90 backdrop-blur-xl border-r border-gray-800 hidden sm:flex flex-col items-center py-6 z-50 shadow-xl"
            >
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="w-10 h-10 lg:w-12 lg:h-12 mb-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg shadow-lg"
                >
                    AB
                </motion.div>

                <div className="flex-1 w-full flex flex-col items-center justify-center space-y-4">
                    {navItems.map((item, index) => (
                        <motion.button
                            key={item.id}
                            onClick={() => scrollTo(item.id)}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.05 }}
                            className={`relative w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center rounded-xl transition-all duration-300 group ${
                                activeSection === item.id
                                    ? "bg-blue-500 text-white shadow-lg shadow-blue-500/30"
                                    : "text-gray-400 hover:bg-gray-800 hover:text-blue-400"
                            }`}
                            aria-label={item.label}
                        >
                            {item.icon}
                            <span className="absolute left-full ml-2 bg-gray-900 text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-50 shadow-lg">
                                {item.label}
                            </span>
                            {activeSection === item.id && (
                                <motion.div
                                    layoutId="activeIndicator"
                                    className="absolute -left-1 w-1 h-6 bg-blue-500 rounded-full"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.3 }}
                                />
                            )}
                        </motion.button>
                    ))}
                </div>

                <a
                    href="/images/cv.pdf"
                    download="Anouar_Baoutoul_CV.pdf"
                    className="w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center rounded-xl text-gray-300 bg-gray-900 border border-gray-700 hover:bg-gray-800 hover:text-white transition-all mt-3"
                    aria-label="Télécharger le CV"
                    title="Télécharger le CV"
                >
                    <FaFileAlt size={18} />
                </a>

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    className="w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center rounded-xl text-gray-300 bg-gray-900 border border-gray-700 hover:bg-gray-800 hover:text-yellow-500 transition-all mt-auto"
                    aria-label="Toggle Theme"
                >
                    {mounted && (theme === "dark" ? <FaSun size={18} /> : <FaMoon size={18} />)}
                </motion.button>
            </motion.div>

            <AnimatePresence>
                {isMobileMenuOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="fixed inset-0 bg-black/50 z-40 sm:hidden"
                        />
                        <motion.div
                            initial={{ x: -280 }}
                            animate={{ x: 0 }}
                            exit={{ x: -280 }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed left-0 top-0 h-full w-64 bg-black z-50 shadow-2xl sm:hidden flex flex-col border-r border-gray-800"
                        >
                            <div className="p-6 border-b border-gray-800">
                                <h2 className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                                    Anouar Baoutoul
                                </h2>
                                <p className="text-sm text-gray-400 mt-1">
                                    Étudiant Ingénieur
                                </p>
                            </div>
                            <div className="flex-1 py-6">
                                {navItems.map((item) => (
                                    <button
                                        key={item.id}
                                        onClick={() => scrollTo(item.id)}
                                        className={`w-full flex items-center gap-3 px-6 py-3 text-left transition-colors ${
                                            activeSection === item.id
                                                ? "bg-blue-500/10 text-blue-500 border-r-4 border-blue-500"
                                                : "text-gray-300 hover:bg-gray-900"
                                        }`}
                                    >
                                        {item.icon}
                                        <span>{item.label}</span>
                                    </button>
                                ))}
                            </div>
                            <div className="p-6 border-t border-gray-800">
                                <a
                                    href="/images/cv.pdf"
                                    download="Anouar_Baoutoul_CV.pdf"
                                    className="w-full flex items-center gap-3 px-4 py-2 rounded-lg bg-gray-900 text-gray-200 mb-3"
                                >
                                    <FaFileAlt size={18} />
                                    <span>Télécharger le CV</span>
                                </a>
                                <button
                                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                                    className="w-full flex items-center gap-3 px-4 py-2 rounded-lg bg-gray-900 text-gray-200"
                                >
                                    {mounted && (theme === "dark" ? <FaSun size={18} /> : <FaMoon size={18} />)}
                                    <span>{theme === "dark" ? "Mode clair" : "Mode sombre"}</span>
                                </button>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}