"use client";

export const dynamic = "force-dynamic";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Plus, Minus, X, ShoppingBag, CalendarDays, MessageCircle } from "lucide-react";
import { getAllDishes, type SanityDish } from "@/sanity/queries";
import { urlFor } from "@/sanity/image";

const WA_BASE = "https://wa.me/50488738716?text=";

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

type CartItem = { dish: SanityDish; qty: number };
type PanelMode = "reservar" | "domicilio" | null;

const inputCls =
  "w-full bg-[#1a1a1a] border border-white/10 rounded-xl px-4 py-3 text-[#F9FAFB] text-sm placeholder:text-[#6B7280] focus:outline-none focus:border-[#E5B21A]/50 transition-colors";

function buildReservaUrl(f: { nombre: string; telefono: string; fecha: string; hora: string; personas: string; notas: string }) {
  const msg = [
    "🍽️ *Reservación — XpressArte Gourmet Cuisine*",
    "",
    `👤 Nombre: ${f.nombre}`,
    `📞 Teléfono: ${f.telefono}`,
    `📅 Fecha: ${f.fecha}`,
    `⏰ Hora: ${f.hora}`,
    `👥 Personas: ${f.personas}`,
    f.notas ? `📝 Notas: ${f.notas}` : null,
  ].filter(Boolean).join("\n");
  return WA_BASE + encodeURIComponent(msg);
}

function buildDomicilioUrl(
  f: { nombre: string; telefono: string; direccion: string; notas: string },
  cart: CartItem[]
) {
  const items = cart.map((c) => `  • ${c.qty > 1 ? `${c.qty}x ` : ""}${c.dish.title} — ${c.dish.price}`);
  const msg = [
    "🛵 *Pedido a Domicilio — XpressArte Gourmet Cuisine*",
    "",
    `👤 Nombre: ${f.nombre}`,
    `📞 Teléfono: ${f.telefono}`,
    `🏠 Dirección: ${f.direccion}`,
    "",
    "*Mi orden:*",
    ...items,
    "",
    "_(Precios sin ISV 15%)_",
    f.notas ? `📝 Notas: ${f.notas}` : null,
  ].filter(Boolean).join("\n");
  return WA_BASE + encodeURIComponent(msg);
}

