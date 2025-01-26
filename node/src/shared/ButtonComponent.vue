<template>
  <button class="button">{{ text }}</button>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    }
  }
}
</script>

<style scoped lang="scss">
@use 'src/css/color_utils.scss' as *;

.button {
  border-radius: 0.25rem;
  padding: min(0.375rem, 1.25vw) min(0.75rem, 2.5vw);
  @include color(background-color, primary);
}
</style>
