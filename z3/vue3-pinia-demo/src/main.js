import { createApp } from 'vue'
import { createPinia } from 'pinia'
// 导入持久化的插件
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import App from './App.vue'

const pinia = createPinia() // 创建Pinia实例
const app = createApp(App) // 创建根实例
// app.use(pinia).mount('#app') // 链式写法
app.use(pinia.use(piniaPluginPersistedstate)) // pinia插件的安装配置
app.mount('#app') // 视图挂载
