"use client";
import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="py-12">
      <motion.h3 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} className="text-2xl font-semibold text-accent mb-4">Contacto</motion.h3>
      <motion.p className="text-muted">Puedes escribirme a:</motion.p>
      <motion.a href="mailto:tuemail@example.com" className="block mt-2 text-accent font-semibold">tuemail@example.com</motion.a>
    </section>
  );
}