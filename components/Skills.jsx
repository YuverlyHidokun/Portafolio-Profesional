"use client";
import { motion } from 'framer-motion'

export default function Skills() {
  const skills = ["JavaScript", "React", "Next.js", "Node.js", "Ionic", "Angular", "CSS", "Tailwind"];

  return (
    <section id="skills" className="py-12">
      <h3 className="text-2xl font-semibold text-accent mb-6">Habilidades</h3>
      <div className="flex flex-wrap gap-3">
        {skills.map((s, i) => (
          <motion.span key={s} whileHover={{ scale: 1.04 }} transition={{ type: 'spring', stiffness: 300 }} className="px-4 py-2 rounded-full card text-sm">
            {s}
          </motion.span>
        ))}
      </div>
    </section>
  );
}