const state = {
  accounts: [],
  addResult: [],
  regResult: [],
  loginResult: []
}

// mutations
const mutations = {

  // 获取账本
  getAccount (allState, accounts) {
    allState.accounts = accounts
  },

  // 记账
  addAccount (allState, result) {
    allState.addResult = result
  },

  // 注册
  doRegister (allState, result) {
    allState.regResult = result
  },

  // 登录
  doLogin (allState, result) {
    allState.loginResult = result
  }
}

export default {
  state,
  mutations
}
