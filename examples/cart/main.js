
console.log(module)
if (module.hot) {
  module.hot.accept()
}
import Vue from 'vue'
import App from './components/App.vue'

Vue.config.debug = true
new Vue({
  el: '#app',
  render: h => h(App)
})
