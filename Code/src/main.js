// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
<!--author:winkzhang-->
import Vue from 'vue'
import App from './App'
import router from './router'
import VueReasource from 'vue-resource'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import api from './config/api'

Vue.config.productionTip = false
/*Vue.prototype.$library = {
  username: ''
};*/

Vue.use(VueReasource)
Vue.use(Element)
Object.defineProperty(Vue.prototype, '$api', {
  value: api
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
