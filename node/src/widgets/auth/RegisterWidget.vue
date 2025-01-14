<template>
  <LoginEntity :text="$t('register_a_new_membership')">
    <template #logo>
      <LogoComponent/>
    </template>
    <template #input-0>
      <RegisterNameInputFeature/>
    </template>
<!--    <template #input-1>-->
<!--      <LoginInputComponent icon="fas fa-envelope"/>-->
<!--    </template>-->
  </LoginEntity>
</template>

<script>
import LoginEntity from "src/entities/auth/LoginEntity.vue";
import LogoComponent from 'src/shared/LogoComponent.vue';
import RegisterNameInputFeature from 'src/features/auth/RegisterNameInputFeature.vue';

export default {
  components: {
    LogoComponent,
    LoginEntity,
    RegisterNameInputFeature,
  }
}
</script>
