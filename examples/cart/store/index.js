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
    },
    setNumArr ({ numArr }) {
      numArr.push(parseInt(Math.random() * 10))
    }

  },
  actions: {
    addCount (context, payload) {
      setTimeout(() => {
        context.commit('increment', payload)
      }, 2000)
    },
    addNumArr ({ commit }) {
      new Promise(resolve => {
        commit('setNumArr')
        resolve(22)
      })
    }
  }
})
export default store
