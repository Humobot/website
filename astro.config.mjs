// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightBlog from "starlight-blog";
import starlightGiscus from "starlight-giscus";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      plugins: [
        starlightBlog(),
        starlightGiscus({
          repo: "Humobot/website",
          repoId: "R_kgDOQI0kHQ",
          category: "general",
          categoryId: "DIC_kwDOQI0kHc4CxDAL",
        }),
      ],
      title: "Humobot",
      logo: {
        src: "./src/assets/logo.png",
      },
      // Set English as the default language for this site.
      defaultLocale: "root",
      locales: {
        root: {
          label: 'English',
          lang: 'en', // lang is required for root locales
        },
        // English docs in `src/content/docs/en/`
        // en: {
        //   label: "English",
        // },
        // Simplified Chinese docs in `src/content/docs/zh-cn/`
        "zh-cn": {
          label: "简体中文",
          lang: "zh-CN",
        },
      },
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/Humobot/website",
        },
      ],
      sidebar: [
        {
          label: "Guides",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Example Guide", slug: "guides/example" },
          ],
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
      ],
    }),
  ],

  adapter: cloudflare(),
});