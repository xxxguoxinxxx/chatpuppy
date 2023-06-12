import Axios from 'axios';
import store from '@/store';
import { Toast } from 'vant';
import { updateAndroidToken, goToLogInPage } from '@/utils';

// 根据环境不同引入不同api地址
import { baseApi } from '@/config';

// TODO 与服务端约定 code
const httpCodeMessage = {
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '登录过期，请重新登录！',
  403: '没有权限。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器',
  502: '网关错误',
  503: '服务不可用，服务器暂时过载或维护',
  504: '网关超时'
};

let loadingToast = null;

// create an axios instance
const axios = Axios.create({
  baseURL: baseApi, // url = base api url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 20000 // request timeout
});
axios.interceptors.request.use(
  config => {
    // 不传递默认开启loading
    if (!config.hideloading) {
      // loading
      if (!loadingToast) {
        loadingToast = Toast.loading({
          forbidClick: true
        });
      }
    }
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['authorization'] = token || store.getters.token;
      // config.headers['Pragma'] = 'no-cache';
      // config.headers['Cache-Control'] = 'no-cache';
    }
    config.headers['Content-Type'] = 'application/json;charset=UTF-8';
    config.headers['Cache-control'] = 'no-cache';
    return config;
  },
  error => {
    // do something with request error
    console.log(error); // for debug
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  response => {
    // console.log(111, response.config.notJumpToLonginPage);
    if (loadingToast) {
      loadingToast.clear();
      loadingToast = null;
    }
    const res = response.data;
    // 请求结束后处理token
    // const newToken = response.headers.authorization;
    // 如果token有更新，通知app更新token
    // const oldToken = localStorage.getItem('token');
    // if (newToken && newToken !== oldToken) {
    //   updateAndroidToken(newToken);
    //   localStorage.setItem('token', newToken); 
    // }
    // console.log('resres', res);
    if (res.type!=='ok') {
      // 登录超时,重新登录
      if (res.type == '999') {
        localStorage.removeItem('token')
        }
      return Promise.resolve(res || 'error');
    } else {
      // console.log('assss', res)
      return Promise.resolve(res);
    }
  },
  error => {
    // Toast.clear();
    if (String(error).indexOf('timeout') !== -1) {
      Toast('网络故障，请稍后重试');
    }
    if (String(error).indexOf('500') !== -1) {
      Toast('服务器出了一点问题');
    }
    if (String(error).indexOf('Network Error') !== -1) {
      Toast('网络故障，请检查网络');
    }
    console.log('errfjd' + error); // for debug
    return Promise.reject(error);
  }
);

// get/post 统一参数形式
const axiosGet = axios.get;
axios.get = function (url, params, config = {}) {
  return axiosGet(url, { params, ...config });
};

export default axios;
