import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'
import index from './views/index.vue'
import add from './views/add.vue'
import list from './views/list.vue'
import settings from './views/settings.vue'
import analysis from './views/analysis.vue'
import header from './views/header.vue'
import login from './views/login.vue'
import register from './views/register.vue'
Vue.use(require('./ext/vue_ext.js'))
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
  '/login': {
    component: login
  },
  '/register': {
    component: register
  },
  '/index': {
    name: 'index',
    component: index,
    subRoutes: {
      '/': {
        component: add
      },
      '/add': {
        component: add
      },
      '/list': {
        component: list
      },
      '/settings': {
        component: settings
      },
      '/analysis': {
        component: analysis
      },
      '/header': {
        component: header
      }
    }
  }
})

router.start(App, '#app')
