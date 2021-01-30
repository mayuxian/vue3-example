<template>
  <el-container>
    <el-aside>
      <el-menu default-active="/home" mode="vertical" :collapse="false">
        <el-menu-item
          v-for="item in routes"
          :index="item.path"
          :key="item.path"
        >
          <!-- <i class="el-icon-menu"></i> -->
          <template #title>{{ item.meta.title }}</template>
          <el-submenu
            v-for="child in item.children || []"
            :index="child.path"
            :key="child.path"
          >
            <router-link :to="child.path">
              <el-menu-item :index="child.path">
                {{ child.meta.title }}
              </el-menu-item>
            </router-link>
          </el-submenu>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-main>
      <router-view />
    </el-main>
  </el-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import routes from '@/router/index'

export default defineComponent({
  setup() {
    return {}
  },
})
</script>

<style scoped>
</style>