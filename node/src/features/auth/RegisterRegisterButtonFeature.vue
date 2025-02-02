<template>
  <ButtonComponent
    :disabled="registerStore.isRegisteringInProgress"
    text="Register"
    @click="registerStore.register()"
  />
</template>

<script>
import ButtonComponent from "src/shared/ButtonComponent.vue";
import {useRegisterStore} from 'stores/register/register.js';
import {mapStores} from 'pinia';

export default {
  computed: {
    ...mapStores(useRegisterStore),
  },
  components: {
    ButtonComponent,
  }
}
</script>
