export const getAccount = ({
  dispatch
}) => {
  const query = new AV.Query('Account')
  query.find().then(function (results) {
    dispatch('getAccount', results)
  }, function (error) {
  })
}

export const addAccount = ({
  dispatch
}, data) => {
  const Account = AV.Object.extend('Account')
  const add = new Account()
  add.save({
    money: data.money,
    usey: data.usey,
    date: data.date,
    remark: data.remark
  }).then(function (object) {
    dispatch('addAccount', object)
  })
}

export const doLogin = ({
  dispatch
}, data) => {
  const login = new AV.Query('Users')
  login.descending('createdAt')
  login.equalTo('username', data.username)
  login.equalTo('password', data.password)
  login.find().then(function (results) {
    dispatch('doLogin', results)
  }, function (error) {
  })
}

export const doRegister = ({
  dispatch
}, data) => {
  const User = AV.Object.extend('Users')
  const register = new User()
  register.save({
    username: data.username,
    password: data.password
  }).then(function (object) {
    dispatch('doRegister', object)
  })
}