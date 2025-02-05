<template>
  <LoginInputComponent
    :value="registerStore.name"
    :placeholder="$t('name')"
    :errors="errorStore.validationErrors.register?.name"
    icon="fas fa-user"
    @input="registerStore.name = $event.target.value"
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
    LoginInputComponent,
  },
};
</script>
