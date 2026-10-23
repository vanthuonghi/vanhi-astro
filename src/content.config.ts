import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const blogCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    image: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

const youtubeCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/youtube' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    thumbnail: z.string(),
    views: z.string().optional(),
    date: z.date(),
    video_id: z.string(),
    redirect_url: z.string(),
  }),
});

const giaiPhapCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/giai-phap' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    weight: z.number().optional(),
  }),
});

const congCuAiCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/cong-cu-ai' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    icon: z.string().optional(),
    weight: z.number().optional(),
    link: z.string().optional(),
  }),
});

const quaTangCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/qua-tang' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    icon: z.string().optional(),
    weight: z.number().optional(),
  }),
});

const lienHeCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/lien-he' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    icon: z.string().optional(),
    weight: z.number().optional(),
    link: z.string().optional(),
  }),
});

export const collections = {
  blog: blogCollection,
  youtube: youtubeCollection,
  'giai-phap': giaiPhapCollection,
  'cong-cu-ai': congCuAiCollection,
  'qua-tang': quaTangCollection,
  'lien-he': lienHeCollection,
};