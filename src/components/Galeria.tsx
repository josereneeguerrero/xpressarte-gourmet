"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { getGalleryImages } from "@/sanity/queries";
import { urlFor } from "@/sanity/image";
import ReservarButton from "@/components/ReservarButton";
import { ImageAutoSlider } from "@/components/ui/image-auto-slider";

const FALLBACK_IMAGES = [
  { src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=640&q=80", alt: "Ambiente elegante de XpressArte Gourmet Cuisine, Comayagua Honduras" },
  { src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=640&q=80", alt: "Salón principal de XpressArte Gourmet Cuisine en Plaza San Blas" },
  { src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=640&q=80", alt: "Cocina gourmet de XpressArte, restaurante en Comayagua" },
  { src: "https://images.unsplash.com/photo-1544148103-0773bf10d330?w=640&q=80", alt: "Mesa preparada en XpressArte Gourmet Cuisine, Comayagua" },
  { src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=640&q=80", alt: "Vista del restaurante XpressArte en el tercer nivel de Plaza San Blas" },
  { src: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=640&q=80", alt: "Detalle de mesa en XpressArte Gourmet Cuisine, Comayagua Honduras" },
];

export default function Galeria() {
  const [sliderImages, setSliderImages] = useState(FALLBACK_IMAGES);

  useEffect(() => {
    getGalleryImages().then((data) => {
      if (data.length >= 3) {
        setSliderImages(
          data.map((img) => ({
            src: urlFor(img.image).width(640).height(640).fit("crop").crop("center").url(),
            alt: img.image.alt ?? img.caption ?? "XpressArte Gourmet",
          }))
        );
      }
    });
  }, []);

  return (
    <section
      className="py-16 md:py-28 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #080808 0%, #0a0905 50%, #080808 100%)" }}
    >
      {/* Header */}
      <div className="px-4 md:px-6 max-w-7xl mx-auto mb-10 md:mb-14">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div>
            <p className="text-[#E5B21A] text-xs tracking-[0.3em] uppercase mb-5 font-medium">
              Tercer nivel · Plaza San Blas
            </p>
            <h2
              className="font-heading text-3xl sm:text-5xl md:text-6xl font-light text-[#F9FAFB]"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Nuestro <em className="not-italic text-[#E5B21A] font-semibold">Ambiente</em>
            </h2>
            <p className="text-[#9CA3AF]/80 mt-4 max-w-md text-base font-light leading-relaxed">
              Un espacio diseñado para que la experiencia vaya más allá del plato.
              Cada rincón tiene su propio carácter.
            </p>
          </div>
          <ReservarButton
            className="shrink-0 inline-flex items-center gap-2 border border-[#E5B21A]/40 text-[#E5B21A] hover:bg-[#E5B21A]/10 font-semibold px-7 py-3 rounded-full text-sm transition-all duration-200"
            iconSize={16}
          />
        </motion.div>
      </div>

      {/* Auto-slider — full bleed */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <ImageAutoSlider images={sliderImages} speed={28} />
      </motion.div>
    </section>
  );
}
