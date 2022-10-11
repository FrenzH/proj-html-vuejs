<template>
  <header>
    <div class="logo-div">
                  <img src="@/assets/proj-images/author-logo-round-200x205.png" alt="">
                 

     </div>
     <div class="header-description">
        <h1>My Books</h1>
        <h2>Pellentesque In Ipsum Id Orci Porta Dapibus</h2>

     </div>
  </header>
</template>

<script>
export default {
    name:'HeaderShopComponent'

}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss" ;
header{
    background-image: url('@/assets/proj-images/event-07-1200x719.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size:100%;
    height: 55vh;
}
.logo-div{
        height: 200px;
        width:205px;
        img{
            width: 100%;
        }
    }
.header-description{
    text-align: center;
    color: $color1;
}


</style>