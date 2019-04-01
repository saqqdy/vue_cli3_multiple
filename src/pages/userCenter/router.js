import Vue from 'vue'
import Router from 'vue-router'

const UserCenter = (resolve) => require(['./userCenter'], resolve)

Vue.use(Router)

const routes = new Router({
  mode: 'history',
  // base: '/',
  routes: [
    {
      path: '/userCenter',
      name: 'userCenter',
      component: UserCenter,
      meta: {
        title: '个人中心'
      }
    }
  ]
})

export default routes
