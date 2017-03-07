import Vue from 'vue'

export default {
  load: function (currentLanguage) {
    return new Promise(function (resolve) {
      Vue.locale(currentLanguage, function () {
        return Vue.http.get('/static/locale/' + currentLanguage + '.json').then(response => {
          var json = response.json()
          return Promise.resolve(json)
        }, response => {
          return Promise.reject(new Error(response))
        })
      }, function () {
        Vue.config.lang = currentLanguage
        resolve()
      })
    })
  }
}
