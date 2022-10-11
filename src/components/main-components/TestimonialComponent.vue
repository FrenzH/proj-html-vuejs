<template>
  <div class="container">
    <div class="header-section">
        <div> 
            <h1>What The Critics Say</h1>
            <h2>TESTIMONIALS FROM AROUND THE WORLD</h2>
        </div>
        <div>
            <button @click="getIndex()">Read All Testimonials</button>
        </div>

    </div>
    <div class="testimonials-container">
        <div class="card-one" >
            <TestimonialCard1/>
        </div>
        <div class="card-two">
            <TestimonialCard2/>

        </div>

    </div>

  </div>
</template>

<script>
import TestimonialCard1 from '@/components/utils/TestimonialCard1Component.vue';
import TestimonialCard2 from '@/components/utils/TestimonialCard2Component.vue';
export default {
    name:'TestimonialComponent',
    methods:{
        getIndex(){
            this.$emit('index',2);
        }
    },
    components:{
        TestimonialCard1,
        TestimonialCard2
    }

}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss" ;
.container{
 
    margin: 100px 200px;
    
    
    
}
.header-section{
    margin: auto;
    display: flex;
    justify-content: space-between;
}
.testimonials-container{
    display: flex;
   
    div{
        margin-top: 20px;
    }
}
button{
    border: none;
    background-color: $color1;
    padding: 10px 30px;
    color: white;
    cursor: pointer;
    font-size: 1.2rem;
    border-radius: 10px;
    margin-top: 30px;

    
}
button:hover{
    background-color: $color6;
    
}
h1{
    font-size: 3rem;
}
h2{
    color:$color4;
    font-weight: 100;
    padding-top: 20px;
}
.card-one{
    width: 60%;
}
.card-two{
    width: 40%;
}

</style>