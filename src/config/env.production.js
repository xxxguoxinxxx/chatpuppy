
const host = require('./host');
// 正式
module.exports = {
  title: 'dtt',
  baseApi: host.proHost, // 开发环境api请求地址
  $cdn: 'cdnpath'
};
