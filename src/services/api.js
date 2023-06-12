
export const apis = {
  login: 'user/login',
  sms_send: 'sms_send',
  register: "user/register",
  forget: "user/forget",
  getinfo: 'user/info',//获取用户资料
  detectauth: 'user/faceauth/detectauth',//腾讯实名认证ID
  bindAddress: 'v2/bindAddress',//绑定钱包地址
  upload: 'upload',//上传照片
  real_name: 'user/real_name',//实名认证信息提交
  cash_save: 'user/cash_save',//支付方式设置
  cash_info:'user/cash_info',//支付方式获取
}
