import axios from 'axios'

// var apiToken = localStorage.getItem('apiToken')

const instance = axios.create({
  baseURL: 'https://api.eusindico.com.br',
  headers: {
    'api_token': localStorage.getItem('apiToken')
  }
})

instance.interceptors.request.use(
  (config) => {
    let apiToken = localStorage.getItem('apiToken')

    if (apiToken) {
      config.headers['api_token'] = apiToken
    }

    return config
  },

  (error) => {
    return Promise.reject(error)
  }
)

export default instance
