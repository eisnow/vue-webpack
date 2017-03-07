// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import VueI18n from 'vue-i18n'

import router from './router'
import store from './store'
import language from './apis/language'

import './filters'

import App from './App'

Vue.use(VueResource)
Vue.use(VueI18n)

Promise.all([language.load('zh-CN')]).then(() => {
  /* eslint-disable no-new */
  new Vue({
    el: '#app',
    store,
    router,
    template: '<app/>',
    components: { App }
  })
})
