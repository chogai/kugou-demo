<template>
  <div :class="className">
    <svg class="icon loading__svg" aria-hidden="true">
      <use xlink:href='#icon-loading'></use>
    </svg>
  </div>    
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'AppLoading',
  computed: {
    ...mapState('loading', ['ishow', 'sizeClassName']),
    className() {
      let className = this.isShow ? 'loading' : 'loading loading--fade_out'
      return className + ' ' + this.sizeClassName 
    }
  }
}
</script>