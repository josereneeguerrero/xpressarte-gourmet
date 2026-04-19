"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { getFeaturedDishes, type SanityDish } from "@/sanity/queries";
import { urlFor } from "@/sanity/image";

const WA_ORDER =
  "https://wa.me/50488738716?text=Hola%20XpressArte%2C%20me%20gustar%C3%ADa%20ordenar%20...";

const FALLBACK: SanityDish[] = [
  { _id: "1", title: "Platillo Estrella 1", category: "entradas", description: "Descripción del platillo. Agrega ingredientes y lo que lo hace especial.", price: "L. 000", featured: true, order: 1 },
  { _id: "2", title: "Platillo Estrella 2", category: "platos", description: "Descripción del platillo. Agrega ingredientes y lo que lo hace especial.", price: "L. 000", featured: true, order: 2 },
  { _id: "3", title: "Platillo Estrella 3", category: "platos", description: "Descripción del platillo. Agrega ingredientes y lo que lo hace especial.", price: "L. 000", featured: true, order: 3 },
];

const CAT_LABEL: Record<string, string> = {
  entradas: "Entrada", platos: "Plato Fuerte", postres: "Postre", bebidas: "Bebida",
};

function PlatilloCard({ dish, index }: { dish: SanityDish; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const numY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: index * 0.13, ease: [0.16, 1, 0.3, 1] }}
      className="group relative rounded-2xl border border-white/5 hover:border-[#E5B21A]/15 transition-colors duration-300 overflow-hidden flex flex-col"
      style={{ background: "linear-gradient(180deg, #141208 0%, #0f0f0f 100%)" }}
    >
      {/* Image */}
      <div className="relative w-full aspect-[4/3] overflow-hidden">
        {dish.image?.asset ? (
          <Image
            src={urlFor(dish.image).width(600).height(450).url()}
            alt={dish.image.alt ?? dish.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-[#1a1508] to-[#0f0f0f] flex items-center justify-center">
            <motion.span
              style={{ y: numY, fontFamily: "var(--font-playfair)" }}
              className="absolute -bottom-4 -right-2 text-[110px] font-bold leading-none text-[#E5B21A]/6 select-none pointer-events-none"
            >
              {String(index + 1).padStart(2, "0")}
            </motion.span>
            <div className="absolute top-0 left-0 w-14 h-px bg-gradient-to-r from-[#E5B21A]/40 to-transparent" />
            <div className="absolute top-0 left-0 w-px h-14 bg-gradient-to-b from-[#E5B21A]/40 to-transparent" />
            <span className="text-[#E5B21A]/20 text-[10px] tracking-widest uppercase relative z-10">
              Foto del platillo
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <span className="text-[#E5B21A]/60 text-[10px] tracking-[0.2em] uppercase font-medium mb-2">
          {CAT_LABEL[dish.category] ?? dish.category}
        </span>
        <h3 className="text-[#F9FAFB] text-2xl font-semibold mb-2 leading-tight" style={{ fontFamily: "var(--font-playfair)" }}>
          {dish.title}
        </h3>
        {dish.description && (
          <p className="text-[#9CA3AF] text-sm leading-relaxed font-light flex-1 mb-5">{dish.description}</p>
        )}
        <div className="flex items-center justify-between pt-4 border-t border-white/5">
          <span className="text-[#E5B21A] font-semibold text-xl" style={{ fontFamily: "var(--font-playfair)" }}>
            {dish.price}
          </span>
          <a href={WA_ORDER} target="_blank" rel="noopener noreferrer"
            className="text-xs text-[#9CA3AF] hover:text-[#E5B21A] border border-white/8 hover:border-[#E5B21A]/30 px-4 py-2 rounded-full transition-all duration-200">
            Ordenar →
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Especialidades() {
  const [dishes, setDishes] = useState<SanityDish[]>([]);

  useEffect(() => {
    getFeaturedDishes().then((data) => setDishes(data.length ? data : FALLBACK));
  }, []);

  const items = dishes.length ? dishes : FALLBACK;

  return (
    <section id="menu" className="py-16 md:py-28 px-4 md:px-6" style={{ background: "linear-gradient(180deg, #080808 0%, #060604 60%, #080808 100%)" }}>
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 md:mb-16">
          <div>
            <p className="text-[#E5B21A] text-xs tracking-[0.3em] uppercase mb-5 font-medium">Lo mejor de la casa</p>
            <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-light text-[#F9FAFB]" style={{ fontFamily: "var(--font-playfair)" }}>
              Nuestras <em className="not-italic text-[#E5B21A] font-semibold">Especialidades</em>
            </h2>
          </div>
          <Link href="/menu" className="shrink-0 inline-flex items-center gap-2 border border-[#E5B21A]/30 hover:border-[#E5B21A]/60 hover:bg-[#E5B21A]/5 text-[#9CA3AF] hover:text-[#E5B21A] text-sm font-medium px-7 py-3 rounded-full transition-all duration-200">
            Ver carta completa →
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {items.map((dish, i) => <PlatilloCard key={dish._id} dish={dish} index={i} />)}
        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mt-10 text-center">
          <Link href="/menu" className="inline-flex items-center gap-2 bg-[#E5B21A] hover:bg-[#FCD34D] text-[#0A0A0A] font-semibold px-10 py-4 rounded-full text-base transition-all duration-200 shadow-[0_0_24px_rgba(229,178,26,0.18)]">
            Ver menú digital completo
          </Link>
          <p className="text-[#9CA3AF]/40 text-xs mt-4">Disponible como QR para tu mesa · escanea y ordena</p>
        </motion.div>
      </div>
    </section>
  );
}
