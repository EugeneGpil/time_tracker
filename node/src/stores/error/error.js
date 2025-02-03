import { defineStore, acceptHMRUpdate } from 'pinia'
import setValidationErrors from 'stores/error/setValidationErrors.js';

export const useErrorStore = defineStore('error', {
  state: () => ({
    validationErrors: {},
  }),
  getters: {},
  actions: {
    setValidationErrors,
  },
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useErrorStore, import.meta.hot))
}
