// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  css: ["/assets/main.scss"],
  modules: ["@pinia/nuxt"],
  plugins: ["~/plugins/infinite-loading.ts"]
})
