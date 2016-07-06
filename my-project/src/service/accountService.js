export const getArticles = ({
  dispatch
}) => {
  const query = new AV.Query('Account')
  query.find().then(function (results) {
    dispatch('getArticles', results)
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
    dispatch('addAccount', results)
  })
}