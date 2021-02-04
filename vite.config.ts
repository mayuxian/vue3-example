import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import requireContext from 'rollup-plugin-require-context';
// import alias from '@rollup/plugin-alias';
import path from 'path'
// const path =require('path')
// const aa=path.resolve(__dirname,'src')
// console.log(aa);

export default defineConfig({
  alias:{
    "@":path.resolve(__dirname,'src')
  },
  // build:{
  //   manifest: true,
  //   rollupOptions: {
  //   // overwrite default .html entry
  //   input: 'public/index.html'
  //   }
  // },
  plugins: [
    vue(),
    // requireContext(),
    // alias({
    //   entries: [
    //     { find: '@', replacement: './src'}
    //   ]
    // })
  ]
})
