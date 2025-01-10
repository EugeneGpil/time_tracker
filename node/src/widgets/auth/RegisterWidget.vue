<template>
  <LoginEntity :text="$t('register_a_new_membership')">
    <template #logo>
      <LogoComponent/>
    </template>
    <template #input-0>
      <LoginInputComponent icon="fas fa-user"/>
    </template>
    <template #input-1>
      <LoginInputComponent icon="fas fa-envelope"/>
    </template>
  </LoginEntity>
</template>

<script>
import LoginEntity from "src/entities/auth/LoginEntity.vue";
import LoginInputComponent from 'src/shared/LoginInputComponent.vue';
import LogoComponent from 'src/shared/LogoComponent.vue';

export default {
  components: {
    LoginInputComponent,
    LogoComponent,
    LoginEntity,
  }
}
</script>
