"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      id="about"
      className="py-20 relative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      {/* Cyberpunk glow bar */}
      <div className="absolute left-0 top-0 w-2 h-full bg-gradient-to-b from-blue-500 to-indigo-900 blur-md opacity-60"></div>

      <motion.h3
        initial={{ y: 15, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-accent mb-6 tracking-wider"
      >
        Sobre mí
      </motion.h3>

      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-muted max-w-3xl leading-relaxed text-lg"
      >
        Soy un desarrollador formado en la{" "}
        <span className="text-blue-400 font-semibold">
          Escuela Politécnica Nacional
        </span>{" "}
        en la carrera de Tecnología en Desarrollo de Software. Tengo
        verdadera experiencia construyendo{" "}
        <span className="text-blue-300 font-semibold">
          aplicaciones web, móviles y APIs
        </span>{" "}
        con un enfoque en arquitectura limpia, rendimiento y una UI pulida.
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-muted max-w-3xl mt-4 leading-relaxed text-lg"
      >
        Amante del diseño digital, el ecosistema JavaScript, la automatización y
        los videojuegos. Intento combinar un estilo{" "}
        <span className="text-accent font-semibold">gamer/cyberpunk</span>{" "}
        con buenas prácticas de desarrollo para crear experiencias modernas y
        funcionales.
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-muted max-w-3xl mt-4 leading-relaxed text-lg"
      >
        Siempre estoy explorando nuevas tecnologías, frameworks y herramientas
        que me permitan llevar mis proyectos a un nivel superior. Mi meta es
        desarrollar software con un toque profesional, estético y con la
        potencia técnica que exige el mundo real.
      </motion.p>
    </motion.section>
  );
}
