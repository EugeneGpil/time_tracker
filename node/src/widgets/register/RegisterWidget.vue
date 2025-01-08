<template>
  <div class="register-widget">
    <div class="register-widget__logo">
      <LogoComponent />
    </div>
    <div class="register-widget__main-text-container">
      <div class="register-widget__main-text">
        Register a new membership
      </div>
    </div>
  </div>
</template>

<script>
import LogoComponent from 'src/shared/LogoComponent.vue';

export default {
  components: {
    LogoComponent,
  }
}
</script>

<style lang="scss" scoped>
@use 'src/css/color_utils.scss' as *;

.register-widget {
  width: min(90%, 22.5rem);
  @include color(background-color, block-background);
  border-top-width: 0.188rem;
  border-top-style: solid;
  @include color(border-top-color, primary);
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;

  &__logo {
    padding-top: 0.7rem;
    padding-bottom: 0.7rem;
    overflow-y: hidden;
    border-bottom-width: 0.063rem;
    border-bottom-style: solid;
    @include color(border-bottom-color, between-blocks-border);
  }

  &__main-text-container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 1.25rem;
    padding-bottom: 1.25rem;
  }
}
</style>
