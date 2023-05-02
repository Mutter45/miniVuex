export default function (Vue) {
  Vue.mixin({ beforeCreate: miniVuexInit })
  /**
   * miniVuex初始化钩子，注入到每个实例的初始化钩子中
   */

  function miniVuexInit () {
    const options = this.$options
    console.log(this.$options, '==================')
    const { store } = options
    if (store) {
      this.$store = store
    } else if (options.parent && options.parent.$store) {
      this.$store = options.parent.$store
    }
  }
}
