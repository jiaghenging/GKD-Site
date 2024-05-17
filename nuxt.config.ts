// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devServer: {
    port: 3001,
  },
  devtools: { enabled: true },
  css: [
    // SCSS file in the project
    "~/public/css/public.scss", // you should add main.scss somewhere in your app
  ],
})
