import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menuOpen: false,
    notificationOpen: false,

    slideDirection: '',
    previousStep: 0,
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
      state.slideDirection = ''
    },
    changeStep (state, n) {
      state.previousStep = state.step
      state.step = state.step + n
      if (state.previousStep < state.step) {
        state.slideDirection = 'slide-left'
      } else {
        state.slideDirection = 'slide-right'
      }
    }
  },
  actions: {

  }
})
