import Vue from 'vue'
import Vuex from 'vuex'
import axios from './axios-auth'
import router from './router'
import globalAxios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    idToken: null,
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
      state.idToken = userData.token
      state.userId = userData.userId
    },
    storeUser (state, user) {
      state.user = user
    },
    clearAuthData (state) {
      state.idToken = null
      state.userId = null
    }
  },
  actions: {
    setLogoutTimer ({ commit }, expirationTime) {
      setTimeout(() => {
        commit('clearAuthData')
      }, expirationTime * 10000)
    },
    signup ({ commit, dispatch }, authData) {
      axios.post('/signupNewUser?key=AIzaSyCK0yx04LhLU-RNkJyvGRw-oHIO5UsssmU', {
        email: authData.email,
        password: authData.password,
        returnSecureToken: true
      })
        .then(res => {
          console.log(res)
          commit('authUser', {
            token: res.data.idToken,
            userId: res.data.localId
          })
          const now = new Date()
          const expirationDate = new Date(now.getTime() + res.data.expiresIn * 10000)
          localStorage.setItem('token', res.data.idToken)
          localStorage.setItem('userId', res.data.localId)
          localStorage.setItem('expirationDate', expirationDate)
          dispatch('storeUser', authData)
          dispatch('setLogoutTimer', res.data.expiresIn)
          router.push('/signin')
        })
        .catch(error => console.log(error))
    },
    signin ({ commit, dispatch }, authData) {
      axios.post('/verifyPassword?key=AIzaSyCK0yx04LhLU-RNkJyvGRw-oHIO5UsssmU', {
        email: authData.email,
        password: authData.password,
        returnSecureToken: true
      })
        .then(res => {
          console.log(res)
          const now = new Date()
          const expirationDate = new Date(now.getTime() + res.data.expiresIn * 10000)
          localStorage.setItem('token', res.data.idToken)
          localStorage.setItem('userId', res.data.localId)
          localStorage.setItem('expirationDate', expirationDate)
          commit('authUser', {
            token: res.data.idToken,
            userId: res.data.localId
          })
          dispatch('setLogoutTimer', res.data.expiresIn)
          router.push('/')
        })
        .catch(error => console.log(error))
    },
    tryAutoLogin ({ commit }) {
      const token = localStorage.getItem('token')
      if (!token) {
        return
      }
      const expirationDate = localStorage.getItem('expirationDate')
      const now = new Date()
      if (now >= expirationDate) {
        return
      }
      const userId = localStorage.getItem('userId')
      commit('authUser', {
        token: token,
        userId: userId
      })
    },
    logout ({ commit }) {
      commit('clearAuthData')
      localStorage.removeItem('token')
      localStorage.removeItem('userId')
      localStorage.removeItem('expirationDate')
      router.replace('/signin')
    },
    storeUser ({ commit, state }, userData) {
      if (!state.idToken) {
        return
      }
      globalAxios.post('/users.json' + '?auth=' + state.idToken, userData)
        .then(res => console.log(res))
        .catch(error => console.log(error))
    },
    fetchUser ({ commit, state }) {
      if (!state.idToken) {
        return
      }
      globalAxios.get('/users.json' + '?auth=' + state.idToken)
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
      return state.idToken !== null
    }
  }
})
