import Vue from 'vue'
import Router from 'vue-router'
import IndexView from '@/pages/IndexView'
import EditInfo from '@/pages/EditInfo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '#',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'IndexView',
      component: IndexView
    },
    {
      path: '/edit',
      name: 'EditInfo',
      component: EditInfo
    }
  ]
})
