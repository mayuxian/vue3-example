// declare module '*.vue' {
//   import Vue from 'vue';
//   export default Vue;
// }

declare module "vue/types/vue" {
  // import VueRouter, { Route } from 'vue-router';
  interface Vue {
    $router: any; // 这表示this下有这个东西
    $route: any;
    $http: any;
    $Message: any;
    $Modal: any;
  }
}