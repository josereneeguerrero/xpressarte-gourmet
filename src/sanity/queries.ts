import { client } from "./client";

export interface SanityDish {
  _id: string;
  title: string;
  category: string;
  description?: string;
  price: string;
  image?: { asset: { _ref: string }; alt?: string };
  featured?: boolean;
  order?: number;
}

export interface SanityGalleryImage {
  _id: string;
  image: { asset: { _ref: string }; alt?: string };
  caption?: string;
  order?: number;
}

export async function getFeaturedDishes(): Promise<SanityDish[]> {
  return client.fetch(
    `*[_type == "dish" && featured == true] | order(order asc)[0...3] {
      _id, title, category, description, price, image, featured, order
    }`
  );
}

export async function getAllDishes(): Promise<SanityDish[]> {
  return client.fetch(
    `*[_type == "dish"] | order(order asc) {
      _id, title, category, description, price, image, featured, order
    }`
  );
}

export async function getGalleryImages(): Promise<SanityGalleryImage[]> {
  return client.fetch(
    `*[_type == "galleryImage"] | order(order asc)[0...50] {
      _id, image, caption, order
    }`
  );
}
