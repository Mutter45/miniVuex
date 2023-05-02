<template>
  <div>
    {{ msg }}
    <span v-for="n of 6" :key="n">热更新测试111</span>
    <p style="color: aqua">rwer</p>
    <p>{{ state }}</p>
    <button @click="add">add</button>
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
  created () {},
  // 生命周期 - 挂载完成（访问DOM元素）
  mounted () {},
  methods: {
    add () {
      console.log(this.msg)
      this.msg += 2
    }
  }
}
</script>
<style></style>
