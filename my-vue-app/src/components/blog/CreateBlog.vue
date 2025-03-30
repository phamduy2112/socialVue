<script setup>
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import Dialog from "../ui/dialog/Dialog.vue";
import DialogTrigger from "../ui/dialog/DialogTrigger.vue";
import DialogContent from "../ui/dialog/DialogContent.vue";
import DialogHeader from "../ui/dialog/DialogHeader.vue";
import DialogTitle from "../ui/dialog/DialogTitle.vue";

const isOpen = ref(false);
const title = ref("");
const images = ref([]);
const files = ref([]);
const selectedOption = ref("private");

const handleImageChange = (event) => {
  const selectedFiles = Array.from(event.target.files);
  files.value = [...files.value, ...selectedFiles];

  const imageUrls = selectedFiles.map((file) => URL.createObjectURL(file));
  images.value = [...images.value, ...imageUrls];
};

const handleSubmit = () => {
  const formData = new FormData();
  formData.append("content", title.value);
  formData.append("visibility", selectedOption.value);
  files.value.forEach((file) => formData.append("files", file));

  console.log("Gửi bài viết:", formData);
  // Gửi lên API nếu cần
  isOpen.value = false;
  title.value = "";
  images.value = [];
  files.value = [];
};
</script>

<template>
  <div class="flex gap-4 border-b border-gray-500 pb-4">
    <div class="w-12 h-12 rounded-full overflow-hidden">
      <img src="https://github.com/shadcn.png" alt="Duy" class="w-full h-full object-cover" />
    </div>

    <Dialog v-model:open="isOpen">
      <DialogTrigger>
        <input type="text" placeholder="Bạn đang nghĩ gì?" class="w-[100%]
        text-white
        rounded-full px-4 py-2 border border-gray-300" readonly />
      </DialogTrigger>
      <DialogContent class="bg-zinc-800 text-white p-6 rounded-lg w-[800px]">
        <DialogHeader>
          <DialogTitle class="text-center pb-2">Tạo bài viết</DialogTitle>
          <div class="my-4 border-t border-gray-300"></div>
        </DialogHeader>

        <div class="flex gap-3 items-center">
          <img src="https://github.com/shadcn.png" alt="Avatar" class="w-12 rounded-full object-cover" />
          <select v-model="selectedOption" class="bg-gray-700 text-white h-[30px] rounded">
            <option value="public">🌍 Công khai</option>
            <option value="private">🔒 Riêng tư</option>
          </select>
        </div>

        <textarea
          v-model="title"
          placeholder="Mời bạn nhập bài viết..."

          class="w-full h-20 mt-3 p-2 text-[.95rem] rounded-lg bg-gray-700 text-white outline-none border border-transparent focus:border-transparent focus:outline-none focus:ring-0"
      
          ></textarea>

        <div class="mt-4">
          <label class="block text-sm font-semibold">Chọn ảnh:</label>
          <input type="file" accept="image/*" multiple @change="handleImageChange" class="hidden" id="file-upload" />
          <label for="file-upload" class="mt-2 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg cursor-pointer">
            Chọn file
          </label>

          <div v-if="images.length" class="mt-4">
            <Swiper :modules="[Navigation, Pagination]" navigation pagination class="w-[350px] h-[200px]">
              <SwiperSlide v-for="(img, index) in images" :key="index">
                <img :src="img" class="w-full h-full object-cover rounded-lg" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>

        <div class="my-4 border-t border-gray-300"></div>
        <button @click="handleSubmit" class="bg-blue-600 w-full py-2 rounded-lg text-white">Đăng bài</button>
      </DialogContent>
    </Dialog>
  </div>
</template>