"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import ReservarButton from "@/components/ReservarButton";

const WA_LINK =
  "https://wa.me/50488738716?text=Hola%20XpressArte%2C%20me%20gustar%C3%ADa%20reservar%20una%20mesa%20para%20...%20persona(s)%20el%20d%C3%ADa%20...%20a%20las%20....%20Mi%20nombre%20es%20...";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Menú", href: "#menu" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Reseñas", href: "#resenas" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0A0A0A]/95 backdrop-blur-md border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-3">
          <Image
            src="/images/logo.jpg"
            alt="XpressArte Gourmet Cuisine"
            width={52}
            height={52}
            className="rounded-sm object-cover"
            priority
          />
          <span
            className="hidden sm:block text-[#E5B21A] font-heading font-semibold text-lg leading-tight"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            XpressArte
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-[#9CA3AF] hover:text-[#E5B21A] transition-colors duration-200 tracking-wide"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-4">
          <ReservarButton
            className="hidden sm:inline-flex items-center gap-2 border border-[#E5B21A]/40 text-[#E5B21A] hover:bg-[#E5B21A]/10 text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200"
            iconSize={15}
          />
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-[#F9FAFB] p-2"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden bg-[#0A0A0A]/98 backdrop-blur-md border-t border-white/5 px-6 py-6">
          <ul className="flex flex-col gap-5 mb-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-base text-[#F9FAFB] hover:text-[#E5B21A] transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center bg-[#E5B21A] hover:bg-[#FCD34D] text-[#0A0A0A] font-semibold px-5 py-3 rounded-full transition-colors"
          >
            Reservar Mesa por WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}
