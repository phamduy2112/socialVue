<template>
  <div class="bg-zinc-500/10  rounded-lg mt-4">
    <div class="flex justify-between items-center px-4 text-white pt-[1rem]">
      <div class="flex gap-1">
        <div class="rounded-full w-[50px]">
            <Avatar src="https://scontent.fhan4-1.fna.fbcdn.net/v/t39.30808-1/473970633_3696832523866904_758678437992717420_n.jpg?stp=c0.80.480.480a_dst-jpg_s160x160_tt6&_nc_cat=108&ccb=1-7&_nc_sid=1d2534&_nc_eui2=AeHZlmluPiyFc_Zs_rGdmfdr_oT90JzeaDn-hP3QnN5oOQz7OIPnbUxDZ_JiiT9sO74usoyqoX4_ydlqraEVMv-U&_nc_ohc=nrjk3KYz5OIQ7kNvgFLyo6v&_nc_oc=AdlY30AQn8NbWCYSOxdC67Gd2lgDcI67nVtsl7XW3Wv3ZYTsb96OqrID7iW9AFba8Z0&_nc_zt=24&_nc_ht=scontent.fhan4-1.fna&_nc_gid=fcYFWc5aRjpnnWjFdrk1LQ&oh=00_AYFvhgbNAbeU1BZqiFrzMOenlHBXFjE05Fydfh6mk2Rk2Q&oe=67EAB0D4" width="11" height="11"/>
        </div>
        <div>
          <p class="text-[1rem]">Phạm Duy</p>
          <p class="text-[.8rem]">2 phút</p>
        </div>
      </div>
      <div class="flex gap-[1rem] text-[1.2rem]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="{1.5}"
          stroke="currentColor"
          class="size-6"
          
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
          />
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="{1.5}"
          stroke="currentColor"
          class="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      </div>
    </div>
    <div>
      <p class="py-[.7rem] px-4 text-[1rem] text-white">
       {{ content }}
      </p>
      <img
        width="100%"
        class="object-cover h-[500px]"
        src="https://scontent.fhan4-1.fna.fbcdn.net/v/t39.30808-6/486146097_637120645591901_5965988834915963474_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEzKlYGLNwlBWltK705lb-l4B50cfV0Oo7gHnRx9XQ6jr2u-I5VmhsjMdqjDReXQ8quF9zvKiB33NHyYAmDETZR&_nc_ohc=IWL22Ax860MQ7kNvgEAcbM8&_nc_oc=Adkr14YSALeJ9yvAyapKbWv17o5VMtIVKz75q5ksHEr5NHc3FYj2qPY1C_AT_3y9fMU&_nc_zt=23&_nc_ht=scontent.fhan4-1.fna&_nc_gid=KVqomx0mOmfHX-Ryb0NzpQ&oh=00_AYHOUrMtjoUm9dd8STViOf6RWuQA_Uen70G2v6jObr8GVw&oe=67EAAFC7"
        alt=""
      />
    </div>
    <div
      class="flex justify-between items-center py-[.5rem] border border-b-zinc-600 border-transparent"
    >
    <button @click="isDialogOpen = true" class="flex gap-[.5rem] text-[.8rem]  text-zinc-400 px-4 items-center">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
  <path d="M7.493 18.5c-.425 0-.82-.236-.975-.632A7.48 7.48 0 0 1 6 15.125c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75A.75.75 0 0 1 15 2a2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23h-.777ZM2.331 10.727a11.969 11.969 0 0 0-.831 4.398 12 12 0 0 0 .52 3.507C2.28 19.482 3.105 20 3.994 20H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 0 1-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227Z" />
</svg>
990
    </button>

    <LikeComponent  v-model="isDialogOpen" :users="likedUsers" />

      <div class="flex gap-[1rem] text-zinc-400 text-[.9rem] px-4">
        <div>6,9k bình luận</div>
        <div>501 lượt chia sẻ</div>
      </div>
    </div>
    <div
      class="flex items-center py-[.5rem] justify-center border border-b-zinc-600 border-transparent"
    >
      <div
        class="flex gap-[.5rem] items-center justify-center w-[30%] text-[1.1rem] text-zinc-400 cursor-pointer"
      >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
  <path d="M7.493 18.5c-.425 0-.82-.236-.975-.632A7.48 7.48 0 0 1 6 15.125c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75A.75.75 0 0 1 15 2a2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23h-.777ZM2.331 10.727a11.969 11.969 0 0 0-.831 4.398 12 12 0 0 0 .52 3.507C2.28 19.482 3.105 20 3.994 20H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 0 1-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227Z" />
</svg>

      Thích 
      </div>
      <div
        class="flex gap-[.5rem] items-center justify-center w-[30%] text-[1.1rem] text-zinc-400 cursor-pointer"
      >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
  <path fill-rule="evenodd" d="M4.848 2.771A49.144 49.144 0 0 1 12 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 0 1-3.476.383.39.39 0 0 0-.297.17l-2.755 4.133a.75.75 0 0 1-1.248 0l-2.755-4.133a.39.39 0 0 0-.297-.17 48.9 48.9 0 0 1-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97Z" clip-rule="evenodd" />
</svg>

      Bình luận
      </div>
      <div
        class="flex gap-[.5rem] items-center justify-center w-[30%] text-[1.1rem] text-zinc-400 cursor-pointer"
      >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
  <path fill-rule="evenodd" d="M15.75 4.5a3 3 0 1 1 .825 2.066l-8.421 4.679a3.002 3.002 0 0 1 0 1.51l8.421 4.679a3 3 0 1 1-.729 1.31l-8.421-4.678a3 3 0 1 1 0-4.132l8.421-4.679a3 3 0 0 1-.096-.755Z" clip-rule="evenodd" />
