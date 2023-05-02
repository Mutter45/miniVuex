import override from './override'
let Vue
class Store {
  constructor ({ state, getters, mutations, actions } = {}) {
    // 通过VUE给state赋值实现响应式
    this._vm = new Vue({
      data: {
        state
      }
    })
    this.getters = {}
    for (const key in getters) {
      Object.defineProperty(this.getters, key, {
        enumerable: true,
        configurable: true,
        get () {
          return getters[key](state)
        },
        set: setter
      })
    }
    this._mutations = mutations
    const dispatch = this.dispatch
    this.dispatch = (...args) => {
      dispatch.apply(this, args)
    }
  }
  /**
   * 通过commit提交mutations
   */
  commit (...args) {
    // console.log(args);
    // if(args.length > 1) {
    //     this._mutations[args[0]]()
    // }
  }
  /**
   * Dispatch an action.
   *
   * @param {String} type
   */
  dispatch () {}
  // 获取state
  get state () {
    return this._vm.state
  }
  set state (val) {
    throw new Error('不能直接给state赋值')
  }
}
/**
 * getters 中属性只读
 */
function setter () {
  throw new Error('vuex getter properties are read-only.')
}
function install (_Vue) {
  if (Vue) {
    console.warn('[vuex]已安装。Vue.use(Vuex)应该只被调用一次。')
    return
  }
  Vue = _Vue
  override(Vue)
}
export default {
  Store,
  install
}
