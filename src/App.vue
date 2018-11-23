<template>
  <div id="app" class="app" ref="app">
    <AppHeader class="app__header"/>
    <router-view class="app__cont"></router-view>
  </div>
</template>

<script>
import AppHeader from './components/public/AppHeader'
export default {
  name: 'App',
  components: {
    AppHeader
  }
}
</script>

<style lang="less" scoped>
@import (reference) './assets/css/constant.less';
.app {
  width: 100%;
  height: 100%;
  position: relative;
  font-family: 'Microsoft Yahei', 'Avenir', Arial, Helvetica, sans-serif;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  font-size: @font_size_main;
  overflow: hidden;
}
.app__header {
  height: @header_height;
  width: 100%;
  box-sizing: border-box;
}
.app__cont {
  overflow-y: auto;
  width: 100%;
  height: calc(100% - @header_height);
}
</style>
