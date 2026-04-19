"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getAllDishes, type SanityDish } from "@/sanity/queries";
import { urlFor } from "@/sanity/image";

const WA_ORDER =
  "https://wa.me/50488738716?text=Hola%20XpressArte%2C%20me%20gustar%C3%ADa%20hacer%20un%20pedido.%20Mi%20orden%20es%20...";

const CATEGORIAS = [
  { id: "entradas", label: "Entradas" },
  { id: "platos", label: "Platos Fuertes" },
  { id: "postres", label: "Postres" },
  { id: "bebidas", label: "Bebidas" },
];

const FALLBACK: SanityDish[] = [
  { _id: "f1", title: "Platillo 1", category: "entradas", description: "Descripción del platillo aquí.", price: "L. 000" },
  { _id: "f2", title: "Platillo 2", category: "entradas", description: "Descripción del platillo aquí.", price: "L. 000" },
  { _id: "f3", title: "Plato Fuerte 1", category: "platos", description: "Descripción del platillo aquí.", price: "L. 000" },
  { _id: "f4", title: "Plato Fuerte 2", category: "platos", description: "Descripción del platillo aquí.", price: "L. 000" },
  { _id: "f5", title: "Postre 1", category: "postres", description: "Descripción del platillo aquí.", price: "L. 000" },
  { _id: "f6", title: "Bebida 1", category: "bebidas", description: "Descripción aquí.", price: "L. 000" },
];

function DishCard({ dish }: { dish: SanityDish }) {
  return (
    <div className="rounded-2xl border border-white/5 hover:border-[#E5B21A]/15 transition-colors duration-200 overflow-hidden flex flex-col"
      style={{ background: "linear-gradient(180deg, #141208 0%, #0f0f0f 100%)" }}>
      <div className="relative w-full aspect-[4/3]">
        {dish.image?.asset ? (
          <Image
            src={urlFor(dish.image).width(600).height(450).url()}
            alt={dish.image.alt ?? dish.title}
            fill
            className="object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-[#1a1508] to-[#0f0f0f] flex items-center justify-center">
            <div className="absolute top-0 left-0 w-12 h-px bg-gradient-to-r from-[#E5B21A]/40 to-transparent" />
            <div className="absolute top-0 left-0 w-px h-12 bg-gradient-to-b from-[#E5B21A]/40 to-transparent" />
            <span className="text-[#E5B21A]/20 text-[10px] tracking-widest uppercase">Foto</span>
          </div>
        )}
      </div>
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-[#F9FAFB] text-xl font-semibold mb-2" style={{ fontFamily: "var(--font-playfair)" }}>
          {dish.title}
        </h3>
        {dish.description && (
          <p className="text-[#9CA3AF] text-sm leading-relaxed font-light flex-1 mb-4">{dish.description}</p>
        )}
        <div className="flex items-center justify-between pt-3 border-t border-white/5">
          <span className="text-[#E5B21A] font-semibold text-xl" style={{ fontFamily: "var(--font-playfair)" }}>
            {dish.price}
          </span>
          <a href={WA_ORDER} target="_blank" rel="noopener noreferrer"
            className="text-xs text-[#9CA3AF] hover:text-[#E5B21A] border border-white/8 hover:border-[#E5B21A]/30 px-4 py-2 rounded-full transition-all duration-200">
            Ordenar
          </a>
        </div>
      </div>
    </div>
  );
}

export default function MenuPage() {
  const [activa, setActiva] = useState("entradas");
  const [allDishes, setAllDishes] = useState<SanityDish[]>([]);

  useEffect(() => {
    getAllDishes().then((data) => setAllDishes(data.length ? data : FALLBACK));
  }, []);

  const dishes = allDishes.length ? allDishes : FALLBACK;
  const filtered = dishes.filter((d) => d.category === activa);

  return (
    <div className="min-h-screen bg-[#080808] text-[#F9FAFB]">
      <header className="sticky top-0 z-50 bg-[#080808]/95 backdrop-blur-md border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="inline-flex items-center gap-2 text-[#9CA3AF] hover:text-[#E5B21A] text-sm transition-colors">
            <ArrowLeft size={16} /> Volver
          </Link>
          <div className="text-center">
            <p className="text-[#E5B21A] font-semibold text-lg leading-none" style={{ fontFamily: "var(--font-playfair)" }}>XpressArte</p>
            <p className="text-[#9CA3AF] text-xs mt-0.5">Gourmet Cuisine</p>
          </div>
          <a href={WA_ORDER} target="_blank" rel="noopener noreferrer"
            className="text-xs font-semibold bg-[#E5B21A] hover:bg-[#FCD34D] text-[#0A0A0A] px-4 py-2 rounded-full transition-colors">
            Pedir
          </a>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-14">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-14">
          <p className="text-[#E5B21A] text-xs tracking-[0.3em] uppercase mb-4 font-medium">Comayagua, Honduras</p>
          <h1 className="text-5xl md:text-6xl font-light text-[#F9FAFB]" style={{ fontFamily: "var(--font-playfair)" }}>
            Nuestra <em className="not-italic text-[#E5B21A] font-semibold">Carta</em>
          </h1>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#E5B21A]/50 to-transparent mx-auto mt-6" />
        </motion.div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {CATEGORIAS.map((cat) => (
            <button key={cat.id} onClick={() => setActiva(cat.id)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                activa === cat.id
                  ? "bg-[#E5B21A] text-[#0A0A0A] shadow-[0_0_20px_rgba(229,178,26,0.2)]"
                  : "border border-white/8 text-[#9CA3AF] hover:border-[#E5B21A]/40 hover:text-[#F9FAFB]"
              }`}>
              {cat.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div key={activa} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.length ? (
              filtered.map((dish) => <DishCard key={dish._id} dish={dish} />)
            ) : (
              <p className="col-span-3 text-center text-[#9CA3AF] py-16 text-sm">
                Próximamente en esta categoría · Agrega platillos desde el panel admin en <span className="text-[#E5B21A]/70">/studio</span>
              </p>
            )}
          </motion.div>
        </AnimatePresence>

        <div className="mt-16 text-center space-y-2 border-t border-white/5 pt-10">
          <p className="text-[#9CA3AF]/50 text-xs">* Los precios mostrados no incluyen ISV (15%). El precio final puede variar según disponibilidad o temporada.</p>
          <p className="text-[#9CA3AF] text-sm mt-2">
            Pedidos a domicilio y reservas por{" "}
            <a href={WA_ORDER} target="_blank" rel="noopener noreferrer" className="text-[#E5B21A] hover:text-[#FCD34D] underline underline-offset-2 transition-colors">
              WhatsApp · +504 8873-8716
            </a>
          </p>
        </div>
      </main>
    </div>
  );
}
