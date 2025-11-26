import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  alias: {
    "@": resolve(__dirname, "/"),
  },
  css: ["@/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss() as any],
  },
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
});
