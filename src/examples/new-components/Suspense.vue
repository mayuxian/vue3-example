<template>
  <suspense>
    <template #default>
      <AsyncComponent></AsyncComponent>
    </template>
    <template #fallback> 加载中... </template>
  </suspense>
</template>
      
<script>
import { defineComponent, defineAsyncComponent, h } from 'vue'
import AsyncComponent from './AsyncComponent.vue'
export default defineComponent({
  components: {
    AsyncComponent,
  },
  setup() {
    return {}
  },
})
</script>
          
<style lang='stylus' scoped></style>