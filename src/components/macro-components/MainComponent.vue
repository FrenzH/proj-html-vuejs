<template>
    <div v-if="currentIndex===0">
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
import MoreAboutComponent from '@/components/main-components/MoreAboutComponent.vue';
import ShopBannerComponent from '@/components/main-components/ShopBannerComponent.vue';
import AudibleComponent from '@/components/main-components/AudibleComponent.vue';
import TestimonialComponent from '@/components/main-components/TestimonialComponent.vue';
import UpcomingEventsComponent from '@/components/main-components/UpcomingEventsComponent.vue';
import SubscribeComponent from '@/components/main-components/SubscribeComponent.vue';
import FindOutMore from '@/components/main-components/FindOutMoreComponent.vue';

export default {
    name:'MainComponent',
    props:{
        currentIndex:Number
    },
    methods:{
        getIndex(index){
            this.$emit('index',index)
           
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