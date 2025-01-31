<template>
  <LoginCheckboxComponent
    :value="registerStore.areTermsAgreed"
    label="I agree to the terms"
    @input="registerStore.areTermsAgreed = $event"
  />
</template>

<script>
import LoginCheckboxComponent from "src/shared/auth/LoginCheckboxComponent.vue";
import {mapStores} from "pinia";
import {useRegisterStore} from 'stores/register.js';

export default {
  computed: {
    ...mapStores(useRegisterStore),
  },
  components: {
    LoginCheckboxComponent,
  }
}
</script>
