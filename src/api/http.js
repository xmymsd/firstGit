import axios from 'axios'
import objconfig from './config' //开发环境域名配置

// 根据环境变量来进行判读是开发环境还是生产环境
const baseUrl = process.env.NODE_ENV !== 'production' ? objconfig.devHttpUrl : objconfig.buildHttpUrl
// 对参数进行处理
const queryString = (url, json) => {
  const str = Object.keys(json).reduce((result, key) => {
    result += `${key}=${json[key]}&`
    return result
  }, '')
  return `${url}?${str.substr(0, str.length - 1)}`
}
// 封装的get请求
export const get = (url, params) => {
  // params = formatParams(params)
  return new Promise((resolve, reject) => {
    axios.get(queryString(`${baseUrl}${url}`, params))
      .then((resp) => {
        resolve(resp.data)
      }).catch(reject)
  })
}
// 封装的post请求
export const post = (url, data) => {
  return new Promise((resolve, reject) => {
    axios.post(`${baseUrl}${url}`, data)
      .then((resp) => {
        if(resp.status == '200') {
          resolve(resp.data)
        } else {
          resolve({
            ret: '-1',
            umsg: '(错误代码' + resp.status + ")"
          })
        }
      })
      .catch(reject)
  })
}
const formatParams = (params) => {
  params = params || {}
  // 获取UserId
  var UserId = ''
  if (typeof window.cbsvm == 'object') {
    if (window.cbsvm.$store && window.cbsvm.$store.state && window.cbsvm.$store.state.user && window.cbsvm.$store.state.user.UserId) {
      UserId = window.cbsvm.$store.state.user.UserId
    }
  }
  if (params instanceof FormData && !params.get('UserId') && !!UserId) {
    params.append('UserId', UserId)
  } else if (params instanceof Object && !params.UserId && !!UserId) {
    params.UserId = UserId
  }
  return params
}
// 其他请求自己去写
// ....
export default {
  get,
  post,
}
