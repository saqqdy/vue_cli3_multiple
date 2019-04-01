let path = require('path')
let glob = require('glob')
//配置pages多页面获取当前文件夹下的html和js
function getEntry(globPath) {
  let entries = {},
      basename, tmp, pathname, appname;

  glob.sync(globPath).forEach(function(entry) {
    basename = path.basename(entry, path.extname(entry));
    tmp = entry.split('/').splice(-3);
    console.log(tmp)
    pathname = basename; // 正确输出js和html的路径
    entries[pathname] = {
      entry: 'src/' + tmp[0] + '/' + tmp[1] + '/' + tmp[1] + '.js',
      template: 'src/' + tmp[0] + '/' + tmp[1] + '/' + tmp[2],
      title:  tmp[2],
      filename: tmp[2]
    };
  });
  return entries;
}
let pages = getEntry('./src/pages/**?/*.html');
console.log({
  ...pages,
  index: 'src/main.js'
})
//配置end

module.exports = {
  pages,
  // pages: {
  //   ...pages,
  //   index: 'src/main.js'
  // },
  // pages: {
  //   userCenter: {
  //     // 应用入口配置，相当于单页面应用的main.js，必需项
  //     entry: 'src/pages/userCenter/userCenter.js',
  //     // 应用的模版，相当于单页面应用的public/index.html，可选项，省略时默认与模块名一致
  //     template: 'public/userCenter.html',
  //     // 编译后在dist目录的输出文件名，可选项，省略时默认与模块名一致
  //     filename: 'userCenter.html',
  //     // 标题，可选项，一般情况不使用，通常是在路由切换时设置title
  //     // 需要注意的是使用title属性template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
  //     title: '个人中心',
  //     // 包含的模块，可选项
  //     // chunks: ['userCenter', 'chunk-vendors']
  //     // chunks: ['userCenter']
  //   },
  //   // 只有entry属性时，直接用字符串表示模块入口
  //   index: 'src/main.js'
  // },
  // 基本路径
  publicPath: '/',
  // 输出文件目录
  outputDir: "dist",
  //用于放置生成的静态资源 (js、css、img、fonts) 的；（项目打包之后，静态资源会放在这个文件夹下）
  assetsDir: "static",
  // 指定生成的 index.html 的输出路径  (打包之后，改变系统默认的index.html的文件名)
  // indexPath: "myIndex.html",
  // 默认情况下，生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存。你可以通过将这个选项设为 false 来关闭文件名哈希。(false的时候就是让原来的文件名不改变)
  filenameHashing: true,
  // eslint-loader 是否在保存的时候检查
  lintOnSave: true,
  //是否使用包含运行时编译器的 Vue 构建版本。设置为 true 后你就可以在 Vue 组件中使用 template 选项了，但是这会让你的应用额外增加 10kb 左右。(默认false)
  runtimeCompiler: false,
  // use the full build with in-browser compiler?
  // https://vuejs.org/v2/guide/installation.html#Runtime-Compiler-vs-Runtime-only
  // compiler: false,
  // webpack配置
  // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
  chainWebpack: config => {
    config.module
      .rule('images')
      .use('url-loader')
      .loader('url-loader')
      .tap(options => {
        // 修改它的选项...
        options.limit = 5120
        return options
      })
    Object.keys(pages).forEach(entryName => {
      config.plugins.delete(`prefetch-${entryName}`);
    });
    // if(process.env.NODE_ENV === "production") {
    //   config.plugin("extract-css").tap(() => [{
    //     path: path.join(__dirname, "./dist"),
    //     filename: "static/css/[name].[contenthash:8].css"
    //   }]);
    // }
  },
  configureWebpack: config => {
    // if(process.env.NODE_ENV === "production") {
    //   config.output = {
    //     path: path.join(__dirname, "./dist"),
    //     filename: "static/js/[name].[contenthash:8].js"
    //   };
    // }
  },
  // vue-loader 配置项
  // https://vue-loader.vuejs.org/en/options.html
  // vueLoader: {},
  // 生产环境是否生成 sourceMap 文件
  productionSourceMap: false,
  // css相关配置
  css: {
    // 是否使用css分离插件 ExtractTextPlugin
    extract: true,
    // 开启 CSS source maps?
    sourceMap: false,
    // css预设器配置项
    loaderOptions: {
      css: {
        localIdentName: '[name]-[hash]',
        camelCase: 'only'
      }
    },
    // 启用 CSS modules for all css / pre-processor files.
    modules: false
  },
  // use thread-loader for babel & TS in production build
  // enabled by default if the machine has more than 1 cores
  parallel: require("os").cpus().length > 1,
  // 是否启用dll
  // See https://github.com/vuejs/vue-cli/blob/dev/docs/cli-service.md#dll-mode
  // dll: false,
  // PWA 插件相关配置
  // see https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
  pwa: {},
  // webpack-dev-server 相关配置
  devServer: {
    index: 'userCenter.html', //默认启动serve 打开page1页面
    // open: process.platform === "darwin",
    host: "0.0.0.0",
    port: 8889,
    https: false,
    hotOnly: false,
    proxy: null, // 设置代理
    before: app => {}
  },
  // 第三方插件配置
  pluginOptions: {}
};
