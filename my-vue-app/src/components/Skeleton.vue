<template>
    <div class="animate-pulse bg-gray-300 rounded" :class="[height, width]">
        
    </div>
</template>

<script setup>
defineProps({
    height:{type:String,default:'h-6'},
    width:{type:String,default:'w-full'}
})
</script>