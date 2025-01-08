<template>
  <div class="register-widget">
    <div class="register-widget__logo">
      <LogoComponent />
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
  width: min(90%, 360px);
  @include color(background-color, block-background);
  border-top-width: 3px;
  border-top-style: solid;
  @include color(border-top-color, primary);
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;

  &__logo {
    padding-top: 0.7rem;
    padding-bottom: 0.7rem;
    overflow-y: hidden;
  }
}
</style>
