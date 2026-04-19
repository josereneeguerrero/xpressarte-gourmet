"use client";

import { motion } from "framer-motion";
import { AnimatedTestimonials, type Testimonial } from "@/components/ui/animated-testimonials";

const testimonios: Testimonial[] = [
  {
    id: 1,
    name: "María G.",
    role: "TripAdvisor",
    company: "",
    content:
      "Un lugar increíble. La comida está a otro nivel — no esperaba encontrar algo así en Comayagua. El servicio fue atento de principio a fin.",
    rating: 5,
    link: "https://www.tripadvisor.es/Restaurant_Review-g292021-d33255687-Reviews-Xpressarte_Gourmet_Cuisine-Comayagua_Comayagua_Department.html",
  },
  {
    id: 2,
    name: "Carlos R.",
    role: "Google Maps",
    company: "",
    content:
      "Fui por primera vez y ya quiero volver. El ambiente del tercer nivel de Plaza San Blas es genial. Los platillos tienen mucho sabor y la presentación es impresionante.",
    rating: 5,
    link: "https://maps.app.goo.gl/dRFrGqADi355DGuY6",
  },
  {
    id: 3,
    name: "Andrea M.",
    role: "TripAdvisor",
    company: "",
    content:
      "Perfecto para una cena especial. No es el típico restaurante — se nota que detrás hay gente que disfruta lo que hace. Volvería sin pensarlo.",
    rating: 5,
    link: "https://www.tripadvisor.es/Restaurant_Review-g292021-d33255687-Reviews-Xpressarte_Gourmet_Cuisine-Comayagua_Comayagua_Department.html",
  },
];

export default function Testimonios() {
  return (
    <section
      id="resenas"
      className="py-16 md:py-28 px-4 md:px-6"
      style={{ background: "linear-gradient(180deg, #080808 0%, #060604 60%, #080808 100%)" }}
    >
      <div className="max-w-6xl mx-auto">
        <AnimatedTestimonials
          badgeText="Lo que dicen nuestros clientes"
          title={
            <>
              Reseñas{" "}
              <em className="not-italic text-[#E5B21A] font-semibold">reales</em>
            </>
          }
          subtitle="No lo decimos nosotros. Lo dicen quienes han estado aquí."
          testimonials={testimonios}
          autoRotateInterval={6000}
        />

        {/* Platform CTAs */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mt-10 md:mt-16"
        >
          {/* Google Maps */}
          <a
            href="https://maps.app.goo.gl/dRFrGqADi355DGuY6"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 border border-white/8 hover:border-white/20 text-[#9CA3AF] hover:text-white text-sm px-5 py-2.5 rounded-full transition-all duration-200 group"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="#EA4335"/>
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="url(#gmaps-grad)"/>
              <circle cx="12" cy="9" r="2.5" fill="white"/>
              <defs>
                <linearGradient id="gmaps-grad" x1="5" y1="2" x2="19" y2="22" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#EA4335"/>
                  <stop offset="50%" stopColor="#FBBC04"/>
                  <stop offset="100%" stopColor="#34A853"/>
                </linearGradient>
              </defs>
            </svg>
            <span className="group-hover:text-white transition-colors">Reseñas en Google Maps</span>
          </a>

          {/* TripAdvisor */}
          <a
            href="https://www.tripadvisor.es/Restaurant_Review-g292021-d33255687-Reviews-Xpressarte_Gourmet_Cuisine-Comayagua_Comayagua_Department.html"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 border border-white/8 hover:border-[#34E0A1]/30 text-[#9CA3AF] hover:text-[#34E0A1] text-sm px-5 py-2.5 rounded-full transition-all duration-200 group"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <ellipse cx="7" cy="14" rx="3.2" ry="3.2" fill="#34E0A1"/>
              <ellipse cx="17" cy="14" rx="3.2" ry="3.2" fill="#34E0A1"/>
              <circle cx="7" cy="14" r="1.3" fill="#161616"/>
              <circle cx="17" cy="14" r="1.3" fill="#161616"/>
              <path d="M3 10.5C3 10.5 5.5 7 12 7s9 3.5 9 3.5" stroke="#34E0A1" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M1.5 10.5L5 8M22.5 10.5L19 8" stroke="#34E0A1" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            <span className="group-hover:text-[#34E0A1] transition-colors">Reseñas en TripAdvisor</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
