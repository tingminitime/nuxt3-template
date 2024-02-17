import type { $Fetch, NitroFetchRequest } from 'nitropack'

interface User {
  id: number
  name: string
  username: string
  email: string
  address: {
    street: string
    suite: string
    city: string
    zipcode: string
    geo: {
      lat: string
      lng: string
    }
  }
}

export function repository<T>(fetch: $Fetch<T, NitroFetchRequest>) {
  return {
    async get(): Promise<User[]> {
      return fetch('/users/')
    },
  }
}
