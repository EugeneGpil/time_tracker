<template>
  <label class="login-checkbox__label" @click="$emit('input', !value)">
    <span
      class="login-checkbox__checkbox-container"
      :class="{'login-checkbox__checkbox-container_checked': value}"
    >
      <span class="login-checkbox__icon-container">
        <QIcon
          v-show="value"
          name="fa-solid fa-check"
          class="login-checkbox__icon"
        />
      </span>
    </span>
    {{ label }}
  </label>
</template>

<script>
import {QIcon} from 'quasar';

export default {
  props: {
    value: {
      type: Boolean,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
  },
  components: {
    QIcon,
  },
};
</script>

<style scoped lang="scss">
@use 'src/css/color_utils.scss' as *;

.login-checkbox {
  &__label {
    font-weight: 500;
    display: flex;
    text-align: center;
    line-height: min(1.275rem, 5vw);

    &:hover .login-checkbox__checkbox-container {
      border-width: 0.125rem;
      @include color(border-color, primary);
    }
  }

  &__checkbox-container {
    width: min(1.275rem, 5vw);
    height: min(1.275rem, 5vw);
    display: flex;
    align-items: center;
    justify-content: center;
    border-width: 0.05rem;
    border-style: solid;
    @include color(border-color, input-border);
    margin-right: min(0.563rem, 2vw);

    &_checked {
      @include color(background-color, primary);
    }
  }

  &__icon {
    @include color(color, main-background);
    font-size: min(0.9rem, 4.1vw);
  }
}
</style>
