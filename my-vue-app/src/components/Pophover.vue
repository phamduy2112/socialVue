<template>
    <div class="relative inline-block">
      <button @click="togglePopover" class="px-4 py-2 bg-blue-500 text-white rounded">
        Toggle Popover
      </button>
      <div 
        v-if="isOpen" 
        ref="popoverRef" 
        class="absolute left-1/2 transform -translate-x-1/2 mt-2 bg-white shadow-lg rounded-xl p-4 ring-1 ring-gray-200"
        :class="[width]"
        >
        <div class="arrow-up absolute top-[-5px] right-[50%]"></div>

        <slot />
      </div>
    </div>
  </template>
  
  <script>
  import { ref, onMounted, onUnmounted } from 'vue';
 
  export default {
    props:{
      width:{type:String,default:"w-full"}
    },
    setup() {
      const isOpen = ref(false);
      const popoverRef = ref(null);
  
      const togglePopover = (event) => {
        event.stopPropagation(); // Ngăn sự kiện lan ra ngoài
        isOpen.value = !isOpen.value;
      };
  
      const handleClickOutside = (event) => {
        if (popoverRef.value && !popoverRef.value.contains(event.target)) {
          isOpen.value = false;
        }
      };
  
      onMounted(() => {
        document.addEventListener("click", handleClickOutside);
      });
  
      onUnmounted(() => {
        document.removeEventListener("click", handleClickOutside);
      });
  
      return { isOpen, togglePopover, popoverRef };
    }
  };
  </script>
  