<template>
  <div class="container">
    <div class="banner-logo">
        <img src="@/assets/proj-images/ebay-logotan-2x-200x66.png" alt="">
    </div>
    <div class="banner-logo">
        <img src="@/assets/proj-images/audible-logotan-2x-200x66.png" alt="">
    </div>
    <div class="banner-logo">
        <img src="@/assets/proj-images/bb-logotan-2x-200x66.png" alt="">
    </div>
    <div class="banner-logo">
        <img src="@/assets/proj-images/kindlefire-logotan-2x-200x66.png" alt="">
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
}
.banner-log{
    width: 200px;
    height: 66px;
}


</style>