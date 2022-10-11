<template>
  <div class="card">
    <div class="first-card">
        <div class="card-content">
            <h1>A True Masterpiece, Bravo!</h1>
            <p>Nulla quis lorem ut libero malesuada feugiat. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Vivamus suscipit tortor eget felis porttitor volutpat. Nulla quis lorem ut libero malesuada feug at.</p>
        </div>
        <div class="card-author">
            <img src="@/assets/proj-images/theguardian-xsmall.png" alt="">
            <h2> <span>Gerald Hendley</span> , The Guardian</h2>
        </div>

    </div>
    <div class="second-card">
        <div class="card-content">
            <h1>A Unique View On The World</h1>
            <p>Donec sollicitudin molestie malesuada. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Nulla quis lorem ut libero malesuada feugiat.</p>
        </div>
        <div class="card-author">
            <img src="@/assets/proj-images/globe-xsmall.png" alt="">
            <h2> <span>Mary Maxey</span> , The Globe And Mail</h2>

        </div>

    </div>

  </div>
</template>

<script>
export default {
    name:'TestimonialCard2'

}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss" ;
.card{
    margin-left:30px;
}
.card-content{
    background-color: $color2;
    padding: 20px;
    text-align: center;
    line-height: 40px;
}
.first-card {
    padding: 20px;
}
.second-card{
    padding: 20px;
}
p{
    color:$color3;
    margin-top: 15px;
    font-size: 1.2rem;
    
}
h1{
    font-weight: 200;
}
img{
    vertical-align: middle;
    padding-right:5px;
}
span{
    color: $color3;
    
}
h2{
    display: inline-block;
    vertical-align: middle;
}

</style>