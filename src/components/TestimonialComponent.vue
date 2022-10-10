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
        <div class="debug">
            <TestimonialCard1/>
        </div>
        <div>
            <TestimonialCard2/>

        </div>

    </div>

  </div>
</template>

<script>
import TestimonialCard1 from '@/components/TestimonialCard1Component.vue';
import TestimonialCard2 from '@/components/TestimonialCard2Component.vue';
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
.container{
    padding: 50px 250px;
}
.header-section{
    margin: auto;
    display: flex;
    justify-content: space-between;
}
.testimonials-container{
    display: flex;
}

</style>