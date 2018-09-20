import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://api.eusindico.com.br'
})

export default instance
