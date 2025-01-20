<template>
    <LoginInputComponent icon="fas fa-user" :placeholder="$t('name')"/>
</template>

<script>
import LoginInputComponent from 'src/shared/auth/LoginInputComponent.vue';

export default {
  components: {
    LoginInputComponent
  }
}
</script>
