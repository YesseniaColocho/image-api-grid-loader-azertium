// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  css: ["/assets/main.scss"],
  modules: ["@pinia/nuxt", '@nuxt/test-utils/module'],
  plugins: ["~/plugins/infinite-loading.ts"]
})
