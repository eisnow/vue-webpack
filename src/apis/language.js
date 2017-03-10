import Vue from 'vue'

const LANGUAGES = {}
export default {
  load: function (lang) {
    return new Promise(function (resolve) {
      Vue.locale(lang, function () {
        if (LANGUAGES[lang]) {
          return Promise.resolve(LANGUAGES[lang])
        } else {
          return Vue.http.get('/static/locale/' + lang + '.json').then(response => {
            var json = response.json()
            LANGUAGES[lang] = json
            return Promise.resolve(json)
          }, response => {
            return Promise.reject(new Error(response))
          })
        }
      }, function () {
        Vue.config.lang = lang
        resolve()
      })
    })
  },
  reload: function (lang) {
    LANGUAGES[lang] = null
    return this.load(lang)
  }
}
