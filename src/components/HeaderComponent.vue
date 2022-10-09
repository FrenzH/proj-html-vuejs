<template>
    <div>
        <HeaderHomeComponent  v-if="index===0"/>
        
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
        HeaderHomeComponent
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