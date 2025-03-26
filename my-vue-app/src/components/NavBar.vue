<template>
  <div class="flex">
    <!-- Sidebar -->
    <div
      :class="[ 
        'fixed top-0 left-0 h-full bg-zinc-800 text-white p-5 transition-transform duration-300',
        isCollapsed ? 'w-[80px]' : 'w-[300px]',
        isMobile && !isSidebarOpen ? '-translate-x-full' : 'translate-x-0'
      ]"
    >
      <!-- Nút Toggle -->
      <button class="text-white text-2xl mb-5" @click="toggleSidebar">
        <span v-if="isCollapsed">➡</span>
        <span v-else>⬅</span>
      </button>

      <!-- Menu -->
      <ul>
        <li class="mb-4">
          <router-link to="/" class="flex items-center">
            <HomeIcon class="w-6 h-6" />
            <span v-if="!isCollapsed" class="ml-2">Dashboard</span>
          </router-link>
        </li>
        <li class="mb-4">
          <router-link to="/users" class="flex items-center">
            <UserIcon class="w-6 h-6" />
            <span v-if="!isCollapsed" class="ml-2">Users</span>
          </router-link>
        </li>
        <li class="mb-4">
          <router-link to="/settings" class="flex items-center">
            <CogIcon class="w-6 h-6" />
            <span v-if="!isCollapsed" class="ml-2">Settings</span>
          </router-link>
        </li>
      </ul>
    </div>

    <!-- Nút mở sidebar trên mobile -->
    <button 
      v-if="isMobile && !isSidebarOpen"
      class="fixed top-5 left-5 bg-blue-700 text-white p-2 rounded-full"
      @click="toggleSidebar"
    >
      ☰
    </button>

  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from "vue";
import { HomeIcon, UserIcon, CogIcon } from "@heroicons/vue/24/solid"; // Import biểu tượng từ Heroicons

// Nhận props từ component cha
defineProps<{ isCollapsed: boolean; isSidebarOpen: boolean; isMobile: boolean }>();

// Emit sự kiện lên cha
const emit = defineEmits(["toggleSidebar"]);

const toggleSidebar = () => {
  console.log("Sidebar toggled!"); // Kiểm tra xem hàm này có chạy không
  emit("toggleSidebar");
};
</script>
