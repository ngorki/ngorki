import { z, defineCollection } from 'astro:content';

const blogCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        date: z.string().date(),
    })
});
const now = defineCollection({
    type: 'content',
    schema: z.object({
        date : z.string().date(),
    })
});

export const collections = {
    'blog': blogCollection,
    'now': now,
};