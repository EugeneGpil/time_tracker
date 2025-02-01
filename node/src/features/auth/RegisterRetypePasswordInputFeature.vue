<template>
  <LoginInputComponent
    :value="registerStore.retypePassword"
    :placeholder="$t('retype_password')"
    icon="fas fa-lock"
    type="password"
    @input="registerStore.retypePassword = $event.target.value"
  />
</template>

<script>
import LoginInputComponent from 'src/shared/auth/LoginInputComponent.vue';
import {mapStores} from 'pinia';
import {useRegisterStore} from 'src/stores/register';

export default {
  computed: {
    ...mapStores(useRegisterStore),
  },
  components: {
    LoginInputComponent
  }
}
</script>
