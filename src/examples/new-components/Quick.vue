<template>
  <quick :data="left" v-if="left.length"></quick>
  <li>{{ flag }}</li>
  <quick :data="right" v-if="right.length"></quick>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'quick',
  props: ['data'],
  setup(props) {
    let flag = props.data[0]
    let left: Array<number> = []
    let right : Array<number>= []
    props?.data.slice(1).forEach((val: number) => {
      val > flag ? right.push(val) : left.push(val)
    })
    return {
      left,
      right,
      flag,
    }
  },
})
</script>

<style scoped>
</style>