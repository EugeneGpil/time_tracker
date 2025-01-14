<template>
  <div class="login-input">
    <input class="login-input__input" :type="type">
    <div class="login-input__icon-container">
      <QIcon class="login-input__icon" :name="icon"/>
    </div>
  </div>
</template>

<script>
import {QIcon} from 'quasar';

export default {
  props: {
    icon: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: 'text',
    },
  },
  components: {
    QIcon
  }
}
</script>

<style lang="scss" scoped>
@use 'src/css/color_utils.scss' as *;

.login-input {
  display: flex;
  align-items: center;
  @include color(border-color, input-border);
  border-style: solid;
  border-width: 0.063rem;
  @include color(border-right-color, input-border);
  border-radius: 0.25rem;
  border-radius: 0.25rem;

  &__input {
    flex: 1;
    border: none;
    border-right-style: solid;
    border-right-width: 0.063rem;
    @include color(border-right-color, input-border);
    @include color(background-color, block-background);
    padding: min(0.375rem, 1.25vw) min(0.75rem, 2.5vw);
    border-top-left-radius: 0.25rem;
    border-bottom-left-radius: 0.25rem;
  }

  &__icon-container {
    width: min(2.5rem, 10vw);
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
