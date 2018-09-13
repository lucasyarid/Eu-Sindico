import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menuOpen: false,
    notificationOpen: false,

    step: 0
  },
  getters: {

  },
  mutations: {
    menuToggle: state => {
      state.menuOpen = !state.menuOpen
    },
    notificationToggle: state => {
      state.notificationOpen = !state.notificationOpen
    },
    setStep (state, n) {
      state.step = n
    },
    changeStep (state, n) {
      state.step = state.step + n
    }
  },
  actions: {

  }
})
