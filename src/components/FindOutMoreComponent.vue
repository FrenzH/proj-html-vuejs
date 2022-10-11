<template>
  <div class="container">
    <div class="title">
        <h1>Dig A Little Deeper Into Damon Vaughn</h1>
        <h2>FIND OUT MORE ABOUT THE AUTHOR HIMSELF</h2>
    </div>
    <div class="cards">
        <div class="card" id="card1">
            <div class="card-content">
                <h1>About Me</h1>
              
                <h2>Vestibulum ante ipsum primis</h2>
            </div>

        </div>
        <div class="card" id="card2">
            <div class="card-content">
                <h1>My Latest Book</h1>
                
                <h2>Vestibulum ante ipsum primis</h2>
            </div>

        </div>
        <div class="card" id="card3">
            <div class="card-content">
                <h1>Book Signing</h1>
                
                <h2>Vestibulum ante ipsum primis</h2>
            </div>

        </div>
    </div>

  </div>
</template>

<script>
export default {
    name:'FindOutMore'

}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss" ;

.container{
    padding: 100px 0;
    
}
.title{
    text-align: center;
    h1{
        font-size: 2.5rem;
        padding-bottom: 20px;
    }
    h2{
        color: $color4;
        font-weight: 100;
    }
}
.cards{
    display: flex;
    justify-content: center;
    gap: 30px;
    margin-top: 70px;
}
.card{
    height: 300px;
    width: 400px;
    display: flex;
    flex-direction: column;
    justify-content: end;
    background-repeat: no-repeat;
    background-size: cover;
    align-items: center;
    align-content: center;
    align-self: center;
    background-image: url('@/assets/proj-images/event-07-400x240.jpg');
    border-radius: 0px 0px 60px 0px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
hr{
    width: 20px;
    text-align: center;
    height: 1px;
}
.card-content{
    text-align: center;
    h2{
        color: $color1;
        padding: 30px 0;
    }
    h1{
        color: white;
    }
}
.card:hover {
  transition: 1s;
  
  transform: scale(1.1);
}


</style>