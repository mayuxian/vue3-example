<template>
  <div>count:{{ count }}</div>
  <div>count.value:{{ count.value }}</div>
  <div>state.number:{{ state.number }}</div>
  <div>number:{{ number }}</div>
  <button @click="click">点击</button>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, toRefs } from 'vue'

export default defineComponent({
  setup() {
    const count = ref(0)
    const state = reactive({
      number: 0,
    })
    function click() {
      state.number++
      count.value++
    }
    return { ...toRefs(state), count, state, click }
  },
})
</script>

<style scoped>
</style>