</svg>

        Chia sẻ
      </div>
    </div>
    <!-- {/* bình luận */} -->

    <div class="flex gap-[1rem] px-4 py-3 text-white">
      <div class="w-[40] h-[40px] overflow-hidden rounded-full">
        <Avatar src="https://scontent.fhan4-1.fna.fbcdn.net/v/t39.30808-1/473970633_3696832523866904_758678437992717420_n.jpg?stp=c0.80.480.480a_dst-jpg_s160x160_tt6&_nc_cat=108&ccb=1-7&_nc_sid=1d2534&_nc_eui2=AeHZlmluPiyFc_Zs_rGdmfdr_oT90JzeaDn-hP3QnN5oOQz7OIPnbUxDZ_JiiT9sO74usoyqoX4_ydlqraEVMv-U&_nc_ohc=nrjk3KYz5OIQ7kNvgFLyo6v&_nc_oc=AdlY30AQn8NbWCYSOxdC67Gd2lgDcI67nVtsl7XW3Wv3ZYTsb96OqrID7iW9AFba8Z0&_nc_zt=24&_nc_ht=scontent.fhan4-1.fna&_nc_gid=fcYFWc5aRjpnnWjFdrk1LQ&oh=00_AYFvhgbNAbeU1BZqiFrzMOenlHBXFjE05Fydfh6mk2Rk2Q&oe=67EAB0D4" width="11" height="11"/>

      </div>

      <div class="w-[100%]">
        <h5 class="text-[.9rem]">Phạm Duy</h5>
        <div class="flex justify-between gap-[2rem] text-[1rem]">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing
            esadasdasdasdasdasdasdasdasdasdlit. Id harum, eiusasdasd
          </p>
  <DropdownMenu >
    <DropdownMenuTrigger>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
  <path fill-rule="evenodd" d="M4.5 12a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm6 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm6 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" clip-rule="evenodd" />
</svg>
    </DropdownMenuTrigger>
    <DropdownMenuContent class="bg-zinc-800 text-white border border-zinc-700">

      <DropdownMenuItem>Chỉnh sửa</DropdownMenuItem>
      <DropdownMenuItem>Xóa</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>


        </div>

        <div class="flex gap-[.8rem] mt-1">
          <p class="text-[.9rem] text-zinc-400">4 giờ</p>
          <p class="text-[.9rem] text-zinc-300">Thích</p>
          <p class="text-[.9rem] text-zinc-400">Phản hồi</p>
        </div>
      </div>
    </div>
    <div class="flex gap-[1rem] px-4 py-1">
    <Avatar
      src="https://scontent.fhan4-1.fna.fbcdn.net/v/t39.30808-1/473970633_3696832523866904_758678437992717420_n.jpg?stp=c0.80.480.480a_dst-jpg_s160x160_tt6&_nc_cat=108&ccb=1-7&_nc_sid=1d2534&_nc_eui2=AeHZlmluPiyFc_Zs_rGdmfdr_oT90JzeaDn-hP3QnN5oOQz7OIPnbUxDZ_JiiT9sO74usoyqoX4_ydlqraEVMv-U&_nc_ohc=nrjk3KYz5OIQ7kNvgFLyo6v&_nc_oc=AdlY30AQn8NbWCYSOxdC67Gd2lgDcI67nVtsl7XW3Wv3ZYTsb96OqrID7iW9AFba8Z0&_nc_zt=24&_nc_ht=scontent.fhan4-1.fna&_nc_gid=fcYFWc5aRjpnnWjFdrk1LQ&oh=00_AYFvhgbNAbeU1BZqiFrzMOenlHBXFjE05Fydfh6mk2Rk2Q&oe=67EAB0D4"
      width="11"
      height="11"
    />

    <div class="flex w-[100%] items-center space-x-2 relative pb-4">
      <textarea
        v-model="textContent"
        @focus="handleFocus"
        @blur="handleBlur"
        placeholder="Mời bạn nhập bài viết"
        class="w-full p-2 border rounded text-white text-[1rem]"
      />

      <button
        v-if="isFocused"
        class="absolute right-5 top-[1.2rem] text-white transform -translate-y-1/2 bg-transparent border-none cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="size-4 mt-12"
        >
          <path
            d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z"
          />
        </svg>
      </button>
    </div>
  </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import Dialog from "../Dialog.vue";
import LikeComponent from "./component/LikeComponent.vue";
import Avatar from "../Avatar.vue";
import DropdownMenu from "../ui/dropdown-menu/DropdownMenu.vue";
import DropdownMenuTrigger from "../ui/dropdown-menu/DropdownMenuTrigger.vue";
import DropdownMenuContent from "../ui/dropdown-menu/DropdownMenuContent.vue";
import DropdownMenuLabel from "../ui/dropdown-menu/DropdownMenuLabel.vue";
import DropdownMenuSeparator from "../ui/dropdown-menu/DropdownMenuSeparator.vue";
import DropdownMenuItem from "../ui/dropdown-menu/DropdownMenuItem.vue";
const isOpen = ref(false);
const isDialogOpen = ref(false)

const isFocused = ref(false)
const textContent = ref('')

const handleFocus = () => {
  isFocused.value = true
}

const handleBlur = () => {
  if (!textContent.value.trim()) {
    isFocused.value = false
  }
}
// Danh sách người đã like bài viết (giả định)
const likedUsers = ref([
  { id: 1, name: 'Phạm Duy', avatar: 'https://github.com/shadcn.png' },
  { id: 2, name: 'Nguyễn Văn A', avatar: 'https://randomuser.me/api/portraits/men/1.jpg' },
])
defineProps({
  id: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  created_at: {
    type: String,
    required: true,
  },
  visibility: {
    type: String,
    required: true,
  },
});
</script>
