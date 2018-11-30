<template>
  <ul class="music_lsit">
    <li class="music_list__item main_border_bottom" v-for="(item, index) in musicList" :key="index">
      <div class="music_list__info" @click="wantPlay(item.hash)">
        <slot :data="index" name="index" class="music_list__index" @click="wantPlay(item.hash)"></slot>
        <div class="music_list__name">{{item.filename}}</div>
      </div>
      <button class="music_list__download">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-download"></use>
        </svg>
      </button>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'AppMusicList',
  props: {
    musicList: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    wantPlay(musicHash) {
      this.$store.commit('player/wantPlay', {
        musicHash,
        musicList: this.$props.musicList
      })
    }
  }
}
</script>

<style lang="less" scoped>
@import (reference) '../../assets/css/constant.less';
.music_lsit {
  padding-left: 10px;
}
.music_list__item {
  display: flex;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  height: auto;
  min-height: 72px;
  padding: 10px 0;
  justify-content: space-between;
}
.music_list__info {
  width: 90%;
}
.music_list__download {
  margin-right: 10px;
}
</style>
