<template>
  <div class="register-page">
    <RegisterWidget />
  </div>
</template>

<script>
import RegisterWidget from 'src/widgets/register/RegisterWidget.vue';

export default {
  components: {
    RegisterWidget
  }
}
</script>

<style lang="scss" scoped>
.register-page {
  min-height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
