// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devServer: {
    port: 3001,
  },
  modules: ['@nuxtjs/tailwindcss'],
  app:{
    head: {
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'viewport', name: 'viewport', content:"width=1350,  user-scalable=no,viewport-fit=cover"},
        { hid: 'description', name: 'description', content: 'GKD约游戏约麻将' },
        { hid: 'keywords', name: 'keywords', content: 'GKD,约游戏,约麻将' },
      ],
      link:[
       {
        rel:'icon',
        type:'image/x-icon',
        href:'/favicon2.ico'
       }
      ]
    },
  },
  devtools: { enabled: true },
  css: [
    // SCSS file in the project
    "~/public/css/public.scss", // you should add main.scss somewhere in your app
  ],
})
