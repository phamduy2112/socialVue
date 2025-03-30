<script setup lang="ts">
import { ref, watch } from 'vue';
import FriendItem from './component/FriendItem.vue';
import { addFriendNavbar } from '@/components/data';
import ListMyFriend from './component/ListMyFriend.vue';

// const AddFriendData= ref([])
const statusFriends=ref<any>('pending');

const dataFriend = ref([
  { id: 1, name: "Nguyễn Văn A", avatar: "https://randomuser.me/api/portraits/men/1.jpg", status: "friend" },
  { id: 2, name: "Trần Thị B", avatar: "https://randomuser.me/api/portraits/women/2.jpg", status: "suggestion" },
  { id: 3, name: "Lê Quốc C", avatar: "https://randomuser.me/api/portraits/men/3.jpg", status: "pending" },
  { id: 4, name: "Phạm Minh D", avatar: "https://randomuser.me/api/portraits/women/4.jpg", status: "friend" },
  { id: 5, name: "Võ Hoàng E", avatar: "https://randomuser.me/api/portraits/men/5.jpg", status: "suggestion" }
]);


const selectFriends = ref< {id: number; name: string; avatar: string; status: string; }[]>([]);
const activeStatusFriends=ref(false);
watch([dataFriend, statusFriends], () => {
    selectFriends.value = dataFriend.value.filter((item) => item.status == statusFriends.value);
  console.log("Danh sách pending: ", JSON.parse(JSON.stringify(selectFriends.value))); // ✅ Log ra đúng danh sách
}, { deep: true, immediate: true });


const handleChangeStatus=(status:string)=>{
    statusFriends.value=status;
    console.log("Trạng thái hiện tại: ", statusFriends.value); // ✅ Log ra trạng thái hiện tại
}

</script>

<template>
     <div class='relative'>
         
              <div class="h-screen overflow-y-auto text-white flex flex-col">
        <div class="w-[100%] mx-auto mt-[3.2rem]  ">
       
         
         <div class='relative'>

    <div class=' w-[100%] mx-auto '>
        <div class="flex text-[1rem]">
             <div
             v-for="item in addFriendNavbar" :key="item.id" @click="handleChangeStatus(item.describe)"
             :class="statusFriends==item.describe?'bg-zinc-700':''"
             class="p-2 px-10 rounded cursor-pointer flex  items-center">
                       
                            <span>{{ item.title }}</span>
                          </div>
           
        </div>
        
    </div>

<h3 class='pt-8 pb-[1rem] text-[1.3rem] font-bold px-4'>Lời mời kết bạn</h3>
     
<div class="grid ssm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-[1rem] overflow-hidden lg:pr-12 px-4">
    <div  v-for="item in JSON.parse(JSON.stringify(selectFriends))">
        <!-- <FriendItem :name="item.name" /> -->
    </div>



</div>
<div class="grid grid-cols-2">
    <ListMyFriend/>

</div>


         </div>
        </div>
      </div>
             

    </div>

</template>