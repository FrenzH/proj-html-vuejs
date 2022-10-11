<template>
  <div class="container">
    <div>
        <img src="@/assets/proj-images/audible-app-2x-400x418.png" alt="">
    </div>
    <div class="description">
        <h1>New Audiobook</h1>
        <h2>NO TIME TO READ? NO PROBLEM. LISTEN TO IT</h2>
        <p>Donec fringilla nunc eu turpis dignissim, at euismod sapien tincidunt. Maecenas eleifend congue cursus.</p>
        <button><font-awesome-icon icon="fa-brands fa-audible" /> Buy This On Audible</button>

    </div>


  </div>
</template>

<script>
export default {
    name:'AudibleComponent'

}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss" ;
.container{
    color: white;
    display: flex;
    background-image: url('@/assets/proj-images/banner.jpg');
    justify-content: center;
    padding-top: 100px;
}
.description{
  width: 30%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}
h1{
  font-size: 3rem;
}
h2{
  color: $color1;
  font-weight: 100;
  padding-top: 30px;

}
p{
  color: $color3;
  line-height: 30px;
  padding-top: 30px;
}

button{
    border: none;
    background-color: $color4;
    padding: 10px 30px;
    color: white;
    cursor: pointer;
    margin-top:40px;
    border-radius: 10px;

    
}
button:hover{
    background-color: $color5;
    
}

</style>