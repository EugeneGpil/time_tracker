import { defineStore, acceptHMRUpdate } from 'pinia'

export const useRegisterStore = defineStore('register', {
  state: () => ({
    name: '',
    email: '',
    password: '',
    retypePassword: '',
    areTermsAgreed: false,
  }),
  getters: {},
  actions: {}
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useRegisterStore, import.meta.hot))
}
