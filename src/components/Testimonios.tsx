"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonios = [
  {
    nombre: "María G.",
    plataforma: "TripAdvisor",
    texto:
      "Un lugar increíble. La comida está a otro nivel — no esperaba encontrar algo así en Comayagua. El servicio fue atento de principio a fin.",
    estrellas: 5,
    link: "https://www.tripadvisor.es/Restaurant_Review-g292021-d33255687-Reviews-Xpressarte_Gourmet_Cuisine-Comayagua_Comayagua_Department.html",
  },
  {
    nombre: "Carlos R.",
    plataforma: "Google Maps",
    texto:
      "Fui por primera vez y ya quiero volver. El ambiente del tercer nivel de Plaza San Blas es genial. Los platillos tienen mucho sabor y la presentación es impresionante.",
    estrellas: 5,
    link: "https://maps.app.goo.gl/dRFrGqADi355DGuY6",
  },
  {
    nombre: "Andrea M.",
    plataforma: "TripAdvisor",
    texto:
      "Perfecto para una cena especial. No es el típico restaurante — se nota que detrás hay gente que disfruta lo que hace. Volvería sin pensarlo.",
    estrellas: 5,
    link: "https://www.tripadvisor.es/Restaurant_Review-g292021-d33255687-Reviews-Xpressarte_Gourmet_Cuisine-Comayagua_Comayagua_Department.html",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={12} className="fill-[#E5B21A] text-[#E5B21A]" />
      ))}
    </div>
  );
}

export default function Testimonios() {
  return (
    <section
      id="resenas"
      className="py-28 px-6"
      style={{ background: "linear-gradient(180deg, #080808 0%, #060604 60%, #080808 100%)" }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-[#E5B21A] text-xs tracking-[0.3em] uppercase mb-5 font-medium">
            Lo que dicen nuestros clientes
          </p>
          <h2
            className="font-heading text-5xl md:text-6xl font-light text-[#F9FAFB]"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Reseñas <em className="not-italic text-[#E5B21A] font-semibold">reales</em>
          </h2>
          <p className="text-[#9CA3AF]/80 mt-4 text-base font-light">
            No lo decimos nosotros. Lo dicen quienes han estado aquí.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonios.map((t, i) => (
            <motion.a
              key={i}
              href={t.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="block p-7 rounded-2xl border border-white/5 hover:border-[#E5B21A]/20 transition-all duration-300 group"
              style={{ background: "linear-gradient(135deg, #141208 0%, #0f0f0f 100%)" }}
            >
              {/* Gold top accent */}
              <div className="w-8 h-px bg-[#E5B21A]/50 mb-5" />
              <Stars count={t.estrellas} />
              <p className="text-[#F9FAFB]/85 text-sm leading-relaxed mt-5 mb-6 italic font-light">
                "{t.texto}"
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p
                    className="text-[#F9FAFB] font-semibold text-base"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {t.nombre}
                  </p>
                  <p className="text-[#9CA3AF] text-xs mt-0.5">{t.plataforma}</p>
                </div>
                <span className="text-[#E5B21A]/60 text-xs group-hover:text-[#E5B21A] transition-colors duration-200">
                  Ver →
                </span>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Platform CTAs */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mt-12"
        >
          <a
            href="https://maps.app.goo.gl/dRFrGqADi355DGuY6"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-white/8 hover:border-[#E5B21A]/30 text-[#9CA3AF] hover:text-[#E5B21A] text-sm px-6 py-2.5 rounded-full transition-all duration-200"
          >
            Reseñas en Google Maps
          </a>
          <a
            href="https://www.tripadvisor.es/Restaurant_Review-g292021-d33255687-Reviews-Xpressarte_Gourmet_Cuisine-Comayagua_Comayagua_Department.html"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-white/8 hover:border-[#E5B21A]/30 text-[#9CA3AF] hover:text-[#E5B21A] text-sm px-6 py-2.5 rounded-full transition-all duration-200"
          >
            Reseñas en TripAdvisor
          </a>
        </motion.div>
      </div>
    </section>
  );
}
