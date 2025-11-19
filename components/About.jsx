"use client";
import { motion } from 'framer-motion'

export default function About() {
  return (
    <motion.section id="about" className="py-12">
      <motion.h3 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y:0 }} viewport={{ once: true }} className="text-2xl font-semibold text-accent mb-4">Sobre mí</motion.h3>
      <motion.p initial={{ opacity: 0 }} whileInView={{ opacity:1 }} viewport={{ once:true }} className="text-muted max-w-3xl">
        Soy un desarrollador apasionado por la tecnología, la innovación y crear experiencias digitales de alto nivel. Me especializo en construir aplicaciones modernas con buena arquitectura y UI pulida.
      </motion.p>
    </motion.section>
  );
}