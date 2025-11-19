"use client";
import { motion } from 'framer-motion'

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="w-full py-4 px-6 flex justify-between items-center"
    >
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary-600 flex items-center justify-center shadow-lg">
          <span className="font-bold">H</span>
        </div>
        <h1 className="text-lg font-semibold">Hidokun</h1>
      </div>

      <ul className="hidden md:flex gap-6 text-sm text-muted">
        <li><a href="#about" className="hover:text-accent">Sobre mí</a></li>
        <li><a href="#skills" className="hover:text-accent">Habilidades</a></li>
        <li><a href="#projects" className="hover:text-accent">Proyectos</a></li>
        <li><a href="#contact" className="hover:text-accent">Contacto</a></li>
      </ul>
    </motion.nav>
  );
}