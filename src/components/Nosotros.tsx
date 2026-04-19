"use client";

import { motion } from "framer-motion";
import { UtensilsCrossed, Star, Truck } from "lucide-react";

const WA_LINK =
  "https://wa.me/50488738716?text=Hola%20XpressArte%2C%20me%20gustar%C3%ADa%20reservar%20una%20mesa%20para%20...%20persona(s)%20el%20d%C3%ADa%20...%20a%20las%20....%20Mi%20nombre%20es%20...";

const pilares = [
  {
    icon: UtensilsCrossed,
    titulo: "Cocina de autor",
    texto:
      "Cada platillo es pensado, no improvisado. Trabajamos con ingredientes frescos y técnicas que hacen la diferencia en cada bocado.",
  },
  {
    icon: Star,
    titulo: "Ambiente único",
    texto:
      "Tercer nivel de Plaza San Blas — una vista, un ambiente y una energía que no vas a encontrar en otro lado de Comayagua.",
  },
  {
    icon: Truck,
    titulo: "Pedidos a domicilio",
    texto:
      "¿No puedes venir? Te llevamos la experiencia gourmet hasta tu puerta. Solo escríbenos por WhatsApp.",
  },
];

export default function Nosotros() {
  return (
    <section
      id="nosotros"
      className="py-28 px-6"
      style={{ background: "linear-gradient(180deg, #080808 0%, #0a0905 50%, #080808 100%)" }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-[#E5B21A] text-xs tracking-[0.3em] uppercase mb-5 font-medium">
            Quiénes somos
          </p>
          <h2
            className="font-heading text-5xl md:text-6xl font-light text-[#F9FAFB] leading-tight mb-7"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Más que un restaurante.
            <br />
            <em className="not-italic text-[#E5B21A] font-semibold">Una experiencia.</em>
          </h2>
          <p className="text-[#9CA3AF]/90 text-base leading-relaxed mb-5 font-light">
            XpressArte nació con una idea clara: que comer bien no debería ser un lujo difícil de alcanzar.
            Somos un restaurante gourmet en el corazón de Comayagua, con una propuesta que combina
            técnica, sabor y servicio real.
          </p>
          <p className="text-[#9CA3AF]/80 text-base leading-relaxed font-light">
            Cada visita cuenta. Por eso cuidamos cada detalle — desde el primer contacto hasta el último
            bocado. Nuestros clientes lo dicen mejor que nosotros.
          </p>

          <div className="flex flex-wrap gap-4 mt-10">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#E5B21A] hover:bg-[#FCD34D] text-[#0A0A0A] font-semibold px-7 py-3 rounded-full text-sm transition-all duration-200 shadow-[0_0_24px_rgba(229,178,26,0.2)]"
            >
              Reservar Mesa
            </a>
            <a
              href="https://www.tripadvisor.es/Restaurant_Review-g292021-d33255687-Reviews-Xpressarte_Gourmet_Cuisine-Comayagua_Comayagua_Department.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-[#E5B21A]/25 hover:border-[#E5B21A]/60 text-[#9CA3AF] hover:text-[#E5B21A] px-7 py-3 rounded-full text-sm transition-all duration-200"
            >
              Ver reseñas →
            </a>
          </div>
        </motion.div>

        {/* Pilares */}
        <div className="flex flex-col gap-5">
          {pilares.map((pilar, i) => (
            <motion.div
              key={pilar.titulo}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="flex gap-5 p-6 rounded-xl border border-white/5"
              style={{ background: "linear-gradient(135deg, #141208 0%, #0f0f0f 100%)" }}
            >
              <div className="shrink-0 w-11 h-11 flex items-center justify-center rounded-full bg-[#E5B21A]/10 border border-[#E5B21A]/15">
                <pilar.icon size={18} className="text-[#E5B21A]" />
              </div>
              <div>
                <h3
                  className="text-[#F9FAFB] font-semibold mb-1 text-lg"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {pilar.titulo}
                </h3>
                <p className="text-[#9CA3AF] text-sm leading-relaxed font-light">{pilar.texto}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
