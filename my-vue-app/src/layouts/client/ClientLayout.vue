<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import NavBar from "../../components/NavBar.vue";
import Avatar from "../../components/avatar.vue";

// Khai báo state
const isCollapsed = ref(false);
const isSidebarOpen = ref(true);
const isMobile = ref(window.innerWidth < 768);

// Hàm toggle sidebar
const toggleSidebar = () => {
  if (isMobile.value) {
    isSidebarOpen.value = !isSidebarOpen.value;
  } else {
    isCollapsed.value = !isCollapsed.value;
  }
};

// Cập nhật kích thước màn hình
const updateScreenSize = () => {
  isMobile.value = window.innerWidth < 768;
  isSidebarOpen.value = !isMobile.value; // Mở sidebar mặc định trên desktop
};

// Lắng nghe sự kiện resize màn hình
onMounted(() => {
  window.addEventListener("resize", updateScreenSize);
});

onUnmounted(() => {
  window.removeEventListener("resize", updateScreenSize);
});
</script>

<template>
    <div class="flex">
        <NavBar 
    :isCollapsed="isCollapsed"
    :isSidebarOpen="isSidebarOpen"
    :isMobile="isMobile"
    @toggleSidebar="toggleSidebar"
  />
  
  <!-- Nội dung chính -->
  <div :class="[' h-[100px]  flex-1 transition-all', isCollapsed ? 'ml-[80px]' : 'ml-[300px] ']
  ">
    
  </div>
  <div class="w-[300px] h-[100vh] p-5 bg-zinc-800">
    <div class="text-[1rem]">
        Những người bạn có thể biết
    </div>
    <div>
        <Avatar src="https://scontent.fsgn8-4.fna.fbcdn.net/v/t39.30808-1/473970633_3696832523866904_758678437992717420_n.jpg?stp=c0.80.480.480a_dst-jpg_s200x200_tt6&_nc_cat=108&ccb=1-7&_nc_sid=1d2534&_nc_ohc=pM9X0O8E4H4Q7kNvgEyb0ZB&_nc_oc=AdmQ5XM8O9vwwZcDxkULkqkYsnWtvKm98Vmg9gSaDEQCeOdXsNVlk7akBztutqdt6tUzewVUciaGZV-qsuQEfJ1Q&_nc_zt=24&_nc_ht=scontent.fsgn8-4.fna&_nc_gid=hrTaPK__UjV6VcMnMHqRPw&oh=00_AYFAbBL_zSmP20pXluRUW2SKkNUAztL1EVgLiIvgjn3lZg&oe=67E41954">

        </Avatar>
    </div>
  </div>
    </div>
 
</template>
