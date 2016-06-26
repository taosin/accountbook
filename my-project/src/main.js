import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'
import index from './views/index.vue'
import add from './views/add.vue'
import list from './views/list.vue'
import settings from './views/settings.vue'
import deletes from './views/delete.vue'
window.Vue = Vue
Vue.use(Router)
const router = new Router({
  hashbang: false,
  history: false,
  saveScrollPosition: true
})
window.router = router
Vue.use(require('vue-resource'))
Vue.http.options.root = '/root'
router.map({
  '/': {
    component: index
  },
  '/index': {
    name: 'index',
    component: index,
    subRoutes: {
      '/add': {
        component: add
      },
      '/list': {
        component: list
      },
      '/settings': {
        component: settings
      },
      '/deletes': {
        component: deletes
      }
    }
  }
})

router.start(App, '#app')
