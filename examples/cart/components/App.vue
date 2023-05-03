<template>
  <div>
    {{ msg }}
    <span v-for="n of 6" :key="n">热更新测试111</span>
    <p style="color: aqua">rwer</p>
    <p>state: {{ this.$store.state.count }}</p>
    <p>getters: {{ this.$store.getters.evenArr }}</p>
    <p>getters-newCount: {{ this.$store.getters.newCount }}</p>
    <button @click="add">add</button>
    <button @click="handleCommit">commit</button>
    <button @click="handleDispatch">dispatch</button>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      msg: 2,
      state: 'sasd'
    }
  },
  // 生命周期 - 创建完成（访问当前this实例）
  created () {
    console.log()
  },
  // 生命周期 - 挂载完成（访问DOM元素）
  mounted () {},
  methods: {
    add () {
      this.$store.state.count++
    },
    handleCommit () {
      this.$store.commit({
        type: 'increment',
        payload: 10
      })
    },
    handleDispatch () {
      // this.$store.dispatch('addCount', 3)
      this.$store.dispatch('addNumArr')
    }
  }
}
</script>
<style></style>
