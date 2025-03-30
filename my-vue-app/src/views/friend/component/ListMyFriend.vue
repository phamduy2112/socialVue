<script setup lang="ts">
import DropdownMenu from '@/components/ui/dropdown-menu/DropdownMenu.vue';
import DropdownMenuContent from '@/components/ui/dropdown-menu/DropdownMenuContent.vue';
import DropdownMenuItem from '@/components/ui/dropdown-menu/DropdownMenuItem.vue';
import DropdownMenuTrigger from '@/components/ui/dropdown-menu/DropdownMenuTrigger.vue';


</script>

<template>
 <div  className="flex justify-between">
      <div className="flex gap-[1rem] justify-center items-center">
        <div className="w-[100px] rounded-md overflow-hidden">
          <img className="w-[100px] h-[100px] object-cover object-center"
          src="https://scontent.fhan4-1.fna.fbcdn.net/v/t39.30808-6/473970633_3696832523866904_758678437992717420_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHZlmluPiyFc_Zs_rGdmfdr_oT90JzeaDn-hP3QnN5oOQz7OIPnbUxDZ_JiiT9sO74usoyqoX4_ydlqraEVMv-U&_nc_ohc=nrjk3KYz5OIQ7kNvgFLyo6v&_nc_oc=AdlY30AQn8NbWCYSOxdC67Gd2lgDcI67nVtsl7XW3Wv3ZYTsb96OqrID7iW9AFba8Z0&_nc_zt=23&_nc_ht=scontent.fhan4-1.fna&_nc_gid=LMIDtqODAm9vX84lvHLnHA&oh=00_AYF36QxkP0HV5GZXYzPDyXZfNfM0761X5CrWdeo5LCkmHg&oe=67EBEAD6"
          alt={user.name} />
        </div>
        <div>
          <h4 class="text-[1.2rem]">duy</h4>
        </div>
      </div>
      <div>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
  <path fill-rule="evenodd" d="M4.5 12a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm6 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm6 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" clip-rule="evenodd" />
</svg>

          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-48 bg-zinc-800 text-white border border-zinc-700">
            <DropdownMenuItem className="hover:bg-zinc-700 cursor-pointer ">
              Hủy kết bạn
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
</template>