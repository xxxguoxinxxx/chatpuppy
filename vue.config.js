'use strict';
const { VantResolver } = require('unplugin-vue-components/resolvers');
const ComponentsPlugin = require('unplugin-vue-components/webpack');

module.exports = {
  publicPath :'./', 
  outputDir: 'chatdist', //  生产环境构建文件的目录
  assetsDir: 'static', //  outputDir的静态资源(js、css、img、fonts)目录
  lintOnSave: false,
  productionSourceMap: false, // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
  devServer: {
    //port: 8088, // 端口
    //open: false, // 启动后打开浏览器
    overlay: {
      //  当出现编译器错误或警告时，在浏览器中显示全屏覆盖层
      warnings: false,
      errors: false
    },
    proxy: {
      '/api': {
        target: 'https://api.bscscan.com',
        changeOrigin: true,
        ws: true,
        // pathRewirte: {
        //   '/api':'api'
        // }
      }
    }
  },
  css: {
    extract: process.env.NODE_ENV === "production", // 是否将组件中的 CSS 提取至一个独立的 CSS 文件中 (而不是动态注入到 JavaScript 中的 inline 代码)。
    sourceMap: false,
    loaderOptions: {
      scss: {
      }
    }
  },
  configureWebpack: { // 别名配置
    // module: {
    //   rules: [
    //       {
    //         test: /.mjs$/,
    //         include: /node_modules/,
    //         type: "javascript/auto"
    //       },
    //   ]
    // },

    resolve: {
      alias: {
        vue$: "vue/dist/vue.esm.js",
        "@/*": "./src/*",
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'api': '@/api',
        'views': '@/views',
        'plugins': '@/plugins',
        'utils': '@/utils',
      }
    },
    plugins: [
      ComponentsPlugin({
        resolvers: [VantResolver()],
      }),
    ],
},
};
