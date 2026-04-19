"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { getGalleryImages, type SanityGalleryImage } from "@/sanity/queries";
import { urlFor } from "@/sanity/image";
import ReservarButton from "@/components/ReservarButton";


const FALLBACK_LABELS = [
  { label: "El salón principal", hint: "Foto horizontal — ambiente general" },
  { label: "Detalle de mesa", hint: "Foto vertical — close-up" },
  { label: "Vista panorámica", hint: "Foto horizontal — vista del nivel" },
  { label: "Cocina en acción", hint: "Foto cuadrada" },
  { label: "Noche en XpressArte", hint: "Foto vertical — ambiente nocturno" },
];

function Placeholder({ label, hint, index }: { label: string; hint: string; index: number }) {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-4">
      <span className="text-[#E5B21A]/25 text-[10px] tracking-[0.25em] uppercase text-center">{label}</span>
      <span className="text-[#9CA3AF]/15 text-[9px] tracking-widest text-center">{hint}</span>
      <span className="absolute -bottom-3 -right-2 text-[80px] font-bold leading-none text-[#E5B21A]/4 select-none pointer-events-none" style={{ fontFamily: "var(--font-playfair)" }}>
        0{index + 1}
      </span>
    </div>
  );
}

function SlotBase({ className, delay, children }: { className: string; delay: number; children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      className={`relative overflow-hidden rounded-2xl group ${className}`}
      style={{ background: "linear-gradient(135deg, #1a1508 0%, #111108 60%, #0a0a0a 100%)" }}
    >
      <div className="absolute top-0 left-0 w-14 h-px bg-gradient-to-r from-[#E5B21A]/50 to-transparent z-10" />
      <div className="absolute top-0 left-0 w-px h-14 bg-gradient-to-b from-[#E5B21A]/50 to-transparent z-10" />
      <div className="absolute bottom-0 right-0 w-14 h-px bg-gradient-to-l from-[#E5B21A]/30 to-transparent z-10" />
      <div className="absolute inset-0 bg-[#E5B21A]/0 group-hover:bg-[#E5B21A]/4 transition-all duration-500 z-10" />
      {children}
    </motion.div>
  );
}

export default function Galeria() {
  const [images, setImages] = useState<SanityGalleryImage[]>([]);

  useEffect(() => {
    getGalleryImages().then(setImages);
  }, []);

  const slots = [0, 1, 2, 3].map((i) => images[i] ?? null);

  function renderSlotContent(img: SanityGalleryImage | null, index: number) {
    if (img?.image?.asset) {
      return (
        <Image
          src={urlFor(img.image).width(800).height(600).url()}
          alt={img.image.alt ?? img.caption ?? `Foto ${index + 1}`}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
        />
      );
    }
    const fb = FALLBACK_LABELS[index];
    return <Placeholder label={fb.label} hint={fb.hint} index={index} />;
  }

  return (
    <section className="py-28 px-6" style={{ background: "linear-gradient(180deg, #080808 0%, #0a0905 50%, #080808 100%)" }}>
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <p className="text-[#E5B21A] text-xs tracking-[0.3em] uppercase mb-5 font-medium">Tercer nivel · Plaza San Blas</p>
            <h2 className="font-heading text-5xl md:text-6xl font-light text-[#F9FAFB]" style={{ fontFamily: "var(--font-playfair)" }}>
              Nuestro <em className="not-italic text-[#E5B21A] font-semibold">Ambiente</em>
            </h2>
            <p className="text-[#9CA3AF]/80 mt-4 max-w-md text-base font-light leading-relaxed">
              Un espacio diseñado para que la experiencia vaya más allá del plato. Cada rincón tiene su propio carácter.
            </p>
          </div>
          <ReservarButton
            className="shrink-0 inline-flex items-center gap-2 border border-[#E5B21A]/40 text-[#E5B21A] hover:bg-[#E5B21A]/10 font-semibold px-7 py-3 rounded-full text-sm transition-all duration-200"
            iconSize={16}
          />
        </motion.div>

        {/* Editorial grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3" style={{ height: "clamp(460px, 55vw, 600px)" }}>
          <SlotBase className="row-span-2 col-span-1" delay={0}>{renderSlotContent(slots[0], 0)}</SlotBase>
          <SlotBase className="col-span-1 row-span-1" delay={0.1}>{renderSlotContent(slots[1], 1)}</SlotBase>
          <SlotBase className="col-span-1 row-span-1 hidden md:block" delay={0.15}>{renderSlotContent(slots[2], 2)}</SlotBase>
          <SlotBase className="col-span-1 md:col-span-2 row-span-1" delay={0.2}>{renderSlotContent(slots[3], 3)}</SlotBase>
        </div>

        {/* Strip 5 */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-3 relative overflow-hidden rounded-2xl group"
          style={{ height: "clamp(100px, 12vw, 160px)", background: "linear-gradient(135deg, #1a1508 0%, #0f0f0f 100%)" }}>
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E5B21A]/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E5B21A]/20 to-transparent" />
          <div className="absolute inset-0 bg-[#E5B21A]/0 group-hover:bg-[#E5B21A]/3 transition-all duration-500" />
          {images[4]?.image?.asset ? (
            <Image
              src={urlFor(images[4].image).width(1400).height(320).url()}
              alt={images[4].image.alt ?? "Ambiente XpressArte"}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-[#E5B21A]/20 text-[10px] tracking-[0.3em] uppercase">{FALLBACK_LABELS[4].label} · {FALLBACK_LABELS[4].hint}</span>
              <span className="absolute right-6 bottom-0 text-[70px] font-bold leading-none text-[#E5B21A]/4 select-none" style={{ fontFamily: "var(--font-playfair)" }}>05</span>
            </div>
          )}
        </motion.div>

      </div>
    </section>
  );
}
