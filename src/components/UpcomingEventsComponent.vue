<template>
  <div class="container">
    <div class="title">
        <h1>Upcoming Events</h1>
        <h2>MEET THE AUTHOR IN PERSON</h2>
    </div>
    <div class="card-container">
        <ChicagoBookCard/>
        <MeetAmandaCard/>
        <OpenBookCard/>


    </div>
    

  </div>
</template>

<script>
import ChicagoBookCard from '@/components/ChicagoBookCardComponent.vue';
import MeetAmandaCard from '@/components/MeetAmandaCardComponent.vue';
import OpenBookCard from '@/components/OpenBookCardComponent.vue';
export default {
    name:'UpcomingEventsComponent',
    components:{
        ChicagoBookCard,
        MeetAmandaCard,
        OpenBookCard
    }

}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss" ;

.container{
    background-color: $color2;
    padding: 100px 0;
}
.title{
    text-align: center;
}
.card-container{
    display: flex;
    justify-content: center;
    gap: 40px;
    text-align: center;
}
h1{
    font-size: 3rem;
}
h2{
    color: $color1;
    font-weight: 100;
    margin-top: 20px;
}
</style>