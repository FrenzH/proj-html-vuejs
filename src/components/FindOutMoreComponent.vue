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
                <hr>
                <h2>Vestibulum ante ipsum primis</h2>
            </div>

        </div>
        <div class="card" id="card2">
            <div class="card-content">
                <h1>My Latest Book</h1>
                <hr>
                <h2>Vestibulum ante ipsum primis</h2>
            </div>

        </div>
        <div class="card" id="card3">
            <div class="card-content">
                <h1>Book Signing</h1>
                <hr>
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
.title{
    text-align: center;
}
.cards{
    display: flex;
}
.card{
    display: flex;
    flex-direction: column;
    justify-content: end;
    background-image: url('@/assets/proj-images/event-07-400x240.jpg');
}
hr{
    width: 20px;
}
.card-content{
    text-align: center;
}


</style>