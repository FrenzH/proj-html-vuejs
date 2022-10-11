<template>
  <div class="container">
    <div class="banner-logo">
        <a href="">
            <img src="@/assets/proj-images/ebay-logotan-2x-200x66.png" alt="">
        </a>
        
    </div>
    <div class="banner-logo">
        <a href="">
            <img src="@/assets/proj-images/audible-logotan-2x-200x66.png" alt="">

        </a>
        
    </div>
    <div class="banner-logo">
        <a href="">
            <img src="@/assets/proj-images/bb-logotan-2x-200x66.png" alt="">

        </a>
        
    </div>
    <div class="banner-logo">
        <a href="">
            <img src="@/assets/proj-images/kindlefire-logotan-2x-200x66.png" alt="">

        </a>
        
    </div>

  </div>
</template>

<script>
export default {
    name:'ShopBannerComponent'

}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss" ;
.container{
    background-color: $color2;
    display: flex;
    justify-content: center;
    padding: 60px;
}
.banner-logo{
    width: 200px;
    height: 66px;
    margin:0 30px;
    cursor: pointer;
}


</style>