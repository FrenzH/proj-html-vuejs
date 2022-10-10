<template>
  <div class="container">
    <div>
        <img src="@/assets/proj-images/audible-app-2x-400x418.png" alt="">
    </div>
    <div class="description">
        <h1>New Audiobook</h1>
        <h2>NO TIME TO READ? NO PROBLEM. LISTEN TO IT</h2>
        <p>Donec fringilla nunc eu turpis dignissim, at euismod sapien tincidunt. Maecenas eleifend congue cursus.</p>
        <button>Buy This On Audible</button>

    </div>


  </div>
</template>

<script>
export default {
    name:'AudibleComponent'

}
</script>

<style lang="scss" scoped>
.container{
    display: flex;
    background-image: url('@/assets/proj-images/banner.jpg');
    justify-content: center;
}


</style>