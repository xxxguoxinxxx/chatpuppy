import Vue from 'vue'
import Router from 'vue-router'

 //web
import index from '@/views/index/index'


Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'index1',
      component: index,
      meta: {
        title: '首页',
        keepAlive: true
      }
    },
  
    {
      path: '/index',
      name: 'index',
      component: index,
      meta: {
        title: '首页',
        keepAlive: true
      }
    },
    
  ]
})
const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error => error)
}