"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const categorias = [
  {
    id: "entradas",
    label: "Entradas",
    items: [
      { nombre: "Entrada 1", descripcion: "Descripción del platillo aquí.", precio: "L. 000" },
      { nombre: "Entrada 2", descripcion: "Descripción del platillo aquí.", precio: "L. 000" },
      { nombre: "Entrada 3", descripcion: "Descripción del platillo aquí.", precio: "L. 000" },
    ],
  },
  {
    id: "platos",
    label: "Platos Fuertes",
    items: [
      { nombre: "Plato Fuerte 1", descripcion: "Descripción del platillo aquí.", precio: "L. 000" },
      { nombre: "Plato Fuerte 2", descripcion: "Descripción del platillo aquí.", precio: "L. 000" },
      { nombre: "Plato Fuerte 3", descripcion: "Descripción del platillo aquí.", precio: "L. 000" },
      { nombre: "Plato Fuerte 4", descripcion: "Descripción del platillo aquí.", precio: "L. 000" },
    ],
  },
  {
    id: "postres",
    label: "Postres",
    items: [
      { nombre: "Postre 1", descripcion: "Descripción del platillo aquí.", precio: "L. 000" },
      { nombre: "Postre 2", descripcion: "Descripción del platillo aquí.", precio: "L. 000" },
    ],
  },
  {
    id: "bebidas",
    label: "Bebidas",
    items: [
      { nombre: "Bebida 1", descripcion: "Descripción aquí.", precio: "L. 000" },
      { nombre: "Bebida 2", descripcion: "Descripción aquí.", precio: "L. 000" },
      { nombre: "Bebida 3", descripcion: "Descripción aquí.", precio: "L. 000" },
    ],
  },
];

const WA_ORDER =
  "https://wa.me/50488738716?text=Hola%20XpressArte%2C%20me%20gustar%C3%ADa%20hacer%20un%20pedido%20a%20domicilio.%20Mi%20dirección%20es%20...";

export default function MenuDigital() {
  const [activa, setActiva] = useState("entradas");
  const categoria = categorias.find((c) => c.id === activa)!;

  return (
    <section
      id="menu"
      className="py-28 px-6"
      style={{ background: "linear-gradient(180deg, #080808 0%, #060604 60%, #080808 100%)" }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-[#E5B21A] text-xs tracking-[0.3em] uppercase mb-5 font-medium">
            Explora nuestra carta
          </p>
          <h2
            className="font-heading text-5xl md:text-6xl font-light text-[#F9FAFB]"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Menú <em className="not-italic text-[#E5B21A] font-semibold">Digital</em>
          </h2>
        </motion.div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categorias.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiva(cat.id)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                activa === cat.id
                  ? "bg-[#E5B21A] text-[#0A0A0A] shadow-[0_0_20px_rgba(229,178,26,0.2)]"
                  : "border border-white/8 text-[#9CA3AF] hover:border-[#E5B21A]/40 hover:text-[#F9FAFB]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Items */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activa}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {categoria.items.map((item, i) => (
              <div
                key={i}
                className="flex items-start justify-between gap-4 p-6 rounded-xl border border-white/5 hover:border-[#E5B21A]/15 transition-colors duration-200 group"
                style={{ background: "linear-gradient(135deg, #141208 0%, #0f0f0f 100%)" }}
              >
                <div className="flex-1">
                  <h4
                    className="text-[#F9FAFB] font-semibold text-lg mb-1"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {item.nombre}
                  </h4>
                  <p className="text-[#9CA3AF] text-sm leading-relaxed">{item.descripcion}</p>
                </div>
                <div className="flex flex-col items-end gap-2 shrink-0">
                  <span
                    className="text-[#E5B21A] font-semibold text-lg whitespace-nowrap"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {item.precio}
                  </span>
                  <a
                    href={WA_ORDER}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10px] text-[#9CA3AF] hover:text-[#E5B21A] border border-white/8 hover:border-[#E5B21A]/30 px-3 py-1 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100"
                  >
                    Pedir
                  </a>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Disclaimer IVA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 text-center space-y-2"
        >
          <p className="text-[#9CA3AF]/60 text-xs">
            * Los precios mostrados no incluyen ISV (15%). El precio final puede variar según disponibilidad o temporada.
          </p>
          <p className="text-[#9CA3AF] text-sm">
            ¿Quieres pedir a domicilio?{" "}
            <a
              href={WA_ORDER}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#E5B21A] hover:text-[#FCD34D] underline underline-offset-2 transition-colors"
            >
              Escríbenos por WhatsApp
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
