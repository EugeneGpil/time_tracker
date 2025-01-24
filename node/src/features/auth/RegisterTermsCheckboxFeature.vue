<template>
  <LoginCheckboxComponent v-model="areTermsAgreed" label="I agree to the terms"/>
</template>

<script>
import LoginCheckboxComponent from "src/shared/auth/LoginCheckboxComponent.vue";

export default {
  data: () => ({
    areTermsAgreed: false,
  }),
  components: {
    LoginCheckboxComponent,
  }
}
</script>
