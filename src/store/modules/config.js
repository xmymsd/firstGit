const config = {
  state: {
    wxJsTicket: '', // 微信jsapi_ticket
  },
  mutations: {
    setWxJsTicket(state, ticket) {
      state.wxJsTicket = ticket
    },
  },
  actions: {
  }
}

export default config
