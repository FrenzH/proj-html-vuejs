<template>
  <div class="card">
    <div class="content">
        <h1>Best Author Of His Generation</h1>
        <hr>
        <h2>This book will change your perspective on life</h2>
        <p>Donec sollicitudin molestie malesuada. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Nulla quis lorem ut libero malesuada feugiat. Vestibulum ac diam sit amet.</p>
        <p>Donec sollicitudin molestie malesuada. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Nulla quis lorem ut libero malesuada feugiat. Vestibulum ac diam sit amet.</p>
        <img src="@/assets/proj-images/nytimes-logo-white-xsmall.png" alt=""><h3>  Justine Kilpatrick,<span>The New York Times</span></h3>
    </div>

  </div>
</template>

<script>
export default {
    name:'TestimonialCard1'

}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss" ;
.card{
    color: white;
    background-image: url('@/assets/proj-images/testimonial2-2x.jpg');
    background-position: center top;
    background-size: cover;
    border-radius: 0px 0px 100px 0px;
    padding: 80px 70px;
    margin-right:40px;
   
}
hr{
  background-color: white;
  height: 1px;
  width: 80%;
}
.content{
  max-width: 70%;
}
p{
  padding: 20px 0;
  line-height: 30px;
  font-size: 1.2rem;
}
h2{
  font-size: 1.2rem;
  padding-top: 20px;
}
h1{
  padding-bottom: 20px;
}
span{
  color: $color4;
}
h3{
  display: inline-block;
  vertical-align: middle;
}
img{
  vertical-align: middle;
  padding-right: 5px;
}
.card:hover {
  transition: 1s;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  transform: scale(1.1);
}
</style>