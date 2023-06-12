import axios from '@/utils/request';
import Vue from 'vue';

const Axios = {
  install(Vue, options) {
    Vue.prototype.$axios = axios;
  }
};

Vue.use(Axios);
