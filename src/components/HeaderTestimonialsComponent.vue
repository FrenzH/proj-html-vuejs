<template>
  <header>
    <div class="logo-div">
                  <img src="@/assets/proj-images/author-logo-round-200x205.png" alt="">
                 

     </div>
     <div class="header-description">
        <h1>Testimonials</h1>
        <h2>Read What My Audience Says About My Work</h2>

     </div>

  </header>
</template>

<script>
export default {
    name:'HeaderTestimonialsComponent'

}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss" ;
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
header{
    background-image: url('@/assets/proj-images/travel_thumbnail-600x450.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size:100%;
    height: 55vh;
}

</style>