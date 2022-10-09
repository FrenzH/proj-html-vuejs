<template>
    <div class="debug">
        <button >click</button>
        <p>{{index}}</p>

    </div>
  
</template>

<script>
export default {
    name:'MainComponent',
    props:{
        index:Number
    }

}
</script>

<style lang="scss" scoped>
.debug{
    height: 600px;
    background-color: aqua;
}


</style>