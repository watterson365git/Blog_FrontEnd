<template>
  <div>
    <heador></heador>
    <router-view></router-view>
    <bodyor></bodyor>

    <footor></footor>


  </div>


</template>

<script>
  import heador from "./components/heador/index.vue"
  import bodyor from "./components/bodyor/index.vue"
  import footor from "./components/footor/index.vue"
  export default {
    components:{
      heador,
      bodyor,
      footor
    }
  }
</script>

<style>

</style>
