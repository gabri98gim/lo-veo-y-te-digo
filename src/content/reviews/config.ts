import { defineCollection, z } from 'astro:content';

const reviews = defineCollection({
  type: 'content', // <--- ESTO ARREGLA EL ERROR DE .render()
  schema: z.object({
    title: z.string(),
    filmTitle: z.string(),
    year: z.number(),
    poster: z.string(),
    rating: z.number(),
    director: z.string(),
    cast: z.string(),
    duration: z.number(),
    platform: z.string().optional(),
    gallery: z.array(z.string()).optional(),
  }),
});

export const collections = { reviews };