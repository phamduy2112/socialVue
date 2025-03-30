<template>
    <div class="flex items-center justify-center min-h-screen bg-zinc-900">
      <div class="bg-zinc-800 py-8 px-6 rounded-lg shadow-lg w-[33rem] border border-zinc-700">
        <div class="text-center text-3xl font-bold text-white">Enter OTP</div>
        <p className="mt-2 text-center text-sm text-gray-400">
            Check your email for the OTP and enter it here to reset your password.
        </p>
        <!-- OTP Input -->
        <div class="flex justify-center gap-2 mt-6">
          <input
            v-for="(char, index) in otp"
            :key="index"
            v-model="otp[index]"
            type="text"
            maxlength="1"
            class="w-12 h-12 text-center text-2xl text-white bg-zinc-700 border border-zinc-600 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            @input="handleInput(index, $event)"
            @keydown.backspace="handleBackspace(index)"
            ref="otpInputs"
          />
        </div>
        
        <p v-if="error" class="text-red-500 text-sm text-center mt-2">{{ error }}</p>
  
        <!-- Submit Button -->
        <div class="mt-6">
          <button 
            @click="submitOTP"
            class="w-full text-[1rem] bg-blue-600 text-white p-[.65rem] rounded-md hover:bg-blue-700 transition duration-200"
          >
            Verify OTP
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted, nextTick } from 'vue'
  
  const otp = ref<string[]>(new Array(6).fill(''))
  const otpInputs = ref<HTMLInputElement[]>([])
  const error = ref('')
  const emit=defineEmits(["nextStep"])
  // Xử lý nhập ký tự và tự động chuyển ô
  const handleInput = (index: number, event: Event) => {
  const target = event.target as HTMLInputElement
  const value = target.value // Giữ nguyên chữ thường

  if (!/^[a-zA-Z0-9]$/.test(value)) {
    target.value = ''
    return
  }

  otp.value[index] = value
  if (index < otp.value.length - 1 && value !== '') {
    nextTick(() => otpInputs.value[index + 1]?.focus())
  }
}

  
  // Xử lý xóa và quay lại ô trước
  const handleBackspace = (index: number) => {
    if (otp.value[index] === '' && index > 0) {
      otp.value[index - 1] = ''
      nextTick(() => otpInputs.value[index - 1]?.focus())
    }
  }
  
  // Xử lý gửi OTP
  const submitOTP = () => {
    const otpCode = otp.value.join('')
    if (otpCode.length < 6) {
      error.value = 'OTP must be 6 characters'
      return
    }
  
    error.value = ''
    alert(`OTP Verified: ${otpCode}`)
    emit('nextStep') // Chuyển đến trang đ��i mật khẩu
  }
  
  // Focus vào ô đầu tiên khi mở trang
  onMounted(() => {
    nextTick(() => otpInputs.value[0]?.focus())
  })
  </script>
  