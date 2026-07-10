import { defineCollection, z } from 'astro:content';

const articles = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    dek: z.string(),
    domain: z.enum(['fintech', 'hr', 'marketing', 'research', 'all']),
    relevance: z.number().min(1).max(5),
    author: z.string().default('Clearing Desk'),
    readTime: z.number(),
    date: z.date(),
    featured: z.boolean().default(false),
    gradient: z.string().default('grad-1'),
  }),
});

export const collections = { articles };
