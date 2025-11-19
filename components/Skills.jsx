"use client";
import { motion } from "framer-motion";

// Componentes de iconos SVG personalizados
const IconReact = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
    <circle cx="12" cy="12" r="2" />
    <ellipse cx="12" cy="12" rx="9" ry="3.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
    <ellipse cx="12" cy="12" rx="9" ry="3.5" fill="none" stroke="currentColor" strokeWidth="1.5" transform="rotate(60 12 12)" />
    <ellipse cx="12" cy="12" rx="9" ry="3.5" fill="none" stroke="currentColor" strokeWidth="1.5" transform="rotate(120 12 12)" />
  </svg>
);

const IconCode = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

const IconDatabase = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
    <ellipse cx="12" cy="6" rx="8" ry="3" />
    <path d="M4 6v6c0 1.657 3.582 3 8 3s8-1.343 8-3V6" />
    <path d="M4 12v6c0 1.657 3.582 3 8 3s8-1.343 8-3v-6" />
  </svg>
);

const IconTerminal = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="4 17 10 11 4 5" />
    <line x1="12" y1="19" x2="20" y2="19" />
  </svg>
);

const IconGit = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
    <path d="M21.62 11.108l-8.731-8.729a1.292 1.292 0 0 0-1.823 0L9.257 4.19l2.299 2.3a1.532 1.532 0 0 1 1.939 1.95l2.214 2.217a1.53 1.53 0 1 1-.918.864l-2.065-2.063v5.443a1.533 1.533 0 1 1-1.226-.057V9.379a1.533 1.533 0 0 1-.831-2.007L8.336 5.041 2.38 11.004a1.292 1.292 0 0 0 0 1.823l8.73 8.729a1.292 1.292 0 0 0 1.823 0l8.688-8.688a1.292 1.292 0 0 0 0-1.823z"/>
  </svg>
);

const IconBrackets = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M7 4H5a2 2 0 0 0-2 2v3a2 2 0 0 1-2 2 2 2 0 0 1 2 2v3a2 2 0 0 0 2 2h2" />
    <path d="M17 4h2a2 2 0 0 1 2 2v3a2 2 0 0 0 2 2 2 2 0 0 0-2 2v3a2 2 0 0 1-2 2h-2" />
  </svg>
);

const IconServer = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
    <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
    <line x1="6" y1="6" x2="6.01" y2="6" />
    <line x1="6" y1="18" x2="6.01" y2="18" />
  </svg>
);

const IconGamepad = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="6" y1="12" x2="10" y2="12" />
    <line x1="8" y1="10" x2="8" y2="14" />
    <line x1="15" y1="13" x2="15.01" y2="13" />
    <line x1="18" y1="11" x2="18.01" y2="11" />
    <rect x="2" y="6" width="20" height="12" rx="4" />
  </svg>
);

export default function Skills() {
  
  const categories = [
    {
      title: "Frontend",
      items: [
        { name: "React", icon: <IconReact className="text-sky-400" /> },
        { name: "Next.js", icon: <IconCode className="text-white" /> },
        { name: "Angular", icon: <IconCode className="text-red-500" /> },
        { name: "Ionic", icon: <IconCode className="text-blue-400" /> },
        { name: "Vite", icon: <IconCode className="text-purple-400" /> },
        { name: "Bootstrap", icon: <IconBrackets className="text-purple-500" /> },
        { name: "HTML", icon: <IconBrackets className="text-orange-500" /> },
        { name: "CSS", icon: <IconBrackets className="text-blue-500" /> },
      ],
    },
    {
      title: "Backend",
      items: [
        { name: "Node.js", icon: <IconServer className="text-green-500" /> },
        { name: "Express", icon: <IconServer className="text-gray-400" /> },
        { name: "Laravel", icon: <IconServer className="text-red-500" /> },
        { name: "API REST", icon: <IconTerminal className="text-green-400" /> },
      ],
    },
    {
      title: "Bases de datos",
      items: [
        { name: "MongoDB", icon: <IconDatabase className="text-green-500" /> },
        { name: "MySQL", icon: <IconDatabase className="text-blue-500" /> },
      ],
    },
    {
      title: "Lenguajes",
      items: [
        { name: "JavaScript", icon: <IconCode className="text-yellow-400" /> },
        { name: "TypeScript", icon: <IconCode className="text-blue-500" /> },
        { name: "Python", icon: <IconTerminal className="text-yellow-300" /> },
        { name: "Java", icon: <IconTerminal className="text-red-500" /> },
        { name: "C++", icon: <IconTerminal className="text-blue-400" /> },
        { name: "C#", icon: <IconTerminal className="text-purple-400" /> },
        { name: "Godot Engine", icon: <IconGamepad className="text-blue-300" /> },
      ],
    },
    {
      title: "Herramientas",
      items: [
        { name: "Git", icon: <IconGit className="text-orange-500" /> },
      ],
    }
  ];

  return (
    <section id="skills" className="py-20">
      <h3 className="text-3xl font-bold text-accent mb-10">
        Habilidades Técnicas
      </h3>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
        {categories.map((cat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="bg-[#0f1625]/70 backdrop-blur-md p-6 rounded-xl shadow-lg border border-blue-900/30 hover:border-blue-500/50 transition"
          >
            <h4 className="text-xl font-semibold text-blue-400 mb-4">{cat.title}</h4>

            <div className="flex flex-wrap gap-3">
              {cat.items.map((skill, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.1 }}
                  className="
                    flex items-center gap-2 px-4 py-2 rounded-md 
                    bg-[#0c1220] border border-blue-800/40 shadow-sm
                    hover:bg-blue-900/20 transition text-sm
                  "
                >
                  <span className="text-lg">{skill.icon}</span>
                  <span>{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}