const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  token: state => state.user.token,
  avatar: state => state.user.userInfo.headimgurl,
  name: state => state.user.name,
  updateInfo: state => state.campus.updateInfo,
  roles: state => state.user.roles,
  introduction: state => state.user.introduction,
  permission_routes: state => state.permission.routes
}
export default getters
