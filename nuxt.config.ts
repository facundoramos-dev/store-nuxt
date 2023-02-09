// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/tailwind/main.css'], //ruta del archivo '~/<ruta>'
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})