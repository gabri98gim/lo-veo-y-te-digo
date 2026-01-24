import { defineCollection, z } from 'astro:content';

const reviews = defineCollection({
  // 👇 ESTA LÍNEA ES LA MAGIA QUE ARREGLA EL ERROR
  type: 'content', 
  
  // Esto valida tus datos para que no cometas errores al escribir
  schema: z.object({
    title: z.string(),
    filmTitle: z.string(),
    year: z.number(),
    rating: z.number(),
    poster: z.string(),
    // Los ponemos opcionales (.optional) por si alguna peli no tiene alguno
    cover: z.string().optional(),
    tags: z.array(z.string()).optional(),
    duration: z.number().optional(),
    director: z.string().optional(),
    cast: z.string().optional(), // Es string porque pones los actores separados por comas
    platform: z.string().optional(),
    gallery: z.array(z.string()).optional(),
  }),
});

export const collections = { reviews };