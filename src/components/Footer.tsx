import { Separator } from "@/components/ui/separator";

const WA_LINK =
  "https://wa.me/50488738716?text=Hola%20XpressArte%2C%20me%20gustar%C3%ADa%20reservar%20una%20mesa%20para%20...%20persona(s)%20el%20d%C3%ADa%20...%20a%20las%20....%20Mi%20nombre%20es%20...";

const sociales = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/p/XpressArte-100091378959251/",
    colorClass: "text-[#1877F2] hover:text-[#1877F2]/80",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/xpressarte.oficial",
    colorClass: "text-[#E1306C] hover:text-[#E1306C]/80",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    href: WA_LINK,
    colorClass: "text-[#25D366] hover:text-[#25D366]/80",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.534 5.855L.057 23.215a.75.75 0 00.908.908l5.36-1.477A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.88 0-3.645-.502-5.173-1.38l-.371-.214-3.843 1.058 1.058-3.844-.214-.371A9.944 9.944 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer
      className="border-t border-white/5 px-6 py-16"
      style={{ background: "linear-gradient(180deg, #080808 0%, #050505 100%)" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Gold divider top */}
        <div className="w-16 h-px bg-gradient-to-r from-[#E5B21A]/60 to-transparent mb-12" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3
              className="font-heading text-2xl font-semibold text-[#E5B21A] mb-3"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              XpressArte
            </h3>
            <p className="text-[#9CA3AF] text-sm leading-relaxed font-light">
              Gourmet Cuisine · Comayagua, Honduras
            </p>
            <p className="text-[#9CA3AF] text-sm mt-1 font-light">
              3er Nivel, Plaza San Blas, Barrio San Blas
            </p>
            <div className="flex gap-4 mt-6">
              {sociales.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className={`${s.colorClass} transition-colors duration-200`}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-[#F9FAFB] text-xs font-semibold mb-5 tracking-[0.15em] uppercase">
              Navegación
            </h4>
            <ul className="flex flex-col gap-3">
              {(["#inicio", "#menu", "#nosotros", "#resenas", "#contacto"] as const).map((href, i) => {
                const labels = ["Inicio", "Menú", "Nosotros", "Reseñas", "Contacto"];
                return (
                  <li key={href}>
                    <a href={href} className="text-[#9CA3AF] text-sm hover:text-[#E5B21A] transition-colors font-light">
                      {labels[i]}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[#F9FAFB] text-xs font-semibold mb-5 tracking-[0.15em] uppercase">
              Contacto
            </h4>
            <ul className="flex flex-col gap-3">
              <li>
                <a href="https://wa.me/50488738716" className="text-[#9CA3AF] text-sm hover:text-[#E5B21A] transition-colors font-light">
                  +504 8873-8716
                </a>
              </li>
              <li>
                <a href="mailto:xpressartecomayagua@gmail.com" className="text-[#9CA3AF] text-sm hover:text-[#E5B21A] transition-colors font-light break-all">
                  xpressartecomayagua@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://maps.app.goo.gl/dRFrGqADi355DGuY6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#9CA3AF] text-sm hover:text-[#E5B21A] transition-colors font-light"
                >
                  Ver en Google Maps →
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="bg-white/5 mb-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#9CA3AF]/50">
          <p>© {new Date().getFullYear()} XpressArte Gourmet Cuisine. Todos los derechos reservados.</p>
          <p>Desarrollada por Renee Guerrero</p>
        </div>
      </div>
    </footer>
  );
}
