<template>
  <!-- <HelloWorld msg="Hello Vue 3 + Vite" /> -->
  <h1>Composition API</h1>
  <Composition></Composition>
  <NewComponents></NewComponents>
  <Test></Test>
</template>

<script  >
import { defineComponent } from 'vue'
// import HelloWorld from './components/HelloWorld.vue'
import Composition from './examples/Composition.vue'
import NewComponents from './examples/new-components/index.vue'
import Test from '@/layout/Test.vue'
export default defineComponent({
  name: 'App',
  components: {
    Composition,
    NewComponents,
    Test,
  },
  created() {},
  methods: {
    onTest() {
      this.$message.error('aaa')
    },
  },
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>