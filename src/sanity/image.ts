import imageUrlBuilder from "@sanity/image-url";
import { client } from "./client";

const builder = imageUrlBuilder(client);

// source typed as unknown to avoid any — Sanity image refs are validated at runtime
export function urlFor(source: Parameters<typeof builder.image>[0]) {
  return builder.image(source);
}
