import { unified } from "@astrojs/markdown-remark";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import AutoImport from "astro-auto-import";
import { defineConfig, fontProviders } from "astro/config";
import remarkCollapse from "remark-collapse";
import remarkToc from "remark-toc";
import sharp from "sharp";
import config from "./src/config/config.json";
import theme from "./src/config/theme.json";
import { createHash } from "node:crypto";
import { THEME_INIT_SCRIPT } from "./src/lib/themeInit.mjs";

// CSP hash of the inline dark-mode script (see src/lib/themeInit.mjs)
const themeInitHash = `sha256-${createHash("sha256").update(THEME_INIT_SCRIPT).digest("base64")}`;

// Build fonts configuration from theme.json.
// Fonts are self-hosted: files live in src/assets/fonts and are shipped with the
// site. No requests to Google Fonts or other third parties (GDPR), see
// docs/ANFORDERUNGEN.md, section "Schriften".
const fontsConfig = Object.entries(theme.fonts.font_family)
  .filter(([key]) => !key.includes("_type")) // Filter out type entries
  .map(([key, name]) => {
    const fallback = theme.fonts.font_family[`${key}_type`] || "sans-serif";
    const file = theme.fonts.font_files[key];

    return {
      name,
      cssVariable: `--font-${key}`,
      provider: fontProviders.local(),
      fallbacks: [fallback],
      options: {
        variants: [
          {
            src: [file.src],
            weight: file.weight,
            style: "normal",
            display: "swap",
          },
        ],
      },
    };
  });

// https://astro.build/config
export default defineConfig({
  site: config.site.base_url ? config.site.base_url : "http://examplesite.com",
  base: config.site.base_path ? config.site.base_path : "/",
  trailingSlash: config.site.trailing_slash ? "always" : "never",
  image: { service: sharp() },
  vite: { plugins: [tailwindcss()] },
  fonts: fontsConfig,

  // Content Security Policy: Astro hashes all scripts and styles it emits and
  // writes a <meta http-equiv="content-security-policy"> into every page.
  // Headers that cannot be set via <meta> (frame-ancestors, HSTS, ...) are in netlify.toml.
  security: {
    csp: {
      directives: [
        "default-src 'self'",
        "img-src 'self' data:",
        "font-src 'self'",
        "connect-src 'self'",
        "form-action 'self'",
        "base-uri 'self'",
        "object-src 'none'",
      ],
      scriptDirective: { hashes: [themeInitHash] },
    },
  },

  integrations: [
    react(),
    // the thank-you page after the contact form is noindex and not part of the sitemap
    sitemap({ filter: (page) => !page.includes("/danke") }),
    AutoImport({
      imports: [
        "@/shortcodes/Button",
        "@/shortcodes/Accordion",
        "@/shortcodes/Notice",
        "@/shortcodes/Video",
        "@/shortcodes/Youtube",
        "@/shortcodes/Tabs",
        "@/shortcodes/Tab",
      ],
    }),
    mdx(),
  ],

  markdown: {
    processor: unified({
      remarkPlugins: [
        remarkToc,
        [remarkCollapse, { test: "Table of contents" }],
      ],
    }),
    // no code blocks on this site; Shiki's inline styles would conflict with the CSP
    syntaxHighlight: false,
  },
});
