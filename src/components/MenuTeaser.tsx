"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const destacados = [
  {
    categoria: "Entradas",
    nombre: "Platillo Estrella 1",
    descripcion: "Descripción breve del platillo. Agrega ingredientes y detalles.",
    precio: "L. 000",
  },
  {
    categoria: "Plato Fuerte",
    nombre: "Platillo Estrella 2",
    descripcion: "Descripción breve del platillo. Agrega ingredientes y detalles.",
    precio: "L. 000",
  },
  {
    categoria: "Postre",
    nombre: "Platillo Estrella 3",
    descripcion: "Descripción breve del platillo. Agrega ingredientes y detalles.",
    precio: "L. 000",
  },
];

export default function MenuTeaser() {
  return (
    <section
      id="menu"
      className="py-28 px-6"
      style={{ background: "linear-gradient(180deg, #080808 0%, #060604 60%, #080808 100%)" }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16"
        >
          <div>
            <p className="text-[#E5B21A] text-xs tracking-[0.3em] uppercase mb-5 font-medium">
              Algunos de nuestros favoritos
            </p>
            <h2
              className="font-heading text-5xl md:text-6xl font-light text-[#F9FAFB]"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Nuestra{" "}
              <em className="not-italic text-[#E5B21A] font-semibold">Carta</em>
            </h2>
          </div>
          <Link
            href="/menu"
            className="shrink-0 inline-flex items-center gap-2 border border-[#E5B21A]/30 hover:border-[#E5B21A]/70 hover:bg-[#E5B21A]/5 text-[#9CA3AF] hover:text-[#E5B21A] text-sm font-medium px-7 py-3 rounded-full transition-all duration-200"
          >
            Ver menú completo →
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {destacados.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="group relative overflow-hidden rounded-2xl border border-white/5 hover:border-[#E5B21A]/15 transition-colors duration-300"
              style={{ background: "linear-gradient(135deg, #141208 0%, #0f0f0f 100%)" }}
            >
              {/* Image placeholder */}
              <div className="relative h-48 bg-gradient-to-br from-[#1a1508] to-[#0f0f0f] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-[#E5B21A]/3" />
                <span className="text-[#E5B21A]/20 text-xs tracking-widest uppercase font-medium">
                  Foto del platillo
                </span>
                {/* Gold corner accent */}
                <div className="absolute top-0 left-0 w-16 h-px bg-gradient-to-r from-[#E5B21A]/40 to-transparent" />
                <div className="absolute top-0 left-0 w-px h-16 bg-gradient-to-b from-[#E5B21A]/40 to-transparent" />
              </div>

              <div className="p-6">
                <span className="text-[#E5B21A]/60 text-[10px] tracking-[0.2em] uppercase font-medium">
                  {item.categoria}
                </span>
                <h3
                  className="text-[#F9FAFB] text-xl font-semibold mt-2 mb-2"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {item.nombre}
                </h3>
                <p className="text-[#9CA3AF] text-sm leading-relaxed mb-5 font-light">
                  {item.descripcion}
                </p>
                <div className="flex items-center justify-between">
                  <span
                    className="text-[#E5B21A] font-semibold text-lg"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {item.precio}
                  </span>
                  <Link
                    href="/menu"
                    className="text-xs text-[#9CA3AF] hover:text-[#E5B21A] border border-white/8 hover:border-[#E5B21A]/30 px-4 py-1.5 rounded-full transition-all duration-200"
                  >
                    Ver carta →
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link
            href="/menu"
            className="inline-flex items-center gap-2 bg-[#E5B21A] hover:bg-[#FCD34D] text-[#0A0A0A] font-semibold px-10 py-4 rounded-full text-base transition-all duration-200 shadow-[0_0_24px_rgba(229,178,26,0.18)]"
          >
            Ver menú digital completo
          </Link>
          <p className="text-[#9CA3AF]/50 text-xs mt-4">
            Disponible también como QR para tu mesa
          </p>
        </motion.div>
      </div>
    </section>
  );
}
