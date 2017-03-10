<template>
  <div class="root-container">
    <h2>Path: {{$route.path}}</h2>
    <div>
      <button @click="setLanguage('en-US')">Change Langeuage to en-US</button>
      <button @click="setLanguage('zh-CN')">Change Langeuage to zh-CN</button>
    </div>
    <div>
      <button @click="reloadLanguage('en-US')">Reload Langeuage to en-US</button>
      <button @click="reloadLanguage('zh-CN')">Reload Langeuage to zh-CN</button>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  import language from '../apis/language'
  export default {
    name: 'home',
    methods: {
      setLanguage (lang) {
        language.load(lang)
      },
      reloadLanguage (lang) {
        language.reload(lang)
      }
    }
  }

</script>

<style lang="scss">
  .root-container {
    margin: 10px;
  }
</style>
