import { appDescription } from './constants/index'

export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/color-mode',
    '@nuxt/icon',
    '@pinia/nuxt',
    '@vueuse/nuxt',
  ],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  css: ['@/assets/css/main.css'],

  colorMode: {
    classSuffix: '',
  },

  pinia: {
    storesDirs: ['./store/**'],
  },

  build: {
    transpile: ['@headlessui/vue'],
  },

  app: {
    head: {
      meta: [
        { name: 'description', content: appDescription },
      ],
    },
  },

  compatibilityDate: '2024-08-27',
})
