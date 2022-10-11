<template>
  <div class="button-container">
    <button id="button-amazon"><font-awesome-icon icon="fa-brands fa-amazon" /> Buy On Amazon</button>
    
    <button><font-awesome-icon icon="fa-brands fa-apple" /> Buy On AppStore</button>
  </div>
</template>

<script>
export default {
    name:'BookShopButtonComponent'

}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss" ;
.button-container{
    
    
   
    display: flex;
    justify-content: center;
    //box-shadow: black 0px 5px 15px;
    button{
      margin-bottom: 30px;
        border-color: rgba(73,169,135,.3);
        -webkit-background-clip: padding-box;
         background-clip: padding-box;
        
        border-width: 2px 2px 2px 1px;
        outline:inherit;
        border-radius: 0px 10px 10px 0px;
        padding: 10px 40px;
        cursor:pointer;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        
    }
    #button-amazon{
      border-width: 2px 1px 2px 2px;
      border-radius:10px 0px 0px 10px;

    }
   
    
}
.y-line{
    border-right: 1px solid $color4;
    height: 50px;
}
button:hover{
      border-color: $color4;
      background-color: $color4;
      color: white;
      
    }

</style>