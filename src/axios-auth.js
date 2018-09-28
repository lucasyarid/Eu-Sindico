import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://api.eusindico.com.br',
  headers: {
    'api_token': `${localStorage.getItem('apiToken')}`
  }
})

export default instance
