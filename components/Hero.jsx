"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="h-[80vh] flex items-center">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        {/* ==== FOTO ==== */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-blue-500 blur-2xl opacity-30 animate-pulse"></div>

            <img
              src="/profile.jpg"   // <-- coloca tu foto en public/me.jpg
              alt="Foto de Hidokun"
              className="relative w-52 h-52 md:w-64 md:h-64 rounded-full object-cover border-4 border-blue-600 shadow-xl"
            />
          </div>
        </motion.div>

        {/* ==== TEXTO ==== */}
        <motion.div
          initial={{ x: 40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            ¡Hola! Soy <span className="text-accent">Yuverly Verdezoto</span>
          </h1>

          <p className="mt-4 max-w-lg text-muted md:text-lg">
            Desarrollador de Software especializado en la creación de interfaces
            modernas, rápidas y con una estética centrada en la experiencia del usuario.
            Me enfoco en arquitectura limpia, animaciones fluidas y productos de alto rendimiento.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="btn-accent px-6 py-3 text-base shadow-lg shadow-blue-500/30"
            >
              Ver proyectos
            </a>

            <a
              href="#contact"
              className="px-6 py-3 rounded-md border border-blue-500 text-blue-400 hover:bg-blue-600 hover:text-white transition-all"
            >
              Contactar
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
