import Vue from 'vue'
import Vuex from 'vuex'
import axios from './axios-auth'
import router from './router'
import globalAxios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    httpErrorMessage: null,
    apiToken: null,
    userId: null,
    user: null,

    menuOpen: false,
    notificationOpen: false,

    slideDirection: '',
    previousStep: 0,
    step: 0
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
    },
    authUser (state, userData) {
      state.apiToken = userData.apiToken
      state.userId = userData.userId
    },
    storeUser (state, user) {
      state.user = user
    },
    clearAuthData (state) {
      state.apiToken = null
      state.userId = null
    },
    setHttpErrorMessage (state, errorMessage) {
      state.httpErrorMessage = errorMessage
    }
  },
  actions: {
    setLogoutTimer ({ commit }, expirationTime) {
      setTimeout(() => {
        commit('clearAuthData')
      }, expirationTime)
    },
    signup ({ commit, dispatch }, authData) {
      axios.post('', {
        email: authData.email,
        password: authData.password
      })
        .then(res => {
          console.log(res)
          commit('authUser', {
            apiToken: res.data.token,
            userId: res.data.localId
          })
          const now = new Date()
          const day = 86400000
          const expirationDate = new Date(now.getTime() + day)
          localStorage.setItem('apiToken', res.data.token)
          localStorage.setItem('userId', res.data.localId)
          localStorage.setItem('expirationDate', expirationDate)
          dispatch('storeUser', authData)
          dispatch('setLogoutTimer', day)
          router.push('/signin')
        })
        .catch(error => console.log(error))
    },
    signin ({ commit, dispatch }, authData) {
      axios.post('/users/authenticate', {
        email: authData.email,
        password: authData.password
      })
        .then(res => {
          console.log(res)
          const now = new Date()
          const day = 86400000
          const expirationDate = new Date(now.getTime() + day)
          localStorage.setItem('apiToken', res.data.token)
          localStorage.setItem('userId', res.data.localId)
          localStorage.setItem('expirationDate', expirationDate)
          commit('authUser', {
            apiToken: res.data.token,
            userId: res.data.localId
          })
          dispatch('setLogoutTimer', day)
          router.push('/')
        })
        .catch(error => {
          if (error.response) {
            console.log(error.response.data)
            commit('setHttpErrorMessage', error.response.data.error.message)
          } else {
            console.log('Error', error.message)
          }
          console.log(error.config)
        })
    },
    tryAutoLogin ({ commit }) {
      const apiToken = localStorage.getItem('apiToken')
      if (!apiToken) {
        return
      }
      const expirationDate = localStorage.getItem('expirationDate')
      const now = new Date()
      if (now >= expirationDate) {
        return
      }
      const userId = localStorage.getItem('userId')
      commit('authUser', {
        apiToken: apiToken,
        userId: userId
      })
    },
    logout ({ commit }) {
      commit('clearAuthData')
      localStorage.removeItem('apiToken')
      localStorage.removeItem('userId')
      localStorage.removeItem('expirationDate')
      router.replace('/signin')
    },
    storeUser ({ commit, state }, userData) {
      if (!state.apiToken) {
        return
      }
      globalAxios.post('/users.json' + '?auth=' + state.apiToken, userData)
        .then(res => console.log(res))
        .catch(error => console.log(error))
    },
    fetchUser ({ commit, state }) {
      if (!state.apiToken) {
        return
      }
      globalAxios.get('/users.json' + '?auth=' + state.apiToken)
        .then(res => {
          console.log(res)
          const data = res.data
          const users = []
          for (let key in data) {
            const user = data[key]
            user.id = key
            users.push(user)
          }
          console.log(users)
          commit('storeUser', users[0])
        })
        .catch(error => console.log(error))
    }
  },
  getters: {
    user (state) {
      return state.user
    },
    isAuthenticated (state) {
      return state.apiToken !== null
    }
  }
})
