
const TokenKey = 'token'

export function getToken() {
  return localStorage.getItem(TokenKey)
}
export function setToken(token) {
  return localStorage.setItem(TokenKey, token)
}

export function setUserInfo(token) {
  return localStorage.setItem('userInfo', JSON.stringify(token))
}

export function getUserInfo() {
  return localStorage.getItem('userInfo')
}

export function removeToken() {
  localStorage.removeItem('userInfo')
  return localStorage.removeItem(TokenKey)
}

export function getWallet() {
  return localStorage.getItem('wallet')
}

export function setWallet(data) {
  return localStorage.setItem('wallet', data)
}

export function getJieya() {
  return localStorage.getItem('jieya')
}
export function setJieya(data) {
  return localStorage.setItem('jieya', data)
}

export function getZhiya() {
  return localStorage.getItem('zhiya')
}
export function setZhiya(data) {
  return localStorage.setItem('zhiya', data)
}