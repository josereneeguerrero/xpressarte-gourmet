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
      title: "Orden",
      type: "number",
      description: "Número menor = aparece primero.",
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
