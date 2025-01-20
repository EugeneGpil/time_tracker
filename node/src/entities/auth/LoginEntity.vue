<template>
  <div class="login">
    <div class="login__logo">
      <slot name="logo" />
    </div>
    <div class="login__main-text-container">
      <div class="login__main-text">
        {{ text }}
      </div>
    </div>
    <div v-for="index in [...Array(10).keys()]" :key="index" class="login__input">
      <slot :name="`input-${index}`" />
    </div>
    <div class="login__checkbox-row">
      <div class="login__checkbox-container">
        <slot name="checkbox" />
      </div>
      <div class="login__checkbox-button-container">
        <slot name="checkbox-button" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@use 'src/css/color_utils.scss' as *;

.login {
  width: min(90%, 22.5rem);
  @include color(background-color, block-background);
  border-top-width: 0.188rem;
  border-top-style: solid;
  @include color(border-top-color, primary);
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;

  &__logo {
    padding-top: min(0.7rem, 5vw);
    padding-bottom: min(0.7rem, 5vw);
    overflow-y: hidden;
    border-bottom-width: 0.063rem;
    border-bottom-style: solid;
    @include color(border-bottom-color, between-blocks-border);
  }

  &__main-text-container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: min(1.25rem, 7vw);
    padding-bottom: min(1.25rem, 7vw);
  }

  &__input {
    padding-left: min(1.25rem, 5vw);
    padding-right: min(1.25rem, 5vw);
    padding-bottom: min(1rem, 4vw);

    &:empty {
      display: none;
    }
  }

  &__checkbox-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__checkbox-container {
    padding-left: min(1.25rem, 5vw);
    margin-bottom: min(1rem, 4vw);

    &:empty {
      display: none;
    }
  }

  &__checkbox-button-container {
    padding-right: min(1.25rem, 5vw);
    padding-bottom: min(1rem, 4vw);

    &:empty {
      display: none;
    }
  }
}
</style>
