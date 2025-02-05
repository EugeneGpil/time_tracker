<template>
  <div class="login-input">
    <div
      :class="{'login-input__input-container_danger': errors?.length}"
      class="login-input__input-container"
    >
      <input
        :value="value"
        :type="type"
        :placeholder="placeholder"
        :class="{'login-input__input_danger': errors?.length}"
        class="login-input__input"
        autocomplete="off"
        @input="$emit('input', $event)"
      >
      <div class="login-input__icon-container">
        <QIcon
          :name="icon"
          :class="{'login-input__icon_danger': errors?.length}"
          class="login-input__icon"
        />
      </div>
    </div>
    <div v-if="showErrors" class="login-input__errors">
      <div
        v-for="(error, index) in errors"
        :key="index"
        class="login-input__error"
      >
        {{ error }}
      </div>
    </div>
  </div>
</template>

<script>
import {QIcon} from 'quasar';

export default {
  props: {
    value: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: 'text',
    },
    placeholder: {
      type: String,
      default: '',
    },
    errors: {
      type: Array,
      default: () => ([]),
    },
    showErrors: {
      type: Boolean,
      default: true,
    },
  },
  components: {
    QIcon,
  },
};
</script>

<style lang="scss" scoped>
@use 'src/css/color_utils.scss' as *;

.login-input {
  &__input-container {
    display: flex;
    align-items: center;
    @include color(border-color, input-border);
    border-style: solid;
    border-width: 0.063rem;
    @include color(border-right-color, input-border);
    border-radius: 0.25rem;

    &_danger {
      @include color(border-color, negative);
    }
  }

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

    &_danger {
      @include color(background-color, negative-darker);
    }
  }

  &__icon-container {
    width: min(2.5rem, 10vw);
    display: flex;
    align-items: center;
    justify-content: center;
    @include color(background-color, input-icon-background);
    align-self: stretch;
    border-top-right-radius: 0.25rem;
    border-bottom-right-radius: 0.25rem;
  }

  &__icon {
    &_danger {
      @include color(color, negative);
    }
  }

  &__error {
    font-size: min(0.6rem, 3vw);
    @include color(color, negative);
    font-style: italic;
    font-weight: 500;
  }
}
</style>
