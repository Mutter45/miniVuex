import Vue from 'vue'
import miniVuex from '../../../src/index'
Vue.use(miniVuex)
const store = new miniVuex.Store({
  state: {
    count: 0,
    numArr: [1, 4, 8, 7]
  },
  getters: {
    newCount ({ count }) {
      return (count += 2)
    },
    evenArr (state) {
      return state.numArr.filter((item) => item % 2 === 0)
    }
  },
  mutations: {
    increment (state, payload) {
      state.count += payload
    }
  },
  actions: {
    addCount (context) {
      setTimeout(() => {
        context.commit('increment')
      })
    }
  }
})
export default store
