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
@import url('https://fonts.googleapis.com/css2?family=Kristi&display=swap');
@import "@/assets/scss/variables.scss" ;
.more-about-container{
    text-align: center;
    margin-top: 150px;
    margin-bottom: 150px;
    margin-left: 30px;
    margin-right: 30px;
   h1{
    padding-bottom: 40px;
    font-family: 'Kristi',cursive;
    color: $color1;
    font-size: 5.5rem;
   }
   
}
button{
    border: none;
    background-color: $color4;
    padding: 10px 30px;
    color: white;
    cursor: pointer;
  
    border-radius: 10px;

    
}
button:hover{
    background-color: $color5;
    
}
p{
    padding-bottom: 40px;
    font-size: 2.5rem;
    line-height: 60px;
   }
</style>