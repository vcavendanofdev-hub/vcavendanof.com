import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    category: z.string(),
    lang: z.enum(['es', 'en']),
    // Shared key linking the ES and EN version of the same post (for hreflang pairing).
    translationKey: z.string(),
  }),
});

export const collections = { blog };
