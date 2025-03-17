<script setup>
import { computed } from 'vue'

const props = defineProps({
  color: { type: String, default: 'primary' }, // Màu sắc (primary, secondary, success...)
  size: { type: String, default: 'md' }, // Kích thước (sm, md, lg)
  variant: { type: String, default: 'filled' }, // Kiểu nút (filled, outlined, text)
  iconLeft: String, // Icon bên trái (tùy chọn)
  iconRight: String // Icon bên phải (tùy chọn)
})

// Tạo class động
const buttonClass = computed(() => [
  'flex items-center justify-center gap-2 rounded-md transition-all duration-200',
  props.variant === 'filled' ? `bg-${props.color}-500 text-white hover:bg-${props.color}-600` : '',
  props.variant === 'outlined' ? `border border-${props.color}-500 text-${props.color}-500 hover:bg-${props.color}-100` : '',
  props.variant === 'text' ? `text-${props.color}-500 hover:bg-${props.color}-100` : '',
  props.size === 'sm' ? 'px-2 py-1 text-sm' : '',
  props.size === 'md' ? 'px-4 py-2 text-base' : '',
  props.size === 'lg' ? 'px-6 py-3 text-lg' : ''
])
</script>

<template>
  <button :class="buttonClass">
    <span v-if="iconLeft" class="material-icons">{{ iconLeft }}</span>
    <slot />
    <span v-if="iconRight" class="material-icons">{{ iconRight }}</span>
  </button>
</template>

<style scoped>
.material-icons {
  font-size: 1.2em;
}
</style>
