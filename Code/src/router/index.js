import Vue from 'vue'
import Router from 'vue-router'
import IndexView from '@/pages/IndexView'
import EditInfo from '@/pages/EditInfo'
import VendorDetail from '@/pages/VendorDetail'

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
      path: '/edit/:name',
      name: 'EditInfo',
      component: EditInfo
    },
    {
      path: '/detail/:name',
      name: 'VendorDetail',
      component: VendorDetail
    }
  ]
})
