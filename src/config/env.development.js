// 本地环境配置
const host = require('./host');

const isDevServer = process.env.VUE_APP_ENV === 'development';

module.exports = {
  title: 'dtt',
  baseApi:host.devHost , // 本地api请求地址,注意：如果你使用了代理，请设置成'/'
  $cdn: 'cdnpath'
};
