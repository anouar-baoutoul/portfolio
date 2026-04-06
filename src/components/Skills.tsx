import { FaCode, FaServer, FaLaptopCode, FaProjectDiagram, FaDatabase, FaTools } from "react-icons/fa";

export default function Skills() {
  const languages = ["C++", "Java", "Python"];

  // Développement Back-End (du CV)
  const backend = ["PHP (Laravel)", "Java (Spring)", "Node.js"];

  const frontend = ["HTML", "CSS", "JavaScript", "Bootstrap", "React"];

 
  const modeling = ["Merise (MCD, MLD, MPD)", "UML"];

  
  const databases = ["Oracle", "MySQL", "SQL Server"];

 
  const designTools = ["Canva", "Figma"];

  const os = ["Windows", "Linux"];

  const officeTools = ["Word", "Excel", "PowerPoint", "Access"];
  const skillSections = [
    { title: "Langages", icon: <FaCode size={11} />, items: languages },
    { title: "Back-End", icon: <FaServer size={11} />, items: backend },
    { title: "Front-End", icon: <FaLaptopCode size={11} />, items: frontend },
    { title: "Modélisation", icon: <FaProjectDiagram size={11} />, items: modeling },
    { title: "Bases de données", icon: <FaDatabase size={11} />, items: databases },
    { title: "Outils & Systèmes", icon: <FaTools size={11} />, items: [...designTools, ...os, ...officeTools] },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 text-gray-900 dark:bg-black dark:text-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center flex items-center justify-center gap-3">
          <FaLaptopCode className="text-blue-500 dark:text-cyan-400" size={22} />
          <span className="text-blue-500 dark:text-purple-400">03.</span>
          <span>Compétences techniques</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillSections.map((section) => (
            <div
              key={section.title}
              className="rounded-2xl border border-gray-200/80 dark:border-gray-800 bg-white dark:bg-gray-950 p-6 min-h-[205px] shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2 text-gray-900 dark:text-white">
                <span className="text-blue-500 dark:text-cyan-400 mt-0.5">{section.icon}</span>
                {section.title}
              </h3>
              <ul className="list-disc list-inside space-y-1.5 text-sm text-gray-700 dark:text-gray-300 marker:text-gray-400 dark:marker:text-gray-500">
                {section.items.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}