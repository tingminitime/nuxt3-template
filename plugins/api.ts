/**
 * Define our custom fetch instance we can set all the things that we want,
 * and then we provide it globally to the nuxt application.
 */
export default defineNuxtPlugin({
  name: 'my-api',
  setup() {
    const api = $fetch.create({
      baseURL: 'https://jsonplaceholder.typicode.com/', // useRuntimeConfig().public.apiBaseUrl
    })

    return {
      provide: {
        api,
      },
    }
  },
})
