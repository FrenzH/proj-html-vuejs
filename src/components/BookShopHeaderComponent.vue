<template>
  <div>
    <div class="container">
       <div class="img-container">
             <img src="@/assets/proj-images/book-widget.png" alt="">
       </div>
       <div>
             <h1>Latest Book Release</h1>
             <h2>D.VAUGHN AUTOBIOGRAPHY</h2>
              <p>ciaociaociao</p>
       </div>
    
  </div>
  <BookShopButtonComponent/>

  </div>
 
  


</template>

<script>

import BookShopButtonComponent from '@/components/BookShopButtonComponent.vue';
export default {
    name:'BookShopHeaderComponent',
    components:{
        BookShopButtonComponent
    }
}
</script>

<style lang="scss" scoped>
*{
    background-color: white;
}
.container{
    
    display: flex;
    padding: 50px;
    img{
        width: 100%;
    }
    
}


</style>