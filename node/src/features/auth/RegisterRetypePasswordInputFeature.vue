<template>
  <LoginInputComponent icon="fas fa-lock" :placeholder="$t('retype_password')"/>
</template>

<script>
import LoginInputComponent from 'src/shared/auth/LoginInputComponent.vue';

export default {
  components: {
    LoginInputComponent
  }
}
</script>
