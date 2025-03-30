<script setup lang="ts">
import Button from '@/components/ui/button/Button.vue';
import Card from '@/components/ui/card/Card.vue';
import CardContent from '@/components/ui/card/CardContent.vue';
import CardFooter from '@/components/ui/card/CardFooter.vue';
import CardHeader from '@/components/ui/card/CardHeader.vue';
import CardTitle from '@/components/ui/card/CardTitle.vue';
defineProps({
    name:{
        type:String,
        required: true
    }
})
</script>



<template >
        <div>
    
    <Card className='w-[full] overflow-hidden border border-zinc-700'>
    <CardHeader className='p-0 '>
    <div className="w-full h-[240px] overflow-hidden">
      <img
        className="w-full h-full object-cover "
        src="https://scontent.fhan4-1.fna.fbcdn.net/v/t39.30808-6/473970633_3696832523866904_758678437992717420_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHZlmluPiyFc_Zs_rGdmfdr_oT90JzeaDn-hP3QnN5oOQz7OIPnbUxDZ_JiiT9sO74usoyqoX4_ydlqraEVMv-U&_nc_ohc=nrjk3KYz5OIQ7kNvgFLyo6v&_nc_oc=AdlY30AQn8NbWCYSOxdC67Gd2lgDcI67nVtsl7XW3Wv3ZYTsb96OqrID7iW9AFba8Z0&_nc_zt=23&_nc_ht=scontent.fhan4-1.fna&_nc_gid=LMIDtqODAm9vX84lvHLnHA&oh=00_AYF36QxkP0HV5GZXYzPDyXZfNfM0761X5CrWdeo5LCkmHg&oe=67EBEAD6"
        alt=""
      />
    </div>
    
    </CardHeader>
    <CardContent className='p-3'>
        <CardTitle className='text-lg font-bold'>{{ name }}</CardTitle>
    
    </CardContent>
      <CardFooter className='flex flex-col gap-2 w-[100%] p-3'>
      <Button className="w-full bg-blue-700 hover:bg-blue-600 text-white h-[2rem] text-[1rem] cursor-pointer rounded-sm">Xác nhận</Button>
      <Button className="w-full bg-zinc-600 hover:bg-zinc-500 text-white h-[2rem] text-[1rem] cursor-pointer rounded-sm">Xóa</Button>
      </CardFooter>
    </Card>
        </div>
</template>