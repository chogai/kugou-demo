<template>
  <header class="header">
    <button class="header__back" @click="goBack">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-arrow-left"></use>
      </svg>
    </button>
    <router-link to="/" >
      <img class="header__logo" :src="logo__text">
    </router-link>
    <router-link
      class="header__search_btn"
      to="/search/index"
      @click.native="bus.$emit('searchBtnClicked')"
    >
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-search"></use>
      </svg>
    </router-link>
  </header>
</template>

<script>
import { mapState } from 'vuex'
import bus from '../../assets/js/bus.js'
export default {
  name: 'AppHeader',
  data () {
    return {
      bus: bus
    }
  },
  computed: {
    ...mapState('images', ['logo__text'])
    // ...mapState('player', ['curPlayerId'])
  },
  methods: {
    goBack () {
      history.go(-1)
    }
  }
}
</script>

<style lang="less" scoped>
@import (reference) '../../assets/css/constant.less';
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 12px;
  color: @white;
  background: @theme;
}
.header__logo {
  width: 131px;
  height: 30px;
  margin: auto;
}
.header__back {
  font-size: 25px;
  transform: translate(-2px, 2px);
}
.header__search_btn {
  display: block;
  width: 27px;
  height: 27px;
  transform: translate(1px, -3px);
  font-size: 27px;
  color: yellow;
}
</style>
