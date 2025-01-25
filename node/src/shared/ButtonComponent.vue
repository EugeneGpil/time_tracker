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
.button {
  border-radius: 0.25rem;
  padding: 0.375rem 0.75rem;
}
</style>
