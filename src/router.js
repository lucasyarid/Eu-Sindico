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
    // Order
    {
      path: '/order',
      name: 'order',
      component: () => import(/* webpackChunkName: "order" */ './views/Order.vue')
    },
    // Order Service
    {
      path: '/order/service/',
      name: 'order-service',
      component: () => import(/* webpackChunkName: "order-service" */ './views/Order-Service.vue')
    },
    {
      path: '/order/approve',
      name: 'order-approve',
      component: () => import(/* webpackChunkName: "order-approve" */ './views/Order-Approve.vue')
    },
    {
      path: '/order/review',
      name: 'order-review',
      component: () => import(/* webpackChunkName: "order-review" */ './views/Order-Review.vue')
    },
    {
      path: '/order/complete',
      name: 'order-complete',
      component: () => import(/* webpackChunkName: "order-complete" */ './views/Order-Complete.vue')
    },
    {
      path: '/quote',
      name: 'quote',
      component: () => import(/* webpackChunkName: "quote" */ './views/Quote.vue')
    },
    {
      path: '/quote/review',
      name: 'quote-review',
      component: () => import(/* webpackChunkName: "quote-review" */ './views/Quote-Review.vue')
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
