<template>
  <LoginEntity :text="$t('register_a_new_membership')">
    <template #logo>
      <LogoComponent/>
    </template>
    <template #input-0>
      <RegisterNameInputFeature/>
    </template>
    <template #input-1>
      <RegisterEmailInputFeature/>
    </template>
    <template #input-2>
      <RegisterPasswordInputFeature/>
    </template>
    <template #input-3>
      <RegisterRetypePasswordInputFeature/>
    </template>
    <template #checkbox>
      <RegisterTermsCheckboxFeature/>
    </template>
    <template #checkbox-button>
      <RegisterRegisterButtonFeature/>
    </template>
  </LoginEntity>
</template>

<script>
import LoginEntity from "src/entities/auth/LoginEntity.vue";
import RegisterPasswordInputFeature from 'src/features/auth/RegisterPasswordInputFeature.vue';
import RegisterRegisterButtonFeature from 'src/features/auth/RegisterRegisterButtonFeature.vue';
import RegisterRetypePasswordInputFeature from 'src/features/auth/RegisterRetypePasswordInputFeature.vue';
import RegisterTermsCheckboxFeature from 'src/features/auth/RegisterTermsCheckboxFeature.vue';
import LogoComponent from 'src/shared/LogoComponent.vue';
import RegisterNameInputFeature from 'src/features/auth/RegisterNameInputFeature.vue';
import RegisterEmailInputFeature from 'src/features/auth/RegisterEmailInputFeature.vue';

export default {
  components: {
    RegisterRegisterButtonFeature,
    RegisterTermsCheckboxFeature,
    RegisterRetypePasswordInputFeature,
    RegisterPasswordInputFeature,
    LogoComponent,
    LoginEntity,
    RegisterNameInputFeature,
    RegisterEmailInputFeature,
  }
}
</script>
