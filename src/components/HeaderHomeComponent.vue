<template>
      <header>
           <div class="header-nav">
               <div class="logo-div">
                  <img src="@/assets/proj-images/author-logo-round-200x205.png" alt="">
                 

               </div>
            
            
           </div>
        
       </header>
  
</template>

<script>
export default {
    name:'HeaderHomeComponent',
   


}
</script>

<style lang="scss" scoped>
img{
        width: 100%;
}
.header-nav{
    display: flex;
    justify-content: space-between;

    .logo-div{
        height: 200px;
        width:205px;
        img{
            width: 100%;
        }
    }
}
header{
    background-image: url('@/assets/proj-images/footer-3.jpg') ;
    background-position: center ;
    background-repeat: no-repeat;
    background-size:cover;
    height: 100vh;
    
   
    
    
    
}

</style>