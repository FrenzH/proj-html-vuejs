<template>
    <div class="nav-bar">
        <ul>
            <li     
                   v-for="item in List"  
                   :key="item">
                                  {{item}}
            </li>
            
        </ul>

    </div>
  
</template>

<script>

export default {
    name:'NavBarComponent',
    data(){
        return{
           
            List:['Home','About Me','Testimonials','My Blog','Meetups','Shop','Contact Me']
        }

    }

}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss" ;
li{
        padding: 10px;
        color:white;
        list-style: none;
    }
    li:hover{
        color:$color1;
        border-top: 2px solid $color1;
    }
ul{
    display: flex;
    
    
    
}

</style>