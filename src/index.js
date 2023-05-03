import override from './override'
import { isObject } from './utils'
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
    this._actions = actions
    // bind commit and dispatch to self
    const store = this
    const { dispatch, commit } = this
    this.dispatch = function boundDispatch (type, payload) {
      return dispatch.call(store, type, payload)
    }
    this.commit = function boundCommit (type, payload) {
      return commit.call(store, type, payload)
    }
  }
  /**
   * 通过commit提交mutations
   */
  commit (_type, _payload) {
    console.log(this)
    const { type, payload } = unifyObjectStyle(_type, _payload)
    const entry = this._mutations[type]
    if (entry) {
      entry(this.state, payload)
    } else {
      console.warn(`miniVuex: mutations 不存在 ${type} 方法`)
    }
  }
  /**
   * Dispatch an action.
   *
   * @param {String} type
   */
  dispatch (_type, _payload) {
    const { type, payload } = unifyObjectStyle(_type, _payload)
    const entry = this._actions[type]
    if (entry) {
      entry(this, payload)
    } else {
      console.warn(`miniVuex: action 不存在 ${type} 方法`)
    }
  }
  // 获取state
  get state () {
    return this._vm.state
  }
  set state (val) {
    throw new Error('不能直接给state赋值')
  }
}
/**
 * 转换传参类型
 */
function unifyObjectStyle (type, payload) {
  if (isObject(type) && type.type) {
    payload = type.payload
    type = type.type
  }

  return { type, payload }
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
