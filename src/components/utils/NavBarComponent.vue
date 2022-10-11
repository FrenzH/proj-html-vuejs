<template>
    <div class="nav-bar">
        <ul>
            <li    @click="getIndex(i)" 
                   v-for=" (item , i) in List"  
                   :key="i"
                   :class="currentIndex===i?'active':''">
                                 {{item}}
                                  
            </li>
            
        </ul>

    </div>
  
</template>

<script>

export default {
    name:'NavBarComponent',
    
    props:{
        currentIndex:Number

    },
    
    data(){
        return{
           
            List:['Home','About Me','Testimonials','My Blog','Meetups','Shop','Contact Me'],
           
        }

    },
    methods:{
        getIndex(index){
            
            console.log('indice',this.currentIndex);
            this.$emit('index',index);
            
        }
    },
    

}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss" ;
li{
        margin: 10px;
        padding-top: 25px;
        color:white;
        list-style: none;
        cursor: pointer;
        font-size: 1.2rem;
    }
    li:hover{
        transition: 0.4s;
        color:$color1;
        //border-top: 3px solid $color1;
        box-shadow:$color1  0px -6px 0px 0px;
    }
ul{
    display: flex;
    
    
    
}
.active{
    color:$color1;
    box-shadow:$color1  0px -6px 0px 0px;

}

</style>