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
