<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  modelValue: Boolean, // Điều khiển trạng thái mở/đóng của dialog
  users: Array, // Danh sách người dùng đã thích bài viết
})

const emit = defineEmits(['update:modelValue'])

const closeDialog = () => {
  emit('update:modelValue', false)
}
</script>

<template>
  <Teleport to="body">
    <div
      v-if="modelValue"
      class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      @click.self="closeDialog"
    >
      <div class="bg-zinc-800 text-white p-6 rounded-lg w-[90%] max-w-lg">
        <h2 class="text-lg font-semibold text-center">Tất cả</h2>

        <div class="my-4 border-t border-gray-600"></div>

        <div v-if="users.length > 0" class="space-y-3">
          <div v-for="user in users" :key="user.id" class="flex justify-between items-center">
            <div class="flex gap-3 items-center">
              <img
                :src="user.avatar"
                :alt="user.name"
                class="w-8 h-8 rounded-full cursor-pointer"
              />
              <p>{{ user.name }}</p>
            </div>
            <button class="text-white bg-blue-500 px-3 py-1 rounded-md hover:bg-blue-600">
              Thêm bạn bè
            </button>
          </div>
        </div>
        <p v-else class="text-center text-gray-400">Chưa có ai thích bài viết này.</p>

        <div class="my-4 border-t border-gray-600"></div>

        <div class="flex justify-end">
          <button
            class="bg-gray-700 text-white py-2 px-4 rounded hover:bg-gray-600"
            @click="closeDialog"
          >
            Đóng
          </button>
        </div>
      </div>
    </div>
  </Teleport>
</template>
