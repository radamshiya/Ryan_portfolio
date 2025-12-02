import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    role: z.string().optional(),
    date: z.string().optional(),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    imageCaption: z.string().optional(),
    featured: z.boolean().optional().default(false),
  }),
});

export const collections = {
  'projects': projectsCollection,
};
