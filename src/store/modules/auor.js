// import { login, logout, getInfo } from '@/api/user'
// import { getToken, setToken, removeToken } from '@/utils/auth'
import router, { resetRouter } from '@/router'
const getDefaultState = () => {
  return {
    auorInfo: {
    
    }
  }
}
const state = getDefaultState()
const mutations = {
  SET_AUORINFO: (state, param) => {
    state.auorInfo = {...state.auorInfo,...param}
  },
}
const actions = {

}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

