<template>
    <div
      :class="computedClass"
      :style="computedStyle"
    >
      <img 
        v-if="src" 
        :src="src" 
        :alt="alt" 
        class="w-full h-full object-cover"
      />
      <div 
        v-else 
        class="flex items-center justify-center w-full h-full bg-gray-200 text-gray-500 text-sm font-semibold"
      >
        {{ initials }}
      </div>
    </div>
  </template>
  
  <script setup>
  import { computed } from 'vue';
  
  const props = defineProps({
    src: String,
    alt: { type: String, default: 'Avatar' },
    name: { type: String, default: '' },
    borderRadius: { type: [String, Number], default: 'full' },
    width: { type: Number, default: 12 },
    height: { type: Number, default: 12 }
  });
  
  // ✅ Xử lý initials
  const initials = computed(() => {
    if (!props.name) return '?';
    return props.name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase();
  });
  
  // ✅ Xử lý class cho width nhỏ (12, 16, 20, ...)
  const computedClass = computed(() => {
    let wClass = props.width <= 20 ? `w-${props.width}` : '';
    let hClass = props.height <= 20 ? `h-${props.height}` : '';
    let roundedClass = props.borderRadius === 'full' ? 'rounded-full' : `rounded-${props.borderRadius}`;
  
    return `relative overflow-hidden border border-gray-300 flex items-center justify-center bg-gray-200 ${wClass} ${hClass} ${roundedClass}`;
  });
  
  // ✅ Xử lý style cho width lớn (50px, 100px, ...)
  const computedStyle = computed(() => {
    return props.width > 20
      ? { width: `${props.width}rem`, height: `${props.height}rem`, borderRadius: props.borderRadius === 'full' ? '50%' : `${props.borderRadius}px` }
      : {};
  });
  </script>
  