<template>
  <div class="button-container">
    <button id="button-amazon"><font-awesome-icon icon="fa-brands fa-amazon" /> Buy On Amazon</button>
    <div class="y-line"></div>
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
    border: 1.5px solid $color4;
    margin: 0px 20px;
    border-radius: 12px;
    display: flex;
    justify-content: space-evenly;
    //box-shadow: black 0px 5px 15px;
    button{
        outline:none;
        background: none;
        border:none;
        cursor:pointer;
        
    }
    
}
.y-line{
    border-right: 1px solid $color4;
    height: 50px;
}

</style>