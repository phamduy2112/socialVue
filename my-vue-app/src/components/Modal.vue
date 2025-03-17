<template>
  <div class="flex flex-col items-center">
    <!-- Nút mở modal (luôn hiển thị) -->
    <button
      class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
      @click="openModal"
    >
      Mở Modal
    </button>

    <!-- Modal -->
    <Teleport to="body">
      <Transition name="fade">
        <div
          v-if="open"
          class="fixed inset-0 bg-black/50 flex items-center justify-center"
          @click="closeModal"
        >
          <div
            class="bg-white rounded-lg shadow-lg p-6 w-[350px] relative"
            @click.stop
          >
            <!-- Header -->
            <slot name="header">
              <h2 class="text-xl font-semibold text-gray-900">Tiêu đề Modal</h2>
            </slot>

            <!-- Content -->
            <slot>
              <p class="text-gray-700 mt-2">Nội dung của modal ở đây.</p>
            </slot>

            <!-- Footer -->
            <slot name="footer">
              <button
                class="mt-4 w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition"
                @click="closeModal"
              >
                Đóng
              </button>
            </slot>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<script setup>
import { ref } from "vue";

const open = ref(false);

const openModal = () => {
  open.value = true;
};

const closeModal = () => {
  open.value = false;
};
</script>

<style scoped>
/* Animation */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
