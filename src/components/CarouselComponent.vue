<template>
   <div class="carousel">
    <h1 id="author">DAMON VAUGHN</h1>
            <div class="carousel-comments">
                <h1>{{comments[activeIndex].title}}</h1>
                <p>{{ comments[activeIndex].text }}</p>
                <h3>- {{comments[activeIndex].author}}</h3>
            </div>
            <div class="carousel-navigation">
                  <button @click="onPrevClick" id="left-arrow"><font-awesome-icon :icon="['fas', 'fa-arrow-left']"/></button>
                  <button @click="onNextClick" id="right-arrow"><font-awesome-icon :icon="['fas', 'fa-arrow-right']"/></button>
            </div>
   </div>
</template>

<script>
export default {
    name:'CarouselComponent',
    data(){
        return {
            comments:[
                 {  title:'A True Masterpiece, Bravo!',
                    text:'Nulla quis lorem ut libero malesuada feugiat. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Vivamus suscipit tortor eget felis porttitor volutpat. Nulla quis lorem ut libero malesuada feug at.',
                    author:'Gerald Hendley, The Guardian'
                 },
                 {  title:'A Unique View On The World',
                    text:'Donec sollicitudin molestie malesuada. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Nulla quis lorem ut libero malesuada feugiat.',
                    author:'Mary Maxey, The Globe And Mail'
                 },
                 {  title:'This book will change your perspective on life',
                    text:'Nulla quis lorem ut libero malesuada feugiat. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Vivamus suscipit tortor eget felis porttitor volutpat. Nulla quis lorem ut libero malesuada feug at.',
                    author:'Justine Kilpatrick , The New York Times'
                 },
                 {
                    title:'Best author of his generation',
                    text:'Donec sollicitudin molestie malesuada. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Nulla quis lorem ut libero malesuada feugiat.',
                    author:'Roselyn Fox , The Globe and Mail'
                 }
            ],
            activeIndex: 0,
        
            intervalId: undefined
        }
    },
    mounted(){
        console.log('mounted!');
        this.createInterval();
    },

    methods:{
        createInterval(){
            this.intervalId = setInterval(this.showNextComment, 6000);
        },
        deleteInterval(){
            if(this.intervalId){
                clearInterval(this.intervalId);
            }
        },
        showPreviousComment(){
            if (this.activeIndex > 0){
                this.activeIndex--;
            }else{
                this.activeIndex = this.comments.length -1;
            }
        },
        showNextComment(){
            if (this.activeIndex === this.comments.length -1){
              //  this.activeIndex++;
                this.activeIndex = 0;
            }else{
                this.activeIndex++;
            }          
        },
        onNextClick(){
            this.showNextComment();
            this.deleteInterval();
            this.createInterval();
        },
        onPrevClick(){
            this.showPreviousComment();
            this.deleteInterval();
            this.createInterval();
        },


        
    }

}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Kristi&display=swap');
@import "@/assets/scss/variables.scss" ;
.carousel{
    width: 600px;
    font-size: 1.5rem;
    margin-left: 50px;
    color:white;
    #author{
        font-size: 5rem;
        font-family: 'Kristi', cursive;
        color: $color1;
        padding-bottom: 20px;
    } 
}
h3{
    color: $color3;
    font-size: 1.2rem;
    padding-top: 20px;
}
p{
    padding-top: 20px;
}
button{
    background-color: white;
    opacity: 10%;
    color: black;
    padding: 10px;
    cursor: pointer;
    
}
button:hover{
    opacity: 70%;
}
.carousel-navigation{
    text-align: center;
    margin-top: 20px;
}

</style>