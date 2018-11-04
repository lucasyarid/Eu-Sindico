import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import store from './store/store'

Vue.use(Router)

// Function to guard pages
export function ifAuthenticated (to, from, next) {
  store.dispatch('tryAutoLogin')
  if (store.getters.isAuthenticated) {
    next()
  } else {
  }
}

export function ifNotAuthenticated (to, from, next) {
  store.dispatch('tryAutoLogin')
  if (!store.getters.isAuthenticated) {
    next()
  } else {
    next('/')
  }
}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      beforeEnter: ifAuthenticated,
      component: Home
    },
    {
      path: '/signup',
      name: 'signup',
      beforeEnter: ifNotAuthenticated,
      component: () => import(/* webpackChunkName: "signup" */ './views/SignUp.vue')
    },
    {
      path: '/signin',
      name: 'signin',
      beforeEnter: ifNotAuthenticated,
      component: () => import(/* webpackChunkName: "signin" */ './views/SignIn.vue')
    },
    {
      path: '/timeline',
      name: 'timeline',
      beforeEnter: ifAuthenticated,
      component: () => import(/* webpackChunkName: "timeline" */ './views/Timeline.vue')
    },
    {
      path: '/order',
      name: 'order',
      beforeEnter: ifAuthenticated,
      component: () => import(/* webpackChunkName: "order" */ './views/Order.vue')
    },
    {
      path: '/order/create',
      name: 'order-create',
      beforeEnter: ifAuthenticated,
      component: () => import(/* webpackChunkName: "order-create" */ './views/Order-Create.vue')
    },
    {
      path: '/order/complete',
      name: 'order-complete',
      beforeEnter: ifAuthenticated,
      component: () => import(/* webpackChunkName: "order-complete" */ './views/Order-Complete.vue')
    },
    {
      path: '/order/complete/vote',
      name: 'order-complete-vote',
      beforeEnter: ifAuthenticated,
      component: () => import(/* webpackChunkName: "order-complete-vote" */ './views/Order-Complete-Vote.vue')
    },
    {
      path: '/order/:id',
      name: 'order-review',
      beforeEnter: ifAuthenticated,
      component: () => import(/* webpackChunkName: "order-review" */ './views/Order-Review.vue')
    },
    {
      path: '/quote',
      name: 'quote',
      beforeEnter: ifAuthenticated,
      component: () => import(/* webpackChunkName: "quote" */ './views/Quote.vue')
    },
    {
      path: '/quote/create',
      name: 'quote-create',
      beforeEnter: ifAuthenticated,
      component: () => import(/* webpackChunkName: "quote-create" */ './views/Quote-Create.vue')
    },
    {
      path: '/quote/review',
      name: 'quote-review',
      beforeEnter: ifAuthenticated,
      component: () => import(/* webpackChunkName: "quote-review" */ './views/Quote-Review.vue')
    },
    {
      path: '/settings',
      name: 'settings',
      beforeEnter: ifAuthenticated,
      component: () => import(/* webpackChunkName: "settings" */ './views/Settings.vue')
    },
    {
      path: '/about',
      name: 'about',
      beforeEnter: ifAuthenticated,
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
