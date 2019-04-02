# vue_cli3_multiple

### 介绍
基于Vue Cli3创建的多页应用框架

### 软件架构
本框架是基于VUE CLI3生成的基本模板，集成了Vuex、Vue-router、e2e/unit等基础插件。在此基础上添加了对多页应用的支持

### 安装教程

``` bash
# create project
vue init gitee:saqqdy/vue_cli3_multiple myproject
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

### 使用说明

#### 在pages目录下创建目录，参照shop、userCenter的写法

userCenter.js
```
import Vue from 'vue'
import UserCenter from './userCenter.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  // store,
  render: (h) => h(UserCenter)
}).$mount('#UserCenter')
```

userCenter.vue
```
<template>
  <div class="userCenter">
    <img alt="Vue logo" src="@/assets/logo.png" />
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'userCenter',
  components: {}
}
</script>

<style scoped>
  .userCenter{
    background: #ccc;
  }
</style>

```

userCenter.html
```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <link rel="icon" href="<%= BASE_URL %>favicon.ico">
    <title>vue_cli3_multiple</title>
  </head>
  <body>
    <noscript>
      <strong>We're sorry but vue_cli3_multiple doesn't work properly without JavaScript enabled. Please enable it to continue.</strong>
    </noscript>
    <div id="UserCenter"></div>
    <!-- built files will be auto injected -->
  </body>
</html>

```


router.js
```
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

```

### 参与贡献

1. Fork 本仓库
2. 新建 Feat_xxx 分支
3. 提交代码
4. 新建 Pull Request

### 我的相关

1. 使用 Readme\_XXX.md 来支持不同的语言，例如 Readme\_en.md, Readme\_zh.md
2. 我的码云：[https://gitee.com/saqqdy](https://gitee.com/saqqdy)
3. 我的Github：[https://github.com/saqqdy](https://github.com/saqqdy)
4. 我的npm：[https://npmjs.com/~saqqdy](https://npmjs.com/~saqqdy)
5. 我的个人网站 [http://www.saqqdy.com](http://www.saqqdy.com)
