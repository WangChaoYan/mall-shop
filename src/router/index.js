import Vue from 'vue'
import Router from 'vue-router'
import welcome from '@/components/welcome'
import footer from '@/components/footer'
import search from '@/components/search'
import add from '@/components/add'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: welcome
    }, {
      path: '/footer',
      name: 'footer',
      component: footer
    }, {
      path: '/search',
      name: 'search',
      component: search
    }, {
      path: '/add',
      name: 'add',
      component: add
    }
  ]
})
