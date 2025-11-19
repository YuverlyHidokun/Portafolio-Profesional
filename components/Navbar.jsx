"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Sobre mí", href: "#about" },
    { label: "Habilidades", href: "#skills" },
    { label: "Proyectos", href: "#projects" },
    { label: "Contacto", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`
        fixed top-0 left-0 w-full z-50 px-6 py-4 
        transition-all duration-300  
        ${scrolled ? "backdrop-blur-xl bg-[#0b1220]/70 shadow-lg shadow-blue-500/10" : ""}
      `}
    >
      <div className="container mx-auto flex justify-between items-center">
        
        {/* ==== LOGO GAMER ==== */}
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="flex items-center gap-3 cursor-pointer"
        >
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 
            shadow-lg shadow-blue-500/40 flex items-center justify-center relative overflow-hidden">
            
            {/* Glow interno animado */}
            <motion.div
              className="absolute inset-0 bg-blue-400 opacity-20 blur-xl"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ repeat: Infinity, duration: 3 }}
            />
            
            <span className="font-extrabold text-white text-xl tracking-wider z-10">
              HK
            </span>
          </div>

          <h1 className="text-xl font-bold tracking-wide text-white">Yuverly Alexander Verdezoto Lojan - Hidokun</h1>
        </motion.div>

        {/* ==== LINKS ==== */}
        <ul className="hidden md:flex gap-8 text-sm font-medium">
          {navItems.map((item, i) => (
            <motion.li key={i} whileHover={{ scale: 1.1 }}>
              <a
                href={item.href}
                className="relative text-gray-300 hover:text-accent transition"
              >
                {item.label}

                {/* Subrayado neon animado */}
                <motion.span
                  className="absolute left-0 -bottom-1 h-[2px] bg-accent"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
}
