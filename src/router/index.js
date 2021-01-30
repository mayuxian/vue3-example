
import { createRouter, createWebHashHistory } from 'vue-router'

const files = require.context('./modules', false, /.js$/)
const routes = []
files.keys().forEache(key => {
  routes.push(files(key).default)
})
export default createRouter({
  history: createWebHashHistory(),
  routes: routes.sort((pre, cur) => pre.sortIndex - cur.sortIndex),
})