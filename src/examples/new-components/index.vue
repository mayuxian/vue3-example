<template>
  <div
    id="teleport"
    class="teleport"
    style="height:60px; background: gray;z-index:1000;margin-bottom:30px;"
  ></div>
  <div>下面是Teleport组件引入位置,他的挂在位置上面</div>
  <TeleportDemo></TeleportDemo>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
// import FragmentDemo from './Fragment.vue'
import TeleportDemo from './Teleport.vue'
//1.template
export default defineComponent({
  components: {
    // FragmentDemo,
    TeleportDemo,
  },
  setup() {
    return {}
  },
})
</script>

<style scoped>
</style>