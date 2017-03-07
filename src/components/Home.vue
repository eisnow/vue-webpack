<template>
  <div class="root-container">
    <h2>Path: {{$route.path}}</h2>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'home'
  }

</script>

<style lang="scss">
  .root-container {
    margin: 10px;
  }
</style>
