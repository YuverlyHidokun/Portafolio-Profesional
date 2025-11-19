"use client";
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="h-[70vh] flex items-center">
      <div className="container">
        <motion.div initial={{ x: -50, opacity: 0 }} animate={{ x:0, opacity:1 }} transition={{ duration: 0.7 }}>
          <h2 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Hola, soy <span className="text-accent">Hidokun</span>
          </h2>
          <p className="mt-4 max-w-2xl text-muted">
            Desarrollador de Software — creo interfaces limpias, performantes y experiencias con atención al detalle.
          </p>

          <div className="mt-6 flex gap-4">
            <a href="#projects" className="btn-accent">Ver proyectos</a>
            <a href="#contact" className="px-4 py-2 rounded-md border border-transparent text-sm hover:border-primary-600">Contactar</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}