<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>{{ $t("msgs.hello") }}</h1>
    <h1>{{ $t("msgs.yes") }}</h1>
    <h2>Children</h2>
    <ul>
      <li>
        <router-link to="/products"><i class="fa fa-spinner fa-spin fa-3x fa-fw"></i>Products</router-link>
      </li>
      <li>
        <router-link to="/cart"><i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i>Cart</router-link>
      </li>
    </ul>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      <br>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><i class="fa fa-camera-retro fa-lg"></i><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><i class="fa fa-spinner fa-spin fa-3x fa-fw"></i><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
$color: #42b983;
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: $color;
}
</style>
