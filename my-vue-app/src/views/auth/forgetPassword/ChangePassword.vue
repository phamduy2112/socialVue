<template>
    <div className="flex items-center justify-center min-h-screen bg-zinc-900">
      <div className="bg-zinc-800 py-[2rem] px-5 rounded-lg shadow-lg w-[33rem] border border-zinc-700">
          <div>
      <div class="text-center text-3xl font-bold text-white">Forgot password</div>
      <p className="mt-2 text-center text-sm text-gray-400">
        Create a new password and confirm it below.
      </p>
      <div class="mt-4">
          <label className="block text-[.95rem] font-medium text-gray-300 mb-2" htmlFor="email">Password</label>
        <input type="text" 
        className='text-white w-[100%] text-[1rem] px-4 py-[.6rem] rounded-sm mb-2 bg-zinc-700 border border-zinc-600 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50'
                placeholder="Nhập email của bạn"/>
      </div>
      <div class="mt-4">
          <label className="block text-[.95rem] font-medium text-gray-300 mb-2" htmlFor="email">Confirm Password</label>
        <input type="text" 
        className='text-white w-[100%] text-[1rem] px-4 py-[.6rem] rounded-sm mb-2 bg-zinc-700 border border-zinc-600 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50'
                placeholder="Nhập email của bạn"/>
      </div>
      
      <div class="mt-4 ">
        <button 
        className="w-full cursor-pointer text-[1rem]
bg-blue-600 text-white p-[.65rem] rounded-md hover:bg-blue-700 transition duration-200"

        >Change Password</button>
      </div>
 
    </div>
  </div>
</div>
</template>
<script setup lang="ts"></script>