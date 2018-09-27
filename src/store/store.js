import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menuOpen: false,
    notificationOpen: false,
    lightboxOpen: false,

    appClasses: Array,

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
    menuClose: state => {
      state.menuOpen = false
    },
    notificationToggle: state => {
      state.notificationOpen = !state.notificationOpen
    },
    lightboxToggle: state => {
      state.lightboxOpen = !state.lightboxOpen
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
    },
    setClasses (state, classes) {
      state.appClasses = classes
    }
  },
  actions: {

  },
  modules: {
    auth
  }
})
