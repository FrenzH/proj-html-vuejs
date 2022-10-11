<template>
  <div id="app">
    <HeaderComponent :currentIndex="currentIndex" @index="changeIndex" />
    <MainComponent :currentIndex="currentIndex" @index="changeIndex"/>
    <FooterComponent />
   
  </div>
</template>

<script>
import HeaderComponent from '@/components/macro-components/HeaderComponent.vue';
import MainComponent from '@/components/macro-components/MainComponent.vue';
import FooterComponent from '@/components/macro-components/FooterComponent.vue';


export default {
  name: 'App',
  data(){
    return{
      currentIndex:0
    }
  },
  methods:{
    
    changeIndex(index){
      console.log('ciao sono',index)
      this.currentIndex=index;
      console.log(this.currentIndex)
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
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed&display=swap');
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Roboto Condensed', sans-serif;
}
</style>
