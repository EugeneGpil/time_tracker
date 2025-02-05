<template>
  <LoginInputComponent
    :value="registerStore.email"
    :placeholder="$t('email')"
    :errors="errorStore.validationErrors.register?.email"
    icon="fas fa-envelope"
    @input="registerStore.email = $event.target.value"
  />
</template>

<script>
import LoginInputComponent from 'src/shared/auth/LoginInputComponent.vue';
import {mapStores} from 'pinia';
import {useRegisterStore} from 'src/stores/register/register.js';
import {useErrorStore} from 'stores/error/error.js';

export default {
  computed: {
    ...mapStores(useRegisterStore, useErrorStore),
  },
  components: {
    LoginInputComponent
  }
}
</script>
