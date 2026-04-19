import { defineField, defineType } from "sanity";

export const dishSchema = defineType({
  name: "dish",
  title: "Platillo",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Nombre del platillo",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "category",
      title: "Categoría",
      type: "string",
      options: {
        list: [
          { title: "Entradas", value: "entradas" },
          { title: "Platos Fuertes", value: "platos" },
          { title: "Postres", value: "postres" },
          { title: "Bebidas", value: "bebidas" },
        ],
        layout: "radio",
      },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "description",
      title: "Descripción",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "price",
      title: "Precio (ej. L. 250)",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "image",
      title: "Foto del platillo",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Texto alternativo",
          type: "string",
        }),
      ],
    }),
    defineField({
      name: "featured",
      title: "Destacar en página principal",
      type: "boolean",
      description: "Máximo 3 platillos destacados.",
      initialValue: false,
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
    select: { title: "title", subtitle: "category", media: "image" },
    prepare({ title, subtitle, media }) {
      const cats: Record<string, string> = {
        entradas: "Entrada",
        platos: "Plato Fuerte",
        postres: "Postre",
        bebidas: "Bebida",
      };
      return { title, subtitle: cats[subtitle] ?? subtitle, media };
    },
  },
  orderings: [
    { title: "Orden manual", name: "orderAsc", by: [{ field: "order", direction: "asc" }] },
    { title: "Categoría", name: "categoryAsc", by: [{ field: "category", direction: "asc" }] },
  ],
});
