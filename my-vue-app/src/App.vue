<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import Modal from './components/Modal.vue'
import Pophover from './components/Pophover.vue';
</script>

<template >
<div className="bg-zinc-900 h-screen">
   
    <div class="ml-6">
  <Pophover>
    
  </Pophover>
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
