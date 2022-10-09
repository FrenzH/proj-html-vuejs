<template>
  <div class="button-container">
    <button id="button-amazon">Buy On Amazon</button>
    <div class="y-line"></div>
    <button>Buy On AppStore</button>
  </div>
</template>

<script>
export default {
    name:'BookShopButtonComponent'

}
</script>

<style lang="scss" scoped>
.button-container{
    border: 1px solid black;
    
    border-radius: 12px;
    display: flex;
    justify-content: space-evenly;
    button{
        outline:none;
        background: none;
        border:none;
        cursor:pointer;
        
    }
    
}
.y-line{
    border-right: 1px solid black;
    height: 50px;
}

</style>