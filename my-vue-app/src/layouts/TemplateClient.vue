<template>
    <div class=" flex">
      <!-- Sidebar -->
      <NavBar
        :isCollapsed="isCollapsed"
        :isSidebarOpen="isSidebarOpen"
        :isMobile="isMobile"
        @toggleSidebar="toggleSidebar"
      />
  
      <!-- Nội dung chính -->
      <div
      class= 'transition-all duration-300 px-6 w-full'
        :class="[
         
          isMobile && 'ml-0' , isCollapsed ? 'ml-[80px]' : 'ml-[300px]'
        ]"
      >
        <div class="bg-red-900 h-[100px] w-full"></div>
        <router-view/>
        <!-- Blog -->
       
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { onMounted, onUnmounted, ref } from "vue";
  import NavBar from "../components/NavBar.vue";
  import Blog from "../components/Blog.vue";
  import BlogItem from "../components/blog/BlogItem.vue";
  
  const isCollapsed = ref(false);
  const isSidebarOpen = ref(true);
  const isMobile = ref(window.innerWidth < 768);
  
  const toggleSidebar = () => {
    if (isMobile.value) {
      isSidebarOpen.value = !isSidebarOpen.value;
    } else {
      isCollapsed.value = !isCollapsed.value;
    }
  };
  
  const updateScreenSize = () => {
    isMobile.value = window.innerWidth < 768;
    isSidebarOpen.value = !isMobile.value;
  };
  
  onMounted(() => {
    window.addEventListener("resize", updateScreenSize);
  });
  
  onUnmounted(() => {
    window.removeEventListener("resize", updateScreenSize);
  });
  </script>
  