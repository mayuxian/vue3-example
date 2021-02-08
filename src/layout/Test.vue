<template>
  <div>
    <div>
      倒计时:<input v-model="seconds" size="small" style="width: 100px" />秒
      <button @click="onAdd" size="small">增加</button>

      <button @click="onStart" style="margin-left: 10px" size="small">
        开始
      </button>
      <div>倒计时:{{ remainSeconds }}s</div>
      <div>timer倒计时:{{ timer.remainingSeconds }}s</div>
      <div>倒计时Tick:{{ remainSecondsTick }}s</div>
      <div>{{ message }}</div>
    </div>
  </div>
</template>

<script  >
//eslint-disabled-next-line
import {
  defineComponent,
  ref,
  toRefs,
  computed,
  reactive,
  watch,
  watchEffect,
} from 'vue'
import { CountDownTimer } from 'js-timers'
export default defineComponent({
  setup(props, context) {
    const _timer = new CountDownTimer()
    const timer = reactive(_timer)
    
    const state = reactive({
      message: '',
      seconds: 10,
      remainSecondsTick: 0,
    })

    timer.tick = remainSeconds => {
      // state.remainSecondsTick = remainSeconds
    }
    timer.onTimeout = () => {
      state.message = '已超时'
    }

    function onAdd() {
      state.seconds++
    }
    function onStart() {
      state.message = ''
      timer.timeoutSeconds = state.seconds
      timer.start()
    }
    // let remainSeconds = ref(timer.remainingSeconds)
    let remainSeconds = computed(() => {
      return timer.remainingSeconds
    })
    // watch(
    //   () => timer,
    //   (state, prevState) => {
    //     console.log('deep ', state, prevState)
    //   },
    //   { deep: true }
    // )
    return { onStart, ...toRefs(state), timer,remainSeconds, onAdd }
  },
})
</script>

<style scoped>
</style>