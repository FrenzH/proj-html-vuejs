<template>
  <header>
    <div class="logo-div">
                  <img src="@/assets/proj-images/author-logo-round-200x205.png" alt="">
                 

     </div>
     <div class="header-description">
        <h1>Recent Articles</h1>
        <h2>Enjoy Some Of My Casual Writing Here On My Blog</h2>

     </div>

  </header>
</template>

<script>
export default {
    name:'HeaderBlogComponent'

}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss" ;
header{
    background-image: url('@/assets/proj-images/architecture-1-600x450.jpg');
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