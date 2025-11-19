"use client";
import { motion } from 'framer-motion'

export default function Projects() {
  const projects = [
    {
      name: "Travel Agency App",
      description: "Aplicación de paquetes turísticos desarrollada con Ionic + Angular.",
    },
    {
      name: "Portfolio Website",
      description: "Sitio personal moderno hecho con Next.js.",
    }
  ];

  return (
    <section id="projects" className="py-12">
      <h3 className="text-2xl font-semibold text-accent mb-6">Proyectos</h3>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, idx) => (
          <motion.div key={p.name} whileHover={{ y: -6, boxShadow: '0 10px 30px rgba(11,111,242,0.12)' }} transition={{ duration: 0.25 }} className="p-6 rounded-xl card">
            <h4 className="text-lg font-bold mb-2">{p.name}</h4>
            <p className="text-muted">{p.description}</p>
            <div className="mt-4">
              <a href="#" className="text-sm text-accent hover:underline">Ver repo</a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}