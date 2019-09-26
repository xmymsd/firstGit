import CONST from './const'
import { get, post } from "@/api/http";
import { SHA1 } from 'crypto-js'
import wx from 'wx'
import objconfig from '../../api/config'

var Utils = {}
/* 时间格式化 */
/* date：Date实例 */
/* fmt：时间格式 - yyyy-MM-dd hh:mm:ss */
Utils.dateFormatter = function (date, fmt) {
  if (date) {
    var o = {
      'M+': date.getMonth() + 1,                   // 月份
      'd+': date.getDate(),                        // 日
      'h+': date.getHours(),                       // 小时
      'm+': date.getMinutes(),                     // 分
      's+': date.getSeconds(),                     // 秒
      'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
      'S': date.getMilliseconds()                  // 毫秒
    }
    if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
    }
    for (var k in o) {
      if (new RegExp('(' + k + ')').test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
      }
    }
    return fmt
  } else {
    return ''
  }
}
/* 时间转换 */
/* dateStr： - yyyy-MM-ddThh:mm:ss */
Utils.dateFromDatetimeStr = function (dateStr) {
  dateStr = dateStr.replace('T', ' ').replace(/-/g, '/')
  return new Date(dateStr)
}
// 转换时间戳 '/Date(1540396802000)/'
Utils.dateTransformerFromDateStr = function (dateStr) {
  var date = null
  if (dateStr) {
    var time = parseInt(dateStr.replace('/Date(', '').replace('(/', ''))
    if (!isNaN(time)) {
      date = new Date(time)
    }
  }
  return date ? date : ''
}
// 生成随机字符串 - 默认32位
Utils.genRandomStr = function (num) {
  num = num || 32
  var str = ''
  var randomStr = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
  for (var i = 0; i < num; i++) {
    var randomNum = Math.floor(randomStr.length * Math.random())
    str += randomStr[randomNum]
  }
  return str
}
// mint-ui的时间选择器Datetime Picker 转换时间方法  年月日
Utils.getMintUiDate = function formatDate(secs) {
  var t = new Date(secs)
  var year = t.getFullYear()
  var month = t.getMonth() + 1
  if (month < 10) { month = '0' + month }
  var date = t.getDate()
  if (date < 10) { date = '0' + date }
  var hour = t.getHours()
  if (hour < 10) { hour = '0' + hour }
  var minute = t.getMinutes()
  if (minute < 10) { minute = '0' + minute }
  var second = t.getSeconds()
  if (second < 10) { second = '0' + second }
  return year + '-' + month + '-' + date
}
// 年月日时分
Utils.getMintUiDateTime = function formatDateMin(secs) {
  var t = new Date(secs)
  var year = t.getFullYear()
  var month = t.getMonth() + 1
  if (month < 10) { month = '0' + month }
  var date = t.getDate()
  if (date < 10) { date = '0' + date }
  var hour = t.getHours()
  if (hour < 10) { hour = '0' + hour }
  var minute = t.getMinutes()
  if (minute < 10) { minute = '0' + minute }
  return year + '-' + month + '-' + date + ' ' + hour + ':' + minute
}
/* 输出日志 */
Utils.log = function (obj) {
  console.log(obj)
}
/* 判断是否安卓 */
Utils.isAndroid = function () {
  var u = navigator.userAgent;
  return u.indexOf('Android') > -1 || u.indexOf('Adr') > -1;
}
/* 判断是否iOS */
Utils.isiOS = function () {
  var u = navigator.userAgent;
  return !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
}
Utils.route = function (app, path) {
  // 跳转前清除生成的下拉组建
  var mobileSelect = document.getElementsByClassName('mobileSelect');
  for (var i = mobileSelect.length - 1; i >= 0; i--) {
    mobileSelect[i].remove()
  }
  app.$router.push(path);
}
// 显示toast
// app - 一般传入this
// toastData.text 显示文字
Utils.toast = function (app, toastData, cb) {
  if (app) {
    // 隐藏已显示
    app.$vux.toast.hide()
    toastData = toastData || {}
    if (typeof toastData == 'string') {
      toastData = { text: toastData }
    }
    toastData.isShowMask = toastData.isShowMask || false // 是否遮罩
    toastData.type = toastData.type || 'text' // 类型-可选值 success, warn, cancel, text
    toastData.time = toastData.time || 2000 // 显示时间
    toastData.position = toastData.position || 'middle' // 显示位置
    app.$vux.toast.show(toastData)
    // 显示结束后回调
    if (cb && cb instanceof Function) {
      setTimeout(cb, toastData.time)
    }
  }
}
// 显示正在加载
Utils.showLoading = function (app, loadingData) {
  if (app) {
    loadingData = loadingData || {}
    if (typeof loadingData == 'string') {
      loadingData = { text: loadingData }
    }
    app.$vux.loading.show({
      text: loadingData.text || ''
    })
  }
}
// 隐藏正在加载
Utils.hideLoading = function (app) {
  if (app) {
    app.$vux.loading.hide()
  }
}
// alert
Utils.alert = function (app, alertData) {
  if (app) {
    alertData = alertData || {}
    if (typeof alertData == 'string') {
      alertData = { content: alertData }
    }
    app.$vux.alert.show({
      title: alertData.title || '提示',
      content: alertData.content || '',
      onShow() {
        if (typeof alertData.onShow == 'function') {
          alertData.onShow()
        }
      },
      onHide() {
        if (typeof alertData.onHide == 'function') {
          alertData.onHide()
        }
      }
    })
  }
}
// confirm
Utils.confirm = function (app, confirmData) {
  if (app) {
    confirmData = confirmData || {}
    if (typeof confirmData == 'string') {
      confirmData = { content: confirmData }
    }
    app.$vux.confirm.show({
      title: confirmData.title || '提示',
      content: confirmData.content || '',
      onConfirm() {
        if (typeof confirmData.onConfirm == 'function') {
          confirmData.onConfirm()
        }
      },
      onCancel() {
        if (typeof confirmData.onCancel == 'function') {
          confirmData.onCancel()
        }
      }
    })
  }
}
Utils.getQueryString = function (name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
  var r = window.location.search.substr(1).match(reg);
  if (r != null) return unescape(r[2]); return null;
}
Utils.getCookie = function (app, key) {
  return app.$cookie.get(CONST.CookiePrefix + key)
}
Utils.setCookie = function (app, key, value) {
  app.$cookie.set(CONST.CookiePrefix + key, value, { expires: CONST.CookieExpires })
}
Utils.deleteCookie = function (app, key) {
  app.$cookie.delete(CONST.CookiePrefix + key)
}
// 向站点获取『微信』用户信息
Utils.authWechatId = function (app, callback) {
  var code = Utils.getQueryString('code')
  var agentId = Utils.getQueryString('agentId')
  console.log('code:', code, 'agentId:', agentId)
  if (!code) {
    Utils.route(app, 'error/授权缺少code参数')
  } else if (!agentId) {
    Utils.route(app, 'error/授权缺少agentId参数')
  } else {
    Utils.showLoading(app, '获取微信授权')
    post("/API/PoorHelpAPI/GetWeChatId?code=" + code)
      .then(resp => {
        if (resp.ret == "0") {
          app.$store.commit('setWechatId', resp.data)
          Utils.setCookie(app, 'wechatId', resp.data)
          Utils.authUserId(app, callback)
          Utils.getWechatUserInfo(app)
        } else {
          Utils.toast(app, resp.umsg);
        }
        Utils.hideLoading(app);
      })
      .catch(err => {
        Utils.hideLoading(app);
        Utils.toast(app, "获取微信信息错误!");
      });
  }
}
// 获取微信用户信息 - 静默
Utils.getWechatUserInfo = function (app) {
  var agentId = Utils.getQueryString('agentId')
  post("/API/PoorHelpAPI/GetWeChatUserInfo?UserId=" + Utils.getCookie(app, 'wechatId'))
    .then(resp => {
      if (resp.ret == "0") {
        app.$store.commit('setUserInfo', resp.data)
        Utils.setCookie(app, 'wxUserInfo', JSON.stringify(resp.data))
      } else {
        Utils.toast(app, resp.umsg);
      }
    })
    .catch(err => {
      Utils.hideLoading(app);
      Utils.toast(app, "获取微信用户信息失败!");
    });
}
// 向站点获取对应用户信息
Utils.authUserId = function (app, callback) {
  Utils.showLoading(app, '获取用户信息')
  let code = Utils.getCookie(app, 'wechatId')
  post("/API/PoorHelpAPI/GetUserId?WeChatUserId=" + code)
    .then(resp => {
      if (resp.ret == "0") {
        Utils.hideLoading(app)
        var userId = resp.data
        app.$store.commit('setUserId', userId)
        Utils.setCookie(app, 'userId', userId)
        if (typeof callback == 'function') {
          callback()
        }
      } else {
        Utils.toast(app, resp.umsg);
      }
      Utils.hideLoading(app);
    })
    .catch(err => {
      Utils.hideLoading(app);
      Utils.toast(app, "获取账号信息错误!");
    });
}
// 检查用户登录情况
Utils.checkLoginStatus = function (app, callback) {
  if (Utils.checkUserWechat(app)) {
    // 用户已存在
    if (app.$store.state.user.UserId) {
      if (typeof callback == 'function') {
        callback()
      }
    } else { // 用户不存在
      Utils.authUserId(app, callback)
    }
    // 用户信息不存在
    if (!app.$store.state.user.UserInfo.userid) {
      Utils.getWechatUserInfo(app)
    }
  } else {
    Utils.authWechatId(app, callback)
  }
}
// 检查用户是否有微信号
Utils.checkUserWechat = function (app) {
  if (app.$store.state.user.WechatId) {
    // 微信号已登录
  } else if (Utils.getCookie(app, 'wechatId')) {
    // 微信号缓存
    app.$store.commit('setWechatId', Utils.getCookie(app, 'wechatId'))
  }
  if (!!app.$store.state.user.WechatId) {
    if (app.$store.state.user.UserId) {
      // 对应用户已登录
    } else if (Utils.getCookie(app, 'userId')) {
      // 对应用户缓存
      app.$store.commit('setUserId', Utils.getCookie(app, 'userId'))
    }
    // 微信用户信息
    if (!!app.$store.state.user.UserInfo.userid) {
      // 对应用户已登录
    } else if (Utils.getCookie(app, 'wxUserInfo')) {
      // 对应用户缓存
      app.$store.commit('setUserInfo', JSON.parse(Utils.getCookie(app, 'wxUserInfo')))
    }
    return true // 只要微信号登录{1.有微信号有用户号，2.有微信号无用户号}，不必再考虑用户缓存
  } else {
    return false
  }
}
// 微信配置
Utils.wxConfig = function (app, callback) {
  Utils.signJsapiTicket(app, function (params) {
    wx.config({
      beta: true,// 必须这么写，否则wx.invoke调用形式的jsapi会有问题
      debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
      appId: 'ww802f8c2464906b59', // 必填，企业微信的corpID
      timestamp: params.timestamp, // 必填，生成签名的时间戳
      nonceStr: params.noncestr, // 必填，生成签名的随机串
      signature: params.signature,// 必填，签名，见 附录-JS-SDK使用权限签名算法
      jsApiList: ['selectEnterpriseContact'] // 必填，需要使用的JS接口列表，凡是要调用的接口都需要传进来
    });
    wx.ready(function () {
      console.log('微信配置成功')
    });
    wx.ready(function (err) {
      console.log('微信配置失败', err)
    });
  })
}
// 微信jsapi_ticket签名
Utils.signJsapiTicket = function (app, callback) {
  var params = {
    noncestr: Utils.genRandomStr(16),
    jsapi_ticket: '',
    timestamp: parseInt(new Date().getTime() / 1000),
    url: window.location.href.split('#')[0],
  }
  Utils.getJsapiTicket(app, function (ticket) {
    params.jsapi_ticket = ticket
    var signStr = 'jsapi_ticket=' + params.jsapi_ticket + '&noncestr=' + params.noncestr + '&timestamp=' + params.timestamp + '&url=' + params.url
    var signature = SHA1(signStr).toString()
    params.signature = signature
    if (typeof callback == 'function') {
      callback(params)
    }
  })
}
// 获取微信jsapi_ticket
Utils.getJsapiTicket = function (app, callback) {
  if (!!app.$store.state.config.wxJsTicket) {
    if (typeof callback == 'function') {
      callback(app.$store.state.config.wxJsTicket)
    }
  } else {
    post("/API/PoorHelpAPI/GetJSApiTicket")
      .then(resp => {
        if (resp.ret == "0") {
          app.$store.commit('setWxJsTicket', resp.data)
          if (typeof callback == 'function') {
            callback(resp.data)
          }
        } else {
          Utils.hideLoading(app)
          Utils.toast(app, resp.umsg);
        }
      })
      .catch(err => {
        Utils.toast(app, "获取微信jssdk失败!");
      });
  }
}
// 附件地址
Utils.filePathPrefix = function () {
  return process.env.NODE_ENV !== 'production' ? objconfig.devHttpUrl : objconfig.buildHttpUrl
}
export default Utils;