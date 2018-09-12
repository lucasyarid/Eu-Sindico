import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menuOpen: false,
    notificationOpen: false,

    step: 0,

    orderServiceType: String
  },
  mutations: {
    menuToggle: state => {
      state.menuOpen = !state.menuOpen
    },
    notificationToggle: state => {
      state.notificationOpen = !state.notificationOpen
    },
    incrementStep (state) {
      state.step++
    },
    decrementStep (state) {
      state.step--
    }
  },
  actions: {

  }
})
