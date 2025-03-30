<script setup>
import { ref } from 'vue'

const props = defineProps({
  modelValue: Boolean, // Điều khiển trạng thái mở/đóng của dialog
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
        <slot name="header">
          <h2 class="text-lg font-semibold text-center">Tiêu đề</h2>
        </slot>

        <div class="my-4 border-t border-gray-600" />

        <slot />

        <div class="my-4 border-t border-gray-600" />

        <slot name="footer">
          <button
            class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            @click="closeDialog"
          >
            Đóng
          </button>
        </slot>
      </div>
    </div>
  </Teleport>
</template>
