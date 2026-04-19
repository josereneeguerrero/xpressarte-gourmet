"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const WA_ORDER =
  "https://wa.me/50488738716?text=Hola%20XpressArte%2C%20me%20gustar%C3%ADa%20hacer%20un%20pedido.%20Mi%20orden%20es%20...";

const categorias = [
  {
    id: "entradas",
    label: "Entradas",
    items: [
      { nombre: "Entrada 1", descripcion: "Descripción del platillo. Ingredientes, preparación y detalles relevantes.", precio: "L. 000", imagen: null },
      { nombre: "Entrada 2", descripcion: "Descripción del platillo. Ingredientes, preparación y detalles relevantes.", precio: "L. 000", imagen: null },
      { nombre: "Entrada 3", descripcion: "Descripción del platillo. Ingredientes, preparación y detalles relevantes.", precio: "L. 000", imagen: null },
    ],
  },
  {
    id: "platos",
    label: "Platos Fuertes",
    items: [
      { nombre: "Plato Fuerte 1", descripcion: "Descripción del platillo. Ingredientes, preparación y detalles relevantes.", precio: "L. 000", imagen: null },
      { nombre: "Plato Fuerte 2", descripcion: "Descripción del platillo. Ingredientes, preparación y detalles relevantes.", precio: "L. 000", imagen: null },
      { nombre: "Plato Fuerte 3", descripcion: "Descripción del platillo. Ingredientes, preparación y detalles relevantes.", precio: "L. 000", imagen: null },
      { nombre: "Plato Fuerte 4", descripcion: "Descripción del platillo. Ingredientes, preparación y detalles relevantes.", precio: "L. 000", imagen: null },
    ],
  },
  {
    id: "postres",
    label: "Postres",
    items: [
      { nombre: "Postre 1", descripcion: "Descripción del platillo. Ingredientes y detalles relevantes.", precio: "L. 000", imagen: null },
      { nombre: "Postre 2", descripcion: "Descripción del platillo. Ingredientes y detalles relevantes.", precio: "L. 000", imagen: null },
    ],
  },
  {
    id: "bebidas",
    label: "Bebidas",
    items: [
      { nombre: "Bebida 1", descripcion: "Descripción de la bebida.", precio: "L. 000", imagen: null },
      { nombre: "Bebida 2", descripcion: "Descripción de la bebida.", precio: "L. 000", imagen: null },
      { nombre: "Bebida 3", descripcion: "Descripción de la bebida.", precio: "L. 000", imagen: null },
    ],
  },
];

function ImagePlaceholder() {
  return (
    <div className="relative w-full aspect-[4/3] bg-gradient-to-br from-[#1a1508] to-[#0f0f0f] flex items-center justify-center overflow-hidden rounded-t-2xl">
      <div className="absolute top-0 left-0 w-12 h-px bg-gradient-to-r from-[#E5B21A]/40 to-transparent" />
      <div className="absolute top-0 left-0 w-px h-12 bg-gradient-to-b from-[#E5B21A]/40 to-transparent" />
      <span className="text-[#E5B21A]/20 text-[10px] tracking-widest uppercase">Foto</span>
    </div>
  );
}

export default function MenuPage() {
  const [activa, setActiva] = useState("entradas");
  const categoria = categorias.find((c) => c.id === activa)!;

  return (
    <div className="min-h-screen bg-[#080808] text-[#F9FAFB]">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#080808]/95 backdrop-blur-md border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[#9CA3AF] hover:text-[#E5B21A] text-sm transition-colors"
          >
            <ArrowLeft size={16} />
            Volver
          </Link>

          <div className="text-center">
            <p
              className="text-[#E5B21A] font-semibold text-lg leading-none"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              XpressArte
            </p>
            <p className="text-[#9CA3AF] text-xs mt-0.5">Gourmet Cuisine</p>
          </div>

          <a
            href={WA_ORDER}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold bg-[#E5B21A] hover:bg-[#FCD34D] text-[#0A0A0A] px-4 py-2 rounded-full transition-colors"
          >
            Pedir
          </a>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-14">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-[#E5B21A] text-xs tracking-[0.3em] uppercase mb-4 font-medium">
            Comayagua, Honduras
          </p>
          <h1
            className="text-5xl md:text-6xl font-light text-[#F9FAFB]"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Nuestra{" "}
            <em className="not-italic text-[#E5B21A] font-semibold">Carta</em>
          </h1>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#E5B21A]/50 to-transparent mx-auto mt-6" />
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

        {/* Items grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activa}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {categoria.items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="rounded-2xl border border-white/5 hover:border-[#E5B21A]/15 transition-colors duration-200 overflow-hidden flex flex-col"
                style={{ background: "linear-gradient(180deg, #141208 0%, #0f0f0f 100%)" }}
              >
                {item.imagen ? (
                  <div className="relative w-full aspect-[4/3] rounded-t-2xl overflow-hidden">
                    <Image
                      src={item.imagen}
                      alt={item.nombre}
                      fill
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <ImagePlaceholder />
                )}

                <div className="p-5 flex flex-col flex-1">
                  <h3
                    className="text-[#F9FAFB] text-xl font-semibold mb-2"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {item.nombre}
                  </h3>
                  <p className="text-[#9CA3AF] text-sm leading-relaxed font-light flex-1 mb-4">
                    {item.descripcion}
                  </p>
                  <div className="flex items-center justify-between pt-3 border-t border-white/5">
                    <span
                      className="text-[#E5B21A] font-semibold text-xl"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      {item.precio}
                    </span>
                    <a
                      href={WA_ORDER}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-[#9CA3AF] hover:text-[#E5B21A] border border-white/8 hover:border-[#E5B21A]/30 px-4 py-2 rounded-full transition-all duration-200"
                    >
                      Ordenar
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Footer disclaimer */}
        <div className="mt-16 text-center space-y-2 border-t border-white/5 pt-10">
          <p className="text-[#9CA3AF]/50 text-xs">
            * Los precios mostrados no incluyen ISV (15%). El precio final puede variar según disponibilidad o temporada.
          </p>
          <p className="text-[#9CA3AF] text-sm mt-2">
            Pedidos a domicilio y reservas por{" "}
            <a
              href={WA_ORDER}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#E5B21A] hover:text-[#FCD34D] underline underline-offset-2 transition-colors"
            >
              WhatsApp · +504 8873-8716
            </a>
          </p>
        </div>
      </main>
    </div>
  );
}
