<template>
  <div class="login">
    <div class="login__logo">
      <LogoComponent />
    </div>
    <div class="login__main-text-container">
      <div class="login__main-text">
        {{ $t('register_a_new_membership') }}
      </div>
    </div>
    <div class="login__input">
      <LoginInputComponent />
    </div>
    <div class="login__input">
      <LoginInputComponent />
    </div>
  </div>
</template>

<script>
import LoginInputComponent from 'src/shared/LoginInputComponent.vue';
import LogoComponent from 'src/shared/LogoComponent.vue';

export default {
  components: {
    LoginInputComponent,
    LogoComponent,
  }
}
</script>
