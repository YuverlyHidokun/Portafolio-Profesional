"use client";
import { motion } from "framer-motion";
import {
  FaLinkedin, FaGithub, FaYoutube, FaInstagram,
  FaFacebook, FaXTwitter, FaDeviantart
} from "react-icons/fa6";

import { MdEmail, MdPhone, MdLocationOn, MdWork, MdAccessTime } from "react-icons/md";

export default function Contact() {
  const socials = [
    { name: "LinkedIn", icon: <FaLinkedin />, url: "https://www.linkedin.com/in/yuverly-alexander-verdezoto-lojan-86205a188/" },
    { name: "GitHub", icon: <FaGithub />, url: "https://github.com/YuverlyHidokun" },
    { name: "YouTube", icon: <FaYoutube />, url: "https://www.youtube.com/@hidokun" },
    { name: "Instagram", icon: <FaInstagram />, url: "https://www.instagram.com/yuverly_hidokun/" },
    { name: "Facebook", icon: <FaFacebook />, url: "https://www.facebook.com/yuverlyalexander.verdezotolojan/?locale=es_LA" },
    { name: "Twitter / X", icon: <FaXTwitter />, url: "https://x.com/yuverly6" },
    { name: "DeviantArt", icon: <FaDeviantart />, url: "https://www.deviantart.com/hidokun" },
  ];

  return (
    <section id="contact" className="py-20">

      {/* Title */}
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="
          text-4xl font-extrabold text-accent mb-10 
          tracking-wide uppercase
          drop-shadow-[0_0_15px_rgba(0,140,255,0.65)]
        "
      >
        Contacto
      </motion.h3>

      {/* Contact Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        whileHover={{
          boxShadow: "0 0 20px rgba(0,140,255,0.35)",
          borderColor: "rgba(0,140,255,0.7)"
        }}
        transition={{ duration: 0.3 }}
        className="
          max-w-lg mb-12 p-6 rounded-xl
          bg-white/5 backdrop-blur-md
          border border-accent/30
          shadow-lg shadow-accent/20
        "
      >
        <h4 className="text-xl mb-4 font-semibold text-cyan-300 tracking-wide">
          Información Personal
        </h4>

        <div className="space-y-3 text-lg text-muted">

          {/* Emails */}
          <div className="flex items-center gap-3">
            <MdEmail className="text-cyan-300" />
            <a href="mailto:pochitoyuverly@gmail.com" className="text-accent hover:text-cyan-300 transition">
              pochitoyuverly@gmail.com
            </a>
          </div>

          <div className="flex items-center gap-3">
            <MdEmail className="text-cyan-300" />
            <a href="mailto:yuverlyverdezoto@gmail.com" className="text-accent hover:text-cyan-300 transition">
              yuverlyverdezoto@gmail.com
            </a>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-3">
            <MdPhone className="text-cyan-300" />
            <a href="tel:+593961189229" className="text-accent hover:text-cyan-300 transition">
              (+593) 96 118 9229
            </a>
          </div>

          {/* Location */}
          <div className="flex items-center gap-3">
            <MdLocationOn className="text-cyan-300" />
            <span className="text-accent">Ecuador 🇪🇨 — Trabajo Remoto</span>
          </div>

          {/* Work Availability */}
          <div className="flex items-center gap-3">
            <MdWork className="text-cyan-300" />
            <span className="text-accent">Disponible para proyectos freelance / remoto</span>
          </div>

          {/* Response Time */}
          <div className="flex items-center gap-3">
            <MdAccessTime className="text-cyan-300" />
            <span className="text-accent">Tiempo de respuesta: 1–6 horas</span>
          </div>

        </div>
      </motion.div>

      {/* Botón para descargar CV */}
      <div className="flex justify-center my-12">
        <motion.a
          href="/cv.pdf"
          download="Yuverly-Verdezoto-CV.pdf"
          whileHover={{
            scale: 1.08,
            boxShadow: "0 0 20px rgba(0,140,255,0.55)",
            borderColor: "rgba(0,140,255,0.8)"
          }}
          className="
            px-8 py-4 rounded-xl
            bg-white/5 backdrop-blur-md
            border border-accent/40
            text-accent font-semibold text-xl
            hover:bg-white/10 transition-all
          "
        >
          📄 Descargar Curriculum
        </motion.a>
      </div>

      {/* Social Links */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: 20 },
          show: { opacity: 1, y: 0, transition: { staggerChildren: 0.08 } },
        }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5"
      >
        {socials.map((s) => (
          <motion.a
            key={s.name}
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            variants={{
              hidden: { opacity: 0, scale: 0.9 },
              show: { opacity: 1, scale: 1 },
            }}
            whileHover={{
              scale: 1.1,
              boxShadow: "0 0 20px rgba(0,140,255,0.55)",
              borderColor: "rgba(0,140,255,0.8)"
            }}
            className="
              flex items-center gap-3 px-4 py-3 rounded-xl
              bg-white/5 backdrop-blur-md
              border border-accent/30 text-accent
              font-semibold hover:bg-white/10
              transition-all cursor-pointer select-none
            "
          >
            <span className="text-2xl">{s.icon}</span>
            {s.name}
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
}
