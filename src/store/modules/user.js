// import { login, logout, getInfo } from '@/api/user'
// import { getToken, setToken, removeToken } from '@/utils/auth'
const getDefaultState = () => {
  return {
    token: '',
    roles: '',
    coin:0,
    userInfo: {
    }
  }
}

const state = getDefaultState()
const mutations = {
  RESET_STATE: (state) => {
    Object.assign(state, getDefaultState())
  },
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_COIN: (state, data) => {
    state.coin = data
  }
}
const actions = {
  // user login
  // login({ commit }, userInfo) {
  //   return new Promise((resolve, reject) => {

  //   })
  // },

  // get user info
  getInfo({ commit }, params) {
    commit('SET_USERINFO', params)
    // commit('SET_ROLE', 'admin')
  },

}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

