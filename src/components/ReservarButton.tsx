"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CalendarDays, X, MessageCircle } from "lucide-react";

const WA_BASE = "https://wa.me/50488738716?text=";

const inputCls =
  "w-full bg-[#1a1a1a] border border-white/10 rounded-xl px-4 py-3 text-[#F9FAFB] text-sm placeholder:text-[#6B7280] focus:outline-none focus:border-[#E5B21A]/50 transition-colors";

function buildReservaUrl(f: {
  nombre: string;
  telefono: string;
  fecha: string;
  hora: string;
  personas: string;
  notas: string;
}) {
  const msg = [
    "🍽️ *Reservación — XpressArte Gourmet Cuisine*",
    "",
    `👤 Nombre: ${f.nombre}`,
    `📞 Teléfono: ${f.telefono}`,
    `📅 Fecha: ${f.fecha}`,
    `⏰ Hora: ${f.hora}`,
    `👥 Personas: ${f.personas}`,
    f.notas ? `📝 Notas: ${f.notas}` : null,
  ]
    .filter(Boolean)
    .join("\n");
  return WA_BASE + encodeURIComponent(msg);
}

function ReservarForm({ onClose }: { onClose: () => void }) {
  const [form, setForm] = useState({
    nombre: "",
    telefono: "",
    fecha: "",
    hora: "",
    personas: "2",
    notas: "",
  });
  const valid = form.nombre && form.telefono && form.fecha && form.hora;

  const set =
    (k: keyof typeof form) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >
    ) =>
      setForm((p) => ({ ...p, [k]: e.target.value }));

  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-2 gap-3">
        <div className="col-span-2">
          <label className="text-[#9CA3AF] text-xs mb-1.5 block">
            Nombre completo *
          </label>
          <input
            className={inputCls}
            placeholder="Tu nombre"
            value={form.nombre}
            onChange={set("nombre")}
          />
        </div>
        <div className="col-span-2">
          <label className="text-[#9CA3AF] text-xs mb-1.5 block">
            Teléfono *
          </label>
          <input
            className={inputCls}
            placeholder="+504 0000-0000"
            type="tel"
            value={form.telefono}
            onChange={set("telefono")}
          />
        </div>
        <div>
          <label className="text-[#9CA3AF] text-xs mb-1.5 block">
            Fecha *
          </label>
          <input
            className={inputCls}
            type="date"
            value={form.fecha}
            onChange={set("fecha")}
          />
        </div>
        <div>
          <label className="text-[#9CA3AF] text-xs mb-1.5 block">Hora *</label>
          <input
            className={inputCls}
            type="time"
            value={form.hora}
            onChange={set("hora")}
          />
        </div>
        <div className="col-span-2">
          <label className="text-[#9CA3AF] text-xs mb-1.5 block">
            Número de personas
          </label>
          <select
            className={inputCls}
            value={form.personas}
            onChange={set("personas")}
          >
            {["1", "2", "3", "4", "5", "6", "7", "8", "9", "10+"].map((n) => (
              <option key={n} value={n}>
                {n} {n === "1" ? "persona" : "personas"}
              </option>
            ))}
          </select>
        </div>
        <div className="col-span-2">
          <label className="text-[#9CA3AF] text-xs mb-1.5 block">
            Notas especiales
          </label>
          <textarea
            className={inputCls + " resize-none h-20"}
            placeholder="Ocasión especial, alergias, preferencias..."
            value={form.notas}
            onChange={set("notas")}
          />
        </div>
      </div>

      <a
        href={valid ? buildReservaUrl(form) : undefined}
        target="_blank"
        rel="noopener noreferrer"
        onClick={!valid ? (e) => e.preventDefault() : undefined}
        className={`flex items-center justify-center gap-2 w-full py-4 rounded-xl font-semibold text-sm transition-all duration-200 ${
          valid
            ? "bg-[#25D366] hover:bg-[#1ebe5d] text-white shadow-[0_0_24px_rgba(37,211,102,0.2)]"
            : "bg-white/5 text-[#4B5563] cursor-not-allowed"
        }`}
      >
        <MessageCircle size={18} />
        Confirmar reservación por WhatsApp
      </a>
      {!valid && (
        <p className="text-[#4B5563] text-xs text-center -mt-2">
          Completa los campos requeridos (*)
        </p>
      )}
    </div>
  );
}

export default function ReservarButton({
  className,
  iconSize = 16,
}: {
  className?: string;
  iconSize?: number;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)} className={className}>
        <CalendarDays size={iconSize} />
        Reservar Mesa
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 flex items-end justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            <motion.div
              className="relative w-full max-w-lg bg-[#111] border-t border-white/10 rounded-t-3xl p-6 pb-10 max-h-[90vh] overflow-y-auto"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
            >
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2
                    className="text-[#F9FAFB] text-2xl font-semibold"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    Reservar Mesa
                  </h2>
                  <p className="text-[#9CA3AF] text-xs mt-0.5">
                    Te confirmamos por WhatsApp
                  </p>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-[#9CA3AF] hover:text-[#F9FAFB] transition-colors"
                >
                  <X size={16} />
                </button>
              </div>
              <ReservarForm onClose={() => setOpen(false)} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
