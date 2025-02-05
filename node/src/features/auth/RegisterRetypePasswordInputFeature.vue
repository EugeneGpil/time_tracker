<template>
  <LoginInputComponent
    :value="registerStore.retypePassword"
    :placeholder="$t('retype_password')"
    :errors="errorStore.validationErrors.register?.password"
    icon="fas fa-lock"
    type="password"
    @input="registerStore.retypePassword = $event.target.value"
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
