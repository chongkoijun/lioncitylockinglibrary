import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const interviews = defineCollection({
  loader: glob({
    pattern: "*.md",
    base: "./src/content/interviews",
  }),
  schema: z.object({
  title: z.string(),
  date: z.string(),
  summary: z.string(),
  interviewee: z.string(),
  topics: z.array(z.string()),
  tags: z.array(z.string()),
}),
});

export const collections = {
  interviews,
};