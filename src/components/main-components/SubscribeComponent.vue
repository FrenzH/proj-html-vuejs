<template>
  <div class="container">
    <div class="content">
        <h1>Subscribe To My Newsletter</h1>
        <h2>BE NOTIFIED ABOUT BOOK SIGNING TOUR DATES</h2>
        <div>
            <input type="text" placeholder="Insert your email..." v-model="inputText">
            <button @click="checkEmail">Subscribe</button>
        </div>
        <p> Donec fringilla nunc eu turpis dignissim, at euismod sapien tincidunt.</p>
    </div>

  </div>
</template>

<script>
export default {
    name:'SubscribeComponent',
    data(){
      return{
        inputText:''
      }
    },
    methods:{
      checkEmail(){

      }
    }

}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss" ;
.container{
  color: white;
    background-image: url('@/assets/proj-images/banner-2.jpg');
    background-position: center top;
    background-size: cover;
    text-align: center;
    padding: 100px 200px;
    
}
h1{
  font-size: 3rem;
  padding-bottom: 20px;
}
h2{
  color: $color1;
  padding-bottom: 30px;
 
  font-weight: 100;
}
p{
  padding-top: 50px;
  color: $color3;
  font-size: 1.2rem;
}
input{
  border: none;
  padding: 10px;
  border-radius: 10px;
  margin-right: 20px;
}
input:focus{
  outline: none;
  border-block-style: none;
  
  
}
button {
  padding: 10px;
  color: white;
  border: none;
  outline: none;
  background-color: $color4;
  border-radius: 10px;
  cursor: pointer;
}
button:hover{
  background-color: $color5;
}
</style>