<template>
    <div>
        <HeaderHomeComponent  v-if="currentIndex===0"/>
        <HeaderAboutMeComponent v-if="currentIndex===1"/>
        <HeaderTestimonialsComponent v-if="currentIndex===2"/>
        <HeaderBlogComponent v-if="currentIndex===3"/>
        <HeaderMeetupsComponent v-if="currentIndex===4"/>
        <HeaderShopComponent v-if="currentIndex===5"/>
        <HeaderContactMeComponent v-if="currentIndex===6"/>       
        <div class="nav-bar-position">
            <NavBarComponent :currentIndex="currentIndex" @index='changedIndex' />
        </div>
        
        

        
        <div class="carousel-position" v-if="currentIndex===0">
            <CarouselComponent />
        </div>
        
    
    
        <div class="pos-absolute" v-if="currentIndex===0">
            <BookShopHeaderComponent  />
        </div>
    
    

     
    </div>
    
  
</template>

<script>
import NavBarComponent from '@/components/utils/NavBarComponent.vue';
import BookShopHeaderComponent from '@/components/utils/BookShopHeaderComponent.vue';
import CarouselComponent from '@/components/utils/CarouselComponent.vue';
import HeaderHomeComponent from '@/components/headers-components/HeaderHomeComponent.vue';
import HeaderAboutMeComponent from '@/components/headers-components/HeaderAboutMeComponent.vue';
import HeaderTestimonialsComponent from '@/components/headers-components/HeaderTestimonialsComponent.vue';
import HeaderBlogComponent from '@/components/headers-components/HeaderBlogComponent.vue';
import HeaderMeetupsComponent from '@/components/headers-components/HeaderMeetupsComponent.vue';
import HeaderShopComponent from '@/components/headers-components/HeaderShopComponent.vue';
import HeaderContactMeComponent from '@/components/headers-components/HeaderContactMeComponent.vue';
export default {
    name:'HeaderComponent',
    
    props:{
        currentIndex:Number

    },
    methods:{
    changedIndex(index){
        
        console.log('ehi',this.currentIndex);
        this.$emit('index',index)
    }
  },
    components:{
        NavBarComponent,
        BookShopHeaderComponent,
        CarouselComponent,
        HeaderHomeComponent,
        HeaderAboutMeComponent,
        HeaderTestimonialsComponent,
        HeaderBlogComponent,
        HeaderMeetupsComponent,
        HeaderShopComponent,
        HeaderContactMeComponent
    }

}
</script>

<style lang="scss" scoped>
.carousel-position{
    position: absolute;
    bottom: 100px;
    left: 50px;

}


.pos-absolute{
    position: absolute;
    bottom:0px;
    left:1000px;
}

.nav-bar-position{
    position: absolute;
    bottom: 650px;
    left: 800px;
}



</style>