<template>
    <div class="header-container">
        <header>
           <div class="header-nav">
               <div class="logo-div">
                  <img src="@/assets/proj-images/author-logo-round-200x205.png" alt="">

               </div>
            <NavBarComponent />
            
        </div>
        <div class="carousel">
            
        </div>
    </header>
    <div class="pos-absolute">
        <BookShopHeaderComponent />

    </div>
    
    

     
    </div>
    
  
</template>

<script>
import NavBarComponent from '@/components/NavBarComponent.vue';
import BookShopHeaderComponent from '@/components/BookShopHeaderComponent.vue';
export default {
    name:'HeaderComponent',
    components:{
        NavBarComponent,
        BookShopHeaderComponent
    }

}
</script>

<style lang="scss" scoped>
header{
    background-image: url('@/assets/proj-images/author_thumbnail.jpg') ;
    background-position: cover;
    background-repeat: no-repeat;
    background-size:100%;
    
    .carousel{
        height: 600px;
    }
    
    
    img{
        width: 100%;
    }
}
.header-nav{
    display: flex;
    justify-content: space-between;

    .logo-div{
        height: 200px;
        width:205px;
        img{
            width: 100%;
        }
    }
}
.pos-absolute{
    position: absolute;
    bottom:0px;
    left:1000px;
}




</style>