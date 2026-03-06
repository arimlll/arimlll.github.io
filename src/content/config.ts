import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    category: z.string().optional(),
    lang: z.enum(['zh', 'en', 'ja']).default('zh'),
    draft: z.boolean().default(false),
    source: z.string().optional(),
  }),
});

export const collections = { blog };
