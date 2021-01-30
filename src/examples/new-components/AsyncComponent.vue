<template>
  <h1>异步组件Suspense组件加载完成</h1>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  async setup() {
    await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve()
      }, 2000)
    })
  },
})
</script>
      
<style lang='stylus' scoped></style>