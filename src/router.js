import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        title: 'Eu Síndico',
        metaTags: [
          {
            name: 'App do Eu Síndico',
            content: 'The home page of our example app.'
          }
        ]
      }
    },
    {
      path: '/timeline',
      name: 'timeline',
      component: () => import(/* webpackChunkName: "timeline" */ './views/Timeline.vue')
    },
    {
      path: '/order',
      name: 'order',
      component: () => import(/* webpackChunkName: "order" */ './views/Order.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
