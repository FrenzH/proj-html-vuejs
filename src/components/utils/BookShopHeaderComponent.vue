<template>
  <div>
    <div class="container">
       <div class="img-container">
             <img src="@/assets/proj-images/book-widget.png" alt="">
       </div>
       <div class="content">
             <h1>Latest Book Release</h1>
             <h2>D.VAUGHN AUTOBIOGRAPHY</h2>
              <p>Donec fringilla nunc eu turpis dignissim, at euismod sapien tincidunt. Maecenas eleifend congue cursus.</p>
       </div>
    
  </div>
  <BookShopButtonComponent/>

  </div>
 
  


</template>

<script>

import BookShopButtonComponent from '@/components/utils/BookShopButtonComponent.vue';
export default {
    name:'BookShopHeaderComponent',
    components:{
        BookShopButtonComponent
    }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss" ;
*{
    background-color: white;
}
.container{
    
    display: flex;
    padding: 50px;
    .img-container{
        width: 40%;
    }
    .content{
        width: 60%;
        font-size: 0.9rem;
    }
    img{
        width: 100%;
    }
    
}
h2,p{
    font-size: 0.8rem;
    padding-top: 20px;
}
p{
    line-height: 30px;
}
h2{
    color: $color1;
}


</style>