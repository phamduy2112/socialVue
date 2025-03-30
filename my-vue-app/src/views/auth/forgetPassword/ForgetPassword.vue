<template>
<div>
    <div v-if="steps==1">
        <ForgotEmail @nextStep="nextStep"></ForgotEmail>
    </div>
    <div v-if="steps==2">
        <OTPForm @nextStep="nextStep"></OTPForm>
    </div>
    <div v-if="steps==3">
        <ChangePassword></ChangePassword>
    </div>
</div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import OTPForm from './OTPForm.vue';
import ForgotEmail from './ForgotEmail.vue';
import ChangePassword from './ChangePassword.vue';

const steps=ref(1);
console.log(steps);
function nextStep() {
  steps.value++;
  console.log("Bước hiện tại:", steps.value);

}

</script>