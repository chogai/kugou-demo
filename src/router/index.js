import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import NewSong from '@/components/new_song/NewSong'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Main,
      children: [
        {
          path: '/',
          component: NewSong
        }
      ]
    }
  ]
})
