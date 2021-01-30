<template>
  <h1>Fragment组件,即<template></template>的节点下无需根节点div,可多节点</h1>
  <ol>
    <li>少了一层div,对patch的diff算法和render更新等,都有助于提高速度</li>
    <li>可以实现平级显示,针对大list的组件来说,性能提高很大</li>
  </ol>
  <quick-demo :data="[4,2,7,3,8,1,5,6,9]"></quick-demo>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import QuickDemo from './Quick.vue'

export default defineComponent({
  components: {
    QuickDemo,
  },
  setup() {
    return {}
  },
})
</script>

<style scoped>
</style>