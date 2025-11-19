"use client";
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      name: "Tienda PHP",
      description: "E-commerce completa creada con PHP, manejo de usuarios, CRUD y carrito.",
      link: "https://github.com/YuverlyHidokun/Tienda-PHP",
    },
    {
      name: "Ring Town Backend",
      description: "Backend completo para una app de música: APIs, autenticación y streaming.",
      link: "https://github.com/YuverlyHidokun/Ring-Town-Backend",
    },
    {
      name: "Travel Agency App",
      description: "Aplicación de paquetes turísticos hecha con Ionic + Angular.",
      link: "https://github.com/YuverlyHidokun/Travel-Agency-Frontend",
    },
    {
      name: "VogueSphere / Q Store",
      description: "E-commerce fashion con Realidad Aumentada para vista 3D de productos.",
      link: "https://github.com/YuverlyHidokun/VogueSphere-WEB",
    },
    {
      name: "Backend QuitoTech",
      description: "Marketplace gamer para compra/venta de hardware en Quito.",
      link: "https://github.com/YuverlyHidokun/Backend-QuitoTech",
    }
  ];

  return (
    <section id="projects" className="py-20">
      <h3 className="text-3xl font-bold text-accent mb-10 tracking-wide">
        Proyectos
      </h3>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">
        {projects.map((p, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="
              relative p-6 rounded-xl 
              bg-[#0c1220]/80 backdrop-blur-xl 
              border border-blue-900/40 
              shadow-lg 
              hover:border-blue-500/60 
              hover:shadow-blue-500/20
              transition 
              overflow-hidden
            "
          >
            {/* Cyberpunk glow background */}
            <div
              className="
                absolute inset-0 opacity-0 
                bg-gradient-to-br from-blue-500/10 to-indigo-800/5 
                group-hover:opacity-100 
                transition
              "
            />

            {/* Title */}
            <h4 className="text-xl font-semibold text-blue-300 mb-2 z-10 relative">
              {p.name}
            </h4>

            {/* Description */}
            <p className="text-muted text-sm leading-relaxed z-10 relative">
              {p.description}
            </p>

            {/* Link */}
            <div className="mt-4 z-10 relative">
              <a
                href={p.link}
                target="_blank"
                className="text-sm text-accent font-semibold hover:underline tracking-wide"
              >
                Ver repositorio →
              </a>
            </div>

            {/* Neon bottom line */}
            <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-blue-500 to-purple-600 opacity-60"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
