import axios from '@/axios-auth'
import router from '../router'
import globalAxios from 'axios'

const state = {
  httpErrorMessage: null,
  apiToken: null,
  userName: null,
  userCompany: null,
  user: null
}

const getters = {
  user (state) {
    return state.user
  },
  isAuthenticated (state) {
    return state.apiToken !== null
  },
  errorMessage (state) {
    return state.httpErrorMessage
  }
}

const mutations = {
  authUser (state, userData) {
    state.apiToken = userData.apiToken
    state.userName = userData.userName
    state.userCompany = userData.userCompany
  },
  storeUser (state, user) {
    state.user = user
  },
  clearAuthData (state) {
    state.apiToken = null
    state.userName = null
    state.userCompany = null
  },
  setHttpErrorMessage (state, errorMessage) {
    state.httpErrorMessage = errorMessage
  }
}

const actions = {
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
        commit('authUser', {
          apiToken: res.data.token,
          userName: res.data.name
        })
        const now = new Date()
        const day = 86400000
        const expirationDate = new Date(now.getTime() + day)
        localStorage.setItem('apiToken', res.data.token)
        localStorage.setItem('userName', res.data.name)
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
        const now = new Date()
        const day = 86400000
        const expirationDate = new Date(now.getTime() + day)
        localStorage.setItem('apiToken', res.data.token)
        localStorage.setItem('userName', res.data.name)
        localStorage.setItem('userCompany', res.data.company.name)
        localStorage.setItem('expirationDate', expirationDate)
        commit('authUser', {
          apiToken: res.data.token,
          userName: res.data.name,
          userCompany: res.data.company.name
        })
        dispatch('setLogoutTimer', day)
        router.push('/')
      })
      .catch(error => {
        if (error.response) {
          console.log(error.response.data)
          commit('setHttpErrorMessage', error.response.data.Message)
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
    const userName = localStorage.getItem('userName')
    const userCompany = localStorage.getItem('userCompany')
    commit('authUser', {
      apiToken: apiToken,
      userName: userName,
      userCompany: userCompany
    })
  },
  logout ({ commit }) {
    commit('clearAuthData')
    localStorage.removeItem('apiToken')
    localStorage.removeItem('userName')
    localStorage.removeItem('userCompany')
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
        const data = res.data
        const users = []
        for (let key in data) {
          const user = data[key]
          user.id = key
          users.push(user)
        }
        commit('storeUser', users[0])
      })
      .catch(error => console.log(error))
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
