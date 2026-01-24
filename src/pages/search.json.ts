import { getCollection } from 'astro:content';

export async function GET({}) {
  const reviews = await getCollection('reviews');
  
  // CORRECCIÓN: Añadido ": any" después de post
  const searchList = reviews.map((post: any) => ({
    title: post.data.title,
    filmTitle: post.data.filmTitle,
    slug: post.id,
    year: post.data.year,
    poster: post.data.poster, 
  }));

  return new Response(JSON.stringify(searchList), {
    headers: {
      'content-type': 'application/json;charset=UTF-8',
    },
  });
}