import { glob } from "astro/loaders";
import { defineCollection } from "astro:content";
import { z } from "astro/zod";

const commonFields = {
  title: z.string(),
  description: z.string(),
  meta_title: z.string().optional(),
  // z.coerce.date() handles both Date objects and ISO string dates from frontmatter (Zod 4)
  date: z.coerce.date().optional(),
  image: z.string().optional(),
  noindex: z.boolean().optional(),
  canonical: z.string().optional(),
  draft: z.boolean(),
};

// Pages collection schema (Impressum, Datenschutz, ...)
const pagesCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/pages" }),
  schema: z.object({
    ...commonFields,
  }),
});

// reusable pieces for the homepage schema
const image = { image: z.string(), image_alt: z.string() };
const sectionHead = {
  eyebrow: z.string(),
  title: z.string(),
  intro: z.string().optional(),
};

// Homepage (single page) collection schema
const homepageCollection = defineCollection({
  loader: glob({ pattern: "**/-*.{md,mdx}", base: "src/content/homepage" }),
  schema: z.object({
    meta_title: z.string(),
    description: z.string(),
    hero: z.object({
      eyebrow: z.string(),
      title: z.string(),
      content: z.string(),
      cta_secondary: z.string(),
      ...image,
    }),
    trust: z.array(z.object({ title: z.string(), text: z.string() })),
    services: z.object({
      ...sectionHead,
      items: z.array(
        z.object({
          title: z.string(),
          text: z.string(),
          detail: z.string(),
          ...image,
        }),
      ),
      highlight: z.object({
        eyebrow: z.string(),
        title: z.string(),
        text: z.string(),
        link: z.string(),
        link_label: z.string(),
      }),
    }),
    references: z.object({
      ...sectionHead,
      before_after: z.object({
        title: z.string(),
        text: z.string(),
        before: z.string(),
        before_alt: z.string(),
        after: z.string(),
        after_alt: z.string(),
      }),
      gallery: z.array(
        z.object({ image: z.string(), alt: z.string(), caption: z.string() }),
      ),
    }),
    about: z.object({
      ...sectionHead,
      content: z.string(),
      values: z.array(z.object({ title: z.string(), text: z.string() })),
      timeline: z.array(z.object({ year: z.string(), text: z.string() })),
      partners: z.string(),
    }),
    process: z.object({
      ...sectionHead,
      steps: z.array(z.object({ title: z.string(), text: z.string() })),
      ...image,
      business: z.object({
        title: z.string(),
        text: z.string(),
        points: z.array(z.string()),
      }),
    }),
    contact: z.object({
      ...sectionHead,
      service_area: z.string(),
    }),
  }),
});

// Export collections
export const collections = {
  homepage: homepageCollection,
  pages: pagesCollection,
};
