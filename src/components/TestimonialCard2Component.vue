<template>
  <div>
    <div class="first-card">
        <div class="card-content">
            <h1>A True Masterpiece, Bravo!</h1>
            <p>Nulla quis lorem ut libero malesuada feugiat. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Vivamus suscipit tortor eget felis porttitor volutpat. Nulla quis lorem ut libero malesuada feug at.</p>
        </div>
        <div class="card-author">
            <h2>Gerald Hendley, The Guardian</h2>
        </div>

    </div>
    <div class="second-card">
        <div class="card-content">
            <h1>A Unique View On The World</h1>
            <p>Donec sollicitudin molestie malesuada. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Nulla quis lorem ut libero malesuada feugiat.</p>
        </div>
        <div class="card-author">
            <h2>Mary Maxey, The Globe And Mail</h2>

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
.card-content{
    background-color: $color2;
    padding: 20px;
}


</style>