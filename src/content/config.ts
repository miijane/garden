import { defineCollection, z } from "astro:content";

const blog = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        author: z.string(),
        date: z.coerce.date(),
        tags: z.array(z.string())
    })
})

const library = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        author: z.string(),
        rating: z.number(),
        finished: z.boolean()
    })
})

const projects = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        tags: z.array(z.string()),
        demo: z.string(),
        completed: z.boolean()
    })
})

export const collections = {
    'blog': blog,
    'library': library,
    'projects': projects
}