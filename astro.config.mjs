import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://websitesbymanny.netlify.app',
  // Static output: every page is plain HTML on Netlify's CDN.
  // No serverless function per request, no Node runtime to keep patched.
  output: 'static',
  build: {
    // Inline all component CSS into each page (one request fewer per page).
    // The CSP in netlify.toml allows inline styles.
    inlineStylesheets: 'always',
  },
  vite: {
    build: {
      // Never inline <script> blocks into the HTML: the CSP only allows
      // scripts from our own files (script-src 'self'), not inline ones.
      assetsInlineLimit: 0,
    },
  },
});
