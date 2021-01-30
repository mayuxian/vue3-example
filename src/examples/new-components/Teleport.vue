<template>
  <!-- <div id="teleport-position" style="height: 20px; background: gray"></div> -->
  <button @click="isOpen = true">测试Teleport 显示</button>
   <modal-button></modal-button>
  <teleport to=".teleport">
    <div>
      <div v-if="isOpen">
        <span style="color: red"
          >这是Teleport组件,会挂在到to属性指定的位置</span
        >
        <span>状态:{{ isOpen }}</span>
      </div>
      <button @click="isOpen = false">测试Teleport 隐藏</button>
    </div>
  </teleport>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  // data() {
  //   return {
  //     isOpen:false
  //   }
  // },
  setup() {
    let isOpen = ref(false)
    return { isOpen }
  },
})
</script>

<style scoped>
</style>