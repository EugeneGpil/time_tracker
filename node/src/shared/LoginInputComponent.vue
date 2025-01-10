<template>
  <div class="login-input">
    <input :type="type">
    <div class="login-input__icon-container">
      <QIcon :name="icon"/>
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
.login-input {
  display: flex;
  align-items: center;
}
</style>
