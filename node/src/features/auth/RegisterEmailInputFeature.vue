<template>
  <LoginInputComponent icon="fas fa-envelope" :placeholder="$t('email')"/>
</template>

<script>
import LoginInputComponent from 'src/shared/LoginInputComponent.vue';

export default {
  components: {
    LoginInputComponent
  }
}
</script>
