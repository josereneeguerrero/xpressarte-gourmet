"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import ReservarButton from "@/components/ReservarButton";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section
      id="inicio"
      ref={ref}
      className="relative h-screen min-h-[680px] flex items-center justify-center overflow-hidden"
    >
      {/* Parallax background — photo + overlays */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 -top-20">
        <Image
          src="/images/hero-bg.jpg"
          alt="XpressArte Gourmet Cuisine"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Dark base overlay for readability */}
        <div className="absolute inset-0 bg-[#050505]/60" />
        {/* Warm gold glow from bottom */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 50% at 50% 110%, rgba(229,178,26,0.22) 0%, transparent 65%)",
          }}
        />
        {/* Extra darkening on top for text contrast */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(5,5,5,0.35) 0%, transparent 40%, rgba(5,5,5,0.2) 100%)",
          }}
        />
      </motion.div>

      {/* Bottom fade to page background */}
      <div
        className="absolute bottom-0 left-0 right-0 h-56 pointer-events-none"
        style={{
          background: "linear-gradient(to top, #080808 0%, transparent 100%)",
        }}
      />

      {/* Gold top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E5B21A]/40 to-transparent" />

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 text-center px-6 max-w-5xl mx-auto"
      >
        <motion.p
          initial={{ opacity: 0, letterSpacing: "0.1em" }}
          animate={{ opacity: 1, letterSpacing: "0.3em" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-[#E5B21A] text-xs font-medium tracking-[0.3em] uppercase mb-8"
        >
          Comayagua · Honduras
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl md:text-8xl font-heading font-light text-[#F9FAFB] leading-[1.05] mb-4"
          style={{ fontFamily: "var(--font-playfair)", letterSpacing: "-0.01em" }}
        >
          Donde cada platillo
          <br />
          <em className="text-[#E5B21A] not-italic font-semibold">es una obra de arte</em>
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="w-24 h-px bg-gradient-to-r from-transparent via-[#E5B21A] to-transparent mx-auto my-8"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-[#9CA3AF] text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed font-light"
        >
          Gastronomía gourmet con alma hondureña. Un ambiente que sorprende,
          un servicio que no se olvida.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <ReservarButton
            className="inline-flex items-center justify-center gap-2 border border-[#E5B21A]/40 text-[#E5B21A] hover:bg-[#E5B21A]/10 font-semibold px-10 py-4 rounded-full text-base transition-all duration-200"
            iconSize={18}
          />
          <a
            href="#menu"
            className="inline-flex items-center justify-center gap-2 border border-[#E5B21A]/30 hover:border-[#E5B21A]/70 text-[#F9FAFB]/80 hover:text-[#E5B21A] font-light px-10 py-4 rounded-full text-base transition-all duration-200 backdrop-blur-sm"
          >
            Ver Menú
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[#E5B21A] animate-bounce"
      >
        <ChevronDown size={20} />
      </motion.div>
    </section>
  );
}
