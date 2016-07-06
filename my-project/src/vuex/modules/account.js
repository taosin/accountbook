const state = {
  articles: [],
  addResult: []
}

// mutations
const mutations = {
  getArticles (allState, articles) {
    allState.articles = articles
  },
  addAccount (allState, result) {
    allState.addResult = result
  }
}

export default {
  state,
  mutations
}
