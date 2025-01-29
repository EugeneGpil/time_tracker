<template>
  <LoginInputComponent
    :modelValue="test"
    :placeholder="$t('name')"
    icon="fas fa-user"
    @input="test = $event.target.value"
  />
</template>

<script>
import LoginInputComponent from 'src/shared/auth/LoginInputComponent.vue';
import {mapStores} from 'pinia';
import {useRegister} from 'src/stores/register.js';

export default {
  data: () => ({
    test: '',
  }),
  computed: {
    ...mapStores(useRegister),
  },
  components: {
    LoginInputComponent,
  },
};
</script>
