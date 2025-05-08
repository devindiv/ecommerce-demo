import imageUrlBuilder from "@sanity/image-url";

// sanity/lib/client.ts
import { createClient } from 'next-sanity';

export const client = createClient({
  projectId: 'jbs35uzq',
  dataset: 'production',
  apiVersion: '2025-05-05',
  useCdn: true,
});


const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}
