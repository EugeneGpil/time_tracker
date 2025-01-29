import { defineStore, acceptHMRUpdate } from 'pinia'

export const useRegister = defineStore('register', {
  state: () => ({
    name: '',
    email: '',
    password: '',
    retypePassword: '',
  }),
  getters: {},
  actions: {}
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useRegister, import.meta.hot))
}
