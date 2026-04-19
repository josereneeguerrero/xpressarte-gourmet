import { defineField, defineType } from "sanity";

export const galleryImageSchema = defineType({
  name: "galleryImage",
  title: "Foto de galería",
  type: "document",
  fields: [
    defineField({
      name: "image",
      title: "Imagen",
      type: "image",
      options: { hotspot: true },
      validation: (r) => r.required(),
      fields: [
        defineField({
          name: "alt",
          title: "Texto alternativo",
          type: "string",
        }),
      ],
    }),
    defineField({
      name: "caption",
      title: "Descripción corta",
      type: "string",
      description: "Ej: El salón principal, Vista panorámica...",
    }),
    defineField({
      name: "order",
      title: "Posición en galería",
      type: "number",
      description:
        "Elige un número del 1 al 5 según dónde quieres que aparezca la foto:\n\n" +
        "1 → ALTA IZQUIERDA — ocupa toda la altura (ideal foto vertical/portrait)\n" +
        "2 → CENTRO ARRIBA — tamaño normal (cuadrada o portrait)\n" +
        "3 → DERECHA ARRIBA — tamaño normal, solo visible en desktop (cuadrada o portrait)\n" +
        "4 → ANCHA ABAJO — ocupa el doble de ancho (ideal foto horizontal/landscape)\n" +
        "5 → FRANJA PANORÁMICA — barra ancha en el fondo (ideal foto muy horizontal)\n\n" +
        "Tip: si subes una foto vertical úsala en posición 1. Si es horizontal/apaisada, ponla en 4 o 5.",
      initialValue: 99,
    }),
  ],
  preview: {
    select: { title: "caption", media: "image" },
    prepare({ title, media }) {
      return { title: title ?? "Sin descripción", media };
    },
  },
  orderings: [
    { title: "Orden manual", name: "orderAsc", by: [{ field: "order", direction: "asc" }] },
  ],
});
