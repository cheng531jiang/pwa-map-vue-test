import Vue from 'vue'
import Router from 'vue-router'
import BaiduMap from '@/components/BaiduMap'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'baidu-map',
      component: BaiduMap
    }
  ]
})
