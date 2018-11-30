import Vue from 'vue'
import Vuex from 'vuex'
import loading from './loading'
import images from './images'
import newSong from './newSong'

Vue.use(Vuex)
let store = new Vuex.Store({
  modules: {
    loading,
    images,
    newSong
  },
  mutations: {
    replaceProperty(state, { paths, data }) {
      if (typeof paths !== 'string') return
      paths = paths.split('.')
      let targetObj = paths.slice(0, -1).reduce((re, key) => re[key], state)
      targetObj[paths.pop()] = data
    }
  }
})
window.store = store
export default store