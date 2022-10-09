<template>
    <div>
        <HeaderHomeComponent  v-if="index===0"/>
        <HeaderAboutMeComponent v-if="index===1"/>
        <HeaderTestimonialsComponent v-if="index===2"/>
        <HeaderBlogComponent v-if="index===3"/>
        <HeaderMeetupsComponent v-if="index===4"/>
        <HeaderShopComponent v-if="index===5"/>
        <HeaderContactMeComponent v-if="index===6"/>       
        <div class="nav-bar-position">
            <NavBarComponent @index='currentIndex' />
        </div>
        
        

        
        <div class="carousel-position" v-if="index===0">
            <CarouselComponent />
        </div>
        
    
    
        <div class="pos-absolute" v-if="index===0">
            <BookShopHeaderComponent  />
        </div>
    
    

     
    </div>
    
  
</template>

<script>
import NavBarComponent from '@/components/NavBarComponent.vue';
import BookShopHeaderComponent from '@/components/BookShopHeaderComponent.vue';
import CarouselComponent from '@/components/CarouselComponent.vue';
import HeaderHomeComponent from '@/components/HeaderHomeComponent.vue';
import HeaderAboutMeComponent from '@/components/HeaderAboutMeComponent.vue';
import HeaderTestimonialsComponent from '@/components/HeaderTestimonialsComponent.vue';
import HeaderBlogComponent from '@/components/HeaderBlogComponent.vue';
import HeaderMeetupsComponent from '@/components/HeaderMeetupsComponent.vue';
import HeaderShopComponent from '@/components/HeaderShopComponent.vue';
import HeaderContactMeComponent from '@/components/HeaderContactMeComponent.vue';
export default {
    name:'HeaderComponent',
    data(){
        return{
            index:0
        }
    },
    methods:{
    currentIndex(index){
        this.index=index;
        console.log(index);
        this.$emit('currentIndex',index)
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
    bottom: 600px;
    left: 700px;
}



</style>