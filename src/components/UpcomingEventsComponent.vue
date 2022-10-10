<template>
  <div>
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
.title{
    text-align: center;
}
.card-container{
    display: flex;
}

</style>