import { defineAsyncComponent } from "vue";
import Layout from "@/layout";
export default {
  name: 'home',
  path: '/',
  comments: Layout,
  redirect:'/homeIndex',
  meta: {
    title: '首页',
  },
  sortIndex: 1,
  children: [{
    name: 'homeIndex',
    path: 'homeIndex',
    component: defineAsyncComponent(() => import('@/demo/ToDo.vue')),
    meta: {
      title: 'TODO列表Demo'
    }
  }]
}
