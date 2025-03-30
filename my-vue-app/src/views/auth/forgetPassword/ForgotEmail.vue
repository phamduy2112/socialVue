<template>
    <div class="flex items-center justify-center min-h-screen bg-zinc-900">
      <div class="bg-zinc-800 py-8 px-6 rounded-lg shadow-lg w-[33rem] border border-zinc-700">
        <div class="text-center text-3xl font-bold text-white">Forgot Password</div>
        <p className="mt-2 text-center text-sm text-gray-400">
            Please provide your email address. We will send you a link to reset your password.</p>
        <!-- Form -->
        <Form @submit="handleSubmit" :validation-schema="schema" v-slot="{ errors }">
          <div class="mt-4">
            <label class="block text-[.95rem] font-medium text-gray-300 mb-2" for="email">Email</label>
            <Field 
              name="email"
              type="text"
              v-model="email"
              class="text-white w-full text-[1rem] px-4 py-[.6rem] rounded-sm mb-2 bg-zinc-700 border border-zinc-600 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
              placeholder="Nhập email của bạn"
            />
            <p v-if="errors.email" class="text-red-500 text-sm mt-1">{{ errors.email }}</p>
          </div>
  
          <div class="mt-4">
            <button
              type="submit"
              class="w-full cursor-pointer text-[1rem] bg-blue-600 text-white p-[.65rem] rounded-md hover:bg-blue-700 transition duration-200"
            >
              Send OTP
            </button>
          </div>
        </Form>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  import { Form, Field } from 'vee-validate'
  import * as yup from 'yup'
  const emit = defineEmits(['nextStep'])

  const email = ref('')
  
  // Định nghĩa schema xác thực
  const schema = yup.object({
    email: yup.string().email('Email không hợp lệ').required('Email không được để trống'),
  })
  import { useEmit } from '../../../hooks/index'

  // Xử lý gửi form
  const handleSubmit = (values: { email: string }) => {
    alert(`OTP đã gửi đến: ${values.email}`)
    emit('nextStep')
  }
  </script>
  