import { defineAsyncComponent } from "vue";
// import Layout from "@/layout";
import Layout from "/src/layout/index.vue";

export default {
  name: 'composition',
  path: '/composition',
  comments: Layout,
  meta: {
    title: '组合API',
  },
  sortIndex: 1,
  children: [{
    name: 'compositionIndex',
    path: 'compositionIndex',
    component: defineAsyncComponent(() => import('@/examples/Composition.vue')),
    meta: {
      title: 'composition案例'
    }
  }]
}
