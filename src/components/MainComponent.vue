<template>
    <div v-if="index===0">
        <MoreAboutComponent @index="getIndex"/>
        <ShopBannerComponent/>
        <AudibleComponent/>
        <TestimonialComponent @index="getIndex"/>
        <UpcomingEventsComponent />
        <SubscribeComponent/>
        <FindOutMore/>
        


        
    </div>
  
</template>

<script>
import MoreAboutComponent from '@/components/MoreAboutComponent.vue';
import ShopBannerComponent from '@/components/ShopBannerComponent.vue';
import AudibleComponent from '@/components/AudibleComponent.vue';
import TestimonialComponent from '@/components/TestimonialComponent.vue';
import UpcomingEventsComponent from '@/components/UpcomingEventsComponent.vue';
import SubscribeComponent from '@/components/SubscribeComponent.vue';
import FindOutMore from '@/components/FindOutMoreComponent.vue';

export default {
    name:'MainComponent',
    props:{
        index:Number
    },
    methods:{
        getIndex(index){
            this.$emit('currentIndex',index)
           
        }
    },
    components:{
    MoreAboutComponent,
    ShopBannerComponent,
    AudibleComponent,
    TestimonialComponent,
    UpcomingEventsComponent,
    SubscribeComponent,
    FindOutMore
}

}
</script>

<style lang="scss" scoped>
.debug{
    height: 600px;
    background-color: aqua;
}


</style>