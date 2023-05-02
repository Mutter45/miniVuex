if (module.hot) {
  module.hot.accept()
}
import Vue from 'vue'
import App from './components/App.vue'
import store from './store'
console.log(store)
Vue.config.debug = true
new Vue({
  el: '#app',
  store,
  render: (h) => h(App)
})
