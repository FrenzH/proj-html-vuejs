<template>
  <div class="container">
    <div class="image">
        <img src="@/assets/proj-images/event-07-400x240.jpg" alt="">
    </div>
    <div class="paragraph">
        <h1>Open Book: Dialogues</h1>
        <hr>
        <p>Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a nulla.</p>
    </div>
  </div>
</template>

<script>
export default {
    name:'OpenBookCard'

}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss" ;
.paragraph{
  width: 400px;
  background-color: white;
  text-align: center;
  padding: 20px;
}
.image{
  cursor: pointer;
}
h1{
  padding-bottom: 15px;
}
p{
  padding-top:15px;
  line-height: 30px;
  font-size: 1.2rem;
}
h1:hover{
  color: $color1;
  transition: 0.5s;
  cursor: pointer;
}
.image:hover{
  transition: 0.5s;
  opacity: 70%;
}
</style>