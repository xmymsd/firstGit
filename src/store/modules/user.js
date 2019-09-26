const user = {
  state: {
    UserId: '',
    WechatId: '',
    UserInfo: {
      // "userid": "zhangsan",
      // "name": "李四",
      // "department": [1, 2],
      // "order": [1, 2],
      // "position": "后台工程师",
      // "mobile": "15913215421",
      // "gender": "1",
      // "email": "zhangsan@gzdev.com",
      // "is_leader_in_dept": [1, 0],
      // "avatar": "http://wx.qlogo.cn/mmopen/ajNVdqHZLLA3WJ6DSZUfiakYe37PKnQhBIeOQBO4czqrnZDS79FH5Wm5m4X69TBicnHFlhiafvDwklOpZeXYQQ2icg/0",
      // "telephone": "020-123456",
      // "enable": 1,
      // "alias": "jackzhang",
      // "address": "广州市海珠区新港中路",
      // "extattr": {},
      // "status": 1,
      // "qr_code": "https://open.work.weixin.qq.com/wwopen/userQRCode?vcode=xxx",
      // "external_position": "产品经理",
      // "external_profile": {}
    },
    name: '张三',
  },
  mutations: {
    SET_NAME: (state, name) => {
      state.name = name
    },
    setUserId(state, id) {
      state.UserId = id
    },
    setWechatId(state, id) {
      state.WechatId = id
    },
    setUserInfo(state, info) {
      state.UserInfo = info
    }
  },
  actions: {
    // 获取用户信息
    GetInfo({ commit, state }) {
      return new Promise((resolve, reject) => {
        // 通过异步发送ajax请求，获取到数据后执行mutations
        // ajax(state.token).then(response => {
        //   const data = response.data
        //   commit('SET_NAME', data.name)
        //   resolve(response)
        // }).catch(error => {
        //   reject(error)
        // })
      })
    }
  }
}

export default user
