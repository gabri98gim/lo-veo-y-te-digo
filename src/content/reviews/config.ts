// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const reviews = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        filmTitle: z.string(), // Título original o internacional
        year: z.number(),
        rating: z.number().min(1).max(5),
        poster: z.string(),
        tags: z.array(z.string()),
        draft: z.boolean().default(false),
        duration: z.number().optional(),
        cover: z.string().optional(),

        // --- NUEVOS CAMPOS PARA LA FICHA TÉCNICA ---
        director: z.string().optional(),
        screenplay: z.string().optional(), // Guion
        music: z.string().optional(),
        photography: z.string().optional(),
        cast: z.string().optional(), // Lo ponemos string para copiar y pegar la lista entera
        production: z.string().optional(),
        gallery: z.array(z.string()).optional(),
        platform: z.string().optional(),
    }),
});

export const collections = {
    reviews: reviews,
};