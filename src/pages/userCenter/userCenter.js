import Vue from 'vue'
import UserCenter from './userCenter.vue'
import router from './router'
// import store from "../../store";

Vue.config.productionTip = false
// Vue.use(require('vue-wechat-title'))

new Vue({
  router,
  // store,
  render: (h) => h(UserCenter)
}).$mount('#UserCenter')
