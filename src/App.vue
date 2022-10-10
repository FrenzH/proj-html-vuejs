<template>
  <div id="app">
    <HeaderComponent :index="index" @currentIndex="currentIndex" />
    <MainComponent :index="index" @currentIndex="changeIndex"/>
    <FooterComponent />
   
  </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue';
import MainComponent from '@/components/MainComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';


export default {
  name: 'App',
  data(){
    return{
      index:0
    }
  },
  methods:{
    currentIndex(index){
      this.index=index;
      console.log('ciao',index)
    },
    changeIndex(index){
      this.index=index;
    }
  },
  
  
  components: {
    HeaderComponent,
    MainComponent,
    FooterComponent
  
  }
}
</script>

<style lang="scss">
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>
