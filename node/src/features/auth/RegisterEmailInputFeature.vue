<template>
  <LoginInputComponent
    :value="registerStore.email"
    :placeholder="$t('email')"
    icon="fas fa-envelope"
    @input="registerStore.email = $event.target.value"
  />
</template>

<script>
import LoginInputComponent from 'src/shared/auth/LoginInputComponent.vue';
import {mapStores} from 'pinia';
import {useRegisterStore} from 'src/stores/register.js';

export default {
  computed: {
    ...mapStores(useRegisterStore),
  },
  components: {
    LoginInputComponent
  }
}
</script>
