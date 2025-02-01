import { defineStore, acceptHMRUpdate } from 'pinia'
import registerAction from 'stores/register/registerAction.js';

export const useRegisterStore = defineStore('register', {
  state: () => ({
    name: '',
    email: '',
    password: '',
    retypePassword: '',
    areTermsAgreed: false,
    isRegisteringInProgress: false,
  }),
  getters: {},
  actions: {
    register: registerAction,
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useRegisterStore, import.meta.hot))
}
