<template>
  <LoginInputComponent
    :value="registerStore.password"
    :placeholder="$t('password')"
    icon="fas fa-lock"
    type="password"
    @input="registerStore.password = $event.target.value"
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
