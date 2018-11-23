<template>
  <main class="main">
    <AppNav class="mian__nav"/>
    <router-view class="main__cont"></router-view>
  </main>
</template>

<script>
import AppNav from './public/AppNav'
export default {
  name: 'Main',
  components: {
    AppNav
  },
  methods: {}
}
</script>

<style lang="less" scoped>
@import (reference) '../assets/css/constant.less';
</style>
