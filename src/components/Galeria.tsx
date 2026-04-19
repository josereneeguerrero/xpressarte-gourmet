"use client";

import { motion } from "framer-motion";

const WA_LINK =
  "https://wa.me/50488738716?text=Hola%20XpressArte%2C%20me%20gustar%C3%ADa%20reservar%20una%20mesa%20para%20...%20persona(s)%20el%20d%C3%ADa%20...%20a%20las%20....%20Mi%20nombre%20es%20...";

// Cells: span = tailwind col/row span classes
const celdas = [
  { id: 1, label: "El ambiente", span: "col-span-2 row-span-2" },
  { id: 2, label: "Nuestros platillos", span: "col-span-1 row-span-1" },
  { id: 3, label: "Detalles", span: "col-span-1 row-span-1" },
  { id: 4, label: "El espacio", span: "col-span-1 row-span-2" },
  { id: 5, label: "Vista", span: "col-span-2 row-span-1" },
];

function GaleriaCell({
  celda,
  index,
}: {
  celda: (typeof celdas)[0];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className={`${celda.span} relative rounded-xl overflow-hidden border border-white/5 group`}
      style={{
        minHeight: "140px",
        background: "linear-gradient(135deg, #1a1508 0%, #111108 50%, #0f0f0f 100%)",
      }}
    >
      {/* Corner gold accents */}
      <div className="absolute top-0 left-0 w-10 h-px bg-gradient-to-r from-[#E5B21A]/30 to-transparent" />
      <div className="absolute top-0 left-0 w-px h-10 bg-gradient-to-b from-[#E5B21A]/30 to-transparent" />
      <div className="absolute bottom-0 right-0 w-10 h-px bg-gradient-to-l from-[#E5B21A]/20 to-transparent" />

      {/* Placeholder content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 opacity-100 group-hover:opacity-80 transition-opacity">
        <span className="text-[#E5B21A]/20 text-[10px] tracking-widest uppercase">{celda.label}</span>
      </div>

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-[#E5B21A]/0 group-hover:bg-[#E5B21A]/3 transition-colors duration-300" />
    </motion.div>
  );
}

export default function Galeria() {
  return (
    <section
      className="py-28 px-6"
      style={{ background: "linear-gradient(180deg, #080808 0%, #0a0905 50%, #080808 100%)" }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14"
        >
          <div>
            <p className="text-[#E5B21A] text-xs tracking-[0.3em] uppercase mb-5 font-medium">
              Tercer nivel · Plaza San Blas
            </p>
            <h2
              className="font-heading text-5xl md:text-6xl font-light text-[#F9FAFB]"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Nuestro{" "}
              <em className="not-italic text-[#E5B21A] font-semibold">Ambiente</em>
            </h2>
            <p className="text-[#9CA3AF]/80 mt-4 max-w-md text-base font-light leading-relaxed">
              Un espacio diseñado para que la experiencia vaya más allá del plato.
              Cada rincón tiene su propio carácter.
            </p>
          </div>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 bg-[#E5B21A] hover:bg-[#FCD34D] text-[#0A0A0A] font-semibold px-7 py-3 rounded-full text-sm transition-all duration-200 shadow-[0_0_20px_rgba(229,178,26,0.18)]"
          >
            Reservar Mesa
          </a>
        </motion.div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-3 grid-rows-3 gap-3 h-[480px] md:h-[520px]">
          {celdas.map((celda, i) => (
            <GaleriaCell key={celda.id} celda={celda} index={i} />
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-[#9CA3AF]/40 text-xs mt-6"
        >
          Fotos del restaurante próximamente · Agrega tus imágenes en{" "}
          <code className="text-[#E5B21A]/50">public/images/galeria/</code>
        </motion.p>
      </div>
    </section>
  );
}
