import Vue from 'vue'
import Router from 'vue-router'

const Shop = (resolve) => require(['./shop'], resolve)

Vue.use(Router)

const routes = new Router({
  mode: 'history',
  // base: '/',
  routes: [{
    path: '/shop',
    name: 'shop',
    component: Shop,
    meta: {
      title: '个人中心'
    }
  }]
})

export default routes
