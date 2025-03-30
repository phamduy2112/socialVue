<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import Modal from './components/Modal.vue'
import Pophover from './components/Pophover.vue';
import ForgetPassword from './views/auth/forgetPassword/ForgetPassword.vue';
import OTPForm from './views/auth/forgetPassword/OTPForm.vue';
import Login from './views/auth/Login.vue';
import Register from './views/auth/Register.vue';
</script>

<template >
<div className="pb-3 min-h-[100vh]">
   <div class="h-full">
    <router-view />
   </div>


  </div>



</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
