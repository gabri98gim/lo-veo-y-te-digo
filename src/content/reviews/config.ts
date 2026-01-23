import { defineCollection, z } from 'astro:content';

const reviews = defineCollection({
    type: 'content', // Son archivos Markdown (contenido + datos)
    schema: z.object({
        title: z.string(), // El título de tu artículo (ej: "Dune: Una obra maestra")
        filmTitle: z.string(), // El título de la peli (ej: "Dune: Part Two")
        year: z.number(),
        rating: z.number().min(1).max(5), // Tu nota (1-5)
        poster: z.string(), // URL o ruta de la imagen
        tags: z.array(z.string()), // Ej: ['Sci-Fi', 'Villeneuve']
        draft: z.boolean().default(false), // Para borradores que no quieras publicar aún
    }),
});

export const collections = {
    reviews: reviews,
};