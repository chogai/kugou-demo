import Vue from 'vue'
import Vuex from 'vuex'
import loading from './loading'
import images from './images'

Vue.use(Vuex)
let store = new Vuex.Store({
  modules: {
    loading,
    images
  }
})
window.store = store
export default store