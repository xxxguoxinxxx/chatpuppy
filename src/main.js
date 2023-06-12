import App from './App.vue'
// 全局引入按需引入UI库 vant
import '@/plugins/vant';
import '@/permission' // permission control
import Vue from 'vue';
import router from './router'
import store from './store'
// import '@/assets/ico/iconfont.css'
// import { i18n, setLang, getUAgentLang } from '@/lang'
import VueAnimateNumber from 'vue-animate-number'
import "vue-easytable/libs/theme-default/index.css";
import VueEasytable from "vue-easytable";
import { VeLoading } from "vue-easytable";
import pdf from 'vue-pdf'

// import { Dialog } from 'vant'

// Vue.component('Dialog', {'Dialog': Dialog.Component})
// Vue.component('my-component', { template: '<div>A custom component!</div>'})


// 初始化
// function init () {
//   // 语言初始化
//   // const lang = getUAgentLang()
//   const lang = 'zh_CN'
//   setLang(lang)
// }

// init()
// Vue.use(Dialog)
Vue.use(VueAnimateNumber)
Vue.use(VueEasytable)
Vue.prototype.$veLoading = VeLoading;
// console.log(VeLoading)
Vue.use(pdf)
new Vue({
  data: function(){
    return {
        address1: '0x0000000000000000000000000000000000000000',
        lang:'zh_CN',
    }
  },
  el: '#app',
  router,
  store,
  // i18n,
  VueAnimateNumber,
  VueEasytable,
  pdf,
  // Dialog,
  render: h => h(App)
});


