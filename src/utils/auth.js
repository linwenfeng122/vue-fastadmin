import Cookies from 'js-cookie'

const TokenKey = 'Admin-Token'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}
export function getRouter(key) {
  return Cookies.get(key)
}

export function setRouter(key,value) {
  return Cookies.set(key,value)
}

export function removeRouter(key) {
  return Cookies.remove(key)
}