function DishCard({
  dish,
  cartQty,
  onAdd,
  onRemove,
}: {
  dish: SanityDish;
  cartQty: number;
  onAdd: () => void;
  onRemove: () => void;
}) {
  return (
    <div
      className="rounded-2xl border border-white/5 hover:border-[#E5B21A]/15 transition-colors duration-200 overflow-hidden flex flex-col"
      style={{ background: "linear-gradient(180deg, #141208 0%, #0f0f0f 100%)" }}
    >
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
        <h3
          className="text-[#F9FAFB] text-xl font-semibold mb-2"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          {dish.title}
        </h3>
        {dish.description && (
          <p className="text-[#9CA3AF] text-sm leading-relaxed font-light flex-1 mb-4">
            {dish.description}
          </p>
        )}

        <div className="flex items-center justify-between pt-3 border-t border-white/5">
          <span
            className="text-[#E5B21A] font-semibold text-xl"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            {dish.price}
          </span>

          {cartQty === 0 ? (
            <button
              onClick={onAdd}
              className="flex items-center gap-1.5 text-xs text-[#9CA3AF] hover:text-[#E5B21A] border border-white/8 hover:border-[#E5B21A]/40 px-4 py-2 rounded-full transition-all duration-200"
            >
              <Plus size={13} /> Agregar
            </button>
          ) : (
            <div className="flex items-center gap-2">
              <button
                onClick={onRemove}
                className="w-7 h-7 rounded-full border border-white/10 flex items-center justify-center text-[#9CA3AF] hover:text-[#E5B21A] hover:border-[#E5B21A]/40 transition-all"
              >
                <Minus size={12} />
              </button>
              <span className="text-[#E5B21A] font-semibold text-sm w-4 text-center">{cartQty}</span>
              <button
                onClick={onAdd}
                className="w-7 h-7 rounded-full border border-[#E5B21A]/40 bg-[#E5B21A]/10 flex items-center justify-center text-[#E5B21A] hover:bg-[#E5B21A]/20 transition-all"
              >
                <Plus size={12} />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function ReservarForm({ onClose }: { onClose: () => void }) {
  const [form, setForm] = useState({ nombre: "", telefono: "", fecha: "", hora: "", personas: "2", notas: "" });
  const valid = form.nombre && form.telefono && form.fecha && form.hora;

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((p) => ({ ...p, [k]: e.target.value }));

  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-2 gap-3">
        <div className="col-span-2">
          <label className="text-[#9CA3AF] text-xs mb-1.5 block">Nombre completo *</label>
          <input className={inputCls} placeholder="Tu nombre" value={form.nombre} onChange={set("nombre")} />
        </div>
        <div className="col-span-2">
          <label className="text-[#9CA3AF] text-xs mb-1.5 block">Teléfono *</label>
          <input className={inputCls} placeholder="+504 0000-0000" type="tel" value={form.telefono} onChange={set("telefono")} />
        </div>
        <div>
          <label className="text-[#9CA3AF] text-xs mb-1.5 block">Fecha *</label>
          <input className={inputCls} type="date" value={form.fecha} onChange={set("fecha")} />
        </div>
        <div>
          <label className="text-[#9CA3AF] text-xs mb-1.5 block">Hora *</label>
          <input className={inputCls} type="time" value={form.hora} onChange={set("hora")} />
        </div>
        <div className="col-span-2">
          <label className="text-[#9CA3AF] text-xs mb-1.5 block">Número de personas</label>
          <select className={inputCls} value={form.personas} onChange={set("personas")}>
            {["1","2","3","4","5","6","7","8","9","10+"].map((n) => (
              <option key={n} value={n}>{n} {n === "1" ? "persona" : "personas"}</option>
            ))}
          </select>
        </div>
        <div className="col-span-2">
          <label className="text-[#9CA3AF] text-xs mb-1.5 block">Notas especiales</label>
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
      {!valid && <p className="text-[#4B5563] text-xs text-center -mt-2">Completa los campos requeridos (*)</p>}
    </div>
  );
}

function DomicilioForm({ cart, onClose }: { cart: CartItem[]; onClose: () => void }) {
  const [form, setForm] = useState({ nombre: "", telefono: "", direccion: "", notas: "" });
  const valid = form.nombre && form.telefono && form.direccion && cart.length > 0;

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((p) => ({ ...p, [k]: e.target.value }));

  return (
    <div className="flex flex-col gap-4">
      {cart.length === 0 ? (
        <div className="bg-[#1a1508]/60 border border-[#E5B21A]/10 rounded-xl p-4 text-center">
          <p className="text-[#9CA3AF] text-sm">Aún no has agregado platillos.</p>
          <button onClick={onClose} className="text-[#E5B21A] text-sm mt-1 hover:underline">
            Volver a la carta →
          </button>
        </div>
      ) : (
        <div className="bg-[#111]/60 border border-white/5 rounded-xl p-4 space-y-2">
          <p className="text-[#9CA3AF] text-xs uppercase tracking-widest mb-3">Tu orden</p>
          {cart.map((c) => (
            <div key={c.dish._id} className="flex justify-between items-center text-sm">
              <span className="text-[#F9FAFB]">
                {c.qty > 1 && <span className="text-[#E5B21A] mr-1.5">{c.qty}x</span>}
                {c.dish.title}
              </span>
              <span className="text-[#9CA3AF]">{c.dish.price}</span>
            </div>
          ))}
        </div>
      )}

      <div className="grid grid-cols-2 gap-3">
        <div className="col-span-2">
          <label className="text-[#9CA3AF] text-xs mb-1.5 block">Nombre completo *</label>
          <input className={inputCls} placeholder="Tu nombre" value={form.nombre} onChange={set("nombre")} />
        </div>
        <div className="col-span-2">
          <label className="text-[#9CA3AF] text-xs mb-1.5 block">Teléfono *</label>
          <input className={inputCls} placeholder="+504 0000-0000" type="tel" value={form.telefono} onChange={set("telefono")} />
        </div>
        <div className="col-span-2">
          <label className="text-[#9CA3AF] text-xs mb-1.5 block">Dirección de entrega *</label>
          <textarea
            className={inputCls + " resize-none h-20"}
            placeholder="Colonia, calle, referencia..."
            value={form.direccion}
            onChange={set("direccion")}
          />
        </div>
        <div className="col-span-2">
          <label className="text-[#9CA3AF] text-xs mb-1.5 block">Notas adicionales</label>
          <textarea
            className={inputCls + " resize-none h-16"}
            placeholder="Sin cebolla, extra salsa, etc."
            value={form.notas}
            onChange={set("notas")}
          />
        </div>
      </div>

      <a
        href={valid ? buildDomicilioUrl(form, cart) : undefined}
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
        Enviar pedido por WhatsApp
      </a>
      {!valid && (
        <p className="text-[#4B5563] text-xs text-center -mt-2">
          {cart.length === 0 ? "Agrega platillos primero" : "Completa los campos requeridos (*)"}
        </p>
      )}
    </div>
  );
}

function OrderPanel({
  mode,
  cart,
  onClose,
}: {
  mode: PanelMode;
  cart: CartItem[];
  onClose: () => void;
}) {
  if (!mode) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-end justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />
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
                {mode === "reservar" ? "Reservar Mesa" : "Pedido a Domicilio"}
              </h2>
              <p className="text-[#9CA3AF] text-xs mt-0.5">
                {mode === "reservar"
                  ? "Te confirmamos por WhatsApp"
                  : "Te contactamos para coordinar entrega"}
              </p>
            </div>
            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-[#9CA3AF] hover:text-[#F9FAFB] transition-colors"
            >
              <X size={16} />
            </button>
          </div>

          {mode === "reservar" ? (
            <ReservarForm onClose={onClose} />
          ) : (
            <DomicilioForm cart={cart} onClose={onClose} />
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function MenuPage() {
  const [activa, setActiva] = useState("entradas");
  const [allDishes, setAllDishes] = useState<SanityDish[]>([]);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [panel, setPanel] = useState<PanelMode>(null);

  useEffect(() => {
    getAllDishes().then((data) => setAllDishes(data.length ? data : FALLBACK));
  }, []);

  const dishes = allDishes.length ? allDishes : FALLBACK;
  const filtered = dishes.filter((d) => d.category === activa);
  const cartTotal = cart.reduce((s, c) => s + c.qty, 0);

  const addToCart = (dish: SanityDish) =>
    setCart((prev) => {
      const existing = prev.find((c) => c.dish._id === dish._id);
      return existing
        ? prev.map((c) => c.dish._id === dish._id ? { ...c, qty: c.qty + 1 } : c)
        : [...prev, { dish, qty: 1 }];
    });

  const removeFromCart = (dish: SanityDish) =>
    setCart((prev) => {
      const existing = prev.find((c) => c.dish._id === dish._id);
      if (!existing) return prev;
      return existing.qty === 1
        ? prev.filter((c) => c.dish._id !== dish._id)
        : prev.map((c) => c.dish._id === dish._id ? { ...c, qty: c.qty - 1 } : c);
    });

  const getQty = (id: string) => cart.find((c) => c.dish._id === id)?.qty ?? 0;

  return (
    <div className="min-h-screen bg-[#080808] text-[#F9FAFB] pb-32">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-[#080808]/95 backdrop-blur-md border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[#9CA3AF] hover:text-[#E5B21A] text-sm transition-colors"
          >
            <ArrowLeft size={16} /> Volver
          </Link>
          <div className="text-center">
            <p className="text-[#E5B21A] font-semibold text-lg leading-none" style={{ fontFamily: "var(--font-playfair)" }}>
              XpressArte
            </p>
            <p className="text-[#9CA3AF] text-xs mt-0.5">Gourmet Cuisine</p>
          </div>
          {/* Cart badge */}
          <button
            onClick={() => setPanel("domicilio")}
            className="relative text-[#9CA3AF] hover:text-[#E5B21A] transition-colors"
            aria-label="Ver carrito"
          >
            <ShoppingBag size={20} />
            {cartTotal > 0 && (
              <span className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-[#E5B21A] text-[#0A0A0A] text-[10px] font-bold flex items-center justify-center">
                {cartTotal}
              </span>
            )}
          </button>
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
            Selecciona · Ordena · Disfruta
          </p>
          <h1
            className="text-5xl md:text-6xl font-light text-[#F9FAFB]"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Nuestra <em className="not-italic text-[#E5B21A] font-semibold">Carta</em>
          </h1>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#E5B21A]/50 to-transparent mx-auto mt-6" />
        </motion.div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {CATEGORIAS.map((cat) => (
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

        {/* Dishes grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activa}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {filtered.length ? (
              filtered.map((dish) => (
                <DishCard
                  key={dish._id}
                  dish={dish}
                  cartQty={getQty(dish._id)}
                  onAdd={() => addToCart(dish)}
                  onRemove={() => removeFromCart(dish)}
                />
              ))
            ) : (
              <p className="col-span-3 text-center text-[#9CA3AF] py-16 text-sm">
                Próximamente en esta categoría · Agrega platillos desde el panel admin en{" "}
                <span className="text-[#E5B21A]/70">/studio</span>
              </p>
            )}
          </motion.div>
        </AnimatePresence>

        <p className="text-[#9CA3AF]/40 text-xs text-center mt-12">
          * Los precios mostrados no incluyen ISV (15%). El precio final puede variar según disponibilidad o temporada.
        </p>
      </main>

      {/* Sticky bottom action bar */}
      <div className="fixed bottom-0 inset-x-0 z-40 bg-[#0a0a0a]/95 backdrop-blur-md border-t border-white/5 px-4 py-4 safe-area-pb">
        <div className="max-w-lg mx-auto grid grid-cols-2 gap-3">
          <button
            onClick={() => setPanel("reservar")}
            className="flex items-center justify-center gap-2 border border-[#E5B21A]/40 text-[#E5B21A] hover:bg-[#E5B21A]/10 rounded-xl py-3.5 text-sm font-semibold transition-all duration-200"
          >
            <CalendarDays size={17} />
            Reservar Mesa
          </button>
          <button
            onClick={() => setPanel("domicilio")}
            className="flex items-center justify-center gap-2 bg-[#E5B21A] hover:bg-[#FCD34D] text-[#0A0A0A] rounded-xl py-3.5 text-sm font-semibold transition-all duration-200 relative"
          >
            <ShoppingBag size={17} />
            Pedir a Domicilio
            {cartTotal > 0 && (
              <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-[#0A0A0A] text-[#E5B21A] text-[10px] font-bold flex items-center justify-center border border-[#E5B21A]/30">
                {cartTotal}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Order panel */}
      <AnimatePresence>
        {panel && (
          <OrderPanel mode={panel} cart={cart} onClose={() => setPanel(null)} />
        )}
      </AnimatePresence>
    </div>
  );
}
