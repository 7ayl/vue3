<!-- <script>
export default {
  // setup
  // 1.执行时机，比beforecreate还要早
  // 2.setup函数中，获取不到this (this是undefined)
  // 3.数据 和 函数，需要在 setup 最后return，才能模版中应用
  // 问题： 每次都要return，好麻烦
  // 4. 通过setup语法糖简化代码
  setup () {
    // console.log('setup函数',this)
    // 数据
    const message = 'hello Vue3'
    // 函数
    const logMessage = () => {
      console.log(message)
    }
    return {
      message,
      logMessage
    }
  },
  beforeCreate () {
    console.log('beforeCreate函数')
  }
}
</script> -->
<script setup>
// 数据
const message = 'hello Vue3'
// 函数
const logMessage = () => {
  console.log(message)
}
</script>

<template>
  <div>{{ message }}</div>
  <button @click="logMessage">按钮</button>
</template>