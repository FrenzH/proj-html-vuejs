<template>
  <div>
    <div class="more-about-container">
        <h1>More About Damon Vaughn</h1>
        <p>Damon Vaughn is a professor of psychology at the University of Toronto, a clinical psychologist and the author of the multi-million copy bestseller “The story of my life.”</p>
        <button id="Meet-button" @click="getIndex()" >Meet The Author</button>
    </div>

  </div>
</template>

<script>
export default {
    name:'MoreAboutComponent',
    methods:{
        getIndex(){
            this.$emit('index',1);
        }
    }

}
</script>

<style lang="scss" scoped>
.more-about-container{
    text-align: center;
    margin-top: 150px;
    margin-bottom: 150px;
   h1{
    padding-bottom: 40px;
   }
   
}
#Meet-Button{
    padding: 10px;
    border-radius: 12px;
}
p{
    padding-bottom: 40px;
   }
</style>