<template>
  <div></div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'

interface SceneType {
  id: number
  name: string
}
export default defineComponent({
  setup() {
    const temp = new Array<SceneType>()
    let t1 = {
      id: 1,
    } as SceneType
    temp.push(t1)

    const state1 = reactive<{
      sceneType: Array<SceneType>
    }>({
      sceneType: temp,
    })

    const state = reactive({
      SceneType: temp as Array<SceneType>,
    })
    return { ...toRefs(state) }
  },
})
</script>

<style scoped>
</style>