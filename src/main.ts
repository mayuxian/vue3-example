import { createApp } from 'vue'
import App from './App.vue'
const app=createApp(App)

//需要自定义vite.config.js的入口input字段时,需要额外引入
// import 'vite/dynamic-import-polyfill'

// import router from './router'
// app.use(router)

app.mount('#app')
