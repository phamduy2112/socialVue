<template>
    <div class="flex">
      <!-- Sidebar -->
      <div
        :class="[
          'fixed top-0 left-0 h-full bg-blue-700 text-white w-64 p-5 transition-all duration-300',
          isOpen ? 'translate-x-0' : '-translate-x-64 md:translate-x-0'
        ]"
      >
        <!-- Nút đóng (chỉ hiện trên mobile) -->
        <button
          class="md:hidden absolute top-4 right-4 text-white text-2xl"
          @click="toggleSidebar"
        >
          ✖
        </button>
  
        <h2 class="text-xl font-bold mb-4">Admin Panel</h2>
  
        <!-- Danh sách menu -->
        <ul>
          <li class="mb-2">
            <router-link to="/" class="flex items-center p-2 hover:bg-blue-600 rounded">
              <HomeIcon class="w-5 h-5 mr-2" /> Dashboard
            </router-link>
          </li>
          <li class="mb-2">
            <router-link to="/users" class="flex items-center p-2 hover:bg-blue-600 rounded">
              <UserIcon class="w-5 h-5 mr-2" /> Users
            </router-link>
          </li>
          <li class="mb-2">
            <router-link to="/settings" class="flex items-center p-2 hover:bg-blue-600 rounded">
              <CogIcon class="w-5 h-5 mr-2" /> Settings
            </router-link>
          </li>
        </ul>
      </div>
  
      <!-- Nút mở Sidebar -->
      <button
        class="fixed top-4 left-4 md:hidden text-white bg-blue-700 p-2 rounded"
        @click="toggleSidebar"
      >
        ☰
      </button>
  
      <!-- Nội dung chính -->
      <div class="flex-1 p-5 ml-0 md:ml-64 transition-all duration-300">
        <h1 class="text-2xl font-bold">Dashboard</h1>
        <p>Welcome to the Admin Panel</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  import { HomeIcon, UserIcon, CogIcon } from "@heroicons/vue/solid";
  
  const isOpen = ref(false);
  
  const toggleSidebar = () => {
    isOpen.value = !isOpen.value;
  };
  </script>
  