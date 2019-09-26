import VueCookie from 'vue-cookie'

export function setCookie(key,value) {
  return VueCookie.set(key,value)
}
export function getCookie(key) {
  return VueCookie.get(key)
}
