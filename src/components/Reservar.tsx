"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const WA_LINK =
  "https://wa.me/50488738716?text=Hola%20XpressArte%2C%20me%20gustar%C3%ADa%20reservar%20una%20mesa%20para%20...%20persona(s)%20el%20d%C3%ADa%20...%20a%20las%20....%20Mi%20nombre%20es%20...";

const info = [
  {
    icon: MapPin,
    label: "Dirección",
    value: "3er Nivel, Plaza San Blas, Barrio San Blas, Comayagua",
    href: "https://maps.app.goo.gl/dRFrGqADi355DGuY6",
    truncate: false,
  },
  {
    icon: Phone,
    label: "WhatsApp",
    value: "+504 8873-8716",
    href: "https://wa.me/50488738716",
    truncate: false,
  },
  {
    icon: Mail,
    label: "Correo",
    value: "xpressartecomayagua@gmail.com",
    href: "mailto:xpressartecomayagua@gmail.com",
    truncate: true,
  },
  {
    icon: Clock,
    label: "Horario",
    value: null,
    hours: [
      "Lun – Vie · 10 a.m. – 10 p.m.",
      "Sáb – Dom · 10 a.m. – 10 p.m.",
      "Para llevar · 12 – 9 p.m.",
    ],
    note: "Los horarios pueden variar",
    href: null,
    truncate: false,
  },
];

type InfoEntry = (typeof info)[0];

function InfoItem({ item }: { item: InfoEntry }) {
  const inner = (
    <div
      className="flex gap-4 p-4 rounded-xl border border-white/5 hover:border-[#E5B21A]/15 transition-colors duration-200 group h-full"
      style={{ background: "linear-gradient(135deg, #141208 0%, #0f0f0f 100%)" }}
    >
      <div className="shrink-0 w-9 h-9 flex items-center justify-center rounded-full bg-[#E5B21A]/10">
        <item.icon size={15} className="text-[#E5B21A]" />
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-[#9CA3AF] text-xs mb-1">{item.label}</p>
        {"hours" in item && item.hours ? (
          <div className="flex flex-col gap-0.5">
            {item.hours.map((h) => (
              <p key={h} className="text-[#F9FAFB] text-xs leading-snug">{h}</p>
            ))}
            {item.note && (
              <p className="text-[#9CA3AF] text-[10px] mt-1 italic">{item.note}</p>
            )}
          </div>
        ) : (
          <p
            className={`text-[#F9FAFB] text-sm group-hover:text-[#E5B21A] transition-colors leading-snug ${
              item.truncate ? "truncate" : ""
            }`}
          >
            {item.value}
          </p>
        )}
      </div>
    </div>
  );

  if (item.href) {
    return (
      <a
        href={item.href}
        target={item.href.startsWith("mailto") ? "_self" : "_blank"}
        rel="noopener noreferrer"
        className="block h-full"
      >
        {inner}
      </a>
    );
  }
  return <div className="h-full">{inner}</div>;
}

export default function Reservar() {
  return (
    <section
      id="contacto"
      className="py-28 px-6"
      style={{ background: "linear-gradient(180deg, #080808 0%, #0a0905 50%, #080808 100%)" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Full-width header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          <p className="text-[#E5B21A] text-xs tracking-[0.3em] uppercase mb-5 font-medium">
            Reserva tu lugar
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2
              className="font-heading text-5xl md:text-6xl font-light text-[#F9FAFB] leading-tight"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Reserva tu mesa.{" "}
              <em className="not-italic text-[#E5B21A] font-semibold">Es así de fácil.</em>
            </h2>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-3 bg-[#E5B21A] hover:bg-[#FCD34D] text-[#0A0A0A] font-semibold px-8 py-4 rounded-full text-base transition-all duration-200 shadow-[0_0_30px_rgba(229,178,26,0.22)]"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.534 5.855L.057 23.215a.75.75 0 00.908.908l5.36-1.477A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.88 0-3.645-.502-5.173-1.38l-.371-.214-3.843 1.058 1.058-3.844-.214-.371A9.944 9.944 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
              </svg>
              Escribir por WhatsApp
            </a>
          </div>
          <p className="text-[#9CA3AF]/80 text-base leading-relaxed mt-5 max-w-xl font-light">
            Escríbenos y te confirmamos en minutos. El mismo número para reservas y pedidos a domicilio.
          </p>
        </motion.div>

        {/* Two symmetric columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Info cards 2×2 */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 content-start"
          >
            {info.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <InfoItem item={item} />
              </motion.div>
            ))}
          </motion.div>

          {/* Interactive map */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-2xl overflow-hidden border border-white/8 min-h-[300px]"
          >
            <iframe
              title="Ubicación XpressArte Gourmet Cuisine"
              src="https://maps.google.com/maps?q=XpressArte+Gourmet+Cuisine+Comayagua+Honduras&output=embed&z=16"
              width="100%"
              height="100%"
              style={{
                border: 0,
                minHeight: "300px",
                display: "block",
                filter:
                  "grayscale(60%) invert(90%) hue-rotate(180deg) brightness(0.82) contrast(1.1)",
              }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
